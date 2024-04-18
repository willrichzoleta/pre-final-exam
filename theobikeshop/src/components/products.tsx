import React, { useState, useEffect } from 'react';

const ProductPage = () => {
  const [selectedSize, setSelectedSize] = useState('S');
  const [selectedPrice, setSelectedPrice] = useState(10);
  const [selectedQty, setSelectedQty] = useState(1);
  const [totalPrice, setTotalPrice] = useState(selectedPrice * selectedQty);

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
    if (e.target.value === 'S') {
      setSelectedPrice(10);
    } else if (e.target.value === 'M') {
      setSelectedPrice(15);
    } else if (e.target.value === 'L') {
      setSelectedPrice(20);
    }
  };

  const handleQtyChange = (e) => {
    setSelectedQty(e.target.value);
  };

  useEffect(() => {
    setTotalPrice(selectedPrice * selectedQty);
  }, [selectedPrice, selectedQty]);

  return (
    <div className="product-page">
      <div className="product-image-container">
        <img src="image1.jpg" alt="Product Image" />
        <img src="image2.jpg" alt="Product Image" />
      </div>
      <div className="product-details">
        <h1>Product Name</h1>
        <p>Price: ${selectedPrice}</p>
        <label htmlFor="size-select">Size:</label>
        <select id="size-select" value={selectedSize} onChange={handleSizeChange}>
          <option value="S">Small</option>
          <option value="M">Medium</option>
          <option value="L">Large</option>
        </select>
        <label htmlFor="qty-select">Quantity:</label>
        <select id="qty-select" value={selectedQty} onChange={handleQtyChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <p>Total Price: ${totalPrice}</p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductPage;