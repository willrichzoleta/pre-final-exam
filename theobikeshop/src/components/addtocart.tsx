// addtocart.tsx
import React, { useState } from 'react';

type Props = {
  itemName: string;
  itemPrice: number;
  setCart: (cart: { item: string; quantity: number; price: number }[]) => void;
  cart: { item: string; quantity: number; price: number }[];
};

const AddToCart: React.FC<Props> = ({ itemName, itemPrice, setCart, cart }) => {
    const addToCart = () => {
        // Check if the item is already in the cart
        const existingItemIndex = cart.findIndex(item => item.item === itemName);
      
        if (existingItemIndex !== -1) {
          // If the item is already in the cart, update its quantity
          const updatedCart = [...cart];
          updatedCart[existingItemIndex].quantity++;
          setCart(updatedCart);
        } else {
          // If the item is not in the cart, add it with quantity 1 and its price
          setCart([...cart, { item: itemName, quantity: 1, price: itemPrice }]);
        }
      };
      

  return (
    <button onClick={addToCart}>Add to Cart</button>
  );
};

export default AddToCart;
