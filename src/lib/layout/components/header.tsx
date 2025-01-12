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
      <Box mr={4}>
        <Link
          href="/"
          colorPalette={'cyan'}
          _hover={{ textDecoration: 'underline' }}
        >
          Home
        </Link>
      </Box>
      <Box>
        <Link
          href="/about"
          colorPalette={'cyan'}
          _hover={{ textDecoration: 'underline' }}
        >
          About
        </Link>
      </Box>
    </Flex>
  );
};
