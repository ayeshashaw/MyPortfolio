import { useEffect, useRef } from 'react';
import '../styles/About.css'
import photo from '../assets/photo.jpeg';


const About = () => {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  const skills = [
    { name: 'MongoDB', category: 'Database' },
    { name: 'Express.js', category: 'Backend' },
    { name: 'React.js', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'JavaScript (ES6+)', category: 'Language' },
    { name: 'Java', category: 'Language' },
    { name: 'HTML & CSS', category: 'Frontend' },
    { name: 'RESTful APIs', category: 'Backend' },
    { name: 'Redux', category: 'Frontend' },
    { name: 'Git & GitHub', category: 'Tools' },
    { name: 'Responsive Design', category: 'Frontend' },
    { name: 'JWT Authentication', category: 'Security' }
    ];

  return (
    <>
      <section id="about" className="about" ref={aboutRef}>
        <h2 className="section-heading">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="fade-in">
              Hello! I'm Ayesha, a passionate MERN stack developer with a love for creating efficient, scalable, and user-friendly web applications. My journey in web development began during my college years and has evolved into a professional career focused on full-stack development.
            </p>
            <p className="fade-in delay-1">
              I enjoy tackling complex problems and turning them into simple and beautiful interface designs. My approach to development focuses on writing clean, optimized code and utilizing cutting-edge technologies to deliver exceptional digital experiences.
            </p>
            <p className="fade-in delay-2">
              When I'm not coding, you can usually find me exploring new technologies or playing chess.
            </p>
          </div>
          <div className="about-image-container fade-in delay-3">
            <div className="about-image">
              <div className="image-placeholder">
                <img src={photo} alt="profile image" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="skills" ref={skillsRef}>
        <h2 className="section-heading">My Skills</h2>
        <p className="skills-intro fade-in">
          Here are some technologies I've been working with recently:
        </p>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="skill-item fade-in" 
              style={{ animationDelay: `${0.1 + index * 0.05}s` }}
            >
              <div className="skill-content">
                <span className="skill-arrow">&#9656;</span>
                <span className="skill-name">{skill.name}</span>
                <span className="skill-category">{skill.category}</span>
              </div>
            </div>
          ))}
        </div>
      </section>


    </>
  );
};

export default About;
