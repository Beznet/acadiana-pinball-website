import { Box, Heading, Link, Stack, Text } from '@chakra-ui/react';
import { LuExternalLink } from 'react-icons/lu';

function Resources() {
  return (
    <Box m={{ lg: 6 }} p={2}>
      <Heading size="2xl" textAlign="center">
        Pinball Resources
      </Heading>
      <Text fontSize="xl">
        <Stack>
          <Link variant="underline" href="https://pinballmap.com/">
            Pinball Map
            <LuExternalLink />
          </Link>
          <Link variant="underline" href="https://pinballvideos.com/">
            Pinball Videos and Tutorials
            <LuExternalLink />
          </Link>
          <Link
            variant="underline"
            href="https://rules.silverballmania.com/home/"
          >
            Bob's Guide to Classic Pinball Machines
            <LuExternalLink />
          </Link>
          <Link variant="underline" href="https://www.ifpapinball.com/">
            International Flipper Pinball Association (IFPA)
            <LuExternalLink />
          </Link>
        </Stack>
      </Text>
    </Box>
  );
}

export default Resources;
