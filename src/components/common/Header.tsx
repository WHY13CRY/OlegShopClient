import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { useAuth } from '../../hooks/useAuth';
import styles from '../../assets/styles/common.module.css';
import useCartStore from '../../store/useCartStore';



const Header = () => {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();
  const items = useCartStore((state)=> state.items)
  const totalItems = items.reduce((acc, item)=> acc + item.quantity, 0)

  const handleClick = () => {
    if (isLoggedIn) {
      logout();
      navigate('/');
    } else {
      navigate('/signIn');
    }
  };
  return (
    <Navbar expand='md'>
      <Container>
        <Navbar.Brand style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>
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
          <Nav className={`ms-auto d-flex align-items-center gap-4 flex-row ${styles.centerItem}`}>
            <Nav.Link href='/'>
              <img
                alt='Search'
                className={styles.itemVerySmallImage}
                src='https://roubbqdwivkphotabgsl.supabase.co/storage/v1/object/public/product-images/Another%20Images/icons/loupe.png'
              />
              <span className='d-md-none'>Search</span>
            </Nav.Link>
            {isLoggedIn ? (
              <Nav.Link style={{display:'flex'}} onClick={() => navigate('/cart')}>
                <div style={{position:'relative'}}>
                  <img
                  alt='Cart'
                  className={styles.itemVerySmallImage}
                  src='https://roubbqdwivkphotabgsl.supabase.co/storage/v1/object/public/product-images/Another%20Images/icons/shopping-cart.png'
                />
                <span>{totalItems> 0 && <span className={`${styles.cartBadge} bg-danger ms-1`}>{totalItems}</span>}</span>
                </div>
                <span className='d-md-none  ms-2'>Cart</span>
              </Nav.Link>
            ) : (
              <></>
            )}
            <Nav.Link onClick={handleClick}>
              {isLoggedIn ? (
                <div>
                  <img
                    alt='Log Out'
                    className={styles.itemVerySmallImage}
                    src='https://roubbqdwivkphotabgsl.supabase.co/storage/v1/object/public/product-images/Another%20Images/icons/logout.png'
                  />
                  <span className='d-md-none ms-2'>Log Out</span>
                </div>
              ) : (
                <div>
                  <img
                    alt='Log In'
                    className={styles.itemVerySmallImage}
                    src='https://roubbqdwivkphotabgsl.supabase.co/storage/v1/object/public/product-images/Another%20Images/icons/login.png'
                  />
                  <span className='d-md-none ms-2'>Log In</span>
                </div>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
