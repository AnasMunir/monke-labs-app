import {
  Box,
  HStack,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
} from '@chakra-ui/react';
import { FC } from 'react';
import { BackArrowIcon, HeartIcon } from '../Icon';
import ProductOne from '../../assets/product-1.png';
import Quantity from '../quantity/Quantity';
import { MobileActionFooter } from '..';

const Product: FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} motionPreset='slideInBottom' size={{ base: 'full', md: 'lg' }}>
      <ModalOverlay />
      <ModalContent background='brand.gray.600' overflowX='hidden'>
        <ModalHeader background='white'>
          <HStack justifyContent='space-between'>
            <Box onClick={onClose}>
              <BackArrowIcon />
            </Box>
            <HeartIcon />
          </HStack>
        </ModalHeader>

        <ModalBody background='white' borderRadius='0px 0px 50px 50px'>
          <VStack alignItems='start'>
            <Text maxWidth='340px' fontSize='25px' fontWeight={600}>
              Grilled Beef Steak with Mushroom sauce
            </Text>
            <Text fontSize='18px' fontWeight={400} color='brand.gray.400'>
              By Steak house
            </Text>
            <Box>
              <HStack maxHeight='400px' justifyContent='space-between'>
                <Box>
                  <Quantity />
                </Box>
                <Image position='relative' right='-24px' src={ProductOne} />
              </HStack>
              <Text fontSize='18px' fontWeight={600} marginBottom='5px'>
                Description
              </Text>
              <Text fontSize='16px' fontWeight={400} color='brand.gray.400'>
                Indulge in the mouthwatering delight of a perfectly grilled beef steak generously topped with a rich and
                savory mushroom sauce.
              </Text>
            </Box>
          </VStack>
        </ModalBody>

        <ModalFooter>
          <MobileActionFooter price={25.27} text='Price' buttonText='Add to cart' onClick={onClose} />
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default Product;
