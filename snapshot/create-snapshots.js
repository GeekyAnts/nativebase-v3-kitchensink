const fs = require('fs');
const path = require('path');
const { template } = require("./template.js");

const mapFilePath = path.join(__dirname, "../src/config/map.tsx");
const testFilePath = path.join(__dirname, "/../src/config/testing.tsx");


fs.copyFile(mapFilePath, testFilePath, (err) => {
    if (err) {
        console.log("Error Found:", err);
    }
    else {
        filterData();
    }
});

function filterData() {
    const testFilePath = path.join(__dirname, "/../src/config/testing.tsx");

    fs.readFile(testFilePath, function (err, data) {
        if (err) throw err;

        let componentData = data.toString();
        componentData = filterArray(componentData, componentData.match(/basic:(.*)/g));
        componentData = filterArray(componentData, componentData.match(/component:(.*)/g));
        componentData = componentData.split("export").join("");
        fs.writeFile(testFilePath, componentData, function (err, file) {
            if (err) throw err;
            console.log('Testing file sorted!');
        });

        let str = `\n module.exports = { 'mapping': Object.keys(mapping) };`
        fs.appendFile(testFilePath, str, function (err, file) {
            if (err) throw err;
            console.log("Testing file export Added!");
            generateSnapshotTests();
        })
    })
};

function filterArray(data, array) {
    if (array)
        for (let i = 0; i < array.length; i++) {
            data = data.split(array[i]).join("");
        }
    return data;
}

function generateSnapshotTests() {
    const { mapping } = require(__dirname + "/../src/config/testing.tsx");

    for (let i = 0; i < mapping.length; i++) {
        let name = mapping[i];
        let finalCode = template.split("%ComponentNameTest%").join(name);
        let fileName = '__tests__/' + name + '.test.js';
        fs.writeFile(fileName, finalCode, function (err, file) {
            if (err) throw err;
        });
    }
    console.log("Snapshots Created!");
    fs.unlink(testFilePath, (err) => {
        if (err) {
            console.error(err)
            return
        }
        else{
            console.log("Cleaned Residue!😀");
        }
    })
}