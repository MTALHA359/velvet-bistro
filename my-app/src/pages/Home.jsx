import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Velvet Bistro</h1>
          <p className="hero-subtitle">Indulge in a Culinary Masterpiece</p>
          <Link to="/reservations" className="hero-cta">Book Your Table</Link>
        </div>
      </section>

      {/* Featured Menu */}
      {/* <section className="section featured-menu">
        <div className="container">
          <h2 className="section-title">Featured Dishes</h2>
          <div className="menu-grid">
            {[
              { name: 'Truffle Risotto', img: 'https://images.pexels.com/photos/6216844/pexels-photo-6216844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', price: '$28' },
              { name: 'Grilled Salmon', img: 'https://via.placeholder.com/300x200?text=Salmon', price: '$32' },
              { name: 'Chocolate Soufflé', img: 'https://via.placeholder.com/300x200?text=Souffle', price: '$15' },
            ].map((item) => (
              <div key={item.name} className="menu-item">
                <img src={item.img} alt={item.name} className="menu-img" />
                <h3 className="menu-title">{item.name}</h3>
                <p className="menu-price">{item.price}</p>
                <Link to="/menu" className="menu-btn">View Menu</Link>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      {/* new <section></section> */}
<div className="featured-dishes">
  <div className="featured-title">FEATURED DISHES</div>
  <div className="dish-card">
    <img src="https://images.pexels.com/photos/6216844/pexels-photo-6216844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Truffle Risotto" />
    <div className="dish-name">Truffle Risotto</div>
  </div>
  <div className="dish-card">
    <img src="https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Grilled Salmon" />
    <div className="dish-name">Grilled Salmon</div>
  </div>
  <div className="dish-card">
    <img src="https://images.pexels.com/photos/32005960/pexels-photo-32005960/free-photo-of-delicious-chocolate-souffle-with-ice-cream-scoop.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Chocolate Soufflé" />
    <div className="dish-name">Chocolate Soufflé</div>
  </div>
</div>

      {/* About Section */}
      <section className="section about">
        <div className="container">
          <h2 className="section-title">Our Story</h2>
          <p className="about-text">
            At Velvet Bistro, we craft unforgettable dining experiences with the finest ingredients and unparalleled
            passion. Established in 2025, our mission is to elevate culinary arts to new heights.
          </p>
          <Link to="/about" className="about-btn">Learn More</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;