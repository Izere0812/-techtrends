import React, { useState, useEffect } from 'react';
import '../assets/style.css';

import slide1 from '../assets/images/slide1.jpg';
import slide2 from '../assets/images/slide2.jpg';
import slide3 from '../assets/images/slide3.jpg';

const images = [
  {
    src: slide1,
    text: 'Revolutionizing the future of tech',
  },
  {
    src: slide2,
    text: 'Smart, Sleek, and Reliable Gadgets',
  },
  {
    src: slide3,
    text: 'Experience Innovation with TechTrends',
  },
];

const Home = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      {images.map((item, index) => (
        <div
          key={index}
          className={`slide ${index === current ? 'active' : ''}`}
          style={{ backgroundImage: `url(${item.src})` }}
        >
          <div className="slide-text">
            <h1>{item.text}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
