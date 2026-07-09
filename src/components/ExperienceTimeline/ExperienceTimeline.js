import React, { useState, useEffect, useRef } from "react";
import "./ExperienceTimeline.css";
import experiences from "./ExperienceData";

function PullRobot() {
  return (
    <svg viewBox="0 0 80 90" className="robot-pull" aria-hidden="true">
      <g stroke="#0ff" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <line x1="40" y1="2" x2="40" y2="10" strokeWidth="1.5" />
        <circle cx="40" cy="1" r="3" fill="#0ff" stroke="none" />
        <rect x="28" y="10" width="24" height="18" rx="2" />
        <rect x="32" y="15" width="5" height="5" rx="1" fill="#0ff" stroke="none" />
        <rect x="43" y="15" width="5" height="5" rx="1" fill="#0ff" stroke="none" />
        <rect x="32" y="23" width="16" height="3" rx="1" />
        <rect x="36" y="28" width="8" height="5" rx="1" />
        <rect x="26" y="33" width="28" height="26" rx="2" />
        <circle cx="40" cy="46" r="6" />
        <circle cx="40" cy="46" r="3" fill="#0ff" stroke="none" className="section-robot-core" />
        {/* Left arm spread wide */}
        <g className="robot-present-left">
          <rect x="6" y="30" width="18" height="7" rx="2" />
        </g>
        {/* Right arm spread wide */}
        <g className="robot-present-right">
          <rect x="56" y="30" width="18" height="7" rx="2" />
        </g>
        <rect x="29" y="59" width="11" height="22" rx="2" />
        <rect x="42" y="59" width="11" height="22" rx="2" />
        <rect x="25" y="79" width="15" height="7" rx="2" />
        <rect x="42" y="79" width="15" height="7" rx="2" />
      </g>
    </svg>
  );
}

export default function ExperienceTimeline() {
  const [openIndex, setOpenIndex] = useState(null);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) { setVisible(true); return; }
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="experience" className="experience-section" ref={sectionRef}>
      <div className="section-heading-row">
        <h2 className="section-title">Experience</h2>
        <PullRobot />
      </div>
      <div className="timeline">
        {experiences.map((exp, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`timeline-item ${isOpen ? "open" : ""} ${visible ? "slide-in" : ""}`}
              style={visible ? { animationDelay: `${index * 0.12}s` } : {}}
              onClick={() => toggleOpen(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") toggleOpen(index);
              }}
              aria-expanded={isOpen}
            >
              <div className="timeline-dot" />
              <div className="timeline-header">
                <div>
                  <h3 className="timeline-title">{exp.title}</h3>
                  <p className="timeline-company">
                    {exp.company} &mdash; <em>{exp.location}</em>
                  </p>
                </div>
                <span className={`timeline-arrow ${isOpen ? "open" : ""}`}>▼</span>
              </div>
              <span className="timeline-date">{exp.date}</span>
              {isOpen && (
                <ul className="timeline-details">
                  {exp.details.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
