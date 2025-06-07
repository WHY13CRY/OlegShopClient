import { Container } from 'react-bootstrap';
import styles from '../assets/Product.module.css';
import { useNavigate } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { useAuth } from '../hooks/useAuth';

const Header = () => {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();
  const handleClick = () => {
    if(isLoggedIn) {
      logout()
      navigate('/')
    } else {
      navigate('/signIn')
    }
  };
  return (
    <Navbar expand='md'>
      <Container>
        <Navbar.Brand onClick={() => navigate('/')}>
          <div className='d-flex align-items-center gap-3'>
            <img
              alt='MainPictures'
              className={styles.logo}
              src='https://roubbqdwivkphotabgsl.supabase.co/storage/v1/object/public/product-images/Another%20Images/0837977e-70b6-45d7-8405-7b1f2e81db26.png'
            />
            <h3>OlegShop</h3>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto d-flex align-items-center gap-4'>
            <Nav.Link href='/'>Search</Nav.Link>
            <Nav.Link href='/'>Cart</Nav.Link>
            <Nav.Link onClick={handleClick}>{isLoggedIn ? 'Sign Out' : 'Sign In'}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
