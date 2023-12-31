import { FC } from 'react';
import ProductItem from '../../components/product-item/ProductItem';
import { Box, HStack, SimpleGrid, Text, VStack, useDisclosure } from '@chakra-ui/react';
import CategoryItem from '../../components/category-item/CategoryItem';
import { SearchIcon } from '../../components/Icon';
import Section from '../../components/section/Section';
import { Product } from '..';

const OrderNow: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <HStack marginBottom='50px' justifyContent={{ base: 'space-between', md: 'start' }}>
        <VStack align='left' marginTop='20px' spacing='0'>
          <Text as='h1' fontSize='25px' fontWeight={600}>
            Hey Anas
          </Text>
          <Text as='p' fontSize='13px' fontWeight={400}>
            It's dinner time
          </Text>
        </VStack>
        <SearchIcon />
      </HStack>
      <Section heading='Categories' control='See all' marginBottom='40px'>
        <HStack
          overflow='auto'
          whiteSpace='nowrap'
          width={{ base: '100%', md: '90%' }}
          sx={{
            '::-webkit-scrollbar': {
              display: 'none',
            },
          }}>
          {[...Array(12)].map((_, index) => (
            <CategoryItem key={index} />
          ))}
        </HStack>
      </Section>
      <Section heading='Recommended items' control='Filter'>
        <SimpleGrid
          columns={{ base: 2, md: 3 }}
          width={{ base: '100%', md: '90%' }}
          spacing='20px'
          justifyItems='center'>
          {[...Array(12)].map((_, index) => (
            <Box width={{ base: '172px', md: '200px' }} onClick={onOpen}>
              <ProductItem key={index} />
            </Box>
          ))}
        </SimpleGrid>
      </Section>
      <Product isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default OrderNow;
