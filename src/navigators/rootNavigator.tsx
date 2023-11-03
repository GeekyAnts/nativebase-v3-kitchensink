import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { MasonLayout } from "../screens";
import { Box } from "native-base";
// const MasonLayout = () => {
//   return <Box></Box>;
// };

const Stack = createStackNavigator();

export function RootStack() {
  return <MasonLayout />;
  // return <Box bg={"amber.600"} padding={"10"}></Box>;

  return (
    <Stack.Navigator initialRouteName="Kitchensink | NativeBase">
      {/* <Stack.Screen
        name="Component | NativeBase"
        component={Examples}
        options={{
          headerShown: false,
        }}
      /> */}
      <Stack.Screen
        name="Kitchensink | NativeBase"
        component={MasonLayout}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
