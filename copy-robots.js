const fs = require('fs');
const path = require('path');

const testFilePath = path.join(__dirname, "/web-build/robots.txt");
const componentData = `User-agent: * \nAllow: /`;

fs.writeFile(testFilePath, componentData, function (err, file) {
    if (err)  console.log('Error!');
    console.log('File copied!');
    
});
