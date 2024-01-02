import { FC } from 'react';

import { Card, CardBody, HStack, Image, Stack, Text } from '@chakra-ui/react';
import { HeartIcon } from '../Icon';
import Price from '../price/Price';
import { TProduct } from '../../context/Product/types';

const ProductItem: FC<{ product: TProduct }> = ({ product }) => {
  const { image, name, price, favorite } = product;
  return (
    <Card borderRadius='20px'>
      <CardBody
        padding='0px'
        background='white'
        borderRadius='inherit'
        filter='drop-shadow(0px 2px 20px rgba(0, 0, 0, 0.05))'>
        <Image width='100%' src={image} alt={name} />
        <Stack spacing='2' px='13px' py='8px'>
          <Text fontSize='14px' fontWeight={500} color='black'>
            {name}
          </Text>
          <HStack justifyContent='space-between'>
            <Price price={price} fontSize='14px' fontWeight={500} />
            <HeartIcon
              width='16px'
              height='15px'
              color={favorite ? 'brand.primary.500' : 'white'}
              stroke={favorite ? 'brand.primary.500' : 'black'}
            />
          </HStack>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default ProductItem;
