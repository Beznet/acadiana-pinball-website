import { Box, Flex } from '@chakra-ui/react';
import type { ReactNode } from 'react';

import { Footer } from './components/footer';
import { Header } from './components/header';
import { Meta } from './components/meta';

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Flex direction="column" minHeight="100vh">
      <Box
        maxWidth={{ base: '95%', md: '80%' }}
        width="full"
        pb={4}
        bg="white"
        boxShadow={'md'}
        margin="0 auto"
        borderBottom="2px solid"
        borderColor="acadianaRed.500"
        zIndex="10"
        pt={{ lg: 4 }}
      >
        <Meta />
        <Header />
      </Box>

      <Box
        as="main"
        flex="1"
        width="full"
        marginY={22}
        maxWidth={{ base: '95%', md: '80%' }}
        margin="0 auto"
        pt={{ lg: 4 }}
        transition="0.5s ease-out"
        bgColor="acadianaBlue.50"
        boxShadow="md"
      >
        {children}
      </Box>

      <Box maxWidth={{ base: '95%', md: '80%' }} width="full" margin="0 auto">
        <Footer />
      </Box>
    </Flex>
  );
};
