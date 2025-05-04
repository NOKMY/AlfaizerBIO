import React from "react";
import "../css/Resume.css";

const Resume = () => {
  return (
    <div className="resume-page">
      <h1 className="resume-title">Some Info</h1>

      <section className="resume-section">
        <h2>Skills</h2>
        <ul className="skills-list">
          <li className="project-card"><strong>Programming:</strong> Python, React.js, Django, C, PHP, SQL</li>
          <li className="project-card"><strong>Web Development:</strong> HTML, CSS, ReactJS, NodeJS, Express, MongoDB</li>
          <li className="project-card"><strong>UI/UX Design:</strong> Figma, Adobe XD, Wireframing, Prototyping, Responsive Design</li>
          <li className="project-card"><strong>Cloud & DevOps:</strong> AWS, Azure, GitHub Actions</li>
        </ul>
      </section>

      <section className="resume-section">
        <h2>Experiences</h2>
        <ul className="skills-list">
          <li className="project-card"><strong>SE Project: Alumni System<br></br></strong> Role: UI/UX Design<br></br>Duration: 6 Months </li>
          <li className="project-card"><strong>Web App: Salon System<br></br></strong> Role: UI/UX Design<br></br>Duration: 15 Days </li>
          <li className="project-card"><strong>Multimedia Project: Crimson Cypher<br></br></strong> Role: Mockup Editor<br></br>Duration: 7 Days </li>
          <li className="project-card"><strong>Ecommerce Project: Teasia Milktea<br></br></strong> Role: Programmer<br></br>Duration: 5 Months </li>
        </ul>
      </section>

      <section className="resume-section">
  <h2>Projects</h2>
  <div className="projects-grid">

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
      <a href="https://drive.google.com/drive/folders/1Q5RSJULXCC6VGFW-ojEjcF5uHuYFp2xV?usp=sharing" target="_blank" rel="noopener noreferrer">
        <h3>Multimedia Project: Crimson Cypher</h3>
      </a>
      <p>This conceptual esports organization is centered on enhancing its operational and visual identity. Efforts include the redesign of office environments, strategic branding development, merchandise creation, logo refinement, and facility improvement—all showcased through professional mockups. </p>
    </div>
   
    <div className="project-card">
      <a href="https://drive.google.com/drive/folders/1pMt_0VTsqadK4GIcYLp2Ops0w-GpoH1o?usp=sharing" target="_blank" rel="noopener noreferrer">
        <h3>E-commerce: Teasia Milktea</h3>
      </a>
      <p>An e-commerce platform that lets customers easily order customizable milk tea online. With a smooth checkout process, secure payments, and mobile optimization, it offers a convenient and seamless experience. The backend manages inventory and sales for efficient operations.</p>
    </div>

    <div className="project-card">
      <a href="https://github.com/NOKMY/POKEMONofKiFai" target="_blank" rel="noopener noreferrer">
        <h3>Pokemon Web</h3>
      </a>
      <p>Created a Pokémon web app using its API.</p>
    </div>

    <div className="project-card">
      <a href="https://github.com/NOKMY/To-Do-List" target="_blank" rel="noopener noreferrer">
        <h3>Web App: To Do List</h3>
      </a>
      <p>Built with pure React.js; includes CRUD operations and real-time updates.</p>
    </div>
    
    <div className="project-card">
      <a href="https://alfaizerqt.netlify.app/" target="_blank" rel="noopener noreferrer">
        <h3>Portfolio Website</h3>
      </a>
      <p>A fully responsive React-based personal portfolio showcasing projects and experiences.</p>
    </div>

    
    
    

  </div>
      
      </section>
    </div>
  );
};

export default Resume;
