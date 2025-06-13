import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import styles from '../../assets/styles/product.module.css';
import Header from '../common/Header';
import { Product } from '../../types/product';
import { useState } from 'react';
import useCartStore from '../../store/useCartStore';
import { toast } from 'react-toastify';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

type LocalProductProps = {
  product: Product;
  selectedPhoto: string | null;
  setSelectedPhoto: (image: string) => void;
};

const ProductDetails = ({ product, selectedPhoto, setSelectedPhoto }: LocalProductProps) => {
  const [quntity, setQuntity] = useState(1);

  const { addToCart } = useCartStore();

  const { isLoggedIn } = useAuth();

  const navigate = useNavigate();

  const totalPrice = (product.price * quntity).toFixed(2);

  const handleAdd = () => {
    if (!isLoggedIn) {
      toast.error('Please log in to add the product to your cart');
      navigate('/signIn');
      return;
    } else {
      addToCart(product.id, quntity);
      toast.success('The product has been added to the cart');
    }
  };

  return (
    <Container>
      <Header />
      <Row className='flex-column flex-lg-row'>
        <Col lg={5} className='text-center'>
          <Card.Img
            className={styles.itemMainImage}
            variant='top'
            src={selectedPhoto || 'holder.js/100px160'}
            alt='mainImage'
          />
          <Col className='mt-3'>
            <Card.Img
              alt='smallMainImage'
              className={`${styles.itemSmallImage} ${
                selectedPhoto === product.main_image_url ? styles.selectedImage : styles.nothing
              }`}
              onClick={() => setSelectedPhoto(product.main_image_url)}
              variant='top'
              src={product.main_image_url || 'holder.js/100px160'}
            />

            {product.images.map((p) => {
              return (
                <Card.Img
                  alt='smallImage'
                  key={p.id}
                  className={`${styles.itemSmallImage} ${
                    selectedPhoto === p.image_url ? styles.selectedImage : styles.nothing
                  }`}
                  onClick={() => setSelectedPhoto(p.image_url)}
                  variant='top'
                  src={p.image_url || 'holder.js/100px160'}
                />
              );
            })}
          </Col>
        </Col>
        <Col lg={4}>
          <p className='pt-3 text-muted'>{product.categories[0].name}</p>
          <h2 className='fw-bold'>{product.name}</h2>
          <p className='mb-2'>⭐ {product.reviews[0]?.rating || 'No'} stars</p>
          <h4 className='text-success mb-3'>${product.price}</h4>
          <h6 className='fw-semibold'>Description:</h6>
          <p className='text-secondary'>{product.description}</p>
        </Col>
        <Col lg={3}>
          <div style={{ marginBottom: '70px' }} className='border rounded p-4 shadow-sm'>
            <div className={`${styles.spaceBetween} mb-2`}>
              <span>
                <strong>Price</strong>
              </span>
              <span>${totalPrice}</span>
            </div>
            <div className={`${styles.spaceBetween} mb-2`}>
              <span>
                <strong>In Stock</strong>
              </span>
              <span>{product.stock_quantity}</span>
            </div>
            <div className={`${styles.centerItem} mb-3`}>
              <button
                type='button'
                className='btn btn-outline-dark btn-sm border-0'
                onClick={() => setQuntity(Math.max(1, quntity - 1))}
              >
                -
              </button>
              <span className='mx-3'>{quntity}</span>
              <button
                type='button'
                className='btn btn-outline-dark btn-sm border-0'
                onClick={() => quntity < product.stock_quantity && setQuntity(quntity + 1)}
              >
                +
              </button>
            </div>
            <button type='button' className='btn btn-dark w-100' onClick={handleAdd}>
              Add to Cart
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;
