import { useEffect } from 'react';
import useCartStore from '../store/useCartStore';
import Loading from '../components/Loading';
import { Button, Container } from 'react-bootstrap';
import Header from '../components/Header';
import styles from '../assets/Product.module.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const CartPage = () => {
  const { items, loading, fetchCart, removeFromCart, clearCart } = useCartStore();

  useEffect(() => {
    fetchCart();
  }, []);

  const navigate = useNavigate();

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
              alt=''
            />
            <h4 className='mt-5'>Cart is empty</h4>
            <p>Select the desired products on the main page or use the search</p>
            <Button variant='outline-dark' onClick={() => navigate('/')}>
              Go Shopping
            </Button>
          </div>
        ) : (
          <div>
            <ul>
              {items.map((item) => (
                <li key={item.cart_item_id}>
                  <p>{item.name}</p>
                  <img src={item.main_image_url} alt={item.name} width={100} />
                  <p>Quantity: {item.quantity}</p>
                  <p>Price: ${item.price}</p>
                  <button onClick={()=>{removeFromCart(item.product_id); toast.success('The product has been deleted')}}>Remove</button>
                </li>
              ))}
            </ul>
            <button onClick={()=>{clearCart(); toast.success('The cart has been cleared')}}>Clear Cart</button>
          </div>
        )}
      </Container>
    </div>
  );
};

export default CartPage;
