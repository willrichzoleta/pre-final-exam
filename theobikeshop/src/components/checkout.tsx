import React, { useState } from 'react';

const Checkout = ({ location }) => {
    // Extract cartItems from location state
    const { cartItems , calculateTotalPrice } = location.state || {};
  
    // Check if cartItems is empty or undefined
    if (!cartItems || cartItems.length === 0) {
      return <div>No items in the cart</div>;
    }
  // Calculate total price of all items in the cart
  const totalPrice = cartItems.reduce((total, item) => total + calculateTotalPrice(item.quantity, item.price), 0);

  // Initialize form data using useState
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    houseNumber: '',
    street: '',
    barangay: '',
    city: '',
    province: '',
    country: '',
    payment: '',
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle checkout button click
  const handleCheckout = () => {
    // Perform checkout logic here (e.g., submit form data to server)
    console.log('Form data:', formData);
    // Clear form inputs after checkout
    setFormData({
      firstName: '',
      middleName: '',
      lastName: '',
      houseNumber: '',
      street: '',
      barangay: '',
      city: '',
      province: '',
      country: '',
      payment: '',
    });
  };

  return (
    <div className="checkout-container">
      <h2 className="checkout-title">Checkout</h2>
      {cartItems && cartItems.length > 0 ? (
        <div>
          {/* Render checkout items */}
          <div className="checkout-items">
            {cartItems.map((item, index) => (
              <div key={index} className="checkout-item">
                <span className="item-name">{item.item}</span>
                <span className="item-quantity">Quantity: {item.quantity}</span>
                <span className="item-price">${calculateTotalPrice(item.quantity, item.price)}</span>
              </div>
            ))}
          </div>
          {/* Render total price */}
          <div className="total-price">
            <span>Total Price:</span>
            <span>${totalPrice}</span>
          </div>
          {/* Render checkout form */}
          <div className="checkout-form">
            {/* Render input fields */}
            {/* Handle input changes */}
            {/* Render checkout button */}
            <button onClick={handleCheckout} className="checkout-btn">Checkout</button>
          </div>
        </div>
      ) : (
        // Render message when cart is empty
        <div>No items in the cart</div>
      )}
    </div>
  );
};

export default Checkout;
