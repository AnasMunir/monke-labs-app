import { FC, ReactNode, createContext, useContext, useState } from 'react';
import { TProduct, TProductState } from './types';
import { products } from './data';

const initialProductState: TProductState = {
  products: products,
};

const ProductContext = createContext<TProductState | undefined>(undefined);
const UpdateProductContext = createContext<((updatedProduct: TProduct) => void) | null>(null);

const ProductProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState(initialProductState);

  const updateProduct = (updatedProduct: TProduct): void => {
    const { products } = initialProductState;

    const updatedProducts = products.map((product) => {
      if (product.id !== updatedProduct.id) return product;
      return {
        ...product,
        favorite: updatedProduct.favorite,
      };
    });
    setProducts({ products: updatedProducts });
  };
  return (
    <ProductContext.Provider value={products}>
      <UpdateProductContext.Provider value={updateProduct}>{children}</UpdateProductContext.Provider>
    </ProductContext.Provider>
  );
};

const useProductState = (): TProductState => {
  const context = useContext(ProductContext);

  if (context === undefined) {
    throw new Error('useProduct must be used within a UserProvider');
  }
  return context;
};

const useProductUpdate = () => {
  return useContext(UpdateProductContext);
};

export { ProductProvider, useProductState, useProductUpdate };
