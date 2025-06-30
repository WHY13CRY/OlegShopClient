import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Product } from '../types/search';
import { searchProducts } from '../services/searchApi';
import { Card, Col, Container, Row } from 'react-bootstrap';
import styles from '../assets/styles/product.module.css';
import Header from '../components/common/Header';

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') || '';
  const [products, setProducts] = useState<Product[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (query.trim() === '') return;

    searchProducts(query)
      .then((data) => setProducts(data))
      .catch((err) => console.error('Search error:', err));
  }, [query]);

  return (
    <Container className='mb-5'>
        <Header />
      <h1 className='m-4'>Results for "{query}"</h1>
      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <Row xs={1} md={3} lg={4} className='g-4'>
          {products.map((p) => (
            <Col key={p.id}>
              <Card onClick={() => navigate(`/product/${p.id}`)}>
                <div className={styles.productCardImageWrapper}>
                  <Card.Img
                    alt='main-image'
                    className={styles.productImage}
                    variant='top'
                    src={p.main_image_url || 'holder.js/100px160'}
                  />
                </div>
                <Card.Body>
                  <Card.Title className={styles.title}>{p.name}</Card.Title>
                  <Card.Text className='d-flex justify-content-between'>
                    <strong>${p.price}</strong>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default SearchPage;
