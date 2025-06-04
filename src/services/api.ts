import axios from 'axios';
import { Product } from '../types/product';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const getProducts = async (): Promise<Product[]> => {
  try {
    const response = await api.get('/api/products');
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const getOneProduct = async (id: number) => {
  try {
    const response = await api.get(`/api/products/${id}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const handleSignIn = async (email: string, password: string) => {
  try {
    const res = await api.post('/api/users/login', { email, password });
    localStorage.setItem('token', res.data.token);
    return true;
  } catch (error) {
    alert('Login Failed');
    return false;
  }
};

export const handleSignUp = async (fullName: string, email: string, password: string) => {
  try {
    await api.post('/api/users/register', { email, password, full_name: fullName });
    alert('Registred successfully');
    return true;
  } catch (error) {
    alert('Registration Failed');
    return false;
  }
};

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
