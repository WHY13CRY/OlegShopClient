import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
      <ToastContainer position="bottom-right" hideProgressBar={true}/>
    </BrowserRouter>
  );
};

export default App;
