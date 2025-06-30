import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useCartStore from './store/useCartStore';
import { useEffect } from 'react';

const App = () => {
  const fetchCart = useCartStore((state) => state.fetchCart);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return;
    fetchCart();
  }, [fetchCart]);

  return (
    <BrowserRouter>
      <AppRoutes />
      <ToastContainer position='bottom-right' hideProgressBar={true} />
    </BrowserRouter>
  );
};

export default App;
