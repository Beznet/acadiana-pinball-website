import { Flex, HStack, Heading, Link } from '@chakra-ui/react';
import { LeftFlipper } from './left-flipper';
import { Demo } from './mobile-drawer';
import { RightFlipper } from './right-flipper';

export const Header = () => {
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
          color="acadianaBlue.700"
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
        <Link href="/" color="acadianaBlue.700" _hover={{ color: 'acadianaRed.500' }}>
          Home
        </Link>
        <Link href="/new-players" color="acadianaBlue.700" _hover={{ color: 'acadianaRed.500' }}>
          New Players Guide
        </Link>
        <Link href="/resources" color="acadianaBlue.700" _hover={{ color: 'acadianaRed.500' }}>
          Resources
        </Link>
        <Link href="/about" color="acadianaBlue.700" _hover={{ color: 'acadianaRed.500' }}>
          About
        </Link>
      </Flex>
    </Flex>
  );
};
