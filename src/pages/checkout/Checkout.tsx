import { FC, PropsWithChildren } from 'react';
import { DesktopActionFooter, MobileActionFooter, PaymentOptions } from '../../components';
import { Box, BoxProps, Flex, Heading, SimpleGrid, Stack, Text, useDisclosure } from '@chakra-ui/react';
import { useMediaLayout } from 'use-media';
import { OrderComplete } from '../../features';

interface ISection extends BoxProps {
  heading: string;
}

const Section: FC<PropsWithChildren<ISection>> = ({ heading, children, ...props }) => {
  return (
    <Box {...props} width='100%'>
      <Heading fontSize={{ base: '25px', md: '18px' }} fontWeight={600} marginBottom='20px'>
        {heading}
      </Heading>
      {children}
    </Box>
  );
};

const Checkout: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useMediaLayout({ maxWidth: '768px' });
  return (
    <>
      <Heading as='h1' fontSize='25px' fontWeight={600} textAlign={{ base: 'center', md: 'left' }} marginY='20px'>
        Checkout
      </Heading>
      <Flex
        paddingX='20px'
        flexDirection={{ base: 'column', md: 'row' }}
        alignItems='start'
        justifyContent='space-between'>
        <Section heading='Payment' marginBottom='30px'>
          <PaymentOptions />
        </Section>
        <Stack width='100%'>
          <Section heading='Delivery details' marginBottom='30px'>
            <Stack spacing={0}>
              <Text fontSize='16px' color='brand.gray.400'>
                789 Maple Street, Los Angeles,
              </Text>
              <Text fontSize='16px' color='brand.gray.400'>
                CA 90001
              </Text>
              <Text fontSize='16px' color='brand.gray.400'>
                (888) 987-6543
              </Text>
            </Stack>
          </Section>
          <Section heading='Order details' marginBottom='30px'>
            <SimpleGrid columns={2}>
              {[...Array(7)].map((_, index) => (
                <Text fontSize='16px' color='brand.gray.400' key={index}>
                  1x Green Salad
                </Text>
              ))}
            </SimpleGrid>
          </Section>
          {!isMobile && <DesktopActionFooter buttonText='Pay Now' onClick={onOpen} />}
        </Stack>
      </Flex>
      {isMobile && <MobileActionFooter price={133.03} text='total' buttonText='Pay Now' onClick={onOpen} />}
      <OrderComplete isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default Checkout;
