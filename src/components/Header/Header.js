import React, { useState } from "react";
import "./Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-left">
        <h1>
          <a
            href="#top"
            className="header-title"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById("top");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Aditya Shanbhag
          </a>
        </h1>

        <a
          href="https://www.linkedin.com/in/aditya1374"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin-link"
          aria-label="LinkedIn Profile"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="#0ff"
            viewBox="0 0 24 24"
          >
            <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.75v2.16h.07c.66-1.25 2.27-2.56 4.67-2.56 5 0 5.93 3.29 5.93 7.56V24H17v-7.85c0-1.87-.03-4.28-2.6-4.28-2.6 0-3 2.03-3 4.13V24H7.5V8z" />
          </svg>
        </a>
      </div>

      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        {["projects", "experience", "education", "skills", "contact"].map((id) => (
          <button
            key={id}
            className="nav-link"
            onClick={() => {
              const el = document.getElementById(id);
              if (el) el.scrollIntoView({ behavior: "smooth" });
              setMenuOpen(false);
            }}
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </button>
        ))}
      </nav>

      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? (
          <span className="close-icon">&times;</span>  // Close icon (×)
        ) : (
          <>
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
          </>
        )}
      </button>
    </header>
  );
}
