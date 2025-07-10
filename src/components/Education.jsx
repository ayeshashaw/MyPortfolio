import { useEffect, useRef } from 'react';
import '../styles/Education.css';

const Education = () => {
  const educationRef = useRef(null);

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

    if (educationRef.current) {
      observer.observe(educationRef.current);
    }

    return () => {
      if (educationRef.current) {
        observer.unobserve(educationRef.current);
      }
    };
  }, []);

  const educationData = [
    {
      id: 1,
      degree: "Masters in Computer Application",
      institution: "Sister Nivedita University",
      location: "Kolkata",
      duration: "Sep 2022 – Jul 2024",
      type: "Masters",
      icon: "🎓",
      color: "#667eea"
    },
    {
      id: 2,
      degree: "Bachelors in Computer Application",
      institution: "Techno Main Salt Lake",
      location: "Kolkata",
      duration: "Jun 2019 – Jul 2022",
      type: "Bachelors",
      icon: "📚",
      color: "#4ecdc4"
    }
  ];

  return (
    <section id="education" className="education" ref={educationRef}>
      <h2 className="section-heading">Educational Journey</h2>
      
      <div className="education-timeline">
        {educationData.map((edu, index) => (
          <div 
            key={edu.id} 
            className={`education-item fade-in ${index % 2 === 0 ? 'left' : 'right'}`}
            style={{ 
              animationDelay: `${0.2 + index * 0.2}s`,
              '--edu-color': edu.color 
            }}
          >
            <div className="education-card">
              <div className="card-header">
                <div className="education-icon">
                  <span>{edu.icon}</span>
                </div>
                <div className="education-type">{edu.type}</div>
              </div>
              
              <div className="card-content">
                <h3 className="degree-title">{edu.degree}</h3>
                <div className="institution-info">
                  <h4 className="institution-name">{edu.institution}</h4>
                  <p className="location">{edu.location}</p>
                </div>
                <div className="duration">
                  <span className="duration-text">{edu.duration}</span>
                </div>
              </div>
              
              <div className="card-decoration">
                <div className="decoration-line"></div>
                <div className="decoration-dot"></div>
              </div>
            </div>
            
            <div className="timeline-connector">
              <div className="connector-line"></div>
              <div className="connector-dot"></div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="education-summary fade-in delay-4">
        <div className="summary-content">
          <h3>Academic Excellence</h3>
          <p>
            My educational journey in Computer Applications has provided me with a strong foundation 
            in software development, database management, and modern web technologies. Through both 
            theoretical knowledge and practical projects, I've developed the skills necessary to 
            excel in full-stack development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;