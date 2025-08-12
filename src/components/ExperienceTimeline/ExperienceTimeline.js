import React, { useState } from "react";
import "./ExperienceTimeline.css";
import experiences from "./ExperienceData"

export default function ExperienceTimeline() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="experience" className="experience-section">
      <h2 className="section-title">Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`timeline-item ${isOpen ? "open" : ""}`}
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
                <span className={`timeline-arrow ${isOpen ? "open" : ""}`}>
                  ▼
                </span>
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
