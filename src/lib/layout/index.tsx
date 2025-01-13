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
    <Box margin="0 auto" maxWidth="80%" transition="0.5s ease-out">
      <Meta />
      <Flex wrap="wrap" margin="8">
        <Box
          width="100%"
          pb={4}
          bg="white"
          borderBottom="2px solid"
          borderColor="gray.200"
          zIndex="10"
        >
          <Header />
        </Box>
        <Box width="full" as="main" marginY={22} minHeight="70vh">
          {children}
        </Box>
        <Footer />
      </Flex>
    </Box>
  );
};
