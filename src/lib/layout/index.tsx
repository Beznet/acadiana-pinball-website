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
    <Flex
      direction="column" // ✅
      minHeight="100vh" // ✅
    >
      {/* Header */}
      <Box
        width="80%"
        pb={4}
        bg="white"
        margin="0 auto"
        borderBottom="2px solid"
        borderColor="gray.200"
        zIndex="10"
        pt="4"
      >
        <Meta />
        <Header />
      </Box>

      {/* Main Content */}
      <Box
        as="main"
        flex="1" // ✅ Expands to fill available space
        width="full"
        marginY={22}
        maxWidth="80%"
        margin="0 auto"
        pt="8"
        transition="0.5s ease-out"
        bgColor="white"
      >
        {children}
      </Box>

      {/* Sticky Footer */}
      <Footer />
    </Flex>
  );
};
