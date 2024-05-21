import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import './App4.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [adminusername, setUsername] = useState("");
  const [adminpassword, setPassword] = useState("");
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleSubmit = (e) => {
    e.preventDefault();
    // Assuming your user authentication logic here
    if (adminusername === "admin" && adminpassword === "password") { // Example authentication logic
      // Redirect to dashboard after successful login
      navigate("/dashboard"); // Use navigate instead of history.push
    } else {
      setError('Invalid username or password.');
    }
  };

  return (
    <div className="banner2">
      <div className="form-container">
        <h2 className="form-title"> <b>ADMIN LOGIN</b></h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="Username"
            value={adminusername}
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
          <button type="submit" className='form-input btn btn-secondary'>Login</button> {/* Use type="submit" for login button */}
        </form>
        <p>
          Don't have an account? <Link to="/AdminSignup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

