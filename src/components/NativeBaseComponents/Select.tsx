import React from 'react';
import { Select, Box, VStack } from 'native-base';

export const Example = () => {
  return (
    <VStack justifyContent="center" w="80%">
      <Select isDisabled>
        <Select.Item label="JavaScript" value="js" />
      </Select>
      <Box
        position="absolute"
        _light={{
          bg: 'gray.600',
        }}
        _dark={{
          bg: 'gray.100',
        }}
        h="8px"
        rounded="25"
        w="40%"
        mx={5}
      />
    </VStack>
  );
};
