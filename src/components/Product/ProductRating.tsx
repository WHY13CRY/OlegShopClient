import Rating from '@mui/material/Rating';
import { ReviewsType } from '../../types/product';

type Props = {
  reviews: ReviewsType[];
};

const ProductRating = ({ reviews }: Props) => {
  const averageRating =
    reviews.length > 0 ? reviews.reduce((sum, reviews) => sum + reviews.rating, 0) / reviews.length : 0;
  return <Rating className='my-2' name='read-only' value={averageRating} readOnly precision={0.5} />;
};

export default ProductRating;
