import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../stilovi/Home.css';

function Home() {
    const navigate = useNavigate();
    const user = localStorage.getItem('userData');

    const handleEracunClick = () => {
        if (user) {
            navigate('/my-profile');
        } else {
            navigate('/login');
        }
    };

    const customRenderArrowPrev = (onClickHandler, hasPrev, label) =>
        hasPrev && (
            <button type="button" onClick={onClickHandler} title={label} className="custom-prev-arrow">
                &#10094;
            </button>
        );

    const customRenderArrowNext = (onClickHandler, hasNext, label) =>
        hasNext && (
            <button type="button" onClick={onClickHandler} title={label} className="custom-next-arrow">
                &#10095;
            </button>
        );

    return (
        <>
            <section className="hero-section">
                <img src="https://img.freepik.com/free-photo/aerial-view-business-data-analysis-graph_53876-146152.jpg"
                     alt="Hero" className="hero-image"/>
            </section>
            <section className="features">
                <div className="feature-item" onClick={handleEracunClick}>E-račun</div>
                <div className="feature-item">Plaćanje računa</div>
                <div className="feature-item">Status zahtjeva</div>
                <Link to="/calculator" className="no-text-decoration">
                    <div className="feature-item">Online kalkulator</div>
                </Link>
                <div className="feature-item">SMS stanje računa</div>
            </section>
            <section className="services">
                <div className="service-item">
                    <img src="src/slike ep/brojilo.jpg" alt="Očitanje brojila"/>
                    <p>Očitanje brojila</p>
                </div>
                <div className="service-item">
                    <img src="src/slike ep/racun.jpeg" alt="Pregled potrošnje"/>
                    <p>Pregled potrošnje</p>
                </div>
                <div className="service-item">
                    <img src="src/slike ep/upiti.png" alt="Upiti i reklamacije"/>
                    <p>Upiti i reklamacije</p>
                </div>
            </section>
            <section className="video-slider">
                <Carousel
                    showThumbs={false}
                    showStatus={false}
                    infiniteLoop={true}
                    useKeyboardArrows={true}
                    autoPlay={true}
                    stopOnHover={true}
                    swipeable={true}
                    emulateTouch={true}
                    dynamicHeight={true}
                    renderArrowPrev={customRenderArrowPrev}
                    renderArrowNext={customRenderArrowNext}
                >
                    <div className="video">
                        <iframe width="560" height="315"
                                src="https://www.youtube.com/embed/arXq6iJNTKc?si=Wl-WhfKiArGVQ4sa"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                    <div className="video">
                        <iframe width="560" height="315"
                                src="https://www.youtube.com/embed/7HhaZ4JL6GE?si=B6EVaU_G-mTJ2uP5"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                    <div className="video">
                        <iframe width="560" height="315"
                                src="https://www.youtube.com/embed/Rv0RbaLC4Jk?si=elXCGmGHYUX-tyh8"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                    <div className="video">
                        <iframe width="560" height="315"
                                src="https://www.youtube.com/embed/RVU9k8GUPtc?si=DjrUDzIRkBKPLUWO"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                </Carousel>
            </section>
        </>
    );
}

export default Home;
