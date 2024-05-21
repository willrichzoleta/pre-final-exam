import React, { useState } from "react";
import { Link } from 'react-router-dom'; // Import useHistory
import './App4.css';

type User = {
  adminuser: string;
  adminpassword: string;
};

const Signup = () => {
  const [adminusers, setUsers] = useState<User[]>([]);
  const [adminuser, setUser] = useState("");
  const [adminpassword, setPassword] = useState("");
  const [adminconfirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState('');


  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
  
    if (adminuser.trim() === "" || adminpassword.trim() === "" || adminconfirmPassword.trim() === "") {
      setError('Please fill in all fields.');
      return;
    }
  
    if (adminpassword !== adminconfirmPassword) {
      setError('Passwords do not match.');
      return;
    }
  
    // Check if user already exists
    if (adminusers.find(u => u.adminuser === adminuser)) {
      setError('Username already exists.');
      return;
    }
  
    // Store user in local storage
    localStorage.setItem("username", adminuser);
    localStorage.setItem("password", adminpassword);
  
    // Add new user to the array
    const newUser: User = { adminuser, adminpassword };
    setUsers([...adminusers, newUser]);
  
    // Show alert message
    alert("You are now registered!");
  
    // Redirect to admin login page

  };
  

  return (
    <div className="signup-container">
    <div className="form-container">
    <div className="signup-form">
      <h2><b>Admin Signup</b></h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSignup}>
        <input
          type="text"
          name="Username"
          value={adminuser}
          placeholder="Enter Username"
          onChange={(e) => setUser(e.target.value)}
          className="form-input"
        />
        <input
          type="password"
          name="Password"
          value={adminpassword}
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
          className="form-input"
        />
        <input
          type="password"
          name="Confirm Password"
          value={adminconfirmPassword}
          placeholder="Confirm Password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="form-input"
        />
        <button type="submit" className="form-input btn btn-secondary">Signup</button>
        <p>
            Back to Login <Link to="/AdminLogin">Login</Link>
        </p>
      </form>
    </div>
    </div>
    </div>
  );
};

export default Signup;
