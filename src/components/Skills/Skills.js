import React, { useEffect, useRef, useState } from "react";
import "./Skills.css";

function FlexRobot() {
  return (
    <svg viewBox="0 0 77 90" className="robot-flex" aria-hidden="true">
      <g stroke="#0ff" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <line x1="28" y1="2" x2="28" y2="10" strokeWidth="1.5" />
        <circle cx="28" cy="1" r="3" fill="#0ff" stroke="none" />
        <rect x="16" y="10" width="24" height="18" rx="2" />
        <rect x="20" y="15" width="5" height="5" rx="1" fill="#0ff" stroke="none" />
        <rect x="31" y="15" width="5" height="5" rx="1" fill="#0ff" stroke="none" />
        <rect x="20" y="23" width="16" height="3" rx="1" />
        <rect x="24" y="28" width="8" height="5" rx="1" />
        <rect x="14" y="33" width="28" height="26" rx="2" />
        <circle cx="28" cy="46" r="6" />
        <circle cx="28" cy="46" r="3" fill="#0ff" stroke="none" className="section-robot-core" />
        {/* Left arm relaxed */}
        <rect x="5" y="36" width="8" height="7" rx="2" />
        {/* Right upper arm raised vertically */}
        <rect x="42" y="18" width="8" height="20" rx="2" />
        {/* Right forearm + fist (animated flex) */}
        <g className="robot-flex-arm">
          <rect x="44" y="14" width="22" height="8" rx="2" />
          <rect x="63" y="10" width="12" height="14" rx="3" />
        </g>
        <rect x="17" y="59" width="10" height="22" rx="2" />
        <rect x="31" y="59" width="10" height="22" rx="2" />
        <rect x="13" y="79" width="14" height="7" rx="2" />
        <rect x="31" y="79" width="14" height="7" rx="2" />
      </g>
    </svg>
  );
}

const skills = [
  { name: "Java", level: 75 },
  { name: "Spring Boot", level: 65 },
  { name: "React", level: 75 },
  { name: "Three.js", level: 50 },
  { name: "JUnit", level: 60 },
  { name: "Git", level: 90 },
  { name: "Unity", level: 80 },
  { name: "C#", level: 50 },
  { name: "Python#", level: 25 },
];

export default function Skills() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) { setVisible(true); return; }
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="skills-section" ref={sectionRef}>
      <div className="skills-header">
        <h2>Skills</h2>
        <FlexRobot />
      </div>
      <div className="skills-grid">
        {skills.map(({ name, level }) => (
          <div key={name} className="skill-card">
            <h3>{name}</h3>
            <div className="skill-bar">
              <div
                className="skill-level"
                style={{ width: visible ? `${level}%` : "0%" }}
                aria-label={`${name} skill level ${level} percent`}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
