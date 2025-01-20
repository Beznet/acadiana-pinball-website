import { Image } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
import { useEffect, useState } from 'react';

interface RandomFlipperProps {
  rotateFlipper?: boolean;
}

export const RandomFlipper = ({ rotateFlipper }: RandomFlipperProps) => {
  const [isFlipping, setIsFlipping] = useState(false);

  const transformValues = '23% 55%';
  const flippedTransformValues = '50% 50%';

  const flipAnimation = (isFlipped: boolean) => keyframes`
  0% {
    transform: ${isFlipped ? 'scaleX(-1) rotate(0deg)' : 'rotate(0deg)'};
    transform-origin: ${isFlipped ? flippedTransformValues : transformValues};
  }
  50% {
    transform: ${isFlipped ? 'scaleX(-1) rotate(-45deg)' : 'rotate(-45deg)'};
    transform-origin: ${isFlipped ? flippedTransformValues : transformValues};
  }
  100% {
    transform: ${isFlipped ? 'scaleX(-1) rotate(0deg)' : 'rotate(0deg)'};
    transform-origin: ${isFlipped ? flippedTransformValues : transformValues};
  }
`;

  useEffect(() => {
    const triggerFlip = () => {
      setIsFlipping(true);

      setTimeout(() => {
        setIsFlipping(false);

        const randomDelay = Math.floor(Math.random() * 4000) + 1000;
        setTimeout(triggerFlip, randomDelay);
      }, 500); // Animation duration (0.5s)
    };

    // Start the first flip
    triggerFlip();
  }, []);

  return (
    <Image
      src="/assets/pinball-flipper.svg"
      alt="Pinball flipper"
      width="100px"
      transition="transform 0.2s ease-in-out"
      // border="1px solid red"
      animation={
        isFlipping
          ? `${flipAnimation(rotateFlipper ?? false)} 0.5s ease-in-out`
          : 'none'
      }
      transform={rotateFlipper ? 'scaleX(-1)' : 'none'} // ✅ Keeps it flipped by default
    />
  );
};
