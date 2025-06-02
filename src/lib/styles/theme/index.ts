import { createSystem, defaultConfig } from '@chakra-ui/react';

export const theme = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        heading: { value: 'Plus Jakarta Sans Variable, sans-serif' },
        body: { value: 'Plus Jakarta Sans Variable, sans-serif' },
      },
      colors: {
        acadianaBlue: {
          100: '#E6E8F0',
          500: '#00205B',
          700: '#00102D',
        },
        acadianaRed: {
          100: '#FDE9E8',
          500: '#DA291C',
          700: '#6D150E',
        },
        acadianaGold: {
          100: '#FFF8E1',
          500: '#FFC72C',
          700: '#B38B1F',
        },
      },
    },
  },
});
