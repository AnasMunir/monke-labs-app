export type TProduct = {
  id: number;
  name: string;
  description: string;
  image: string;
  quantity: number;
  price: number;
  favorite: boolean;
};

export type TProductState = {
  products: TProduct[];
};

export type TCart = TProduct[];

export type TCartState = {
  cart: TCart;
};
