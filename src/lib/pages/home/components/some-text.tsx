import { Grid, Heading, Text } from '@chakra-ui/react';

export const SomeText = () => {
  return (
    <Grid textAlign="center" gap={2}>
      <Heading size="2xl" fontWeight="extrabold">
        Acadiana Pinball
      </Heading>
      <Text textStyle="sm">coming soon...</Text>
    </Grid>
  );
};
