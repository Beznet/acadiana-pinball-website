import { Flex, Image } from '@chakra-ui/react';

const ICON_SIZE = 22;

export const SomeImage = () => {
  return (
    <Flex marginY={4} justifyContent="center" alignItems="center" gridGap={2}>
      <Image
        src="/assets/vite-logo.svg"
        title="vite"
        height={ICON_SIZE}
        width={ICON_SIZE}
      />
    </Flex>
  );
};
