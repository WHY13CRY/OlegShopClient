import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { getOneProduct } from '../services/api';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    description?: string;
    price: number;
    main_image_url?: string;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const onClickHandler = (id:number) => {
    getOneProduct(id);
    navigate(`/product/${id}`)
  }
  const navigate = useNavigate()
  return (
    <Card onClick={()=>onClickHandler(product.id) }>
      <Card.Img variant="top" src={product.main_image_url || 'holder.js/100px160'} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description || 'No description available'}</Card.Text>
        <Card.Text>
          <strong>Price: ${product.price}</strong>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
