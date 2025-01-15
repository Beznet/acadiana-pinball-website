import { Button } from '@/components/ui/button';
import { Icon, Link } from '@chakra-ui/react';
import { RxHamburgerMenu } from 'react-icons/rx';
import {
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from 'src/components/ui/drawer.tsx';

export const Demo = () => {
  return (
    <DrawerRoot>
      <DrawerBackdrop />
      <DrawerTrigger asChild>
        <Button variant="ghost" size="sm">
          <Icon name="menu">
            <RxHamburgerMenu />
          </Icon>
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Pages</DrawerTitle>
        </DrawerHeader>
        <DrawerBody display={'flex'} flexDirection={'column'} gap={4}>
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
        </DrawerBody>
        <DrawerCloseTrigger />
      </DrawerContent>
    </DrawerRoot>
  );
};
