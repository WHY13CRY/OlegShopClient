import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import StripeCheckoutForm from '../components/order/StripeCheckoutForm';
import { Container } from 'react-bootstrap';
import Header from '../components/common/Header';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY!);

const PaymentPage = () => {
  return (
    <div>
      <Header />
      <Container>
        <h1 className='m-4'>Pay with Card</h1>
        <div className='pt-4'>
          <Elements stripe={stripePromise}>
            <StripeCheckoutForm />
          </Elements>
        </div>
      </Container>
    </div>
  );
};

export default PaymentPage;
