import { FC } from 'react';
import { Button, Divider, Flex, HStack, Text } from '@chakra-ui/react';
import Price from '../price/Price';

const DesktopActionFooter: FC<{ buttonText: string; onClick?: () => void }> = ({ buttonText, onClick }) => {
  return (
    <Flex flexDirection='column' alignItems='end' marginLeft='auto' padding='10px' width='100%'>
      <HStack width='100%' justifyContent='space-between' alignItems='center' marginY='15px'>
        <Text fontSize='18px'>Total</Text>
        <Price price={25.27} fontSize='18px' reverse={true} />
      </HStack>
      <Divider opacity={1} borderBottomWidth='3px' />
      <Button width='100%' marginY='15px' onClick={onClick}>
        {buttonText}
      </Button>
    </Flex>
  );
};

export default DesktopActionFooter;
