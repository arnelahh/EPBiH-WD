import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './stilovi/App.css';
import Home from './jsx/Home.jsx';
import AboutCompany from './jsx/AboutCompany.jsx';
import Market from './jsx/Market.jsx';
import Login from './jsx/Login.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src="path-to-your-logo.png" className="App-logo" alt="logo" />
          <nav className="App-nav">
            <Link to="/about-company">O kompaniji</Link>
            <Link to="/market">O tržištu</Link>
            <Link to="/login" className="App-login">Prijavite se</Link>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-company" element={<AboutCompany />} />
            <Route path="/market" element={<Market />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <footer>
          <p>71000 Sarajevo, Vilsonovo šetalište br.15, Bosna i Hercegovina</p>
          <div className="social-icons">
            <a href="facebook-link"><img src="facebook-icon.png" alt="Facebook" /></a>
            <a href="instagram-link"><img src="instagram-icon.png" alt="Instagram" /></a>
            <a href="linkedin-link"><img src="linkedin-icon.png" alt="LinkedIn" /></a>
            <a href="twitter-link"><img src="twitter-icon.png" alt="Twitter" /></a>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
