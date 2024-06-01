import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../stilovi/Register.css';

function Register() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        number: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevents the default form submit behavior

        try {
            const response = await fetch('http://localhost:3001/server/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                console.log('Form submitted', formData);
                localStorage.setItem("activeUser", JSON.stringify(formData))
                navigate('/');
            } else {
                const errorText = await response.text();
                console.error('Failed to register user:', errorText);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div className="register-container">
            <header className="register-header">
                <h1>ELEKTROPRIVREDA <br/>
                    BOSNE I HERCEGOVINE </h1>
            </header>
            <main className="register-main">
                <h2>Registruj se</h2>
                <p>Postanite i Vi dio nas!</p>
                <hr/>
                <section className="register-section">
                    <div className="register-form">
                        <div className="register-icon">
                            <i className="fa fa-user-circle" aria-hidden="true"></i>
                        </div>
                        <form onSubmit={handleSubmit} autoComplete="off">
                            <div className="register-input">

                                <input type="text" id="username" name="username" required autoComplete="new-username"
                                       value={formData.username} onChange={handleChange} placeholder="Korisničko ime"/>
                            </div>
                            <div className="register-input">
                                <input type="email" id="email" name="email" required autoComplete="new-email"
                                       value={formData.email} onChange={handleChange}
                                       placeholder="E-mail"/>
                            </div>
                            <div className="register-input">
                                <input type="tel" id="number" name="number" required autoComplete="new-number"
                                       value={formData.number} onChange={handleChange}
                                       placeholder="Broj telefona"/>
                            </div>
                            <div className="register-input">
                                <input type="password" id="password" name="password" required
                                       autoComplete="new-password" value={formData.password} onChange={handleChange}
                                       placeholder="Šifra"/>
                            </div>
                            <div className="register-input">
                                <input type="password" id="confirm-password" name="confirmPassword" required
                                       autoComplete="new-password" value={formData.confirmPassword}
                                       onChange={handleChange}
                                       placeholder="Potvrdite šifru"/>
                                <p className="useragr">Klikom na Registrujte se slažete se s našim Uvjetima, Politikom privatnosti i Politikom kolačića. Možete primati SMS obavještenja od nas i možete odustati u bilo kojem trenutku.</p>
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
