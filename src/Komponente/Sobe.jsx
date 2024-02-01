import React from 'react';
import backgroundImage from './Images/pozadina.png';
import JednaSoba from './JednaSoba';
import '../App.css';

const sobeInfo = [
        {
          naziv: "Jednokrevetna Soba",
          opis: "Udobna soba za jednu osobu sa svim neophodnim sadržajima.",
          cena: "50€ - noć"
        },
        {
          naziv: "Dvokrevetna Soba",
          opis: "Prostrana soba sa dva udobna kreveta idealna za parove ili prijatelje.",
          cena: "80€ - noć"
        },
        {
          naziv: "Trokrevetna Soba",
          opis: "Savršen izbor za male grupe ili porodice, sa tri pojedinačna kreveta.",
          cena: "100€ - noć"
        },
        {
          naziv: "Četvorokrevetna Soba",
          opis: "Prostrana soba sa četiri kreveta, savršena za veće grupe ili porodice.",
          cena: "120€ - noć"
        },
        {
          naziv: "Petokrevetna Soba",
          opis: "Idealno za veće porodice ili grupe, sa pet pojedinačnih kreveta.",
          cena: "150€ - noć"
        },
        {
          naziv: "Šestokrevetna Soba",
          opis: "Naša najveća soba sa šest kreveta, savršena za velike grupe.",
          cena: "180€ - noć"
        },
        {
          naziv: "Apartman za Dve Osobe",
          opis: "Komforan apartman sa kuhinjom, za goste koji žele više prostora.",
          cena: "130€ - noć"
        },
        {
          naziv: "VIP Apartman",
          opis: "VIP apartman - izuzetno luksuzno iskustvo sa vrhunskim sadržajem.",
          cena: "250€ - noć"
        }
      ];
      

const Sobe = () => {
  return (

    <div className="contact-page-container" style={{ backgroundImage: `url(${backgroundImage})` }}>

    <div className="sobe-grid">
      {sobeInfo.map((soba, index) => (
        <JednaSoba
          key={index}
          slika={soba.slika}
          naziv={soba.naziv}
          opis={soba.opis}
          cena={soba.cena}
        />
      ))}
    </div>
    </div>

  );
};

export default Sobe;
