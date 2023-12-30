import { HStack, Text, TextProps } from '@chakra-ui/react';
import { FC } from 'react';

interface IPrice extends TextProps {
  reverse?: boolean;
  price: number;
}
const Price: FC<IPrice> = ({ reverse = false, price, ...props }) => {
  return (
    <HStack direction={reverse ? 'row-reverse' : 'row'} spacing='1'>
      <Text {...props} color='brand.primary.500'>
        $
      </Text>
      <Text {...props}>{price}</Text>
    </HStack>
  );
};

export default Price;
