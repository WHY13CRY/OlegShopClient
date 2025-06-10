import styles from '../assets/Product.module.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleSignIn } from '../services/authApi';
import Header from '../components/Header';

const SignInPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const buttonHandler = async () => {
    const success = await handleSignIn(email, password);
    if (success) {
      navigate('/')
    }
  };

  return (
    <Container>
      <Header />
      <div className={styles.centerItemBothWay}>
        <div className={`${styles.border} ${styles.boxSizing}`}>
          <div className={styles.centerItemAndMakeAsColumn}>
            <h3>Sign In</h3>
            <p>Welcome user, please sign in to continue</p>
            <Form.Control
              style={{ marginBottom: '10px' }}
              placeholder='   Email *'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Control
              style={{ marginBottom: '30px' }}
              placeholder='   Password *'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button style={{ width: '100%' }} variant='outline-dark' onClick={buttonHandler}>
              Sign In
            </Button>
            <div style={{ margin: '25px 0 10px 0' }} className={styles.centerItem}>
              <span className={styles.line}></span>
              or
              <span className={styles.line}></span>
            </div>
            <Button style={{ width: '50%', border: 'none' }} variant='outline-dark' onClick={() => navigate('/signUp')}>
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SignInPage;
