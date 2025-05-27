import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import styles from '../assets/Product.module.css';
import Header from '../components/Header';
import { Product } from '../types/product';


type LocalProductProps = {
  product: Product;
  selectedPhoto: string | null;
  setSelectedPhoto: (image:string)=>void
};

const ProductComponent= ({
  product,
  selectedPhoto,
  setSelectedPhoto
}: LocalProductProps) => {
 
  return (
    <div className='d-flex justify-content-center'>
      <Container >
        <Header />
        <Row className='align-items-start'>
          <Col>
            <Card.Img
              className={styles.itemMainImage}
              variant='top'
              src={selectedPhoto || 'holder.js/100px160'}
            />

            <Col className='mt-3'>
              <Card.Img
                className={`${styles.itemSmallImage} ${selectedPhoto === product.main_image_url ? styles.selectedImage : styles.nothing}`}
                onClick={() => setSelectedPhoto(product.main_image_url)}
                
                variant='top'
                src={product.main_image_url || 'holder.js/100px160'}
              />

              {product.images.map((p) => {
                return (
                  <Card.Img
                    className={`${styles.itemSmallImage} ${selectedPhoto === p.image_url ? styles.selectedImage : styles.nothing}`}
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
            <p>{product.reviews[0].rating}</p>
            <p>{product.price}</p>
            <p>Description</p>
            <p>{product.description}</p>
          </Col>
          <Col xs="auto" >
            <div style={{padding:'25px'}}>
              <div>Price {product.price}</div>
              <div>Status {product.stock_quantity}</div>
              <button style={{width:'160px'}}>Add to Cart</button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductComponent;
