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

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: '🎨',
      skills: [
        { name: 'React.js', level: 90, color: '#61DAFB' },
        { name: 'JavaScript (ES6+)', level: 85, color: '#F7DF1E' },
        { name: 'HTML & CSS', level: 95, color: '#E34F26' },
        { name: 'Redux', level: 80, color: '#764ABC' },
        { name: 'Responsive Design', level: 90, color: '#06B6D4' }
      ]
    },
    {
      title: 'Backend Development',
      icon: '⚙️',
      skills: [
        { name: 'Node.js', level: 85, color: '#339933' },
        { name: 'Express.js', level: 80, color: '#4479A1' },
        { name: 'RESTful APIs', level: 85, color: '#FF6B35' },
        { name: 'JWT Authentication', level: 75, color: '#ED8B00' }
      ]
    },
    {
      title: 'Database & Tools',
      icon: '🛠️',
      skills: [
        { name: 'MongoDB', level: 80, color: '#47A248' },
        { name: 'MySQL', level: 75, color: '#4479A1' },
        { name: 'Redis', level: 70, color: '#DC382D' },
        { name: 'Git & GitHub', level: 90, color: '#F05032' },
        { name: 'Java', level: 70, color: '#ED8B00' }
      ]
    }
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
        
        <div className="skills-categories">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              className="skill-category fade-in"
              style={{ animationDelay: `${0.2 + categoryIndex * 0.1}s` }}
            >
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3 className="category-title">{category.title}</h3>
              </div>
              
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="skill-item"
                    style={{ animationDelay: `${0.3 + categoryIndex * 0.1 + skillIndex * 0.05}s` }}
                  >
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        style={{ 
                          width: `${skill.level}%`,
                          backgroundColor: skill.color,
                          boxShadow: `0 0 10px ${skill.color}40`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        
      </section>


    </>
  );
};

export default About;
