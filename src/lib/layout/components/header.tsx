import { Box, Flex, Link } from '@chakra-ui/react';

export const Header = () => {
  return (
    <Flex
      as="header"
      width="full"
      align="center"
      alignSelf="flex-start"
      justifyContent="center"
      gridGap={2}
    >
      <Box marginLeft="auto">
        <Box mr={4}>
          <Link href="/" _hover={{ textDecoration: 'none' }}>
            Home
          </Link>
        </Box>
        <Box>
          <Link href="/about" _hover={{ textDecoration: 'none' }}>
            About
          </Link>
        </Box>
      </Box>
    </Flex>
  );
};
