import { Flex, Text, TextProps } from '@chakra-ui/react';
import { FC } from 'react';

interface IPrice extends TextProps {
  reverse?: boolean;
  price: number;
}
const Price: FC<IPrice> = ({ reverse = false, price, ...props }) => {
  return (
    <Flex flexDirection={reverse ? 'row-reverse' : 'row'}>
      <Text {...props} color='brand.primary.500'>
        $
      </Text>
      <Text {...props}>{price}</Text>
    </Flex>
  );
};

export default Price;
