import React from 'react';
import fb from './Images/fb.png';
import tw from './Images/tw.png';
import ig from './Images/ig.png';
import em from './Images/em.png'; 
import ph from './Images/ph.png';
import logo from './Images/logo.png';


import '../App.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="top-bar">
                <div className="contact-icons">
                    <div className="phone-icon">
                        <img className="icon" src={ph} alt="Phone" />
                        <span>060123456</span>
                    </div>
                    <div className="email-icon">
                        <img className="icon" src={em} alt="Email" />
                        <span>info@hotelOblak.com</span>
                    </div>
                </div>
                <div className="social-media-icons">
                    <a href="https://www.facebook.com"><img className="icon" src={fb} alt="Facebook" /></a>
                    <a href="https://www.twitter.com"><img className="icon" src={tw} alt="Twitter" /></a>
                    <a href="https://www.instagram.com"><img className="icon" src={ig} alt="Instagram" /></a>
                </div>
            </div>
            <div className="bottom-bar">
                <ul className="nav-links">
                    <li><a href="/">Pocetna</a></li>
                    <li><a href="/Rezervacija">Rezervacije</a></li>
                    <li className="nav-logo">
                        <a href="/"><img src={logo} alt="Hotel Logo" /></a>
                    </li>
                    <li><a href="/Restoran">Restoran</a></li>
                    <li><a href="/O-nama">O nama</a></li>
                    <li><a href="/Kontakt">Kontakt</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
