import React from "react";
import { ScrollView } from "react-native";
import {
  Heading,
  VStack,
  Box,
  useColorMode,
  useColorModeValue,
  Divider,
  Flex,
} from "native-base";
import { mapping } from "../../config/map";
import { StackNavigationProp } from "@react-navigation/stack";
import { Layout } from "../../components/Layout";

export function Examples({
  route,
  navigation,
}: {
  route: any;
  navigation: StackNavigationProp<any>;
}) {
  let name: string = route.params.name;
  //@ts-ignore
  const component = mapping[name];
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Layout
      title={component.title}
      doclink={component.doclink}
      navigation={navigation}
      navigateTo="Kitchensink | NativeBase"
    >
      <ScrollView
        contentContainerStyle={{ width: "100%" }}
        showsVerticalScrollIndicator={false}
      >
        <VStack w="100%">
          {component.components.map((element: any, index: number) => (
            <Box
              shadow={1}
              bg={useColorModeValue("white", "blueGray.700")}
              my={2}
              mx={3}
              borderRadius={16}
            >
              <VStack key={index}>
                <Heading
                  size="md"
                  p={4}
                  color={colorMode == "dark" ? "gray.100" : "trueGray.700"}
                >
                  {element.title}
                </Heading>
                <Divider
                  bg={colorMode == "dark" ? "blueGray.500" : "warmGray.200"}
                />
                <Flex align="center" p={6} justify="center" d="flex">
                  <element.component.Example />
                  {element.title === "Slide Fade" ? (
                    <Box h="200" w="100"></Box>
                  ) : (
                    <></>
                  )}
                </Flex>
              </VStack>
            </Box>
          ))}
        </VStack>
      </ScrollView>
    </Layout>
  );
}
