import React from "react";
import "../css/Resume.css";

const Resume = () => {
  return (
    <div className="resume-page">
      <h1 className="resume-title">My Resume</h1>

      <section className="resume-section">
        <h2>Skills</h2>
        <ul className="skills-list">
          <li className="project-card"><strong>Programming:</strong> Python, React.js, C, PHP, SQL</li>
          <li className="project-card"><strong>Web Development:</strong> HTML, CSS, ReactJS, NodeJS, Express, MongoDB</li>
          <li className="project-card"><strong>UI/UX Design:</strong> Figma, Adobe XD, Wireframing, Prototyping, Responsive Design</li>
          <li className="project-card"><strong>Cloud & DevOps:</strong> AWS, Azure, GitHub Actions</li>
        </ul>
      </section>

      <section className="resume-section">
  <h2>Projects</h2>
  <div className="projects-grid">

    <div className="project-card">
      <a href="https://alfaizerqt.netlify.app/" target="_blank" rel="noopener noreferrer">
        <h3>Portfolio Website</h3>
      </a>
      <p>A fully responsive React-based personal portfolio showcasing projects and experiences.</p>
    </div>

    <div className="project-card">
      <a href="https://wmsu.edu.ph/?tribe_events=wmsu-alumni-homecoming" target="_blank" rel="noopener noreferrer">
        <h3>SE Project: Alumni Office Information Management System</h3>
      </a>
      <p>
        Developed a web-based Alumni application for Western Mindanao State University to streamline alumni data
        management, improve record tracking, and support efficient communication and services. Built using PHP, MySQL, HTML,
        CSS, and JavaScript.
      </p>
    </div>

    <div className="project-card">
      <a href="https://github.com/NOKMY/To-Do-List" target="_blank" rel="noopener noreferrer">
        <h3>Web App: To Do List</h3>
      </a>
      <p>Built with pure React.js; includes CRUD operations and real-time updates.</p>
    </div>

    <div className="project-card">
      <a href="https://github.com/NOKMY/POKEMONofKiFai" target="_blank" rel="noopener noreferrer">
        <h3>Pokemon Web</h3>
      </a>
      <p>Created a Pokémon web app using its API.</p>
    </div>

  </div>
        <a
  href="/certificates/cv/cv_alfaizer.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="print-btn"
>
  View in Full Details
</a>

      </section>
    </div>
  );
};

export default Resume;
