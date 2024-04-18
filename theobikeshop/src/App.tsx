
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from "./components/Login.tsx";
import Signup from "./components/Signup.tsx";
import Products from "./components/products.tsx";
import Home from "./components/Home.tsx";
import GBProducts from "./components/gbproducts.tsx";
import RBProducts from "./components/rbproducts.tsx";
import MBProducts from "./components/mbproducts.tsx";
import Home2 from "./components/Home2.tsx";

function App() {
  return (
    <Router>
      <div className='App'>
        <nav className="nav-container">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
            <li className="dropdown">
              <span>Products</span>
              <ul className="dropdown-content">
                <li><Link to="/mbproducts">Mountain Bikes</Link></li>
                <li><Link to="/gbproducts">Gravel Bikes</Link></li>
                <li><Link to="/rbproducts">Road Bikes</Link></li>
              </ul>
            </li> 
          </ul>
        </nav>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/products" element={<Products />} />
          <Route path="/gbproducts" element={<GBProducts />} />
          <Route path="/rbproducts" element={<RBProducts />} />
          <Route path="/mbproducts" element={<MBProducts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

