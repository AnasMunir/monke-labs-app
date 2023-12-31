import { Box, Button, Divider, Flex, HStack, Heading, Text, VStack } from '@chakra-ui/react';
import { FC } from 'react';
import { CartItem, MobileActionFooter } from '../../components';
import Price from '../../components/price/Price';
import { useMediaLayout } from 'use-media';

const Cart: FC = () => {
  const isMobile = useMediaLayout({ maxWidth: '768px' });

  return (
    <>
      <Heading as='h1' fontSize='25px' fontWeight={600} textAlign={{ base: 'center', md: 'left' }} marginBottom='30px'>
        My Bucket
      </Heading>
      <Flex flexDirection={{ base: 'column', md: 'row' }} width={{ base: '100%', md: '90%' }}>
        <Flex flexDirection='column'>
          {[...Array(12)].map((_, index) => (
            <Box marginBottom='20px' minWidth='370px' key={index}>
              <CartItem />
            </Box>
          ))}
        </Flex>
        {isMobile ? (
          <MobileActionFooter price={25.27} text='Total' buttonText='Checkout' />
        ) : (
          <Flex flexDirection='column' alignItems='end' marginLeft='auto' padding='10px' width='100%'>
            <HStack width='100%' justifyContent='space-between' alignItems='center' marginY='15px'>
              <Text fontSize='18px'>Total</Text>
              <Price price={25.27} fontSize='18px' reverse={true} />
            </HStack>
            <Divider opacity={1} borderBottomWidth='3px' />
            <Button width='100%' marginY='15px'>
              Checkout
            </Button>
          </Flex>
        )}
      </Flex>
    </>
  );
};

export default Cart;
