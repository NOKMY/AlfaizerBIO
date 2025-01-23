import React from 'react';
import './Hero.css'; 
import profileImage from '../assets/profile.jpg';

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        {}
        <div className="hero-text">
          <h1 className="hero-title">
            Hi! I Am <span className="highlighted-name">Al-faizer Cruza</span>.
          </h1>
          <p className="hero-subtitle">
            Confident, charming, and effortlessly good-looking, I'm the guy who turns heads wherever I go. A mix of handsome and cute, I bring style, personality, and a killer smile to the table.
          </p>
          <div className="hero-buttons">
          <a href="https://www.facebook.com/therealALFAIZER" target="_blank" rel="parent"> 
            <button className="hero-button primary">Facebook</button>
            </a>
            <a href="https://www.instagram.com/afzc_gram/" target="_blank" rel="parent"> 
            <button className="hero-button secondary">Instagram</button>
            </a>
        </div>
        </div>
        {}
        <div className="hero-illustration">
          <img
            src={profileImage}
            alt="Your Profile"
            className="illustration-image"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
