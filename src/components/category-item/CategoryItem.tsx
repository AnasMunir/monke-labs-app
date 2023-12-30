import { FC } from 'react';
import { Box, Text } from '@chakra-ui/react';
import Salad from '../../assets/Salad.png';

const CategoryItem: FC = () => {
  return (
    <Box
      background='#EAF9E6'
      backgroundImage={Salad}
      minWidth='145px'
      height='71px'
      borderRadius={10}
      filter='drop-shadow(0px 2px 20px rgba(0, 0, 0, 0.05))'>
      <Text fontSize='15px' fontWeight={400} paddingX='16px' paddingY='13px'>
        Salad
      </Text>
    </Box>
  );
};

export default CategoryItem;
