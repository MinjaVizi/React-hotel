import React from 'react';
import logo from './Images/logo.png'; // Adjust the path as necessary

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2>Hotel Oblak</h2>
          <p>Vaše mesto daleko od buke i stresa <br></br>u netaknutim predelima Tare.</p>
        </div>
        <div className="footer-section">
          <img src={logo} alt="Hotel Oblak" />
        </div>
        <div className="footer-section">
          <h2>Raspored</h2>
          <p>Doručak: 07:30 - 10:00</p>
          <p>Ručak: 12:30 - 15:00</p>
          <p>Večera: 18:30 - 2:00</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
