import React from 'react';
import { TextArea, VStack, Box } from 'native-base';

export const Example = () => {
	return (
		<VStack justifyContent="center" w="80%">
			<Box position="absolute" w="100%">
				<Box
					position="relative"
					_light={{
						bg: 'teal.900',
					}}
					_dark={{
						bg: 'green.700',
					}}
					h="8px"
					rounded="pill"
					w={{base: "60%", lg: "40%"}}
					mx={5}
					mb={2}
				/>
				<Box
					position="relative"
					_light={{
						bg: 'teal.900',
					}}
					_dark={{
						bg: 'green.700',
					}}
					h="8px"
					rounded="pill"
					w={{ base: "40%", lg: "30%"}}
					mx={5}
				/>
			</Box>
			<TextArea 
				aria-label="textArea-demo" 
				mt={4} 
				w="100%" 
				h={20}  
				zIndex={-1}
				borderWidth={0} 
				_light={{
					bg: 'teal.500',
				}}
				_dark={{
					bg: 'green.100',
				}}
			/>
			{/* <Box w="100%" h={20} bg="red.200" zIndex={-1}></Box> */}
		</VStack>
	);
};
