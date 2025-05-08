// src/pages/About.jsx
import React from 'react';
import '../assets/style.css';

const About = () => {
  return (
    <div className="about-container">
      <h2>About TechTrends Ltd</h2>
      <p>
        TechTrends Ltd is a leading provider of innovative electronic gadgets, headquartered in Kigali City.
        Our mission is to revolutionize everyday life through smart, accessible technology.
      </p>

      <div className="map-container">
        <iframe
          title="TechTrends Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15954.387882040585!2d30.0618858!3d-1.9440721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca6df8f967871%3A0x6fa372ae30fc8dcf!2sKigali!5e0!3m2!1sen!2srw!4v1651421263654!5m2!1sen!2srw"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default About;
