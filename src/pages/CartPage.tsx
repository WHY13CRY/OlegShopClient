import { useEffect } from 'react';
import useCartStore from '../store/useCartStore';
import Loading from '../components/common/Loading';
import { Button, Container } from 'react-bootstrap';
import Header from '../components/common/Header';
import styles from '../assets/styles/cart.module.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import CartItem from '../components/Cart/CartItem';

const CartPage = () => {
  const { items, loading, fetchCart, removeFromCart, clearCart } = useCartStore();

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  const navigate = useNavigate();

  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

  if (loading) return <Loading />;

  return (
    <div>
      <Container>
        <Header />
        <h1 className='m-4'>Your Cart</h1>
        {items.length === 0 ? (
          <div className={styles.centerItemBothWayAndMakeAsColumn}>
            <img
              className={styles.itemMediumImage}
              src={`https://roubbqdwivkphotabgsl.supabase.co/storage/v1/object/public/product-images/Another%20Images/icons/shopping-cart.png`}
              alt='shopping-cart'
            />
            <h4 className='mt-5'>Cart is empty</h4>
            <p>Select the desired products on the main page or use the search</p>
            <Button type='button' variant='outline-dark' onClick={() => navigate('/')}>
              Go Shopping
            </Button>
          </div>
        ) : (
          <div>
            <ul>
              {items.map((item) => (
                <CartItem
                  key={item.cart_item_id}
                  item={item}
                  onRemove={(id) => {
                    removeFromCart(id);
                    toast.success('The product has been deleted');
                  }}
                />
              ))}
            </ul>
            <button
              type='button'
              style={{ marginBottom: '50px' }}
              onClick={() => {
                clearCart();
                toast.success('The cart has been cleared');
              }}
            >
              Clear Cart
            </button>
            <h4 className='my-4'>Total: ${totalPrice}</h4>
            <button type='button'>Proceed to checkout</button>
          </div>
        )}
      </Container>
    </div>
  );
};

export default CartPage;
