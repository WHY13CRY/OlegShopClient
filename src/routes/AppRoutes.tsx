import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import ProductPage from '../pages/ProductPage';

const AppRoutes = () => {
  return (
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/product/:id' element={<ProductPage />}/>
      </Routes>
  );
};

export default AppRoutes;
