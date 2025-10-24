import type { ButtonProps as ChakraButtonProps } from '@chakra-ui/react';
import {
  AbsoluteCenter,
  Button as ChakraButton,
  Span,
  Spinner,
} from '@chakra-ui/react';
import { forwardRef } from 'react';

interface ButtonLoadingProps {
  loading?: boolean;
  loadingText?: React.ReactNode;
}

export interface ButtonProps extends ChakraButtonProps, ButtonLoadingProps {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(props, ref) {
    const { loading, disabled, loadingText, children, variant, ...rest } = props;

    // Default styles for solid variant (or if no variant is specified)
    let styleProps: ChakraButtonProps = {
      bg: 'acadianaGold.500',
      color: 'black', // Ensure high contrast with acadianaGold.500
      _hover: {
        bg: 'acadianaGold.700',
      },
      _focus: {
        bg: 'acadianaGold.700',
        boxShadow: 'outline', // Or a specific shadow for gold
      },
    };

    if (variant === 'outline') {
      styleProps = {
        variant: 'outline',
        borderColor: 'acadianaGold.500',
        color: 'acadianaGold.700',
        _hover: {
          bg: 'acadianaGold.100',
        },
      };
    } else if (variant === 'ghost') {
      styleProps = {
        variant: 'ghost',
        color: 'acadianaGold.700',
        _hover: {
          bg: 'acadianaGold.100',
        },
      };
    }
    
    // Common properties for all variants when disabled
    const disabledStyles = {
      _hover: {}, // No hover effect when disabled
    };

    return (
      <ChakraButton
        disabled={loading || disabled}
        ref={ref}
        {...styleProps} // Apply determined styles
        {...(loading || disabled ? disabledStyles : {})} // Override hover if disabled
        {...rest} // Spread remaining props (like onClick, size, etc.)
      >
        {loading && !loadingText ? (
          <>
            <AbsoluteCenter display="inline-flex">
              <Spinner size="inherit" color="inherit" />
            </AbsoluteCenter>
            <Span opacity={0}>{children}</Span>
          </>
        ) : loading && loadingText ? (
          <>
            <Spinner size="inherit" color="inherit" />
            {loadingText}
          </>
        ) : (
          children
        )}
      </ChakraButton>
    );
  },
);
