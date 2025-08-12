import React, { useEffect, useRef, useState } from "react";
import "./HeroMatrix.css";

export default function HeroMatrix() {
  const canvasRef = useRef(null);
  const [typedText, setTypedText] = useState("");
  const typingSpeed = 100; // ms per character

  const fullText = "Hi, I am aditya\nScroll down to know more about me";

  // Typing effect
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setTypedText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, typingSpeed);

    return () => clearInterval(timer);
  }, [fullText]);

  // Matrix rain effect
  useEffect(() => {
  const canvas = canvasRef.current;
  const ctx = canvas.getContext("2d");

  const letters =
    "アァイィウヴエェオカガキギクグケゲコゴサザシジスズセゼソゾタダチヂッツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモヤユヨラリルレロワヲンABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const fontSize = 14;

  let columns;
  let drops;

  // Function to setup canvas size and drops array
  const setup = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    columns = Math.floor(canvas.width / fontSize);
    drops = Array.from({ length: columns }, () => 1);
  };

  setup(); // initial setup

  function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#0F0";
    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < drops.length; i++) {
      const text = letters.charAt(Math.floor(Math.random() * letters.length));
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);

      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }

  const interval = setInterval(draw, 33);

  // Resize handler
  const handleResize = () => {
    setup();
  };
  window.addEventListener("resize", handleResize);

  return () => {
    clearInterval(interval);
    window.removeEventListener("resize", handleResize);
  };
}, []);


  return (
    <section className="hero-matrix">
      <canvas ref={canvasRef} />
      <div className="hero-content">
        <h1 className="hero-name">{typedText}</h1>
      </div>
    </section>
  );
}