import React, { useState } from "react";
import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import './app3.css';

const Signup = () => {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState('');
    const [redirectToLogin, setRedirectToLogin] = useState(false);

    const handleSignup = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        // Check if user already exists
        if (users.find(u => u.user === user)) {
            setError('Username already exists.');
            return;
        }

        // Store user in local storage
        localStorage.setItem("username", user);
        localStorage.setItem("password", password);

        // Add new user to the array
        const newUser = { user, password };
        setUsers([...users, newUser]);

        // Clear form fields and errors
        setUser('');
        setPassword('');
        setConfirmPassword('');
        setError('');
        setRedirectToLogin(true);

        if (redirectToLogin) {
            return <Navigate to="/Login" />;
        }
    };

    return (
        <div className="signup-container">
            <div className="form-container">
                <h2 className="form-title"><b>SIGN UP</b></h2>
                <form onSubmit={handleSignup}>
                    <input
                        type="text"
                        placeholder="Enter Username"
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                        required
                        className="form-input"
                    />

                    <input
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="form-input"
                    />

                    <input
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        className="form-input"
                    />

                    {error && <p className="error">{error}</p>}

                    <button type="submit" className="form-input btn btn-secondary">Sign Up</button>

                    <p>
                        Back to Login <Link to="/Login">Login</Link>
                    </p>

                </form>
            </div>
        </div>
    );
};

export default Signup;
