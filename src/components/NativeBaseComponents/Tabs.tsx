import React from 'react';
import {
  Tabs,
  Box,
  VStack,
  HStack,
  useBreakpointValue,
  useColorModeValue,
  Divider,
} from 'native-base';

export const Example = () => {
  const isLargeScreen = useBreakpointValue({
    base: false,
    sm: false,
    md: false,
    lg: true,
  });
  return (
    // <Tabs
    //   mt={4}
    //   bg="fuchsia.500"
    //   w={{ base: '80%', lg: '60%' }}
    //   colorScheme={useColorModeValue('dark', 'white')}
    // >
    //   <Tabs.Bar bg="orange.100">
    //     <Tabs.Tab _text={{ color: 'white' }}>
    //       <Box h={1} w={4} bg="orange.400"></Box>
    //     </Tabs.Tab>
    //     <Tabs.Tab _text={{ color: 'white' }}>
    //       <Box h={1} w={4} bg="orange.300"></Box>
    //     </Tabs.Tab>
    //     {isLargeScreen ? (
    //       <Tabs.Tab _text={{ color: 'white' }}>
    //         <Box h={1} w={4} bg="fuchsia.200"></Box>
    //       </Tabs.Tab>
    //     ) : (
    //       <></>
    //     )}
    //   </Tabs.Bar>
    //   <Tabs.Views>
    //     <Tabs.View>
    //       <VStack space={1} w="80%">
    //         <Box h={1} bg="fuchsia.200"></Box>
    //         <Box h={1} bg="fuchsia.200"></Box>
    //       </VStack>
    //     </Tabs.View>
    //     <Tabs.View>Two</Tabs.View>
    //   </Tabs.Views>
    // </Tabs>
    <Box
      w={{ base: '80%', lg: '50%' }}
      borderRadius={4}
      bg="warmGray.100"
      // divider={<Divider bg="trueGray.200" />}
    >
      <HStack
        w="100%"
        bg="orange.100"
        space={2}
        h={6}
        alignItems="center"
        px={2}
        borderTopRadius={4}
      >
        <Box bg="orange.400" flex={1} h={2} borderRadius={6}></Box>
        <Box
          flex={1}
          h={2}
          bg="orange.400"
          opacity={0.3}
          borderRadius={6}
        ></Box>
        <Box
          flex={1}
          h={2}
          bg="orange.400"
          opacity={0.3}
          borderRadius={6}
        ></Box>
      </HStack>

      <HStack
        w="100%"
        // space={2}
        // alignItems="center"
        // px={2}
        // borderTopRadius={4}
      >
        {/* <Box flex={1} h={1} bg="orange.400"></Box>
        <Box flex={1} h={1}></Box>
        <Box flex={1} h={1}></Box> */}
        <Divider bg="orange.400" w="33%" h="2px" />
        <Divider bg="trueGray.200" w="67%" h="2px" />
        {/* <Divider /> */}
      </HStack>
      <VStack divider={<Divider bg="trueGray.200" />}>
        <Box w="100%" h={5}></Box>
        <Box w="100%" h={5}></Box>
        <Box w="100%" h={5}></Box>
        <Box w="100%" h={2}></Box>
      </VStack>
    </Box>
  );
};

// orange.400
// orange.100
// trueGray.200
// warmGray.100
