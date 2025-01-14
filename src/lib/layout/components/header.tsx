import { Flex, HStack, Heading, Link } from '@chakra-ui/react';

export const Header = () => {
  return (
    <Flex as="header" width="full" align="center" direction="column" rowGap={4}>
      <HStack>
        <Heading size="3xl" fontFamily="'Press Start 2P', sans-serif">
          Acadiana Pinball Players
        </Heading>
      </HStack>

      <Flex gap={6}>
        <Link href="/" _hover={{ textDecoration: 'underline' }}>
          Home
        </Link>
        <Link href="/new-players" _hover={{ textDecoration: 'underline' }}>
          New Players Guide
        </Link>
        <Link href="/resources" _hover={{ textDecoration: 'underline' }}>
          Resources
        </Link>
        <Link href="/about" _hover={{ textDecoration: 'underline' }}>
          About
        </Link>
      </Flex>
    </Flex>
  );
};
