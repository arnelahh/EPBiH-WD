import React from 'react';
import '../stilovi/Register.css';

function Register() {
    return (
        <div className="register-container">
            <header className="register-header">
                <h1>Registrujte se</h1>
            </header>
            <main className="register-main">
                <section className="register-section">
                    <img src="https://example.com/your-image.jpg" alt="Hero" className="register-image" />
                    <div className="register-form">
                        <div className="register-icon">
                            <i className="fa fa-user-circle" aria-hidden="true"></i>
                        </div>
                        <form>
                            <div className="register-input">
                                <label htmlFor="name">Ime</label>
                                <input type="text" id="name" name="name" />
                            </div>
                            <div className="register-input">
                                <label htmlFor="surname">Prezime</label>
                                <input type="text" id="surname" name="surname" />
                            </div>
                            <div className="register-input">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" />
                            </div>
                            <div className="register-input">
                                <label htmlFor="phone">Broj telefona</label>
                                <input type="tel" id="phone" name="phone" />
                            </div>
                            <div className="register-input">
                                <label htmlFor="username">Korisničko ime</label>
                                <input type="text" id="username" name="username" />
                            </div>
                            <div className="register-input">
                                <label htmlFor="password">Šifra</label>
                                <input type="password" id="password" name="password" />
                            </div>
                            <div className="register-buttons">
                                <button type="submit" className="register-button">Registrujte se</button>
                            </div>
                        </form>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Register;
