import React, { useEffect, useState } from 'react';
import '../stilovi/MyProfile.css';
import {Link} from "react-router-dom";

function MyProfile() {
    const [profileData, setProfileData] = useState({
        username: '',
        email: '',
        number: ''
    });

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('activeUser'));
        console.log(user);
        setProfileData(user);
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfileData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div className="profile-container">
            <header className="profile-header">
                <h1>Moj profil</h1>
            </header>
            <main className="profile-main">
                <section className="profile-info">
                    <div className="profile-picture">
                        <i className="fa fa-user-circle" aria-hidden="true"></i>
                    </div>
                    <div className="profile-details">
                        <div className="profile-row">
                            <label htmlFor="username">Ime i prezime</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                placeholder="Ime"
                                value={profileData.username}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="profile-row">
                            <label htmlFor="email">Email adresa</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email adresa"
                                value={profileData.email}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="profile-row">
                            <label htmlFor="phone">Broj telefona</label>
                            <input
                                type="text"
                                id="phone"
                                name="phone"
                                placeholder="Broj telefona"
                                value={profileData.number}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="profile-row">
                            <label htmlFor="report">Generiranje izvještaja</label>
                            <select id="report" name="report">
                                <option value="report1">Izvještaj no1</option>
                            </select>
                            <button type="button" className="generate-button">Generiraj</button>
                        </div>
                        <div className="profile-row">
                            <label>Računi</label>
                            <div className="radio-buttons">
                                <label>
                                    <input type="radio" name="payment-status" value="paid"/> Plaćeno
                                </label>
                                <label>
                                    <input type="radio" name="payment-status" value="unpaid"/> Neplaćeno
                                </label>
                            </div>
                        </div>
                        <div className="profile-row">
                            <div className="invoice">Račun 123</div>
                            <div className="invoice">Račun 124</div>
                        </div>
                    </div>
                </section>
                <Link to={'/kontakt'}>
                    <button type="button" className="report-issue-button">Prijavite kvar</button>
                </Link>
            </main>
        </div>
    );
}

export default MyProfile;
