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
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2877.180423528077!2d18.38359447571054!3d43.852088939545176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4758c91701a5d073%3A0x9eaa23dad2d660d0!2sJP%20Elektroprivreda%20BiH!5e0!3m2!1sbs!2sba!4v1717179284554!5m2!1sbs!2sba"
                                width="600"
                                height="450"
                                style={{border:0}}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                    </section>
                </main>
            </div>
        </>
    )
}

export default Contact;