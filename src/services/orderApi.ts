import api from './api';

export interface OrderData {
  fullName: string;
  phone: string;
  country: string;
  city: string;
  street: string;
  postalCode: string;
  
}

export const createOrder = async (data: OrderData) => {
  const res = await api.post('/api/orders/checkout', data);
  return res.data;
};

export const createPaymentIntent = async (amount: number) => {
  const res = await api.post('/api/payment/create-payment-intent', {
    amount: Math.round(amount * 100),
  });
  return res.data.clientSecret;
};