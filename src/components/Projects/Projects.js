import "./Projects.css";

const projects = [
  {
    title: "DevMate AI",
    description:
      "An AI-powered web app with two tools: a code explainer that breaks down code snippets, and a resume analyzer that reviews resumes and gives suggestions.",
    demo: "https://devmateai.netlify.app/",
    buttonLabel: "Live Demo",
  },
  {
    title: "WoodIt",
    description:
      "A mobile puzzle game built in Unity, currently in closed testing on Google Play. Currently working through Google Play's testing requirements to move toward production release.",
    demo: "https://paced.com.au",
    buttonLabel: "Join Testing",
  },
  {
    title: "Bull Magpie",
    description:
      "A real-time multiplayer word game built with Socket.io, React, and Node.js, deployed on Vercel and Railway. Handles game state synchronization and player disconnect/reconnect logic so games stay consistent even when connections drop.",
    demo: "https://bull-magpie.vercel.app/",
    buttonLabel: "Live Demo",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map(({ title, description, demo, buttonLabel }) => (
          <div key={title} className="project-card">
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="project-links">
              <a href={demo} target="_blank" rel="noreferrer">
                {buttonLabel}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}