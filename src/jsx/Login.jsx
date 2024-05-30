import React from 'react';
import { Link } from 'react-router-dom';
import '../stilovi/Login.css';

function Login() {
    return (
        <div className="login-container">
            <header className="login-header">
                <img src="src/slike%20ep/kalkulator.jpg" alt="Kalkulator" className="login-image"/>
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" className="login-profile-picture"/>
                <h1>Dobrodošli nazad!</h1>
            </header>
            <main className="login-main">
                <section className="login-section">
                    <div className="login-form">
                        <div className="login-icon">
                            <i className="fa fa-user-circle" aria-hidden="true"></i>
                        </div>
                        <form>
                            <div className="login-input">
                                <label htmlFor="username">Korisničko ime</label>
                                <input type="text" id="username" name="username" />
                            </div>
                            <div className="login-input">
                                <label htmlFor="password">Šifra</label>
                                <input type="password" id="password" name="password" />
                            </div>
                            <div className="login-links">
                                <a href="/forgot-password">Zaboravili ste šifru?</a>
                            </div>
                            <div className="login-buttons">
                                <Link to="/register" className="register-button">Registrujte se</Link>
                                <Link to="/">
                                    <button type="submit" className="login-button">Prijavite se</button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Login;
