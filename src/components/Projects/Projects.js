import "./Projects.css";

function PointerRobot() {
  return (
    <svg viewBox="0 0 62 75" className="robot-pointer" aria-hidden="true">
      <g stroke="#0ff" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <line x1="22" y1="2" x2="22" y2="9" strokeWidth="1.5" />
        <circle cx="22" cy="1" r="3" fill="#0ff" stroke="none" />
        <rect x="10" y="9" width="24" height="18" rx="2" />
        <rect x="14" y="14" width="5" height="5" rx="1" fill="#0ff" stroke="none" />
        <rect x="23" y="14" width="5" height="5" rx="1" fill="#0ff" stroke="none" />
        <rect x="14" y="22" width="16" height="3" rx="1" />
        <rect x="18" y="27" width="8" height="4" rx="1" />
        <rect x="8" y="31" width="28" height="24" rx="2" />
        <circle cx="22" cy="43" r="6" />
        <circle cx="22" cy="43" r="3" fill="#0ff" stroke="none" className="section-robot-core" />
        <rect x="1" y="33" width="6" height="7" rx="2" />
        <g className="robot-pointer-arm">
          <rect x="36" y="33" width="14" height="7" rx="2" />
          <rect x="48" y="36" width="10" height="5" rx="2" />
        </g>
        <rect x="12" y="55" width="8" height="14" rx="2" />
        <rect x="25" y="55" width="8" height="14" rx="2" />
        <rect x="8" y="67" width="12" height="5" rx="2" />
        <rect x="22" y="67" width="12" height="5" rx="2" />
      </g>
    </svg>
  );
}

const projects = [
  {
    title: "DevMate AI",
    description:
      "An AI-powered web app with two tools: a code explainer that breaks down code snippets, and a resume analyzer that reviews resumes and gives suggestions.",
    demo: "https://devmateai.netlify.app/",
    buttonLabel: "Check out",
  },
  {
    title: "WoodIt",
    description:
      "A mobile puzzle game built in Unity, currently live on Google Play.",
    demo: "https://paced.com.au",
    buttonLabel: "Check out",
  },
  {
    title: "Bull Magpie",
    description:
      "A real-time multiplayer word game built with Socket.io, React, and Node.js, deployed on Vercel and Railway. Handles game state synchronization and player disconnect/reconnect logic so games stay consistent even when connections drop.",
    demo: "https://bull-magpie.vercel.app/",
    buttonLabel: "Check out",
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
              <PointerRobot />
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
