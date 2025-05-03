import { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Alfaizer's Portfolio</Link>
      </div>

      <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <Link to="/" onClick={toggleMenu}>Home</Link>
        <Link to="/about-me" onClick={toggleMenu}>About Me</Link>
        <Link to="/cert" onClick={toggleMenu}>Certificates</Link>
        <Link to="/tour" onClick={toggleMenu}>Tour Blog</Link>
        <Link to="/contact" onClick={toggleMenu}>Contact</Link>
      </div>

      <button className="menu-button" onClick={toggleMenu}>
        {isMenuOpen ? 'Close' : 'Menu'}
      </button>
    </nav>
  );
}

export default Navbar;
