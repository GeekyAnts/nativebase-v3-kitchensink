import React from 'react';
import { Box, VStack } from 'native-base';

export const Example = () => {
  const data = [
    {
      title: 'Main dishes',
      data: ['Pizza', 'Burger', 'Risotto'],
    },
    {
      title: 'Sides',
      data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
    },
    {
      title: 'Drinks',
      data: ['Water', 'Coke', 'Beer'],
    },
    {
      title: 'Desserts',
      data: ['Cheese Cake', 'Ice Cream'],
    },
  ];

  return (
    <Box
      mt={5}
      bg="orange.100"
      w={{ base:"60%", lg: "35%"}}
    >
      <VStack space={3} m={2}  alignContent="center">
        <VStack space={1} alignContent="center">
          <Box
            w="40%"
            bg="amber.500"
            opacity={0.5}
            h={3}
            mb={1}
            borderRadius={3}
          />
          <Box
            w="100%"
            bg="amber.500"
            opacity={0.5}
            h={1}
            borderRadius={6}
          />
          <Box
            w="100%"
            bg="amber.500"
            opacity={0.5}
            h={1}
            borderRadius={6}
          />
          <Box
            w="100%"
            bg="amber.500"
            opacity={0.5}
            h={1}
            borderRadius={6}
          />
        </VStack>

        <VStack space={1} alignContent="center">
          <Box
            w="40%"
            bg="amber.500"
            opacity={0.5}
            h={3}
            mb={1}
            borderRadius={3}
          />
          <Box
            w="100%"
            bg="amber.500"
            opacity={0.5}
            h={1}
            borderRadius={6}
          />
          <Box
            w="100%"
            bg="amber.500"
            opacity={0.5}
            h={1}
            borderRadius={6}
          />
          <Box
            w="100%"
            bg="amber.500"
            opacity={0.5}
            h={1}
            borderRadius={6}
          />
        </VStack>

        <VStack space={1} alignContent="center">
          <Box
            w="40%"
            bg="amber.500"
            opacity={0.5}
            h={3}
            mb={1}
            borderRadius={3}
          />
          <Box
            w="100%"
            bg="amber.500"
            opacity={0.5}
            h={1}
            borderRadius={6}
          />
          <Box
            w="100%"
            bg="amber.500"
            opacity={0.5}
            h={1}
            borderRadius={6}
          />
          <Box
            w="100%"
            bg="amber.500"
            opacity={0.5}
            h={1}
            borderRadius={6}
          />
        </VStack>
      </VStack>
    </Box>
  );
};
