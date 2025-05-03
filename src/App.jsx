import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from './components/Hero';  
import AboutMe from './components/AboutMe'; 
import Resume from './components/Resume'; 
import Cert from './components/Cert'; 
import Tour from './components/Tour'; 
import BlogPost from './components/BlogPost'; 
import Contact from './components/Contact'; 
import Navbar from './Navbar'; 
import './App.css';

function App() {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about-me/*" element={<AboutMe />} />
        <Route path="/resume/*" element={<Resume />} />
        <Route path="/cert/*" element={<Cert />} />
        <Route path="/tour" element={<Tour />} />
        <Route path="/tour/:id" element={<BlogPost />} /> 
        <Route path="/contact/*" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
