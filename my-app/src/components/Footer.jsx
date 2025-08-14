import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Velvet Bistro</h3>
            <p>Elevating dining to an art form.</p>
          </div>
          <div className="footer-section">
            <h3 className="footer-title">Links</h3>
            <ul className="footer-links">
              <li><Link to="/menu">Menu</Link></li>
              <li><Link to="/reservations">Reservations</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3 className="footer-title">Contact</h3>
            <p>Email: info@velvetbistro.com</p>
            <p>Phone: (123) 456-7890</p>
            <p>Address: 123 Gourmet Lane, Food City</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Velvet Bistro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;