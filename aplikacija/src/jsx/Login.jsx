import React, { useState, useEffect } from 'react';
import '../stilovi/Login.css';
import { Link, useNavigate } from "react-router-dom";
import {loadJsonData} from "../utils/loadJsonData.js";

function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    useEffect(() => {
        loadJsonData();
    });
    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevents the default form submit behavior

        // Retrieve the user data from local storage
        const userData = JSON.parse(localStorage.getItem('userData')) || [];

        // Check if the user exists
        const user = userData.find(user => user.username === username && user.password === password);

        if (user) {
            console.log('User authenticated');
            // Redirect to the home page or user profile
            navigate('/');
        } else {
            console.log('User does not exist');
            setError('Profile does not exist. Please check your credentials or register.');
        }
    };

    return (
        <div className="login-container">
            <header className="login-header">
                <img src="src/slike%20ep/kalkulator.jpg" alt="Kalkulator" className="login-image" />
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" className="login-profile-picture" />
                <h1>Dobrodošli nazad!</h1>
            </header>
            <main className="login-main">
                <section className="login-section">
                    <div className="login-form">
                        <div className="login-icon">
                            <i className="fa fa-user-circle" aria-hidden="true"></i>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="login-input">
                                <label htmlFor="username">Korisničko ime</label>
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    required
                                    autoComplete="off"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                            <div className="login-input">
                                <label htmlFor="password">Šifra</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    required
                                    autoComplete="off"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="login-links">
                                <a href="/forgot-password">Zaboravili ste šifru?</a>
                            </div>
                            <div className="login-buttons">
                                <Link to="/register">
                                    <button type="button" className="login-button">Registrujte se</button>
                                </Link>
                                <button type="submit" className="login-button">Prijavite se</button>
                            </div>
                            {error && <div className="error-message">{error}</div>}
                        </form>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Login;
