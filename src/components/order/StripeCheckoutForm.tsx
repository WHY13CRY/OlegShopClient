import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useStripePayment } from '../../hooks/useStripePayment';
import { useCartTotal } from '../../hooks/useCartTotal';
import StripeCardFields from './StripeCardFields';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const StripeCheckoutForm = () => {
  const { amount, error: totalError } = useCartTotal();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const { handlePayment } = useStripePayment(amount);
  const navigate = useNavigate()

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await handlePayment();
      toast.success('Payment succeeded and order created!');
      navigate('/thank-you')
    } catch (err: any) {
      setError(err.message || 'Payment failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form onSubmit={onSubmit}>
      <StripeCardFields />
      {error && <div className="text-danger mb-3">{error}</div>}
      {totalError && <div className="text-danger mb-3">{totalError}</div>}
      <Button type="submit" variant="dark" className="w-100" disabled={loading || !amount}>
        {loading ? 'Processing...' : `Pay $${amount}`}
      </Button>
    </Form>
  );
};

export default StripeCheckoutForm;
