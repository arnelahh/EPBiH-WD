import React, { useState } from 'react';
import '../stilovi/ForgotPassword.css';

function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        if (newPassword !== confirmPassword) {
            setMessage('Šifre se ne podudaraju!');
            return;
        }

        // Simulate a successful password reset
        setMessage('Šifra je promijenjena uspješno!');
        setEmail('');
        setNewPassword('');
        setConfirmPassword('');
    };

    return (
        <>
            <div className="container">
                <h2 className="register-header">Ponovo postavi šifru</h2>
                <form id="resetForm" onSubmit={handleSubmit} className="forget-form">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <label htmlFor="newPassword">Nova šifra:</label>
                    <input
                        type="password"
                        id="newPassword"
                        name="newPassword"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                    />

                    <label htmlFor="confirmPassword">Potvrdi novu šifru:</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />

                    <button type="submit">Ponovo postavi šifru</button>
                    <p id="message"
                       style={{color: message === 'Šifra je promijenjena uspješno!' ? 'green' : 'red'}}>{message}</p>
                </form>
            </div>
        </>
    );
}

export default ForgotPassword;
