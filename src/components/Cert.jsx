import React from "react";
import "../css/Cert.css";

const certificates = [
  { name: "Advanced Python", file: "Advanced Python_.pdf" },
  { name: "AI ML Projects", file: "AI ML Projects.pdf" },
  { name: "Azure 303 for Beginners", file: "Azure 303 for Beginners.pdf" },
  { name: "ChatGPT Advanced Course", file: "ChatGPT Advanced Course.pdf" },
  { name: "Fundamentals of Data Structures in C", file: "Fundamentals of Data Structures in C.pdf" },
  { name: "Generative AI for Beginners", file: "Generative AI for Beginners.pdf" },
  { name: "Generative AI The Evolution of Thoughtful Online Search", file: "Generative AI The Evolution of Thoughtful Online Search.pdf" },
  { name: "Getting Started with AWS", file: "Getting Started with AWS.pdf" },
  { name: "Getting Started with Full Stack Java Development", file: "Getting Started with Full Stack Java Development.pdf" },
  { name: "Getting started with NodeJS", file: "Getting started with NodeJS.pdf" },
  { name: "Introduction to Artificial Intelligence", file: "Introduction to Artificial Intelligence.pdf" },
  { name: "Introduction to Cloud Computing", file: "Introduction to Cloud Computing.pdf" },
  { name: "Introduction to Cloud Security", file: "Introduction to Cloud Security.pdf" },
  { name: "Introduction to Computer-Networking", file: "Introduction to Computer-Networking.pdf" },
  { name: "Introduction to Front End Development", file: "Introduction to Front End Development.pdf" },
  { name: "Introduction to HTML", file: "Introduction to HTML.pdf" },
  { name: "Introduction to Machine Learning with R", file: "Introduction to Machine Learning with R.pdf" },
  { name: "Introduction to PHP", file: "Introduction to PHP.pdf" },
  { name: "Introduction to SQL", file: "Introduction to SQL.pdf" },
  { name: "Introduction to the Fundamentals of Databases", file: "Introduction to the Fundamentals of Databases.pdf" },
  { name: "JavaScript for Beginners", file: "JavaScript for Beginners.pdf" },
  { name: "Project Management 101", file: "Project Management 101.pdf" },
  { name: "ReactJS for Beginners", file: "ReactJS for Beginners.pdf" },
  { name: "Salesforce Administrator & App Builder (Developer)", file: "Salesforce Administrator & App Builder (Developer).pdf" },
  { name: "Salesforce Certified Administrator", file: "Salesforce Certified Administrator.pdf" },
  { name: "Salesforce Certified Platform App Builder", file: "Salesforce Certified Platform App Builder.pdf" },
  { name: "Streamlining Your Work with Microsoft Copilot", file: "Streamlining Your Work with Microsoft Copilot.pdf" },
  { name: "What Is Generative AI", file: "What Is Generative AI.pdf" },
];

const Cert = () => {
  return (
    <div className="cert-page">
      <h1 className="cert-title">My Certificates</h1>

      <div className="cert-grid">
        {certificates.map((cert, index) => {
          const baseName = cert.file.replace(".pdf", "").replace(/[^\w\s]/gi, "").replace(/\s+/g, "_");
          const imgPath = `/certificates/thumbnails/${baseName}.jpg`;
          const pdfPath = `/certificates/${cert.file}`;

          return (
            <a
              key={index}
              className="cert-card"
              href={pdfPath}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={imgPath} alt={cert.name} className="cert-thumb" />
              <div className="cert-name">{cert.name}</div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Cert;
