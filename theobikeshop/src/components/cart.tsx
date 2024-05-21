import React from 'react';
import './cart.css';

type Props = {
  cartItems: { item: string; quantity: number; price: number }[];
  updateCart: (cart: { item: string; quantity: number; price: number }[]) => void;
  history: any; // Ensure that history is included in props

};

const Cart: React.FC<Props> = ({ cartItems, updateCart }) => {
  const decreaseQuantity = (index: number) => {
    const updatedCartItems = cartItems.map((item, i) => {
      if (i === index) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    }).filter(item => item.quantity > 0);

    updateCart(updatedCartItems);
  };

  const removeItem = (index: number) => {
    const updatedCartItems = cartItems.filter((item, i) => i !== index);
    updateCart(updatedCartItems);
  };

  const calculateTotalPrice = (quantity: number, price: number) => {
    return quantity * price;
  };


  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.item} - Quantity: {item.quantity}, Total Price: ${calculateTotalPrice(item.quantity, item.price)}
            <button onClick={() => decreaseQuantity(index)}>Decrease Quantity</button>
            <button onClick={() => removeItem(index)}>Remove Item</button>
          </li>
        ))}
      </ul>
      
    </div>
  );
};

export default (Cart);
