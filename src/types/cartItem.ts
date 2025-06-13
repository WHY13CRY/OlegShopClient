export type CartItemProps = {
  item: {
    cart_item_id: number;
    product_id: number;
    name: string;
    main_image_url: string;
    quantity: number;
    price: number;
  }
  onRemove: (productId:number)=>void
}