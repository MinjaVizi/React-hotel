import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Komponente/NavBar';
import Footer from './Komponente/Footer';
import Pocetna from './Komponente/Pocetna';
import Rezervacije from './Komponente/Rezervacije';
import Sobe from './Komponente/Sobe';
import ONama from './Komponente/ONama';
import Kontakt from './Komponente/Kontakt';
import backgroundImage from './Komponente/Images/pozadina.png';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes> 
          <Route exact path="/" element={<Pocetna />} />
          <Route path="/rezervacije" element={<Rezervacije />} />
          <Route path="/sobe" element={<Sobe />} />
          <Route path="/o-nama" element={<ONama />} />
          <Route path="/kontakt" element={<Kontakt />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
