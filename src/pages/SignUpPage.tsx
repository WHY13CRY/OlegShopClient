import { Button, Container, Form } from 'react-bootstrap';
import Header from '../components/Header';
import styles from '../assets/Product.module.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { handleSignUp } from '../services/authApi';

const SignUpPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const navigate = useNavigate();

  const buttonHandler = async () => {
    const success = await handleSignUp(fullName, email, password);
    if (success) {
      navigate('/signIn');
    }
  };

  return (
    <Container>
      <Header />
      <div className={styles.centerItemBothWay}>
        <div className={`${styles.border} ${styles.boxSizing}`}>
          <div className={styles.centerItemAndMakeAsColumn}>
            <h3>Sign Up</h3>
            <p>Required fields are marked with an asterisk (*).</p>
            <Form.Control
              style={{ marginBottom: '10px' }}
              placeholder='   Full Name'
              type='name'
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
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
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SignUpPage;
