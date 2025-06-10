import { Route, Routes } from 'react-router-dom';
import Home from '../pages/HomePage';
import ProductPage from '../pages/ProductPage';
import SignInPage from '../pages/SignInPage';
import SignUpPage from '../pages/SignUpPage';
import CartPage from '../pages/CartPage';

const AppRoutes = () => {
  return (
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/product/:id' element={<ProductPage />}/>
        <Route path='/signIn' element={<SignInPage />}/>
        <Route path='/signUp' element={<SignUpPage/>}/>
        <Route path='/cart' element={<CartPage/>}/>
      </Routes>
  );
};

export default AppRoutes;
