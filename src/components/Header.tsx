import React from "react";
import { Box, IconButton, Icon, HStack, ArrowBackIcon } from "native-base";
import { StackNavigationProp } from "@react-navigation/stack";

export function Header({
  title,
  navigation,
}: {
  title: string;
  navigation: StackNavigationProp<any>;
}) {
  return (
    <Box>
      <HStack
        alignItems="center"
        py={2}
        mb={{ base: 8, md: 0 }}
        width={{ base: "100%", lg: "768px" }}
        alignSelf={{ base: "stretch", md: "center" }}
        ml={{ base: 0, md: "-16px" }}
      >
        <IconButton
          position="absolute"
          left={{ base: 0, md: 1 }}
          icon={<ArrowBackIcon size="md" />}
          _pressed={{ bg: "transparent" }}
          colorScheme="coolGray"
          onPress={() => navigation.navigate("masonlayout")}
        ></IconButton>
      </HStack>
    </Box>
  );
}
