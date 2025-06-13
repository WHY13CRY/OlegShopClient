import { Col, Row } from 'react-bootstrap';
import { CartItemProps } from '../../types/cartItem';
import styles from '../../assets/styles/cart.module.css';

const CartItem = ({ item, onRemove }: CartItemProps) => {
  return (
    <Row className='align-items-center mb-5'>
      <Col xs={4} md={3} lg={2}>
        <img src={item.main_image_url} alt={item.name} width='100%' className='rounded' />
      </Col>
      <Col xs={8} md={3} lg={3}>
        <h6 className='mb-1'>{item.name}</h6>
      </Col>
      <Col xs={6} md={2} className={styles.itemCenter}>
        <p className='mb-0'>Qty: {item.quantity}</p>
      </Col>
      <Col xs={6} md={2} className={styles.itemCenter}>
        <p className='mb-0'>${(item.price * item.quantity).toFixed(2)}</p>
      </Col>
      <Col xs={12} md={2} className='mt-2 mt-md-0'>
        <button
          className='btn btn-outline-danger btn-sm w-100'
          onClick={() => onRemove(item.product_id)}
        >
          Remove
        </button>
      </Col>
    </Row>
  );
};

export default CartItem;
