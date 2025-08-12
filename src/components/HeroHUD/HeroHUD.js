import React from "react";
import "./HeroHUD.css";

export default function HeroHUD() {
  return (
    <section className="hero-hud">
      <div className="scanlines"></div>

      <div className="hud-panel briefing-panel">
        <h1 className="hero-name">Aditya Shanbhag</h1>
        <p className="role">Full Stack Developer</p>

        <div className="loading-bar">
          <div className="loading-fill"></div>
        </div>
      </div>

      <div className="hud-panel side-panel left-panel">
        <h3>STATUS</h3>
        <ul>
          <li>Location: Canberra</li>
          <li>Experience: 5+ Years</li>
          <li>Speciality: Java Developer</li>
        </ul>
      </div>

      <div className="hud-panel side-panel right-panel">
        <h3>OBJECTIVES</h3>
        <ul>
          <li>Build innovative apps</li>
          <li>Explore AI research</li>
          <li>Contribute to open source</li>
        </ul>
      </div>
    </section>
  );
}
