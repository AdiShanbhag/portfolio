import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-card animate-fade-slide">
        <h2>Contact Me</h2>
        <p className="cta-text">Connect with me on any of my socials below — I’m just a click away!</p>

        <div className="contact-cta">
          <a href="mailto:aditya.d.shanbhag25@gmail.com" className="btn default" aria-label="Send Email" title="Send Email">
            <EmailIcon className="btn-icon" />
            Email Me
          </a>

          <a href="https://wa.me/+61412665346" target="_blank" rel="noopener noreferrer" className="btn" aria-label="Chat on WhatsApp" title="Chat on WhatsApp">
            <WhatsAppIcon className="btn-icon" />
            WhatsApp
          </a>

          <a href="https://linkedin.com/in/aditya1374" target="_blank" rel="noopener noreferrer" className="btn" aria-label="LinkedIn Profile" title="LinkedIn Profile">
            <LinkedInIcon className="btn-icon" />
            LinkedIn
          </a>

          <a href="https://github.com/AdiShanbhag" target="_blank" rel="noopener noreferrer" className="btn" aria-label="GitHub Profile" title="GitHub Profile">
            <GitHubIcon className="btn-icon" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

function EmailIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 2-8 5-8-5h16Zm0 12H4V8l8 5 8-5v10Z" />
    </svg>
  );
}

function WhatsAppIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.52 3.48a11.9 11.9 0 0 0-16.82 0 11.85 11.85 0 0 0-3.5 8.42 11.7 11.7 0 0 0 2 6.2l-1.3 4.75 4.86-1.27a11.77 11.77 0 0 0 6.16 1.93 11.83 11.83 0 0 0 8.4-3.47 11.9 11.9 0 0 0 0-16.83zM12 21.6a9.5 9.5 0 0 1-4.85-1.39l-.35-.21-2.89.75.77-2.82-.23-.36a9.46 9.46 0 1 1 7.7 3.85zm5.17-6.36c-.29-.14-1.72-.85-1.98-.95s-.46-.14-.65.14-.74.95-.91 1.15-.34.21-.63.07a8.94 8.94 0 0 1-2.62-1.62 9.86 9.86 0 0 1-1.83-2.27c-.2-.33-.02-.51.15-.66.15-.14.33-.38.5-.57a1.34 1.34 0 0 0 .21-.36.5.5 0 0 0 0-.46c-.07-.14-.64-1.54-.88-2.1-.23-.55-.47-.48-.65-.48a2.16 2.16 0 0 0-.75.11 1.47 1.47 0 0 0-.54.5 2.31 2.31 0 0 0-.84 1.19 3.37 3.37 0 0 0-.19 1.06 4.4 4.4 0 0 0 1.92 3.36 8.28 8.28 0 0 0 3.73 2.33c.5.21.89.17 1.22.1a3 3 0 0 0 1.88-1.23 3.75 3.75 0 0 0 .42-1.18c.05-.18.04-.34 0-.47a.76.76 0 0 0-.19-.28z" />
    </svg>
  );
}

function LinkedInIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8a2.5 2.5 0 0 0-.02-4.5zM3 9h4v12H3zM9 9h4v1.75c.57-1.06 1.96-2 3.88-2 4.15 0 4.91 2.73 4.91 6.28V21h-4v-5.5c0-1.31-.03-3-1.84-3-1.84 0-2.12 1.43-2.12 2.9V21H9z" />
    </svg>
  );
}

function GitHubIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12a9.99 9.99 0 0 0 6.84 9.49c.5.1.68-.22.68-.48v-1.7c-2.78.6-3.37-1.35-3.37-1.35-.46-1.16-1.12-1.47-1.12-1.47-.92-.63.07-.62.07-.62 1.02.07 1.56 1.05 1.56 1.05.9 1.54 2.36 1.1 2.94.84.1-.66.36-1.1.65-1.35-2.22-.25-4.56-1.11-4.56-4.95 0-1.1.39-2 .1-2.7 0 0 .84-.27 2.75 1.05A9.52 9.52 0 0 1 12 7.3c.85 0 1.7.11 2.5.32 1.9-1.32 2.74-1.05 2.74-1.05.38.97.14 1.66.07 1.84.64.74 1.04 1.67 1.04 2.87 0 3.86-2.34 4.7-4.57 4.95.38.33.72.98.72 1.98v2.94c0 .27.18.59.69.48A9.99 9.99 0 0 0 22 12c0-5.52-4.48-10-10-10z" />
    </svg>
  );
}
