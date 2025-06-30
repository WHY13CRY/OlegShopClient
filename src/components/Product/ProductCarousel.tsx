import Carousel from 'react-bootstrap/Carousel';

function ProductCarousel() {
  return (
    <Carousel
      fade
      interval={3000}
      style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}
    >
      <Carousel.Item style={{ height: '100vh' }}>
        <img
          style={{ width: '100%', height: '100vh', objectFit: 'cover', display: 'block' }}
          src="https://roubbqdwivkphotabgsl.supabase.co/storage/v1/object/public/product-images/6th%20item/mastercraft-229pc-black-steel-socket-set-01e7ed6c-e506-45a4-aba8-585af9a21da1-jpgrendition.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Міцний набір інструментів</h3>
          <p>Для дому і професійного використання.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: '100vh' }}>
        <img
          style={{ width: '100%', height: '100vh', objectFit: 'cover', display: 'block' }}
          src="https://roubbqdwivkphotabgsl.supabase.co/storage/v1/object/public/product-images/4th%20item/stanley183pc-black-chrome-socketset-08f6960b-8c08-431e-9395-a7f0d8e23c14-jpgrendition.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Надійний Stanley набір</h3>
          <p>183 предмети для найскладніших задач.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: '100vh' }}>
        <img
          style={{ width: '100%', height: '100vh', objectFit: 'cover', display: 'block' }}
          src="https://roubbqdwivkphotabgsl.supabase.co/storage/v1/object/public/product-images/first%20item/p_1001104071.jpg.avif"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Бюджетний варіант</h3>
          <p>Ідеальний для початківців майстрів.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ProductCarousel;
