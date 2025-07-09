import { useEffect, useRef } from "react";
import projects from "../data/projects";
import ProjectCarousel from "./ProjectCarousel";
import '../styles/Projects.css'


const Projects = () => {
  const projectsRef = useRef(null);
  const featuredProjectsRef = useRef([]);
  const otherProjectsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    featuredProjectsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    otherProjectsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }

      featuredProjectsRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });

      otherProjectsRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="projects" ref={projectsRef}>
      <h2 className="section-heading">My Projects</h2>

      <div className="featured-projects">
        {featuredProjects.map((project, index) => (
          <div
            key={project.id}
            className={`featured-project ${index % 2 === 0 ? "even" : "odd"}`}
            ref={(el) => (featuredProjectsRef.current[index] = el)}
          >
            {index % 2 === 0 ? (
              <>
                <div className="project-image fade-in delay-1">
                  <ProjectCarousel 
                    images={project.images} 
                    title={project.title}
                  />
                </div>
                <div className="project-content">
                  <p className="project-overline fade-in">Featured Project</p>
                  <h3 className="project-title fade-in delay-1">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.title}
                    </a>
                  </h3>
                  <div className="project-description fade-in delay-2">
                    <p>{project.description}</p>
                  </div>
                  <ul className="project-tech-list fade-in delay-3">
                    {project.technologies.map((tech, i) => (
                      <li key={i}>{tech}</li>
                    ))}
                  </ul>
                  <div className="project-links fade-in delay-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      GitHub
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="project-content">
                  <p className="project-overline fade-in">Featured Project</p>
                  <h3 className="project-title fade-in delay-1" >
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.title}
                    </a>
                  </h3>
                  <div className="project-description fade-in delay-2">
                    <p>{project.description}</p>
                  </div>
                  <ul className="project-tech-list fade-in delay-3">
                    {project.technologies.map((tech, i) => (
                      <li key={i}>{tech}</li>
                    ))}
                  </ul>
                  <div className="project-links fade-in delay-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      GitHub
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
                <div className="project-image fade-in delay-1">
                  <ProjectCarousel 
                    images={project.images} 
                    title={project.title}
                  />
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* More Projects Section */}
      <div className="more-projects-section">
        <div className="section-header fade-in">
          <div className="header-decoration">
            <div className="decoration-line"></div>
            <div className="decoration-dot"></div>
            <div className="decoration-line"></div>
          </div>
          <h3 className="more-projects-title">More Creative Works</h3>
          
          
        </div>

        <div className="projects-showcase">
          {otherProjects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card fade-in ${index % 2 === 0 ? 'card-left' : 'card-right'}`}
              ref={(el) => (otherProjectsRef.current[index] = el)}
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="card-inner">
                <div className="card-background">
                  <div className="bg-pattern"></div>
                  <div className="bg-gradient"></div>
                </div>
                
                <div className="card-content">
                  <div className="card-header">
                    <div className="project-number">
                      <span>{String(index + 1).padStart(2, '0')}</span>
                    </div>
                    <div className="project-actions">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="action-btn github-btn"
                        title="View Code"
                      >
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z"/>
                        </svg>
                      </a>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="action-btn demo-btn"
                          title="Live Demo"
                        >
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                            <polyline points="15,3 21,3 21,9"/>
                            <line x1="10" y1="14" x2="21" y2="3"/>
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="card-body">
                    <h4 className="project-title">
                      <a
                        href={project.liveUrl || project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {project.title}
                      </a>
                    </h4>
                    
                    <p className="project-description">
                      {project.description}
                    </p>
                  </div>

                  <div className="card-footer">
                    <div className="tech-stack">
                      {project.technologies.slice(0, 4).map((tech, i) => (
                        <span key={i} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="tech-more">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="section-footer fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="footer-text">
            <p>Want to see more? Check out my <a href="https://github.com/ayeshashaw" target="_blank" rel="noopener noreferrer">GitHub</a> for additional projects and contributions.</p>
          </div>
        </div>
      </div>


    </section>
  );
};

export default Projects;
