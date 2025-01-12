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
          href="/new-players"
          colorPalette={'cyan'}
          _hover={{ textDecoration: 'underline' }}
        >
          New Players Guide
        </Link>
      </Box>
      <Box>
        <Link
          href="/resources"
          colorPalette={'cyan'}
          _hover={{ textDecoration: 'underline' }}
        >
          Resources
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
