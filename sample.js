import React from 'react';
import {View} from 'react-native';



export const MyComponent = ()=>{
    return (<>
        <View style={{ backgroundColor: "blue", flex: 0.3 }} />
        <MyComponent2></MyComponent2>
        </>
    )
}

export const MyComponent2 = ()=>{
    return(
        <View style={{ backgroundColor: "red", flex: 0.3 }} />
    )
}

export const AppContext = React.createContext(null);