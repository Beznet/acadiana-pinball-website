import { Flex, HStack, Heading, Link } from '@chakra-ui/react';
import { RandomFlipper } from './flipper';
import { Demo } from './mobile-drawer';

export const Header = () => {
  return (
    <Flex as="header" width="full" align="center" direction="column" rowGap={4}>
      <HStack>
        <RandomFlipper rotateFlipper={false} />
        <Heading
          fontSize={['sm', 'md', 'xl', '3xl']}
          fontFamily="'Press Start 2P', sans-serif"
          textAlign={'center'}
        >
          Acadiana Pinball Players
        </Heading>
        <RandomFlipper rotateFlipper={true} />
      </HStack>

      <Flex display={{ base: 'flex', md: 'none' }}>
        <Demo />
      </Flex>

      <Flex gap={6} display={{ base: 'none', md: 'flex' }}>
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
