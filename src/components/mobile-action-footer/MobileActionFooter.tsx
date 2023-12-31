import { Button, Flex, Text, VStack } from '@chakra-ui/react';
import { FC } from 'react';
import Price from '../price/Price';

const MobileActionFooter: FC<{ price: number; text: string; buttonText: string; onClick?: () => void }> = ({
  price,
  text,
  buttonText,
  onClick,
}) => {
  return (
    <Flex justifyContent='space-between' alignItems='end' width='100%' padding='10px'>
      <VStack spacing={0} alignItems='start'>
        <Text fontSize='18px'>{text}</Text>
        <Price price={price} fontSize='30px' reverse={true} />
      </VStack>
      <Button onClick={onClick}>{buttonText}</Button>
    </Flex>
  );
};

export default MobileActionFooter;
