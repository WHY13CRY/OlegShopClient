export type Product = {
  categories: CategoriesType[];
  description: string;
  id: number;
  images: ImagesType[];
  main_image_url: string;
  name: string;
  price: number;
  reviews: ReviewsType[];
  stock_quantity: number;
  rating?: number;
};

export type ProductProps = {
  product: Product;
  onClick: ()=>void
};

export type CategoriesType = {
  name: string;
};

export type ImagesType = {
  image_url: string;
  id: number;
  alt_text: string;
};

export type ReviewsType = {
  comment: string;
  rating: number;
  user_id: number;
};



