import React from 'react';
import {
  Tabs,
  Box,
  VStack,
  useBreakpointValue,
  useColorModeValue,
} from 'native-base';

export const Example = () => {
  const isLargeScreen = useBreakpointValue({
    base: false,
    sm: false,
    md: false,
    lg: true,
  });
  return (
    <Tabs
      mt={4}
      bg="fuchsia.500"
      w={{ base: '80%', lg: '60%' }}
      colorScheme={useColorModeValue('dark', 'white')}
    >
      <Tabs.Bar>
        <Tabs.Tab _text={{ color: 'white' }}>
          <Box h={1} w={4} bg="fuchsia.200"></Box>
        </Tabs.Tab>
        <Tabs.Tab _text={{ color: 'white' }}>
          <Box h={1} w={4} bg="fuchsia.200"></Box>
        </Tabs.Tab>
        {isLargeScreen ? (
          <Tabs.Tab _text={{ color: 'white' }}>
            <Box h={1} w={4} bg="fuchsia.200"></Box>
          </Tabs.Tab>
        ) : (
          <></>
        )}
      </Tabs.Bar>
      <Tabs.Views>
        <Tabs.View>
          <VStack space={1} w="80%">
            <Box h={1} bg="fuchsia.200"></Box>
            <Box h={1} bg="fuchsia.200"></Box>
          </VStack>
        </Tabs.View>
        <Tabs.View>Two</Tabs.View>
      </Tabs.Views>
    </Tabs>
  );
};
