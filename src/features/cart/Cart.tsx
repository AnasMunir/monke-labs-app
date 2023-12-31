import { FC } from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react';
import { CartItem, DesktopActionFooter, MobileActionFooter } from '../../components';
import { useMediaLayout } from 'use-media';
import { useNavigate } from 'react-router-dom';

const Cart: FC = () => {
  const isMobile = useMediaLayout({ maxWidth: '768px' });
  const navigate = useNavigate();

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
          <MobileActionFooter
            price={25.27}
            text='Total'
            buttonText='Checkout'
            onClick={() => {
              navigate('/checkout');
            }}
          />
        ) : (
          <DesktopActionFooter
            buttonText='Checkout'
            onClick={() => {
              navigate('/checkout');
            }}
          />
        )}
      </Flex>
    </>
  );
};

export default Cart;
