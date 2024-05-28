import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {
  cartItems: { item: string; quantity: number; price: number }[];
  updateCart: (cart: { item: string; quantity: number; price: number }[]) => void;
};

const Checkout: React.FC<Props> = ({ cartItems, updateCart }) => {
  const navigate = useNavigate();

  const [shippingAddress, setShippingAddress] = useState({
    street: '',
    city: '',
    state: '',
    zip: '',
    country: ''
  });
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setShippingAddress(prevAddress => ({
      ...prevAddress,
      [name]: value
    }));
  };

  const handleOrder = () => {
    alert('Order placed successfully!');
    updateCart([]); // Clear cart after order
    navigate('/');
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div>
      <div>
        <h3>Shipping Address</h3>
        <input
          type="text"
          name="street"
          value={shippingAddress.street}
          onChange={handleAddressChange}
          placeholder="Street"
        />
        <input
          type="text"
          name="city"
          value={shippingAddress.city}
          onChange={handleAddressChange}
          placeholder="Barangay"
        />
        <input
          type="text"
          name="state"
          value={shippingAddress.state}
          onChange={handleAddressChange}
          placeholder="City"
        />
        <input
          type="text"
          name="zip"
          value={shippingAddress.zip}
          onChange={handleAddressChange}
          placeholder="ZIP Code"
        />
        <input
          type="text"
          name="country"
          value={shippingAddress.country}
          onChange={handleAddressChange}
          placeholder="Province"
        />
      </div>
      <div>
        <h3>Payment Method</h3>
        <input
          type="text"
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          placeholder="Enter your payment method"
        />
      </div>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.item} - Quantity: {item.quantity}, Total Price: ${item.price * item.quantity}
          </li>
        ))}
      </ul>
      <p>Total Price: ${calculateTotalPrice()}</p>
      <button onClick={handleOrder}>Place Order</button>
    </div>
  );
};

export default Checkout;