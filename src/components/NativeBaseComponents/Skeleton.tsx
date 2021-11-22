import React from "react";
import { VStack, Skeleton } from "native-base";

export const Example = () => {
  return (
    <VStack mt={3} space={4} w="80%" overflow="hidden" rounded="md">
      <Skeleton h="10" />
      <Skeleton.Text startColor="primary.100" lines={3} />
    </VStack>
  );
};
