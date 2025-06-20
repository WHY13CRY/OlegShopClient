import { CardNumberElement, CardExpiryElement, CardCvcElement } from '@stripe/react-stripe-js';
import { Form, Row, Col } from 'react-bootstrap';

const ELEMENT_OPTIONS = {
  style: {
    base: {
      color: '#495057',
      fontSize: '16px',
      fontFamily: 'system-ui, sans-serif',
      '::placeholder': { color: '#6c757d' },
    },
    invalid: {
      color: '#dc3545',
    },
  },
};

const StripeCardFields = () => (
  <>
    <Form.Group className='mt-3'>
      <Form.Label>Card Number</Form.Label>
      <div className='form-control p-2'>
        <CardNumberElement options={ELEMENT_OPTIONS} />
      </div>
      <Form.Text className='text-muted'>Use test card: 4242 4242 4242 4242</Form.Text>
    </Form.Group>

    <Row>
      <Col md={6}>
        <Form.Group className='mt-3'>
          <Form.Label>Expiry Date</Form.Label>
          <div className='form-control p-2'>
            <CardExpiryElement options={ELEMENT_OPTIONS} />
          </div>
        </Form.Group>
      </Col>
      <Col md={6}>
        <Form.Group className='mt-3 mb-5'>
          <Form.Label>CVC</Form.Label>
          <div className='form-control p-2'>
            <CardCvcElement options={ELEMENT_OPTIONS} />
          </div>
        </Form.Group>
      </Col>
    </Row>
  </>
);

export default StripeCardFields;
