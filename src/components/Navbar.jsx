
import { useState, useEffect } from 'react';
import '../styles/Navbar.css'
import resumePDF from '../assets/AyeshaShaw-FSD.pdf';


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="/" className="logo">
          <span className="logo-text">Portfolio</span>
        </a>

        <div className={`menu-button ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <div className="menu-button-bar"></div>
          <div className="menu-button-bar"></div>
          <div className="menu-button-bar"></div>
        </div>

        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li className="nav-item">
              <button onClick={() => scrollToSection('about')}>About</button>
            </li>
            <li className="nav-item">
              <button onClick={() => scrollToSection('skills')}>Skills</button>
            </li>
            <li className="nav-item">
              <button onClick={() => scrollToSection('projects')}>Projects</button>
            </li>
            <li className="nav-item">
              <button onClick={() => scrollToSection('contact')}>Contact</button>
            </li>
            <li className="nav-item resume-button">
              <a href={resumePDF} download="AyeshaShaw-FSD.pdf" target="_blank" rel="noopener noreferrer" className="button">
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </div>

    </header>
  );
};

export default Navbar;
