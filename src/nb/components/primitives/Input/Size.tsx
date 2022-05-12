import React from 'react';
import { Input, Stack } from 'native-base';

export const Example = () => {
  return (
    <Stack space={4} w="75%" maxW="300px" mx="auto">
      <Input size="xs" placeholder="xs Input" />
      <Input size="sm" placeholder="sm Input" />
      <Input size="md" placeholder="md Input" />
      <Input size="lg" placeholder="lg Input" />
      <Input size="xl" placeholder="xl Input" />
      <Input size="2xl" placeholder="2xl Input" />
    </Stack>
  );
};
