import React from 'react';
import '../App.css'; 

const JednaSoba = ({ naziv, opis, cena }) => {
  return (
    <div className="soba-kartica">
      <div className="soba-detalji">
        <h3 className="soba-naziv">{naziv}</h3>
        <p className="soba-opis">{opis}</p>
        <p className="soba-cena">{cena}</p>
      </div>
    </div>
  );
};

export default JednaSoba;
