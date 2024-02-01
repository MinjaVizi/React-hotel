import React from 'react';
import backgroundImage from './Images/pozadina.png';
import image1 from './Images/ON1.png';
import image2 from './Images/ON2.png';
import image3 from './Images/ON3.png';
import image4 from './Images/ON4.png';
import '../App.css';

const ONama = () => {
  return (
    <div className="contact-page-container" style={{ backgroundImage: `url(${backgroundImage})` }}>

    <div className="onama-container">
      <div className="onama-item">
        <img src={image1} alt="O nama 1" className="onama-image" />
        <p className="onama-text"> Dobrodošli u Hotel Oblak, vašu idiličnu destinaciju za bežanje od
            gradske buke i stresa. Smešten u srcu netaknutih predela
            planine Zlatar, naš hotel vam pruža priliku da se prepustite
            apsolutnom miru i spokojstvu prirode.</p>
      </div>
      <div className="onama-item onama-reverse">
        <p className="onama-text">Naša jedinstvena lokacija omogućava vam da provedete odmor u
            okruženju prelepog planinskog pejzaža, daleko od gužve.
            Naša misija je da vam omogućimo iskustvo koje će vas obnoviti i
            osvežiti.</p>
        <img src={image2} alt="O nama 2" className="onama-image" />
      </div>
      <div className="onama-item">
        <img src={image3} alt="O nama 3" className="onama-image" />
        <p className="onama-text"> U Hotelu Oblak, sve je prilagođeno vašim potrebama i željama.
            Uživajte u luksuznim sobama sa pogledom na planinu, uživajte u
            brojnim aktivnostima u prirodi, ili se jednostavno opustite u našem
            spa centru. Naš ambijent i ljubazno osoblje stvaraju atmosferu koja
            će vam omogućiti potpun oporavak i relaksaciju.</p>
      </div>
      <div className="onama-item onama-reverse">
        <p className="onama-text">Zavucite se u našu oazu mira i prepustite se planini Zlatar.
            Hotel Oblak je više od običnog hotela; to je destinacija koja će vam
            omogućiti da ponovo pronađete unutrašnji mir i energiju, i da se
            vratite svakodnevnim izazovima sveži i odmorni.</p>
        <img src={image4} alt="O nama 4" className="onama-image" />
      </div>
    </div>
    </div>
  );
};

export default ONama;
