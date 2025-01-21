import { Flex, HStack, Heading, Link } from '@chakra-ui/react';
import { useLocation } from 'react-router';
import { LeftFlipper } from './left-flipper';
import { Demo } from './mobile-drawer';
import { RightFlipper } from './right-flipper';

const TRAILING_SLASH_REGEX = /\/$/;

export const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) =>
    currentPath.replace(TRAILING_SLASH_REGEX, '') ===
    path.replace(TRAILING_SLASH_REGEX, '');

  return (
    <Flex as="header" width="full" align="center" direction="column" rowGap={4}>
      <HStack>
        <Flex display={{ base: 'none', md: 'flex' }}>
          <LeftFlipper />
        </Flex>
        <Heading
          fontSize={['sm', 'md', 'xl', '3xl']}
          fontFamily="'Press Start 2P', sans-serif"
          textAlign={'center'}
        >
          Acadiana Pinball Players
        </Heading>
        <Flex display={{ base: 'none', md: 'flex' }}>
          <RightFlipper />
        </Flex>
      </HStack>

      <Flex
        display={{ base: 'flex', md: 'none' }}
        justifyContent={'space-between'}
        gap={8}
      >
        <LeftFlipper />
        <Demo />
        <RightFlipper />
      </Flex>

      <Flex gap={6} display={{ base: 'none', md: 'flex' }}>
        <Link
          href="/"
          fontWeight={isActive('/') ? 'bold' : 'normal'}
          _hover={{ textDecoration: 'underline' }}
        >
          Home
        </Link>
        <Link
          href="/new-players"
          fontWeight={isActive('/new-players') ? 'bold' : 'normal'}
          _hover={{ textDecoration: 'underline' }}
        >
          New Players Guide
        </Link>
        <Link
          href="/resources"
          fontWeight={isActive('/resources') ? 'bold' : 'normal'}
          _hover={{ textDecoration: 'underline' }}
        >
          Resources
        </Link>
        <Link
          href="/about"
          fontWeight={isActive('/about') ? 'bold' : 'normal'}
          _hover={{ textDecoration: 'underline' }}
        >
          About
        </Link>
      </Flex>
    </Flex>
  );
};
