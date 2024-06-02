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
                            Hvala što ste nas kontaktirali. Javite nam kako možemo pomoći za brz odgovor od našeg tima
                            za korisničku podršku. Prosječno vrijeme odgovora je manje od jednog dana.
                        </p>
                        <p>
                            Ukoliko imate pitanja ili komentare, slobodno nas kontaktirajte putem e-maila ili telefona.
                        </p>
                        <br/>
                        <br/>
                        <br/>
                        <p>
                            Hvala, Elektroprivreda BiH<br/>
                            Vilsonovo šetalište br. 15,<br/>
                            Sarajevo, Bosna i Hercegovina
                        </p>
                    </div>
                    <div className="contact-form">
                        <div className="contact-input">
                            <label htmlFor="name">Ime</label>
                            <input type="text" id="name" name="name" placeholder="Ime"/>
                        </div>
                        <div className="contact-input">
                            <label htmlFor="email">E-mail</label>
                            <input type="email" id="email" name="email" placeholder="E-mail"/>
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
                <section className="contact-info">
                    <h2>Besplatni telefon</h2>
                    <address>
                        JP Elektroprivreda BiH d.d. Sarajevo
                    </address>
                    <table className="contact-table">
                        <thead>
                        <tr>
                            <th>Kanton</th>
                            <th>Besplatni brojevi</th>
                            <th>Informativni centri</th>
                            <th>Mail adrese</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Srednjobosanski</td>
                            <td>080 020 130</td>
                            <td>Tel: 033 702 962<br/>Fax: 030 511 636</td>
                            <td>info.edtr@epbih.ba</td>
                        </tr>
                        <tr>
                            <td>Bosansko-podrinjski</td>
                            <td>080 020 131</td>
                            <td>Tel: 033 702 960<br/>Fax: 038 241 828</td>
                            <td>info.edsa@epbih.ba</td>
                        </tr>
                        <tr>
                            <td>Zeničko-dobojski</td>
                            <td>080 020 132</td>
                            <td>Tel: 033 702 961<br/>Fax: 032 449 604</td>
                            <td>info.edze@epbih.ba</td>
                        </tr>
                        <tr>
                            <td>Sarajevski</td>
                            <td>080 020 133</td>
                            <td>Tel: 033 702 951<br/>Fax: 033 751 575</td>
                            <td>info.edsa@epbih.ba</td>
                        </tr>
                        <tr>
                            <td>Unsko-sanski</td>
                            <td>080 020 134</td>
                            <td>Tel: 033 702 964<br/>Fax: 037 229 335</td>
                            <td>info.edbi@epbih.ba</td>
                        </tr>
                        <tr>
                            <td>Tuzlanski</td>
                            <td>080 020 135</td>
                            <td>Tel: 033 702 963<br/>Fax: 035 304 353</td>
                            <td>info.edtz@epbih.ba</td>
                        </tr>
                        <tr>
                            <td>Hercegovačko-neretvanski</td>
                            <td>080 020 136</td>
                            <td>Tel: 033 702 970<br/>Fax: 036 502 112</td>
                            <td>info.edmo@epbih.ba</td>
                        </tr>
                        </tbody>
                    </table>
                </section>
                <section className="mapa">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184139.55896068658!2d18.08129879453125!3d43.8520851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4758c91701a5d073%3A0x9eaa23dad2d660d0!2sJP%20Elektroprivreda%20BiH!5e0!3m2!1sbs!2sba!4v1717175737744!5m2!1sbs!2sba"
                        width="600" height="450" allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </section>
            </main>
        </div>
    );
}

export default Contact;
