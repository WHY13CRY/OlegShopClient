import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

type Props = {
  onCheckout: (data: {
    fullName: string;
    phone: string;
    country: string;
    city: string;
    street: string;
    postalCode: string;
  }) => void;
};

function FormExample({ onCheckout }: Props) {
  const [validated, setValidated] = useState(false);

  const [formData, setFormData] = useState({
  fullName: 'John Doe',
  phone: '+1 (431) 123-4567',
  country: 'Canada',
  city: 'Winnipeg',
  street: '123 Main St',
  postalCode: 'R4G 1A9',
});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    event.preventDefault();

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      onCheckout(formData);
    }

    setValidated(true);
  };

  return (
    <div className='d-flex align-item-center justify-content-center'>
      <div className='w-50 mt-5'>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className='mb-3 '>
            <Form.Group controlId='validationCustom01' className='mb-3'>
              <Form.Label>Full name</Form.Label>
              <Form.Control
                required
                type='text'
                name='fullName'
                placeholder='Full name'
                value={formData.fullName}
                onChange={handleChange}
              />
              <Form.Control.Feedback type='invalid'>Please provide your full name.</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId='validationCustom02' className='mb-3'>
              <Form.Label>Phone number</Form.Label>
              <Form.Control
                required
                type='text'
                name='phone'
                placeholder='Phone number'
                value={formData.phone}
                onChange={handleChange}
              />
              <Form.Control.Feedback type='invalid'>Please provide a valid phone number.</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId='validationCustom03' className='mb-3'>
              <Form.Label>Country</Form.Label>
              <Form.Control
                type='text'
                name='country'
                placeholder='Country'
                required
                value={formData.country}
                onChange={handleChange}
              />
              <Form.Control.Feedback type='invalid'>Please provide a valid country.</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId='validationCustom04' className='mb-3'>
              <Form.Label>City</Form.Label>
              <Form.Control
                type='text'
                name='city'
                placeholder='City'
                required
                value={formData.city}
                onChange={handleChange}
              />
              <Form.Control.Feedback type='invalid'>Please provide a valid city.</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId='validationCustom05' className='mb-3'>
              <Form.Label>Street</Form.Label>
              <Form.Control
                type='text'
                name='street'
                placeholder='Street'
                required
                value={formData.street}
                onChange={handleChange}
              />
              <Form.Control.Feedback type='invalid'>Please provide a valid street.</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId='validationCustom06' className='mb-3'>
              <Form.Label>Postal Code</Form.Label>
              <Form.Control
                type='text'
                name='postalCode'
                placeholder='Postal Code'
                required
                value={formData.postalCode}
                onChange={handleChange}
              />
              <Form.Control.Feedback type='invalid'>Please provide a valid postal code.</Form.Control.Feedback>
            </Form.Group>
            <Button type='submit' className='btn btn-dark mt-3'>
              Proceed to payment
            </Button>
          </Row>
        </Form>
      </div>
    </div>
  );
}

export default FormExample;
