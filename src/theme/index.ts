import { extendTheme, ChakraTheme } from '@chakra-ui/react';

import { Button } from './components/button';
import { foundations } from './foundations';
import { globalStyles } from './globalStyles';

const overrides: Partial<ChakraTheme> = {
  styles: globalStyles,
  ...foundations,
  components: {
    Button,
  },
};

export default extendTheme(overrides);
