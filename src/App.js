import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Komponente/NavBar';
import Footer from './Komponente/Footer';
import Pocetna from './Komponente/Pocetna';
import Rezervacije from './Komponente/Rezervacije';
import Restoran from './Komponente/Restoran';
import ONama from './Komponente/ONama';
import Kontakt from './Komponente/Kontakt';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes> {/* Use Routes for routing */}
          <Route exact path="/" element={<Pocetna />} />
          <Route path="/rezervacije" element={<Rezervacije />} />
          <Route path="/restoran" element={<Restoran />} />
          <Route path="/o-nama" element={<ONama />} />
          <Route path="/kontakt" element={<Kontakt />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
