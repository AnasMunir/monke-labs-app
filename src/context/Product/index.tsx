import { FC, ReactNode, createContext, useContext } from 'react';

import ProductImage from '../../assets/Rectangle-6.png';

type TProduct = {
  name: string;
  description: string;
  image: string;
  quantity: number;
  price: number;
};

const products: TProduct[] = [
  {
    name: 'Grilled Beef Steak with Mushroom sauce',
    description:
      'Indulge in the mouthwatering delight of a perfectly grilled beef steak generously topped with a rich and savory mushroom sauce.',
    image: ProductImage,
    quantity: 20,
    price: 25.27,
  },
];

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
