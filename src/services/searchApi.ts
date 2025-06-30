import api from './api';

export const searchProducts = async (query: string) => {
  const res = await api.get(`/api/search?query=${encodeURIComponent(query)}`);
  return res.data;
};