import { CardNumberElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { createPaymentIntent } from '../services/orderApi';
import { useShippingStore } from '../store/useShippingStore';
import { proceedToCheckout } from '../services/cartApi';
import useCartStore from '../store/useCartStore';

export const useStripePayment = (amount: number) => {
  const stripe = useStripe();
  const elements = useElements();
  const shippingInfo = useShippingStore((s) => s.shippingInfo);
   const fetchCart = useCartStore((s) => s.fetchCart);

  const handlePayment = async () => {
    if (!stripe || !elements) throw new Error('Stripe not initialized');

    const clientSecret = await createPaymentIntent(amount); 

    const cardNumberElement = elements.getElement(CardNumberElement);
    if (!cardNumberElement) throw new Error('Card element not found');

    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: { card: cardNumberElement },
    });

    if (error) throw new Error(error.message);
    if (paymentIntent?.status === 'succeeded') {
      await proceedToCheckout(shippingInfo);
      await fetchCart();
      return paymentIntent;
    }

    throw new Error('Payment failed');
  };

  return { handlePayment };
};
