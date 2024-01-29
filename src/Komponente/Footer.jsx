import React from 'react';
import logo from './Images/logo.png'; // Adjust the path as necessary


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2>HOTEL OBLAK</h2>
          <p>Vaše mesto daleko od buke i stresa <br></br>u netaknutim predelima planine Zlatar.</p>
        </div>
        <div className="footer-section">
          <img src={logo} alt="Hotel Oblak" />
        </div>
        <div className="footer-section">
          <h3>Raspored čišćenja</h3>
          <p>Sobe 101-301: 12:30 - 14:00</p>
          <p>Sobe 301-501: 14:30 - 16:00</p>
          <p>Sobe 501-701: 16:30 - 18:00</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
