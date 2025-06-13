import { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import ProductCard from '../components/Product/ProductCard';
import { getOneProduct, getProducts } from '../services/productApi';
import { Product } from '../types/product';
import Container from 'react-bootstrap/Container';
import Header from '../components/common/Header';

const HomePage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts()
      .then(setProducts)
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <Container className='mb-5'>
        <Header />
        <h1 className='m-4'>Our Products</h1>
        <Row xs={1} md={5} className='g-4'>
          {products.map((product) => (
            <Col key={product.id}>
              <ProductCard product={product} onClick={() => getOneProduct(product.id)} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
