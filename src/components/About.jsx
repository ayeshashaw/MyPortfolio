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
    { name: 'React.js', icon: '⚛️', color: '#61DAFB' },
    { name: 'JavaScript', icon: '🟨', color: '#F7DF1E' },
    { name: 'Node.js', icon: '🟢', color: '#339933' },
    { name: 'Express.js', icon: '⚡', color: '#000000' },
    { name: 'MongoDB', icon: '🍃', color: '#47A248' },
    { name: 'MySQL', icon: '🐬', color: '#4479A1' },
    { name: 'HTML & CSS', icon: '🎨', color: '#E34F26' },
    { name: 'Redux', icon: '🔄', color: '#764ABC' },
    { name: 'RESTful APIs', icon: '🔗', color: '#FF6B35' },
    { name: 'Git & GitHub', icon: '📚', color: '#F05032' },
    { name: 'Java', icon: '☕', color: '#ED8B00' },
    { name: 'Firebase', icon: '🔥', color: '#FFCA28' },
    { name: 'JWT Authentication', icon: '🔐', color: '#000000' },
    { name: 'Responsive Design', icon: '📱', color: '#06B6D4' },
    { name: 'Redis', icon: '🔴', color: '#DC382D' },
    { name: 'Axios', icon: '📡', color: '#5A29E4' }
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
        
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="skill-card fade-in"
              style={{ 
                animationDelay: `${0.1 + index * 0.05}s`,
                '--skill-color': skill.color 
              }}
            >
              <div className="skill-icon">{skill.icon}</div>
              <div className="skill-name">{skill.name}</div>
              <div className="skill-glow"></div>
            </div>
          ))}
        </div>
      </section>


    </>
  );
};

export default About;
