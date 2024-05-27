import React from 'react';
import '../stilovi/AboutCompany.css';

function AboutCompany() {
  return (
      <div className="about-company">
        <main>
          <section className="hero-section1">
            <img src="src/slike ep/zice2.jpg"
                 alt="Hero" className="hero-image1"/>
          </section>
          <section className="company-info">
            <div className="info-card">
              <img src="src/slike ep/info.jpeg" alt="Opće informacije"/>
              <div className="info-content">
                <h2>Opće informacije</h2>
                <p>Javno preduzeće Elektroprivreda Bosne i Hercegovine d.d. - Sarajevo je dioničko društvo u kome je ...</p>
                <button className="learn-more">Saznajte više</button>
              </div>
            </div>
            <div className="info-card">
              <img src="src/slike ep/resize.jpeg" alt="Organizacija kompanije"/>
              <div className="info-content">
                <h2>Organizacija kompanije</h2>
                <p>JP Elektroprivreda BiH d.d. - Sarajevo je javno preduzeće u skladu sa Zakonom o javnim preduzećima, a
                  ...</p>
                <button className="learn-more">Saznajte više</button>
              </div>
            </div>
            <div className="info-card">
              <img src="src/slike ep/propisi.jpg" alt="Propisi"/>
              <div className="info-content">
                <h2>Propisi</h2>
                <p>U ovom dijelu možete naći propise i zakone koji regulišu osnivanje, poslovanje, upravljanje...</p>
                <button className="learn-more">Saznajte više</button>
              </div>
            </div>
            <div className="info-card">
              <img src="src/slike ep/predvorje.jpg" alt="Koncern EPBiH"/>
              <div className="info-content">
                <h2>Koncern EPBiH</h2>
                <p>Koncern EPBiH, kao oblik povezivanja privrednih društava, uspostavljen je u novembru 2009. g...</p>
                <button className="learn-more">Saznajte više</button>
              </div>
            </div>
          </section>
        </main>
      </div>
  );
}

export default AboutCompany;
