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

      <h3 className="other-projects-heading fade-in">
        Other Noteworthy Projects
      </h3>

      <div className="other-projects-grid">
        {otherProjects.map((project, index) => (
          <div
            key={project.id}
            className="other-project"
            ref={(el) => (otherProjectsRef.current[index] = el)}
          >
            <div className="other-project-inner fade-in">
              <div className="project-top">
                <div className="folder-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                <div className="project-links">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                </div>
              </div>

              <h3 className="other-project-title">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.title}
                </a>
              </h3>

              <div className="other-project-description">
                <p>{project.description}</p>
              </div>

              <ul className="other-project-tech-list">
                {project.technologies.slice(0, 4).map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="other-projects-section">
        <h3 className="other-projects-heading fade-in">
          Other Noteworthy Projects
        </h3>
        <p className="other-projects-subtitle fade-in delay-1">
          A collection of smaller projects and experiments that showcase different aspects of my development skills
        </p>

        <div className="other-projects-grid">
          {otherProjects.map((project, index) => (
            <div
              key={project.id}
              className="other-project"
              ref={(el) => (otherProjectsRef.current[index] = el)}
            >
              <div className="other-project-inner fade-in">
                <div className="project-header">
                  <div className="project-top">
                    <div className="project-icon-wrapper">
                      <div className="folder-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          role="img"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="project-links">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        title="View Source Code"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          role="img"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                      </a>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                          title="View Live Demo"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            role="img"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <div className="project-content">
                  <h3 className="other-project-title">
                    <a
                      href={project.liveUrl || project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.title}
                    </a>
                  </h3>

                  <div className="other-project-description">
                    <p>{project.description}</p>
                  </div>

                  <div className="project-footer">
                    <ul className="other-project-tech-list">
                      {project.technologies.slice(0, 5).map((tech, i) => (
                        <li key={i}>{tech}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


    </section>
  );
};

export default Projects;
