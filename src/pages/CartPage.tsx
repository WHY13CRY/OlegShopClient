import { useEffect } from 'react';
import useCartStore from '../store/useCartStore';
import Loading from '../components/common/Loading';
import { Button, Col, Container, Row } from 'react-bootstrap';
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
          <Row className='mt-5'>
            <Col lg={9}>
              <div>
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
              </div>
              <div className={styles.itemCenter}>
                <button
                  type='button'
                  className=' mb-5 btn btn-danger btn-m w-50'
                  onClick={() => {
                    clearCart();
                    toast.success('The cart has been cleared');
                  }}
                >
                  Clear Cart
                </button>
              </div>
            </Col>
            <Col lg={3} className={styles.itemCenter}>
              <div className={`${styles.border} rounded w-100 mb-5`}>
                <h4 className='my-4 text-center'>
                  Total: <strong>${totalPrice}</strong>
                </h4>
                <Button variant='dark' className='w-100 mt-4'>
                  Proceed to checkout
                </Button>
              </div>
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
};

export default CartPage;
