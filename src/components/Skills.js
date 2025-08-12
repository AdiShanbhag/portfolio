import "./Skills.css";

const skills = [
  { name: "Java", level: 90 },
  { name: "Spring Boot", level: 85 },
  { name: "React", level: 80 },
  { name: "Three.js", level: 75 },
  { name: "JUnit", level: 80 },
  { name: "Git", level: 90 },
  { name: "Unity", level: 70 },
  { name: "SQL", level: 80 },
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map(({ name, level }) => (
          <div key={name} className="skill-card">
            <h3>{name}</h3>
            <div className="skill-bar">
              <div
                className="skill-level"
                style={{ width: `${level}%` }}
                aria-label={`${name} skill level ${level} percent`}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}