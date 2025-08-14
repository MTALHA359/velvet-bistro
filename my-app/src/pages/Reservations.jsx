import './Reservations.css';
import { useState } from 'react';

function Reservations() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Reservation submitted!');
    console.log(formData);
  };

  return (
    <div className="reservation-container">
      <h1 className="reservation-title">Book a Table</h1>
      <form className="reservation-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email Address" onChange={handleChange} required />
        <input type="date" name="date" onChange={handleChange} required />
        <input type="time" name="time" onChange={handleChange} required />
        <input type="number" name="guests" placeholder="Number of Guests" onChange={handleChange} required />
        <button type="submit">Reserve Now</button>
      </form>
    </div>
  );
}

export default Reservations;
