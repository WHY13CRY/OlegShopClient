import { useEffect, useState } from 'react';
import { getCartTotal } from '../services/cartApi';

export const useCartTotal = () => {
  const [amount, setAmount] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTotal = async () => {
      try {
        const total = await getCartTotal();
        setAmount(total);
      } catch {
        setError('Failed to load cart total');
      }
    };
    fetchTotal();
  }, []);

  return { amount, error };
};
