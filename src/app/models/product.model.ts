export interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string[];
  images:string[];
  inCart?: boolean;
  description: string;
  category: string;
  rating?: number;
  reviews?: Review[];
}

export interface Review {
  reviewerName: string;
  reviewerEmail: string;
  comment: string;
  rating: number;
}