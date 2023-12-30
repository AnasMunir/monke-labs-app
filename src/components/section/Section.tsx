import { FC, PropsWithChildren } from 'react';
import { Box, BoxProps, HStack, Text } from '@chakra-ui/react';

interface ISection extends BoxProps {
  heading: string;
  control?: string;
}
const Section: FC<PropsWithChildren<ISection>> = ({ heading, control = '', children, ...props }) => {
  return (
    <Box {...props}>
      {/* <HStack marginBottom='20px' justifyContent={{ base: 'space-between', md: 'start' }}> */}
      <HStack marginBottom='20px' justifyContent='space-between' width={['100%', '90%']}>
        <Text as='h3' fontSize={{ base: '16px', md: '26px' }}>
          {heading}
        </Text>
        <Text as='p' color='brand.primary.500' fontSize={{ base: '16px', md: '26px' }}>
          {control}
        </Text>
      </HStack>
      {children}
    </Box>
  );
};

export default Section;
