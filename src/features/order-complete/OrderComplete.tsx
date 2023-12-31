import { FC } from 'react';
import {
  Box,
  Button,
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

import { BackArrowIcon } from '../../components/Icon';
import Rider from '../../assets/rider.png';
import { useNavigate } from 'react-router-dom';

const OrderComplete: FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  return (
    <Modal isOpen={isOpen} onClose={onClose} motionPreset='slideInBottom' size={{ base: 'full', md: 'lg' }}>
      <ModalOverlay />
      <ModalContent background='brand.gray.600' overflowX='hidden'>
        <ModalHeader>
          <Box onClick={onClose}>
            <BackArrowIcon />
          </Box>
        </ModalHeader>

        <ModalBody padding='44px'>
          <VStack alignItems='center'>
            <Text maxWidth='340px' fontSize='25px' fontWeight={600} align='center'>
              "Congratulations! Your Order Has Been Placed!"
            </Text>
            <Box>
              <HStack maxHeight='400px' justifyContent='space-between' marginBottom='70px'>
                <Image position='relative' right='-24px' src={Rider} />
              </HStack>
              <Text fontSize='16px' fontWeight={400} color='brand.gray.400' align='center' maxWidth='326px'>
                Thank you for choosing our services! Your order has been successfully placed and is now being processed.
                We appreciate your trust in us and look forward to serving you.
              </Text>
            </Box>
          </VStack>
        </ModalBody>

        <ModalFooter justifyContent='center'>
          <Button
            onClick={() => {
              navigate('/');
            }}>
            Return Home
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default OrderComplete;
