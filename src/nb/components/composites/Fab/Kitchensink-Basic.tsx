import { Fab, Icon, Box, NativeBaseProvider } from "native-base";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

export const Example = () => {
  return (
    <NativeBaseProvider>
      <Box position="relative" w={100} h={100}>
        <Fab
          position="absolute"
          size="sm"
          icon={<Icon color="white" as={<AntDesign name="plus" />} size="sm" />}
        />
      </Box>
    </NativeBaseProvider>
  );
};
