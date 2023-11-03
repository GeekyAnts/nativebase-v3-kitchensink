import React from "react";
import { NativeBaseProvider, Box, Text } from "native-base";
import { BaseTheme } from "./src/theme";
import config from "./nativebase.config";
import { Root } from "./src/components/RootComponent";
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  // return <View style={{ backgroundColor: "red", padding: 100 }}></View>;
  return (
    <NativeBaseProvider theme={BaseTheme} config={config}>
      <SafeAreaProvider>
        <Root />
      </SafeAreaProvider>
      {/* <Box bg="red.400" p="10">
        <Text>Hello</Text>
      </Box> */}
      {/* <View style={{ backgroundColor: "red", padding: 100 }}></View> */}
    </NativeBaseProvider>
  );
}
