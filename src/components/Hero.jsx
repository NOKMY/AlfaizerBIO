import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Typed from "typed.js";
import profileImage from "../assets/profile.jpg";
import "../css/Hero.css";

function Hero() {
  useEffect(() => {
    const typed = new Typed(".typing", {
      strings: ["", "FullStack Developer,", "Frontend Developer,", "Backend Developer,", "Software Engineer."],
      typeSpeed: 50,
      backSpeed: 20,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <>

      <section id="introduction" className="hero-section">
        <div className="hero-text text-center">
          <div className="hero-container">
          <div className="">
          <img src={profileImage} alt="Al-faizer Cruza" className="illustration-image" />
          </div>
          
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
