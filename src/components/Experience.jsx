import { useEffect, useRef } from 'react';
import '../styles/Experience.css';

const Experience = () => {
  const experienceRef = useRef(null);

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

    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }

    return () => {
      if (experienceRef.current) {
        observer.unobserve(experienceRef.current);
      }
    };
  }, []);

  const experienceData = [
    {
      id: 1,
      position: "Junior Developer",
      company: "Publicis Groupe",
      location: "Bengaluru, Karnataka, India",
      duration: "Oct 2025 - Present",
      type: "Full-time",
      icon: "💼",
      color: "#667eea",
      responsibilities: [
        "Built and maintained responsive email templates and frontend components",
        "Developed internal email tools using JavaScript and Node.js to streamline email creation and workflows",
        "Collaborated with design and marketing teams to deliver scalable, high-quality email solutions"
      ]
    }
  ];

  return (
    <section id="experience" className="experience" ref={experienceRef}>
      <h2 className="section-heading">Professional Experience</h2>
      
      <div className="experience-timeline">
        {experienceData.map((exp, index) => (
          <div 
            key={exp.id} 
            className={`experience-item fade-in ${index % 2 === 0 ? 'left' : 'right'}`}
            style={{ 
              animationDelay: `${0.2 + index * 0.2}s`,
              '--exp-color': exp.color 
            }}
          >
            <div className="experience-card">
              <div className="card-header">
                <div className="experience-icon">
                  <span>{exp.icon}</span>
                </div>
                <div className="experience-type">{exp.type}</div>
              </div>
              
              <div className="card-content">
                <h3 className="position-title">{exp.position}</h3>
                <div className="company-info">
                  <h4 className="company-name">{exp.company}</h4>
                  <p className="location">{exp.location}</p>
                </div>
                <div className="duration">
                  <span className="duration-text">{exp.duration}</span>
                </div>
                
                <div className="responsibilities">
                  <ul>
                    {exp.responsibilities.map((responsibility, i) => (
                      <li key={i}>{responsibility}</li>
                    ))}
                  </ul>
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
      
      <div className="experience-summary fade-in delay-4">
        <div className="summary-content">
          <h3>Professional Growth</h3>
          <p>
            Currently working as a Junior Developer at Publicis Groupe, where I focus on building 
            responsive email solutions and frontend components. My role involves developing internal 
            tools that streamline workflows and collaborating with cross-functional teams to deliver 
            high-quality, scalable solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;