import { Container } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
import styles from '../assets/Product.module.css';

const Loading = () => {
  return (
    <Container className={styles.centerItem} style={{ height: '100vh' }}>
      <Spinner className={styles.spinerSize} animation='border' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </Spinner>
    </Container>
  );
};

export default Loading;
