export interface CartItem {
  cart_item_id: number;
  product_id: number;
  name: string;
  price: number;
  quantity: number;
  main_image_url: string;
}

export interface AddressInfo {
  fullName: string;
  phone: string;
  country: string;
  city: string;
  street: string;
  postalCode: string;
}