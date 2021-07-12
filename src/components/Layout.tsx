import React from 'react';
import {
  Box,
  useColorMode,
  Heading,
  HStack,
  Text,
  Icon,
  Pressable,
  ArrowBackIcon,
  Link,
} from 'native-base';
import { Floaters } from '../components/Floaters';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { EvilIcons } from '@expo/vector-icons';

export const Layout = ({
  children,
  navigation,
  title,
  doclink,
  navigateTo,
  _status,
  _hStack,
  ...props
}: any) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const safeArea = useSafeAreaInsets();

  return (
    <>
      <Box
        {..._status}
        height={safeArea.top}
        _web={{
          pt: {
            base: 6,
            sm: 6,
            md: 0,
          },
        }}
      />
      <Box
        {...props}
        flex={1}
        px={4}
        mx="auto"
        pt={navigation ? '70px' : 0}
        w={{ base: '100%', md: '768px', lg: '1000px', xl: '1080px' }}
      >
        <HStack
          position="absolute"
          left={0}
          top={0}
          right={0}
          px={4}
          zIndex={-1}
          {..._hStack}
        >
          <HStack py={2} alignItems="center" w="100%">
            <Pressable
              onPress={() => {
                navigation && navigation.navigate(navigateTo);
              }}
              _web={{
                cursor: 'pointer',
              }}
            >
              {title && <ArrowBackIcon mx={2} />}
            </Pressable>
            <Heading
              color={colorMode == 'dark' ? 'white' : 'gray.800'}
              _web={{ py: 2 }}
              isTruncated
              flex={1}
            >
              {title ? title : 'NativeBase'}
            </Heading>
            {title && (
              <Box mr={2} ml={6} mt={{ base: 1, lg: 3 }} alignItems="flex-end">
                <Link
                  href={doclink}
                  isExternal
                  // mt={4}

                  alignItems="center"
                >
                  <Text bold>Docs</Text>
                  <Icon
                    as={<EvilIcons name="external-link" size={24} />}
                    _light={{
                      color: 'black',
                    }}
                    _dark={{
                      color: 'white',
                    }}
                    fontWeight={800}
                  />
                </Link>
              </Box>
            )}
          </HStack>
        </HStack>
        {children}
      </Box>
      <Floaters />
    </>
  );
};
