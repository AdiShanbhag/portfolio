import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} Aditya Shanbhag — Built with React & Three.js
      </p>
      <p>
        <a href="mailto:aditya.d.shanbhag25@gmail.com" target="_blank" rel="noreferrer">
          aditya.d.shanbhag25@gmail.com
        </a>
      </p>
    </footer>
  );
}