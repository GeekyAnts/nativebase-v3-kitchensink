import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Fab,
  useColorMode,
  Icon,
  MoonIcon,
  SunIcon,
  useColorModeValue,
} from "native-base";
import { Logo } from "./Logo";

export const Floaters = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Logo
        size={{ base: 64, md: 450 }}
        zIndex={-1}
        opacity={0.4}
        _ios={{
          opacity: 0.6,
        }}
        position="absolute"
        top={{ base: -80, md: -180 }}
        right={{ base: -60, md: -100 }}
      />
      <StatusBar
        style={colorMode === "dark" ? "light" : "dark"}
        backgroundColor={colorMode == "dark" ? "#27272a" : "#f3f2f2"}
        translucent={true}
      />
      <Fab
        shadow={7}
        renderInPortal={false}
        variant="unstyled"
        _dark={{
          bg: "orange.50",
          _hover: {
            bg: "orange.100",
          },
          _pressed: {
            bg: "orange.100",
          },
        }}
        _light={{
          bg: "blueGray.900",
          _hover: {
            bg: "blueGray.800",
          },
          _pressed: {
            bg: "blueGray.800",
          },
        }}
        p={3}
        icon={useColorModeValue(
          <MoonIcon color="white" size="8" />,
          <SunIcon color="orange.400" size="8" />
        )}
        onPress={toggleColorMode}
      />
      {/* <Fab
        icon={useColorModeValue(
          <MoonIcon color="white" size="8" />,
          <SunIcon color="orange.400" size="8" />
        )}
      /> */}
    </>
  );
};
