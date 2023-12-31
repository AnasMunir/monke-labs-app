import { FC } from 'react';
import { Box, Card, CardBody, Flex, Image, Text } from '@chakra-ui/react';
import ProductImage from '../../assets/Rectangle-6.png';
import Price from '../price/Price';

const CartItem: FC = () => {
  return (
    <Card
      borderRadius='20px'
      boxShadow='0px 2px 20px 0px rgba(0, 0, 0, 0.05)'
      height='111px'
      direction='row'
      alignItems='center'>
      <Image margin='10px' height='91px' width='91px' borderRadius='15px' src={ProductImage} alt='Caffe Latte' />

      <Flex flexDirection='column' width='100%'>
        <CardBody padding='11px'>
          <Text size='14px' fontWeight='500'>
            Green salad with mashed potatots
          </Text>
          <Flex justifyContent='space-between' marginTop='20px'>
            <Text color='brand.gray.400'>Quantity 1</Text>
            <Box marginRight='27px'>
              <Price price={75.81} />
            </Box>
          </Flex>
        </CardBody>
      </Flex>
    </Card>
  );
};

export default CartItem;
