import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AddToCart from './addtocart.tsx'; // Remove this import

import Cart from './cart.tsx';
import Checkout from './checkout'; 

import gb1 from './IMG/gb8.webp';
import gb2 from './IMG/gb7.webp';
import gb3 from './IMG/gb6.webp';

function GbProducts() {
    // State to store items in the cart
    const [cart, setCart] = useState<{ item: string; quantity: number; price: number }[]>([]);
    // Function to update the cart items
    const updateCart = (newCart: { item: string; quantity: number; price: number }[]) => {
        setCart(newCart);
    };

    return (
      <>
        <div className="container">
          <div className="px-4 py-5 my-5 text-center">
            <h1 className="display-5 fw-bold text-body-emphasis">GRAVEL BIKES</h1>
          </div>
          <div className='row'>
            <div className='col'>
              <div className="card" style={{ width: "26rem" }}>
                <img src={gb1} alt="Gravel Bike 1" />
                <div className="card-body">
                  <h5 className="card-title">Solo C50 Sram</h5>
                  {/* Pass itemName, itemPrice, setCart, and cart as props to AddToCart */}
                  <AddToCart itemName="Solo C50 Sram" itemPrice={1000} setCart={setCart} cart={cart} />
                </div>
              </div>
            </div>
            <div className='col'>
              <div className="card" style={{ width: "26rem" }}>
                <img src={gb2} alt="Gravel Bike 2" />
                <div className="card-body">
                  <h5 className="card-title">Solo C90 Sram</h5>
                  {/* Pass itemName, itemPrice, setCart, and cart as props to AddToCart */}
                  <AddToCart itemName="Solo C90 Sram" itemPrice={1200} setCart={setCart} cart={cart} />
                </div>
              </div>
            </div>
            <div className='col'>
              <div className="card" style={{ width: "26rem" }}>
                <img src={gb3} alt="Gravel Bike 3" />
                <div className="card-body">
                  <h5 className="card-title">Solo A50 Sram</h5>
                  {/* Pass itemName, itemPrice, setCart, and cart as props to AddToCart */}
                  <AddToCart itemName="Solo A50 Sram" itemPrice={1500} setCart={setCart} cart={cart} />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Render the Cart component to display cart items */}
        <Cart cartItems={cart} updateCart={updateCart} /> {/* Pass the updateCart function */}

        <Link to={{
          pathname: "/checkout",
          state: { cartItems: cart } // Pass the cartItems as state
        }}>
          <button>Proceed to Checkout</button>
        </Link>

      </>
    );
}

export default GbProducts;