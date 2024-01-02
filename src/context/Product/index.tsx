import { FC, ReactNode, createContext, useContext } from 'react';
import { TProduct, TCart } from './types';
import { products } from './data';

type TState = {
  products: TProduct[];
  cart: TCart;
};

const initialState: TState = {
  products: products,
  cart: [],
};

const ProductContext = createContext<[TState] | undefined>(undefined);

const ProductProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return <ProductContext.Provider value={[initialState]}>{children}</ProductContext.Provider>;
};

const useProduct = (): [TState] => {
  const context = useContext(ProductContext);

  if (context === undefined) {
    throw new Error('useProduct must be used within a UserProvider');
  }
  return context;
};

const useProductState = (): TState => {
  const [state] = useProduct();

  return state;
};

export { ProductProvider, useProductState };
