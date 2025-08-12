import React, { useState, useEffect } from "react";
import "./ScrollToTop.css";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    console.log("Adding scroll listener");
    const toggleVisibility = () => {
        console.log("Scroll Y:", window.pageYOffset);
        setVisible(window.pageYOffset > 300);
    };

    window.addEventListener("scroll", toggleVisibility);

    // Immediately check scroll position on mount
    toggleVisibility();

    return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);


  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      className="scroll-to-top"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      title="Scroll to top"
    >
      {/* SVG up arrow */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="#000"
        viewBox="0 0 24 24"
      >
        <path d="M12 4l-8 8h6v8h4v-8h6z" />
      </svg>
    </button>
  );
}
