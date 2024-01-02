import { FC, ReactNode, createContext, useContext } from 'react';
import { TProduct } from './types';
import { products } from './data';

type TState = {
  products: TProduct[];
};

const initialState: TState = {
  products: products,
};

const ProductContext = createContext<[TState] | undefined>(undefined);

const ProductProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return <ProductContext.Provider value={[initialState]}>{children}</ProductContext.Provider>;
};

const useUser = (): [TState] => {
  const context = useContext(ProductContext);

  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

const useProductState = (): TState => {
  const [state] = useUser();

  return state;
};

export { ProductProvider, useProductState };
