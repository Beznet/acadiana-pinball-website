import { Flex, HStack, Heading, Image, Link } from '@chakra-ui/react';

export const Header = () => {
  return (
    <Flex as="header" width="full" align="center" direction="column" rowGap={4}>
      <HStack>
        <Image
          src="/assets/pinball-game.svg"
          alt="Acadiana Pinball Players Logo"
          boxSize="50px"
        />
        <Heading size="3xl">Acadiana Pinball Players</Heading>
        <Image
          src="/assets/pinball-game.svg"
          alt="Acadiana Pinball Players Logo"
          boxSize="50px"
          transform="scaleX(-1)"
        />
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
