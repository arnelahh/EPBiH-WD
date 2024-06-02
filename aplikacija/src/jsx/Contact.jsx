import React from 'react';
import '../stilovi/Contact.css';

function Contact() {
    return (
        <div className="contact-container">
            <header className="contact-header">
                <h1>Kontakt</h1>
            </header>
            <main className="contact-main">
                <section className="contact-section">
                    <div className="contact-text">
                        <p>
                            Hvala što ste nas kontaktirali. Javite nam kako možemo pomoći za brz odgovor od našeg tima za korisničku podršku. Prosječno vrijeme odgovora je manje od jednog dana.
                        </p>
                        <p>
                            Ukoliko imate pitanja ili komentare, slobodno nas kontaktirajte putem e-maila ili telefona.
                        </p>
                        <br/>
                        <br/>
                        <p>
                            Hvala, Elektroprivreda BiH<br />
                            Vilsonovo šetalište br. 15,<br />
                            Sarajevo, Bosna i Hercegovina
                        </p>
                    </div>
                    <div className="contact-form">
                        <div className="contact-input">
                            <label htmlFor="name">Ime</label>
                            <input type="text" id="name" name="name" placeholder="Ime" />
                        </div>
                        <div className="contact-input">
                            <label htmlFor="email">E-mail</label>
                            <input type="email" id="email" name="email" placeholder="E-mail" />
                        </div>
                        <div className="contact-input">
                            <label htmlFor="message">Poruka</label>
                            <textarea id="message" name="message" placeholder="Poruka"></textarea>
                        </div>
                        <div className="contact-buttons">
                            <button type="submit" className="contact-button">Pošaljite poruku</button>
                        </div>
                    </div>
                </section>
                <section className="mapa">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184139.55896068658!2d18.08129879453125!3d43.8520851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4758c91701a5d073%3A0x9eaa23dad2d660d0!2sJP%20Elektroprivreda%20BiH!5e0!3m2!1sbs!2sba!4v1717175737744!5m2!1sbs!2sba" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </section>
            </main>
        </div>
    );
}

export default Contact;
