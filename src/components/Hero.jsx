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
      {/* Animated Background Elements */}
      <div className="hero-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
          <div className="shape shape-5"></div>
        </div>
        <div className="gradient-orbs">
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
          <div className="orb orb-3"></div>
        </div>
      </div>

      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-greeting fade-in">
            <span className="greeting-line"></span>
            <span className="greeting-text">Hello, I'm</span>
          </div>
          
          <h1 className="hero-title fade-in delay-1">
            <span className="title-main">Ayesha Shaw</span>
            <span className="title-cursor">|</span>
          </h1>
          
          <h2 className="hero-subtitle fade-in delay-2">
            <span className="subtitle-text">Full Stack Developer</span>
            <span className="subtitle-highlight">& Problem Solver</span>
          </h2>
          
          <p className="hero-description fade-in delay-3">
            I craft seamless digital experiences using the <strong>MERN stack</strong>. 
            Passionate about transforming complex ideas into elegant, scalable solutions 
            that make a real impact.
          </p>

          <div className="hero-stats fade-in delay-4">
            <div className="stat-item">
              <span className="stat-number">15+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">12+</span>
              <span className="stat-label">Technologies</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Dedication</span>
            </div>
          </div>

          <div className="hero-buttons fade-in delay-5">
            <button className="button button-primary pulse" onClick={() => scrollToSection('contact')}>
              <span>Let's Connect</span>
              <svg className="button-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M7 17L17 7M17 7H7M17 7V17"/>
              </svg>
            </button>
            <button onClick={() => scrollToSection('projects')} className="button button-secondary">
              <span>View My Work</span>
              <svg className="button-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5Z"/>
              </svg>
            </button>
          </div>

          <div className="hero-social fade-in delay-6">
            <a href="https://github.com/ayeshashaw" target="_blank" rel="noopener noreferrer" className="social-link">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/ayesha-shaw-9353271a0/" target="_blank" rel="noopener noreferrer" className="social-link">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="mailto:ayeshashaw520@gmail.com" className="social-link">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.9.732-1.636 1.636-1.636h.98L12 10.09l9.382-6.269h.982c.904 0 1.636.732 1.636 1.636Z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="hero-visual fade-in delay-2">
          <div className="code-window">
            <div className="window-header">
              <div className="window-controls">
                <span className="control close"></span>
                <span className="control minimize"></span>
                <span className="control maximize"></span>
              </div>
              <div className="window-title">portfolio.js</div>
            </div>
            <div className="code-content">
              <div className="code-line">
                <span className="line-number">1</span>
                <span className="code-text">
                  <span className="keyword">const</span> 
                  <span className="variable"> developer</span> 
                  <span className="operator"> = </span>
                  <span className="punctuation">{</span>
                </span>
              </div>
              <div className="code-line">
                <span className="line-number">2</span>
                <span className="code-text">
                  <span className="property">  name</span>
                  <span className="punctuation">: </span>
                  <span className="string">'Ayesha Shaw'</span>
                  <span className="punctuation">,</span>
                </span>
              </div>
              <div className="code-line">
                <span className="line-number">3</span>
                <span className="code-text">
                  <span className="property">  skills</span>
                  <span className="punctuation">: [</span>
                  ]
                  <span className="string">'React'</span>
                  <span className="punctuation">, </span>
                  <span className="string">'Node.js'</span>
                  <span className="punctuation">],</span>
                </span>
              </div>
              <div className="code-line">
                <span className="line-number">4</span>
                <span className="code-text">
                  <span className="property">  passion</span>
                  <span className="punctuation">: </span>
                  <span className="string">'Building amazing apps'</span>
                </span>
              </div>
              <div className="code-line">
                <span className="line-number">5</span>
                <span className="code-text">
                  <span className="punctuation">};</span>
                </span>
              </div>
            </div>
          </div>
          
          <div className="tech-stack">
            <div className="tech-item">
              <div className="tech-icon react">⚛️</div>
              <span>React</span>
            </div>
            <div className="tech-item">
              <div className="tech-icon node">🟢</div>
              <span>Node.js</span>
            </div>
            <div className="tech-item">
              <div className="tech-icon mongo">🍃</div>
              <span>MongoDB</span>
            </div>
            <div className="tech-item">
              <div className="tech-icon express">⚡</div>
              <span>Express</span>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator fade-in delay-7">
        <div className="scroll-text">Scroll to explore</div>
        <div className="scroll-arrow">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M7 13l3 3 7-7M7 6l3 3 7-7"/>
          </svg>
        </div>
      </div>
    }
    </section>
  );
};

export default Hero;