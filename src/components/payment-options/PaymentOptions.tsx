import { FC, PropsWithChildren } from 'react';
import { Divider, Flex, Image, Radio, RadioGroup, RadioProps, Stack, Text } from '@chakra-ui/react';

import CardPayment from '../../assets/card-payment.png';
import PayPal from '../../assets/paypal.png';
import Payoneer from '../../assets/payoneer.png';

interface IRadioOption extends RadioProps {
  image: string;
  alt: string;
}
const RadioOption: FC<PropsWithChildren<IRadioOption>> = ({ image, alt, children, ...props }) => {
  return (
    <Radio {...props} flexDirection='row-reverse' justifyContent='space-between' alignItems='center'>
      <Flex alignItems='center'>
        <Image height='54px' width='54px' src={image} alt={alt} marginRight='16px' />
        <Text fontSize='14px' fontWeight={500}>
          {children}
        </Text>
      </Flex>
    </Radio>
  );
};
const PaymentOptions: FC = () => {
  return (
    <Flex
      flexDirection='column'
      maxWidth={{ base: '370px', md: '390px' }}
      height='270px'
      borderRadius='20px'
      background='white'
      boxShadow='0px 2px 20px 0px rgba(0, 0, 0, 0.05);'>
      <RadioGroup defaultValue='1'>
        <Stack spacing={5} paddingX='32px' justifyContent='center'>
          <RadioOption value='1' marginTop='16px' image={CardPayment} alt='Debit/credit card'>
            Debit/credit card
          </RadioOption>
          <Divider />
          <RadioOption value='2' image={PayPal} alt='PayPal'>
            Paypal
          </RadioOption>
          <Divider />
          <RadioOption value='3' image={Payoneer} alt='Payoneer'>
            Payoneer
          </RadioOption>
        </Stack>
      </RadioGroup>
    </Flex>
  );
};

export default PaymentOptions;
