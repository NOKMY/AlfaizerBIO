import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/AboutMe.css";

function AboutMe() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <section id="introduction" className="hero-section">
        <div className="hero-container"><br></br>
          <br></br><div className="hero-text text-center"><br></br>
            <br></br><h1 className="highlighted-name">About Me</h1>
            <p className="description">
              I'm Al-faizer Cruza, a full-stack developer with a deep love for solving complex problems and turning ideas into functioning systems. My strongest areas lie in backend programming, with proficiency in Python, JavaScript, Node.js, and SQL. However, I never shy away from front-end challenges — constantly improving my skills in React, HTML/CSS, and UI/UX tools like Figma and Adobe XD.

              <br /><br />
              While my foundation is built on clean, functional, and scalable code, I also strive to enhance user experience with every project I build. I believe that great software doesn't just work well — it feels right. My goal is to merge logic with aesthetics to build tools that are as useful as they are intuitive.

              <br /><br />
              Whether I'm working on a student management system, designing a responsive portfolio site, or building a chatbot using OpenAI's API, I treat every challenge as an opportunity to learn and grow. My resume reflects not just a list of technologies, but a journey of determination, humility, and continuous self-development.

              <br /><br />
              To put it simply: I don’t chase greatness; greatness follows me.
            </p>

            <div>
            <Link to="/resume" className="print-btn" style={{ marginRight: '10px' }}>
              Project and Experience
            </Link>
            <a
              href="/certificates/cv/cv_alfaizer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="print-btn"
            >
              View Resume
            </a>
          </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutMe;
