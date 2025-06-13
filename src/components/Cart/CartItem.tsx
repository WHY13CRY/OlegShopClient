import { CartItemProps } from '../../types/cartItem';

const CartItem = ({ item, onRemove }: CartItemProps) => {
  return (
    <li key={item.cart_item_id}>
      <p>{item.name}</p>
      <img src={item.main_image_url} alt={item.name} width={100} />
      <p>Quantity: {item.quantity}</p>
      <p>Price: ${(item.quantity * item.price).toFixed(2)}</p>
      <button
        type='button'
        onClick={() => {
          onRemove(item.product_id);
        }}
      >
        Remove
      </button>
    </li>
  );
};

export default CartItem;
