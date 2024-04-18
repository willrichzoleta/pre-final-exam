import React, { useState } from "react";
import { Link, Navigate } from 'react-router-dom';
import './App4.css';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('');
  const [redirectToProducts, setRedirectToProducts] = useState(false);

  // Retrieve username and password from local storage
  const storedUsername = localStorage.getItem("username");
  const storedPassword = localStorage.getItem("password");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Assuming your user authentication logic here
    if (username === "admin" && password === "password") { // Example authentication logic
      localStorage.setItem("authenticated", "true");
      alert("Successfully Logged in.");
      setRedirectToProducts(true);
    } else {
      setError('Invalid username or password.');
    }
  };

  if (redirectToProducts) {
    return <Navigate to="/Home2" />;
  }

  return (
    <div className="banner2">
      <div className="form-container">
        <h2 className="form-title"> <b>LOGIN</b></h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="Username"
            value={username}
            placeholder="Enter Username"
            onChange={(e) => setUsername(e.target.value)}
            className="form-input"
          />
          <input
            type="password"
            name="Password"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
            className="form-input"
          />
          <input type="submit" value="Login" className="form-input btn btn-secondary" />
        </form>
        <p>
          Don't have an account? <Link to="/Signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
