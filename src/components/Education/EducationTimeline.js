import React, { useState } from "react";
import "./EducationTimeline.css";
import education from "./EducationData";

function GradRobot() {
  return (
    <svg viewBox="0 0 65 92" className="robot-grad" aria-hidden="true">
      <g stroke="#0ff" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round">
        {/* Graduation cap */}
        <rect x="4" y="0" width="57" height="6" rx="1" />
        <rect x="27" y="6" width="10" height="7" />
        {/* Tassel (hangs from right edge of cap) */}
        <g className="grad-tassel">
          <line x1="58" y1="3" x2="58" y2="20" strokeWidth="1.5" />
          <circle cx="58" cy="21" r="3" fill="#0ff" stroke="none" />
        </g>
        {/* Head */}
        <rect x="18" y="13" width="28" height="20" rx="2" />
        <rect x="22" y="18" width="5" height="5" rx="1" fill="#0ff" stroke="none" />
        <rect x="37" y="18" width="5" height="5" rx="1" fill="#0ff" stroke="none" />
        <rect x="22" y="27" width="19" height="3" rx="1" />
        {/* Neck */}
        <rect x="27" y="33" width="10" height="5" rx="1" />
        {/* Body */}
        <rect x="17" y="38" width="30" height="26" rx="2" />
        <circle cx="32" cy="51" r="6" />
        <circle cx="32" cy="51" r="3" fill="#0ff" stroke="none" className="section-robot-core" />
        {/* Left arm */}
        <rect x="4" y="41" width="12" height="7" rx="2" />
        {/* Right arm (waving) */}
        <g className="robot-grad-wave">
          <rect x="47" y="38" width="14" height="7" rx="2" />
        </g>
        {/* Legs */}
        <rect x="20" y="64" width="11" height="20" rx="2" />
        <rect x="33" y="64" width="11" height="20" rx="2" />
        {/* Feet */}
        <rect x="16" y="82" width="15" height="7" rx="2" />
        <rect x="33" y="82" width="15" height="7" rx="2" />
      </g>
    </svg>
  );
}

export default function EducationTimeline() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="education" className="education-section">
      <div className="section-heading-row">
        <h2 className="section-title">Education</h2>
        <GradRobot />
      </div>
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
