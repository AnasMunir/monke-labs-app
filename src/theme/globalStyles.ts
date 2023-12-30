import { ChakraTheme } from '@chakra-ui/react';

export const globalStyles: ChakraTheme['styles'] = {
  global: {
    'body, html, #__next': {
      height: '100%',
      backgroundColor: 'var(--chakra-colors-brand-gray-600)',
      maxWidth: '100%',
      overflowX: 'hidden !important',
    },
    '::-webkit-scrollbar': {
      width: '6px',
      height: '6px',
    },
    '::-webkit-scrollbar-thumb': {
      borderRadius: '10px',
      backgroundColor: 'var(--chakra-colors-brand-gray-300)',
      '&:hover': {
        backgroundColor: 'var(--chakra-colors-brand-gray-400)',
      },
    },
  },
};
