import { Box, Flex, Text, TextProps } from '@chakra-ui/react';
import { FC } from 'react';
import { MinusIcon, PlusIcon } from '../Icon';

interface IQuantity extends TextProps {
  direction?: 'column' | 'row';
}

const Quantity: FC<IQuantity> = ({ direction = 'column', ...props }) => {
  return (
    <Flex alignItems='center' flexDirection={direction}>
      <Box cursor='pointer'>
        <PlusIcon />
      </Box>
      <Text fontSize='30px' {...props}>
        2
      </Text>
      <Box cursor='pointer'>
        <MinusIcon />
      </Box>
    </Flex>
  );
};

export default Quantity;
