import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { getOneProduct } from '../services/productApi';
import styles from '../assets/Product.module.css';
import { ProductProps } from '../types/product';

const ProductCard: React.FC<ProductProps> = ({ product }) => {
  const navigate = useNavigate();

  const onClickHandler = (id: number) => {
    getOneProduct(id);
    navigate(`/product/${id}`);
  };
  return (
    <Card onClick={() => onClickHandler(product.id)}>
      <Card.Img
        className={styles.productCardImage}
        variant='top'
        src={product.main_image_url || 'holder.js/100px160'}
      />
      <Card.Body>
        <Card.Text>{product.categories[0]?.name}</Card.Text>
        <Card.Title className={styles.title}>{product.name}</Card.Title>
        <Card.Text className='d-flex justify-content-between'>
          {product.rating} Stars
          <strong>${product.price}</strong>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
