import React, { useState } from 'react';
import AddToCart from './addtocart.tsx'; // Ensure correct import path
import Cart from './cart.tsx';
import Checkout from './Checkout.tsx';
import { useNavigate } from 'react-router-dom';
import gb1 from './IMG/gb8.webp';
import gb2 from './IMG/gb7.webp';
import gb3 from './IMG/gb6.webp';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal fade show" style={{ display: 'block' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Checkout</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">{children}</div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

function GbProducts() {
  const [cart, setCart] = useState<{ item: string; quantity: number; price: number }[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const updateCart = (newCart: { item: string; quantity: number; price: number }[]) => {
    setCart(newCart);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
                <AddToCart itemName="Solo C50 Sram" itemPrice={1000} setCart={setCart} cart={cart} />
              </div>
            </div>
          </div>
          <div className='col'>
            <div className="card" style={{ width: "26rem" }}>
              <img src={gb2} alt="Gravel Bike 2" />
              <div className="card-body">
                <h5 className="card-title">Solo C90 Sram</h5>
                <AddToCart itemName="Solo C90 Sram" itemPrice={1200} setCart={setCart} cart={cart} />
              </div>
            </div>
          </div>
          <div className='col'>
            <div className="card" style={{ width: "26rem" }}>
              <img src={gb3} alt="Gravel Bike 3" />
              <div className="card-body">
                <h5 className="card-title">Solo A50 Sram</h5>
                <AddToCart itemName="Solo A50 Sram" itemPrice={1500} setCart={setCart} cart={cart} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Cart cartItems={cart} updateCart={updateCart} />
      <div>
        <button className="btn btn-primary" onClick={openModal}>Checkout</button>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <Checkout cartItems={cart} updateCart={updateCart} />
        </Modal>
      </div>
    </>
  );
}

export default GbProducts;