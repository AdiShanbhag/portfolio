import "./Projects.css";

const projects = [
  {
    title: "AI Code Explainer",
    description: "Web app that explains code snippets using AI.",
    link: "#",
    demo: "https://devmateai.netlify.app/codexplainer",
  },
  {
<<<<<<< HEAD
    title: "Assignment Manager",
    description: "A mobile app for students to manage their assignments",
=======
    title: "Slice Rally",
    description: "3D low-poly racing game built with Unity.",
>>>>>>> 373f3d3c8aa59f58907389a8236ecafd1cf63f07
    link: "#",
    demo: "#",
  },
  {
    title: "Resume Reviewer",
    description: "AI-powered resume review and suggestions tool.",
    link: "#",
    demo: "https://devmateai.netlify.app/resume-analyzer",
  },
  // Add more projects here
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map(({ title, description, link, demo }) => (
          <div key={title} className="project-card">
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="project-links">
              {link === "#" && demo === "#" ? (
                <button className="coming-soon" disabled>
                  Coming Soon
                </button>
              ) : (
                <>
                  {link && link !== "#" && (
                    <a href={link} target="_blank" rel="noreferrer">
                      GitHub
                    </a>
                  )}
                  {demo && demo !== "#" && (
                    <a href={demo} target="_blank" rel="noreferrer">
                      Live Demo
                    </a>
                  )}
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}