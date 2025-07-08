import { useEffect, useRef } from 'react';
import '../styles/Hero.css'


const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-content">
        <p className="hero-greeting fade-in">Hello, my name is</p>
        <h1 className="hero-title fade-in delay-1">Ayesha Shaw</h1>
        <h2 className="hero-subtitle fade-in delay-2">Transforming ideas into code.</h2>
        <p className="hero-description fade-in delay-3">
          I craft seamless digital products using MongoDB, Express, React, and Node.js. I focus on performance, accessibility, and clean architecture to bring projects from idea to reality..
        </p>
        <div className="hero-buttons fade-in delay-4">
          <button className="button pulse" onClick={() => scrollToSection('contact')}>
            Get In Touch
          </button>
          <button onClick={() => scrollToSection('projects')} className="button button-outline">
            View Projects
          </button>
        </div>
      </div>

      
    </section>
  );
};

export default Hero;