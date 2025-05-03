import React from "react";
import "../css/Cert.css";

const PrintCert = () => {
  const certificates = [
    { name: "Advanced Python", url: "/certificates/Advanced Python_.pdf" },
    { name: "AI ML Projects", url: "/certificates/AI ML Projects.pdf" },
    { name: "Azure 303 for Beginners", url: "/certificates/Azure 303 for Beginners.pdf" },
    { name: "ChatGPT Advanced Course", url: "/certificates/ChatGPT Advanced Course.pdf" },
    { name: "Fundamentals of Data Structures in C", url: "/certificates/Fundamentals of Data Structures in C.pdf" },
    { name: "Generative AI for Beginners", url: "/certificates/Generative AI for Beginners.pdf" },
    { name: "Generative AI The Evolution of Thoughtful Online Search", url: "/certificates/Generative AI The Evolution of Thoughtful Online Search.pdf" },
    { name: "Getting Started with AWS", url: "/certificates/Getting Started with AWS.pdf" },
    { name: "Getting Started with Full Stack Java Development", url: "/certificates/Getting Started with Full Stack Java Development.pdf" },
    { name: "Getting started with NodeJS", url: "/certificates/Getting started with NodeJS.pdf" },
    { name: "Introduction to Artificial Intelligence", url: "/certificates/Introduction to Artificial Intelligence.pdf" },
    { name: "Introduction to Cloud Computing", url: "/certificates/Introduction to Cloud Computing.pdf" },
    { name: "Introduction to Cloud Security", url: "/certificates/Introduction to Cloud Security.pdf" },
    { name: "Introduction to Computer-Networking", url: "/certificates/Introduction to Computer-Networking.pdf" },
    { name: "Introduction to Front End Development", url: "/certificates/Introduction to Front End Development.pdf" },
    { name: "Introduction to HTML", url: "/certificates/Introduction to HTML.pdf" },
    { name: "Introduction to Machine Learning with R", url: "/certificates/Introduction to Machine Learning with R.pdf" },
    { name: "Introduction to PHP", url: "/certificates/Introduction to PHP.pdf" },
    { name: "Introduction to SQL", url: "/certificates/Introduction to SQL.pdf" },
    { name: "Introduction to the Fundamentals of Databases", url: "/certificates/Introduction to the Fundamentals of Databases.pdf" },
    { name: "JavaScript for Beginners", url: "/certificates/JavaScript for Beginners.pdf" },
    { name: "Project Management 101", url: "/certificates/Project Management 101.pdf" },
    { name: "ReactJS for Beginners", url: "/certificates/ReactJS for Beginners.pdf" },
    { name: "Salesforce Administrator & App Builder (Developer)", url: "/certificates/Salesforce Administrator & App Builder (Developer).pdf" },
    { name: "Salesforce Certified Administrator", url: "/certificates/Salesforce Certified Administrator.pdf" },
    { name: "Salesforce Certified Platform App Builder", url: "/certificates/Salesforce Certified Platform App Builder.pdf" },
    { name: "Streamlining Your Work with Microsoft Copilot", url: "/certificates/Streamlining Your Work with Microsoft Copilot.pdf" },
    { name: "What Is Generative AI", url: "/certificates/What Is Generative AI.pdf" },

  ];

  return (
    <div className="cert-page">
      <h1 className="cert-title">Printable Certificates</h1>
      <ul className="pdf-list">
        {certificates.map((cert, index) => (
          <li key={index}>
            <a href={cert.url} target="_blank" rel="noopener noreferrer">
              {cert.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PrintCert;
