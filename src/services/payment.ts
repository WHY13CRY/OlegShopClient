import api from './api';

export const createPaymentIntent = async (amount: number) => {
  const res = await api.post('/api/payment/create-payment-intent', {
    amount: Math.round(amount * 100),
  });
  return res.data.clientSecret;
};