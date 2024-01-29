import React, { useState } from 'react';
import backgroundImage from './Images/pozadina.png';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Rezervacije = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [adults, setAdults] = useState('');
  const [children, setChildren] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Uspešno rezervisano!');
  };

  return (
    <div className="contact-page-container" style={{ backgroundImage: `url(${backgroundImage})` }}>

    <div className="reservation-form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="arrival-date">Dolazak</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            className="form-control"
            id="arrival-date"
          />
        </div>
        <div className="form-group">
          <label htmlFor="departure-date">Odlazak</label>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            className="form-control"
            id="departure-date"
          />
        </div>
        <div className="form-group">
          <label htmlFor="adults">Odrasli *</label>
          <input
            type="number"
            className="form-control"
            id="adults"
            required
            value={adults}
            onChange={(e) => setAdults(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="children">Deca</label>
          <input
            type="number"
            className="form-control"
            id="children"
            value={children}
            onChange={(e) => setChildren(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Vaše ime *</label>
          <input
            type="text"
            className="form-control"
            id="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            className="form-control"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Pošalji</button>
      </form>
    </div>
    </div>

  );
};

export default Rezervacije;
