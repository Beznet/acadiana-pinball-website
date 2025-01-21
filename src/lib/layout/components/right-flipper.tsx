import { Image } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
import { useEffect, useState } from 'react';

const flipAnimation = keyframes`
  0% {
    transform: rotate(0deg);
    transform-origin: 77% 55%;
  }
  50% {
    transform: rotate(45deg);
    transform-origin: 77% 55%;
  }
  100% {
    transform: rotate(0deg);
    transform-origin: 77% 55%;
  }
`;

export const RightFlipper = () => {
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    const triggerFlip = () => {
      setIsFlipping(true);

      setTimeout(() => {
        setIsFlipping(false);

        const randomDelay = Math.floor(Math.random() * 4000) + 1000;
        setTimeout(triggerFlip, randomDelay);
      }, 500);
    };

    triggerFlip();
  }, []);

  return (
    <Image
      src="/assets/reversed-flipper.svg"
      alt="Pinball flipper"
      width={{ base: '50px', md: '75px' }}
      maxWidth="100%"
      height="auto"
      animation={isFlipping ? `${flipAnimation} 0.5s ease-in-out` : 'none'}
    />
  );
};
