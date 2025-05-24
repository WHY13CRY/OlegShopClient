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

export const getOneProduct = async (id:number) => {
  try {
    const response = await api.get(`/api/products/${id}`)
    console.log(response.data)
    return response.data
  } catch (error) {
    console.error('Error fetching products:', error)
    throw error;
  }
}
