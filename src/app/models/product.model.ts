export interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string[];
  images:string[];
  inCart?: boolean;
}

export interface ProductDetail extends Product {
  rating: number;
  description: string;
  category: string;
}
