import React from 'react';
import { Button, Stack, Icon, ArrowForwardIcon } from 'native-base';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const Example = () => {
  return (
    <Stack direction={{ base: 'column', md: 'row' }} space={4}>
      <Button
        startIcon={<Icon as={MaterialCommunityIcons} name="email" size={5} />}
      >
        Email
      </Button>
      <Button variant="outline" endIcon={<ArrowForwardIcon size="xs" />}>
        Call us
      </Button>
    </Stack>
  );
};
