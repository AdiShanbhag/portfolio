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

      <div className="hud-panel side-panel">
        <h3>STATUS</h3>
        <ul>
          <li>Location: Canberra</li>
<<<<<<< HEAD
          <li>Experience: 4+ Years</li>
=======
          <li>Experience: 5+ Years</li>
>>>>>>> 373f3d3c8aa59f58907389a8236ecafd1cf63f07
          <li>Speciality: Java Developer</li>
        </ul>
      </div>

      <div className="hud-panel side-panel">
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
