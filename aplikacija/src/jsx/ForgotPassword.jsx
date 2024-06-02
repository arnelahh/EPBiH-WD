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

                <form id="resetForm" onSubmit={handleSubmit} className="forget-form">
                    <h2 className="register-header">Ponovo postavi šifru</h2>
                    <label className="labelforgot" htmlFor="email">Email:</label>
                    <input className="forgetpass"
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <label className="labelforgot" htmlFor="newPassword">Nova šifra:</label>
                    <input className="forgetpass"
                        type="password"
                        id="newPassword"
                        name="newPassword"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                    />

                    <label className="labelforgot" htmlFor="confirmPassword">Potvrdi novu šifru:</label>
                    <input className="forgetpass"
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />

                    <button className="forget-button" type="submit">Ponovo postavi šifru</button>
                    <p id="message"
                       style={{color: message === 'Šifra je promijenjena uspješno!' ? 'green' : 'red'}}>{message}</p>
                </form>
            </div>
        </>
    );
}

export default ForgotPassword;
