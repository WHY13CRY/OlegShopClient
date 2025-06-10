import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import styles from '../assets/Product.module.css';
import Header from '../components/Header';
import { Product } from '../types/product';
import { useState } from 'react';
import useCartStore from '../store/useCartStore';
import { toast } from 'react-toastify';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

type LocalProductProps = {
  product: Product;
  selectedPhoto: string | null;
  setSelectedPhoto: (image: string) => void;
};

const ProductComponent = ({ product, selectedPhoto, setSelectedPhoto }: LocalProductProps) => {
  const [quntity, setQuntity] = useState(1);

  const { addToCart } = useCartStore();

  const { isLoggedIn } = useAuth();

  const navigate = useNavigate();

  const handleAdd = () => {
    if (!isLoggedIn) {
      toast.error('Please log in to add the product to your cart.')
      navigate('/signIn')
      return
    } else {
      addToCart(product.id, quntity);
      toast.success('The product has been added to the cart');
    }
  };

  return (
    <div className='d-flex justify-content-center'>
      <Container>
        <Header />
        <Row className='align-items-start'>
          <Col>
            <Card.Img className={styles.itemMainImage} variant='top' src={selectedPhoto || 'holder.js/100px160'} />

            <Col className='mt-3'>
              <Card.Img
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
          <Col>
            <p className='pt-3'>{product.categories[0].name}</p>
            <h3>{product.name}</h3>
            <p>Stars: {product.reviews[0].rating}</p>
            <p>{product.price}</p>
            <p>Description:</p>
            <p>{product.description}</p>
          </Col>
          <Col xs='auto'>
            <div style={{ padding: '25px' }}>
              <div>Price {product.price}</div>
              <div>In Stock: {product.stock_quantity}</div>
              <div>
                <button onClick={() => setQuntity(Math.max(1, quntity - 1))}>-</button>
                {quntity}
                <button onClick={() => quntity < product.stock_quantity && setQuntity(quntity + 1)}>+</button>
              </div>
              <button style={{ width: '160px' }} onClick={handleAdd}>
                Add to Cart
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductComponent;
