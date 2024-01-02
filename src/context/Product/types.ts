export type TProduct = {
  name: string;
  description: string;
  image: string;
  quantity: number;
  price: number;
  favorite: boolean;
};

export type TCart = TProduct[];
