import React from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from './Images/pozadina.png';
import mainImage from './Images/pocetna.png';
import '../App.css';

const Pocetna = () => {
  let navigate = useNavigate();

  return (
<div className="contact-page-container" style={{ backgroundImage: `url(${backgroundImage})` }}>

    <div className="homepage-container">
      <div className="homepage-main-content">
        <img src={mainImage} alt="Hotel Oblak" className="homepage-image" />
        <div className="homepage-text-buttons">
          <h1 className="homepage-welcome-text">Dobrodošli u <br></br>HOTEL OBLAK</h1>
          <div className="homepage-buttons-container">
            <button onClick={() => navigate('/rezervacije')}>Rezervacije</button>
            <button onClick={() => navigate('/kontakt')}>Kontakt</button>
            <button onClick={() => navigate('/sobe')}>Sobe</button>
            <button onClick={() => navigate('/o-nama')}>O Nama</button>
          </div>
        </div>
      </div>
    </div>
</div>

  );
};

export default Pocetna;
