import React from "react";
import { useNavigate } from "react-router-dom";
import "../stilovi/Contact.css";

function Contact() {

    const handleAlert=()=>{
        alert("Poruka je poslana!");
    }

    return(
        <>
            <div className="contact-container">
                <header className="contact-header">
                    <h1>Kontakt</h1>
                </header>
                <main className="contact-main">
                    <section className="contact-section">
                        <div className="contact-form">
                            <div className="contact-icon">
                                <i className="fa fa-user-circle" aria-hidden="true"></i>
                            </div>
                            <form autoComplete="off">
                                <div className="contact-input">
                                    <label htmlFor="name">Ime</label>
                                    <input type="text" id="name" name="name" required autoComplete="new-name" />
                                </div>
                                <div className="contact-input">
                                    <label htmlFor="email">E-mail</label>
                                    <input type="email" id="email" name="email" required autoComplete="new-email" />
                                </div>
                                <div className="contact-input">
                                    <label htmlFor="message">Poruka</label>
                                    <textarea id="message" name="message" required autoComplete="new-message" />
                                </div>
                                <div className="contact-buttons">
                                    <button type="submit" className="contact-button" onClick={handleAlert}>Pošaljite poruku</button>
                                </div>
                            </form>
                        </div>
                    </section>
                    <section className="mapa">

                    </section>
                </main>
            </div>
        </>
    )
}

export default Contact;