
import { useState, useEffect } from 'react';
import Hero from '../components/Hero.jsx';
import About from '../components/About.jsx';
import Contact from '../components/Contact.jsx';
import Footer from '../components/Footer.jsx';
import Projects from '../components/Projects.jsx';
import '../styles/Index.css'

const Index = () => {
  const [visibleSections, setVisibleSections] = useState({
    about: false,
    skills: false,
    projects: false,
    contact: false
  });

  const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.75 &&
      rect.bottom >= 0
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'projects', 'contact'];
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element && isInViewport(element) && !visibleSections[section]) {
          setVisibleSections(prev => ({ ...prev, [section]: true }));
        }
      });
    };

    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleSections]);

  return (
    <main className="main-content">
      <Hero />
      <About />
      <Projects/>
      <Contact />
      <Footer />

      
    </main>
  );
};

export default Index;
