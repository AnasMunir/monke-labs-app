import { FC } from 'react';

import RectangleSix from '../../assets/Rectangle-6.png';
import { Card, CardBody, HStack, Image, Stack, Text } from '@chakra-ui/react';
import { HeartIcon } from '../Icon';
import Price from '../price/Price';

const ProductItem: FC = () => {
  return (
    <Card maxW='sm' w='172px' height='85px' borderRadius='20px'>
      <CardBody p='0px' bg='white' borderRadius='inherit' filter='drop-shadow(0px 2px 20px rgba(0, 0, 0, 0.05))'>
        <Image src={RectangleSix} alt='Green double couch with wooden legs' />
        <Stack spacing='2' px='13px' py='8px'>
          <Text fontSize='14px' fontWeight={500} color='black'>
            Green Salas with mashed potatoes
          </Text>
          <HStack justifyContent='space-between'>
            <Price price={450} fontSize='14px' fontWeight={500} />
            <HeartIcon width='16px' height='15px' color='black' />
          </HStack>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default ProductItem;
