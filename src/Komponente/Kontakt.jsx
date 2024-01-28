import React, { useState } from 'react';
import backgroundImage from './Images/pozadina.png';
import '../App.css';

const Kontakt = () => {
  const [formData, setFormData] = useState({
    ime: '',
    prezime: '',
    email: '',
    brojGostiju: '',
    poruka: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      ime: '',
      prezime: '',
      email: '',
      brojGostiju: '',
      poruka: '',
    });
  };

  return (
    <div className="contact-page-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="contact-page-content">
        <div className="contact-info">
          <h1>HOTEL OBLAK</h1>
          <p>Hotel Oblak, 49250 Zlatar</p>
          <p>00-24</p>
          <p>PONEDELJAK - NEDELJA</p>
          <a href="mailto:info@carobnibreg.rs">info@hotelOblak.com</a>
          <p>+381 60 123 456</p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Imate pitanja? Pišite nam</h2>
          <input type="text" name="ime" value={formData.ime} onChange={handleChange} placeholder="Ime" />
          <input type="text" name="prezime" value={formData.prezime} onChange={handleChange} placeholder="Prezime" />
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
          <input type="number" name="brojGostiju" value={formData.brojGostiju} onChange={handleChange} placeholder="Broj gostiju" />
          <textarea name="poruka" value={formData.poruka} onChange={handleChange} placeholder="Poruka"></textarea>
          <button type="submit">POŠALJI</button>
        </form>
      </div>
    </div>
  );
};

export default Kontakt;
