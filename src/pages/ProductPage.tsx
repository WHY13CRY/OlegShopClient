import { useNavigate, useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';
import { getOneProduct } from '../services/api';

type ItemType = {
  description: string;
  id: number;
  main_image_url: string;
  name: string;
  price: number;
  stock_quantity: number;
};

const ProductPage = () => {
  const {id} = useParams<{id:string}>()
  const navigate = useNavigate();
  const [item, setItem] = useState<ItemType | null>(null);

  useEffect(() => {
    if(id){
      getOneProduct(Number(id))
        .then((data)=>setItem(data))
        .catch((error)=>console.error('Error fetching product:', error))
    }
  }, [id]);

  if(!item){
    return <p>Loading...</p>
  }
  return (
    <Container className='m-5'>
      <Row>
        <Col>
          <Card.Img style={{width:'410px', height:'410px' }} variant="top" src={item.main_image_url || 'holder.js/100px160'} />
          <Col className='mt-3'>
            <Card.Img className='border' style={{width:'100px', height:'100px' }} variant="top" src={item.main_image_url || 'holder.js/100px160'} />
            <Card.Img className='ms-3' style={{width:'100px', height:'100px' }} variant="top" src={item.main_image_url || 'holder.js/100px160'} />
          </Col>
        </Col>
        <Col><h1>{item.name}</h1></Col>
        <Col>
          <div>${item.price}</div>
          <button
            onClick={() => {
              navigate('/');
            }}
          >
            x
          </button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductPage;
