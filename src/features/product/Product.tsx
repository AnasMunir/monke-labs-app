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
import { FC, useEffect, useState } from 'react';
import { BackArrowIcon, HeartIcon } from '../../components/Icon';
import ProductOne from '../../assets/product-1.png';
import Quantity from '../../components/quantity/Quantity';
import { MobileActionFooter } from '../../components';
import { TProduct } from '../../context/Product/types';
import { useProductUpdate } from '../../context/Product';

interface IProduct {
  isOpen: boolean;
  onClose: () => void;
  product: TProduct;
}

const Product: FC<IProduct> = ({ isOpen, onClose, product }) => {
  const { name, description, price } = product;
  const [isFavorite, setIsFavorite] = useState<boolean>(() => product.favorite);

  const productUpdate = useProductUpdate();
  const handleAddToFavorites = (value: boolean) => {
    setIsFavorite((current) => !current);
    productUpdate && productUpdate({ ...product, favorite: !value });
  };

  useEffect(() => {
    setIsFavorite(product.favorite);
  }, [product]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} motionPreset='slideInBottom' size={{ base: 'full', md: 'lg' }}>
      <ModalOverlay />
      <ModalContent background='brand.gray.600' overflowX='hidden'>
        <ModalHeader background='white'>
          <HStack justifyContent='space-between'>
            <Box onClick={onClose}>
              <BackArrowIcon />
            </Box>
            <HeartIcon
              width='27px'
              height='25px'
              color={isFavorite ? 'brand.primary.500' : 'white'}
              stroke={isFavorite ? 'brand.primary.500' : 'black'}
              onClick={() => handleAddToFavorites(isFavorite!)}
            />
          </HStack>
        </ModalHeader>

        <ModalBody background='white' borderRadius='0px 0px 50px 50px'>
          <VStack alignItems='start'>
            <Text maxWidth='340px' fontSize='25px' fontWeight={600}>
              {name}
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
                {description}
              </Text>
            </Box>
          </VStack>
        </ModalBody>

        <ModalFooter>
          <MobileActionFooter price={price} text='Price' buttonText='Add to cart' onClick={onClose} />
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default Product;
