import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import FormExample from '../components/order/OrderForm';
import Header from '../components/common/Header';
import { useShippingStore } from '../store/useShippingStore';

const ShippingInfoPage = () => {
  const navigate = useNavigate();
  const setShippingInfo = useShippingStore((state) => state.setShippingInfo);

  const handleCheckout = async (orderInfo: {
    fullName: string;
    phone: string;
    country: string;
    city: string;
    street: string;
    postalCode: string;
  }) => {
    try {
      setShippingInfo(orderInfo)
      toast.success('Shipping info saved!');
      navigate('/payment');
    } catch (error) {
      toast.error('Saving failed');
    }
  };

  return (
    <div className='container'>
      <Header />
      <div className='py-4'>
        <h1 className='m-4'>Shipping Information</h1>
        <FormExample onCheckout={handleCheckout} />
      </div>
    </div>
  );
};

export default ShippingInfoPage;
