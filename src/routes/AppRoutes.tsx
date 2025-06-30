import { Route, Routes } from 'react-router-dom';
import Home from '../pages/HomePage';
import ProductPage from '../pages/ProductPage';
import SignInPage from '../pages/SignInPage';
import SignUpPage from '../pages/SignUpPage';
import CartPage from '../pages/CartPage';
import ProtectedRoute from '../components/auth/ProtectedRoute';
import ShippingInfoPage from '../pages/ShippingInfoPage';
import PaymentPage from '../pages/PaymentPage';
import ThanksForOrderPage from '../pages/ThanksForOrderPage';
import SearchPage from '../pages/SearchPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/product/:id' element={<ProductPage />} />
      <Route path='/signIn' element={<SignInPage />} />
      <Route path='/signUp' element={<SignUpPage />} />
      <Route
        path='/cart'
        element={
          <ProtectedRoute>
            <CartPage />
          </ProtectedRoute>
        }
      />
      <Route path='/shipping-info' element={<ShippingInfoPage/>}/>
      <Route path='/payment' element={<PaymentPage/>}/>
      <Route path='/thank-you' element={<ThanksForOrderPage/>}/>
      <Route path='/search' element={<SearchPage/>} />
    </Routes>
  );
};

export default AppRoutes;
