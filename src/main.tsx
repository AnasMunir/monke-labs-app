import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ChakraProvider } from '@chakra-ui/react';

import theme from './theme';
import { BrowserRouter } from 'react-router-dom';
import { ProductProvider } from './context/Product/index.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <ProductProvider>
          <App />
        </ProductProvider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
