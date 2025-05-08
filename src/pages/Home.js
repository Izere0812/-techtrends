import React from 'react';
import { Link } from 'react-router-dom';  // For navigation (if needed)
import '../assets/style.css';

const Home = () => {
  return (
    <div className="home-hero">
      <div className="home-hero-content">
        <h1>Welcome to TechTrends Ltd</h1>
        <p>Leading the way in innovative electronic gadgets</p>
        <div className="hero-buttons">
          <Link to="/about" className="btn-primary">Learn More</Link>
          <Link to="/contact" className="btn-secondary">Contact Us</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
