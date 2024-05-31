import React from 'react';
import { Link } from 'react-router-dom';
import '../stilovi/Home.css';

function Home() {
    return (
        <>
            <section className="hero-section">
                <img src="https://img.freepik.com/free-photo/aerial-view-business-data-analysis-graph_53876-146152.jpg" alt="Hero" className="hero-image" />
            </section>
            <section className="features">
                <Link to="/my-profile" className="no-text-decoration"><div className="feature-item">E-račun</div></Link>
                <Link to="/register" className="no-text-decoration"><div className="feature-item">Registracija</div></Link>
                <div className="feature-item">Status zahtjeva</div>
                <Link to="/calculator" className="no-text-decoration">
                    <div className="feature-item">Online kalkulator</div>
                </Link>
                <div className="feature-item">SMS stanje računa</div>
            </section>
            <section className="services">
                <div className="service-item">
                    <img src="src/slike ep/brojilo.jpg" alt="Očitanje brojila" />
                    <p>Očitanje brojila</p>
                </div>
                <div className="service-item">
                    <img src="src/slike ep/racun.jpeg" alt="Pregled potrošnje" />
                    <p>Pregled potrošnje</p>
                </div>
                <div className="service-item">
                    <img src="src/slike ep/upiti.png" alt="Upiti i reklamacije" />
                    <p>Upiti i reklamacije</p>
                </div>
            </section>
        </>
    );
}

export default Home;
