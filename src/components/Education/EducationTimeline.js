import React, { useState } from "react";
import "./EducationTimeline.css";
import education from "./EducationData";

export default function EducationTimeline() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="education" className="education-section">
      <h2 className="section-title">Education</h2>
      <div className="education-timeline">
        {education.map((edu, index) => (
          <div className="education-timeline-item" key={index}>
            <div className="education-timeline-dot" />
            <div className="education-timeline-content">
              <span className="education-timeline-date">{edu.date}</span>
              <h3 className="education-timeline-title">{edu.degree}</h3>
              <p className="education-timeline-institution">
                {edu.institution} &mdash; <em>{edu.location}</em>
              </p>
              {edu.details && edu.details.length > 0 && (
                <>
                  <ul className={`education-timeline-details ${expandedIndex === index ? "expanded" : ""}`}>
                    {(expandedIndex === index ? edu.details : edu.details.slice(0, 2)).map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                  {edu.details.length > 2 && (
                    <button
                      className="read-more-btn"
                      onClick={() => toggleExpand(index)}
                      aria-expanded={expandedIndex === index}
                    >
                      {expandedIndex === index ? "Read Less" : "Read More"}
                    </button>
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