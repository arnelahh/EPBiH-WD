import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../stilovi/Register.css';

function Register() {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevents the default form submit behavior
        // Handle form submission logic here (e.g., registration)
        console.log('Form submitted');
        // After successful registration, navigate to the home page
        navigate('/');
    };

    return (
        <div className="register-container">
            <header className="register-header">
                <img src="src/slike%20ep/kalkulator.jpg" alt="Kalkulator" className="register-image"/>
                <h1>Registracija</h1>
            </header>
            <main className="register-main">
                <section className="register-section">
                    <div className="register-form">
                        <div className="register-icon">
                            <i className="fa fa-user-circle" aria-hidden="true"></i>
                        </div>
                        <form onSubmit={handleSubmit} autoComplete="off">
                            <div className="register-input">
                                <label htmlFor="username">Korisničko ime</label>
                                <input type="text" id="username" name="username" required autoComplete="new-username" />
                            </div>
                            <div className="register-input">
                                <label htmlFor="email">E-mail</label>
                                <input type="email" id="email" name="email" required autoComplete="new-email" />
                            </div>
                            <div className="register-input">
                                <label htmlFor="number">Broj telefona</label>
                                <input type="tel" id="number" name="number" required autoComplete="new-number" />
                            </div>
                            <div className="register-input">
                                <label htmlFor="password">Šifra</label>
                                <input type="password" id="password" name="password" required autoComplete="new-password" />
                            </div>
                            <div className="register-input">
                                <label htmlFor="confirm-password">Potvrdite šifru</label>
                                <input type="password" id="confirm-password" name="confirm-password" required autoComplete="new-password" />
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
