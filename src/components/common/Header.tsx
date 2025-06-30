import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { useAuth } from '../../hooks/useAuth';
import styles from '../../assets/styles/common.module.css';
import useCartStore from '../../store/useCartStore';
import { useState, useRef, useEffect } from 'react';

const Header = () => {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();
  const items = useCartStore((state) => state.items);
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  // Закриваємо пошук, якщо клікаємо поза контейнером інпута і кнопки
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setSearchOpen(false);
      }
    }
    if (searchOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [searchOpen]);

  const handleSearchToggle = () => {
    setSearchOpen((prev) => !prev);
    if (!searchOpen) setTimeout(() => inputRef.current?.focus(), 100);
  };

  const handleSearchSubmit = () => {
    if (searchValue.trim() !== '') {
      navigate(`/search?query=${encodeURIComponent(searchValue.trim())}`);
      setSearchOpen(false);
      setSearchValue(''); // опціонально очистити поле після переходу
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearchSubmit();
    }
  };

  const handleClick = () => {
    if (isLoggedIn) {
      logout();
      navigate('/');
    } else {
      navigate('/signIn');
    }
  };

  return (
    <Navbar expand='md' className={styles.navbar}>
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
          <Nav className={`ms-auto d-flex  align-items-center gap-3 flex-row ${styles.flexContainer} ${styles.centerItem}`}>
            <div
              className={`d-flex align-items-center position-relative ${searchOpen ? 'w-100' : ''}`}
              ref={searchContainerRef}
            >
              {searchOpen && (
                <input
                  ref={inputRef}
                  type='text'
                  className={` form-control me-2`}
                  placeholder='Search items...'
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
              )}
              <button
                onClick={() => {
                  if (searchOpen && searchValue.trim() !== '') {
                    handleSearchSubmit();
                  } else {
                    handleSearchToggle();
                  }
                }}
                className='btn p-0'
                aria-label='Toggle search'
              >
                <img
                  alt='Search'
                  className={styles.itemVerySmallImage}
                  src='https://roubbqdwivkphotabgsl.supabase.co/storage/v1/object/public/product-images/Another%20Images/icons/loupe.png'
                  style={{ cursor: 'pointer' }}
                />
                {!searchOpen && (
                  <span style={{ color: 'inherit', textDecoration: 'none' }} className={`d-md-none ms-2`}>Search</span>
                )}
              </button>
                
            </div>

            {isLoggedIn && (
              <Nav.Link style={{ display: 'flex' }} onClick={() => navigate('/cart')}>
                <div style={{ position: 'relative' }}>
                  <img
                    alt='Cart'
                    className={styles.itemVerySmallImage}
                    src='https://roubbqdwivkphotabgsl.supabase.co/storage/v1/object/public/product-images/Another%20Images/icons/shopping-cart.png'
                  />
                  {totalItems > 0 && <span className={`${styles.cartBadge} bg-danger ms-1`}>{totalItems}</span>}
                </div>
                <span className='d-md-none ms-2'>Cart</span>
              </Nav.Link>
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
