import React from "react";
import { Progress } from "native-base";

export const Example = () => {
  return (
    <Progress
      aria-label="progressBar1"
      w="80%"
      value={60}
      bg="white"
      colorScheme="lightBlue"
    />
  );
};
