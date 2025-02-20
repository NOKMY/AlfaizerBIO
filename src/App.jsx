import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import AboutMe from "./pages/AboutMe";
import Resume from "./pages/Resume";
import Links from "./pages/Links";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/links" element={<Links />} />
      </Routes>
    </Router>
  );
}

export default App;