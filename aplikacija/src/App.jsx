import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import './stilovi/App.css';
import Home from './jsx/Home.jsx';
import AboutCompany from './jsx/AboutCompany.jsx';
import Market from './jsx/Market.jsx';
import Login from './jsx/Login.jsx';
import Calculator from "./jsx/Calculator.jsx";
import Register from "./jsx/Register.jsx";
import Contact from "./jsx/Contact.jsx";
import MyProfile from "./jsx/MyProfile.jsx";
import ForgotPassword from "./jsx/ForgotPassword.jsx";

function AppContent() {
  const user = localStorage.getItem('userData');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('userData');
    navigate('/');
  };

  return (
      <div className="App">
        <header className="App-header">
          <Link to="/" className="logo-link">
            <section className="logo-name">
              <img src="/src/slike ep/logo.jpg" className="App-logo" alt="logo"/>
              <p>ELEKTROPRIVREDA BIH</p>
            </section>
          </Link>
          <nav className="App-nav">
            <div className="dugmad"><Link to="/">Početna</Link>
              <Link to="/about-company">O kompaniji</Link>
              <Link to="/market">O tržištu</Link>
              <Link to="/kontakt">Kontakt</Link></div>
            {!user && <Link to="/login" className="App-login">Prijavite se</Link>}
            {user && <button className="App-logout" onClick={handleLogout}>Odjavite se</button>}
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-company" element={<AboutCompany />} />
            <Route path="/market" element={<Market />} />
            <Route path="/login" element={<Login />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/register" element={<Register />} />
            <Route path="/kontakt" element={<Contact />} />
            <Route path="/my-profile" element={<MyProfile />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes>
        </main>
        <footer>
          <p>71000 Sarajevo, Vilsonovo šetalište br.15, Bosna i Hercegovina</p>
          <div className="social-icons">
            <a href="https://www.facebook.com/pages/Elektroprivreda/236354976492592?locale=hr_HR"><img
                src="/src/slike ep/fb.png" alt="Facebook"/></a>
            <a href="https://www.instagram.com/elektroprivreda.rs/"><img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/800px-Instagram_logo_2016.svg.png"
                alt="Instagram"/></a>
            <a href="https://www.linkedin.com/company/jp-elektroprivreda-bih-d-d-sarajevo/"><img
                src="/src/slike ep/ln.webp" alt="LinkedIn"/></a>
            <a href="https://www.youtube.com/@epbih"><img className="youtube-logo" src="/src/slike ep/youtube_logo.jpg" alt="Youtube"/></a>
            <a href="https://x.com/elektroprivreda"><img className="twittercic" src="/src/slike ep/xic.png"
                                                         alt="Twitter"/></a>

          </div>
        </footer>
      </div>
  );
}

function App() {
  return (
      <Router>
        <AppContent/>
      </Router>
  );
}

export default App;
