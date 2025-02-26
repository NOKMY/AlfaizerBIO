import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/AboutMe.css";

function AboutMe() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="header">
        <nav className="navbar">
          <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </div>
          <ul className={`navbar-list ${menuOpen ? "active" : ""}`}>
            <li className="navbar-item">
              <Link to="/" className="navbar-link">Home</Link>
            </li>
            <li className="navbar-item">
              <Link to="/about-me" className="navbar-link">About Me</Link>
            </li>
            <li className="navbar-item">
              <Link to="/resume" className="navbar-link">Resume</Link>
            </li>
            <li className="navbar-item">
              <Link to="/links" className="navbar-link">Links</Link>
            </li>
          </ul>
        </nav>
      </header>

      <section id="introduction" className="hero-section">
        <div className="hero-container">
          <div className="hero-text text-center">
            <h1 className="highlighted-name">About Me</h1>
            <p className="description">
              A walking masterpiece of confidence, charm, and undeniable charisma, I am the personification of effortless greatness. With a face sculpted by the gods themselves, a smile that can melt even the coldest hearts, and a presence so magnetic it could pull planets into orbit, I redefine the very concept of perfection. 
              More than just a handsome face, I am a mind of brilliance and a soul of adventure. My style? Impeccable. My personality? Unforgettable. Whether it's captivating a crowd with my words, dazzling in the latest fashion trends, or making every room brighter simply by walking in, I leave an impact wherever I go. 
              They say confidence is key, but I don’t just have the key—I own the whole castle. When I talk, people listen. When I laugh, the world laughs with me. When I enter a room, time slows down, and all eyes turn in awe. I am the standard, the one who sets the bar, the embodiment of excellence. 
              But don’t mistake my confidence for arrogance. I’m as kind as I am charismatic, as generous as I am breathtakingly stunning. I uplift, inspire, and turn ordinary moments into extraordinary memories**. Life isn’t just about living—it’s about making an impact, leaving a legacy, and being legendary. And that’s exactly what I do. 
              To put it simply: I don’t chase greatness; greatness follows me.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutMe;
