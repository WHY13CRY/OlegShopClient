import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getOneProduct } from '../services/productApi';
import { Product } from '../types/product';
import ProductComponent from '../components/ProductComponent';
import Loading from '../components/Loading';

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      getOneProduct(Number(id))
        .then((data) => {
          setProduct(data);
          setSelectedPhoto(data.main_image_url);
        })
        .catch((error) => console.error('Error fetching product:', error));
    }
  }, [id]);

  if (!product) {
    return <Loading/>;
  }
  return (
    <ProductComponent product={product} selectedPhoto={selectedPhoto} setSelectedPhoto={setSelectedPhoto}/>
  );
};

export default ProductPage;
