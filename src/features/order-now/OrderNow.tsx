import { FC } from 'react';
import ProductItem from '../../components/product-item/ProductItem';
import { Box, HStack } from '@chakra-ui/react';
import CategoryItem from '../../components/category-item/CategoryItem';

const OrderNow: FC = () => {
  return (
    <>
      <HStack
        overflow='auto'
        whiteSpace='nowrap'
        sx={{
          '::-webkit-scrollbar': {
            display: 'none',
          },
        }}>
        {[...Array(12)].map((_, index) => (
          <CategoryItem key={index} />
        ))}
      </HStack>
      <Box marginBottom={10} />
      <Box width={{ base: '172px', md: '200px' }}>
        <ProductItem />
      </Box>
    </>
  );
};

export default OrderNow;
