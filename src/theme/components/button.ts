import { ComponentSingleStyleConfig } from '@chakra-ui/react';

export const Button: ComponentSingleStyleConfig = {
  baseStyle: {
    borderRadius: '50px',
    fontWeight: 'bold',
  },
  variants: {
    link: {
      fontWeight: 'semibold',
      color: 'brand.primary.500',
      _hover: {
        textDecoration: 'underline',
        boxShadow: 'none',
      },
      _focus: {
        textDecoration: 'underline',
        boxShadow: 'none',
      },
      _active: {
        textDecoration: 'underline',
        boxShadow: 'none',
      },
    },
    primary: {
      bg: 'brand.primary.500',
      color: 'contrast',
      _hover: {
        bg: 'brand.primary.700',
        _disabled: {
          bg: 'brand.gray.300',
        },
      },
      _focus: {
        bg: 'brand.primary.700',
        _disabled: {
          bg: 'brand.gray.300',
        },
      },
      _disabled: {
        opacity: 1,
        bg: 'brand.gray.300',
        cursor: 'not-allowed',
      },
    },
    accent: {
      bg: 'accent.500',
      color: 'contrast',
      _hover: {
        bg: 'accent.700',
        _disabled: {
          bg: 'brand.gray.300',
        },
      },
      _focus: {
        bg: 'accent.700',
        _disabled: {
          bg: 'brand.gray.300',
        },
      },
      _disabled: {
        opacity: 1,
        bg: 'brand.gray.300',
        cursor: 'not-allowed',
      },
    },
    outline: {
      borderColor: 'brand.gray.300',
      bg: 'white',
      color: 'black',
      _hover: {
        bg: 'black',
        color: 'white',
        _disabled: {
          color: 'brand.gray.300',
        },
      },
      _focus: {
        bg: 'black',
        color: 'white',
        _disabled: {
          color: 'brand.gray.300',
        },
      },
      _disabled: {
        color: 'brand.gray.300',
        opacity: 1,
      },
    },
    black: {
      bg: 'brand.black.500',
      color: 'contrast',
      _focus: {
        bg: 'brand.black.500',
        _disabled: {
          bg: 'brand.black.500',
        },
      },
      _disabled: {
        opacity: 1,
        bg: 'brand.black.100',
        cursor: 'not-allowed',
      },
    },
  },
  sizes: {
    lg: {
      fontSize: '25px',
      fontWeight: '400',
      padding: '12px 24px',
    },
  },
  defaultProps: {
    variant: 'primary',
    size: 'lg',
  },
};
