import React from 'react';
import './App.css';
import Navbar from './Komponente/NavBar';
import Footer from './Komponente/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />

      {/* Use the Footer component */}
      <Footer />
    </div>
  );
}

export default App;
