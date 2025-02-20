import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Typed from "typed.js";
import profileImage from "../assets/profile.jpg";
import "./Hero.css";

function Hero() {
  useEffect(() => {
    const typed = new Typed(".typing", {
      strings: ["", "FullStack Developer,", "Frontend Developer,", "Backend Developer,", "Mobile Apps Developer."],
      typeSpeed: 50,
      backSpeed: 20,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <>
    
    <header className="header">
  <nav className="navbar">
    <ul className="navbar-list">
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
          <div className="">
          <img src={profileImage} alt="Al-faizer Cruza" className="illustration-image" />
          </div>
          <div className="hero-text text-center">
            <h1 className="hero-title">
              Greetings! I go by the name <span className="highlighted-name">Al-faizer Cruza</span>.
            </h1>
            <h3 className="typing text-green-500 dark:text-green-700"></h3>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
