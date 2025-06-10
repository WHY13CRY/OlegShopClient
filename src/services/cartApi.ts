import api from './api';

export const fetchCart = async () => {
  const res = await api.get('/api/cart');
  return res.data;
};

export const addToCart = async (productId: number, quantity: number) => {
  const res = await api.post('/api/cart', { productId, quantity });
  return res.data;
};

export const removeFromCart = async (productId: number) => {
  await api.delete(`/api/cart/${productId}`);
};

export const clearCart = async () => {
  await api.delete('/api/cart');
};
