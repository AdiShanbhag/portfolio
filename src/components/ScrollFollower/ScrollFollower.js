import React, { useEffect, useRef, useState } from "react";
import "./ScrollFollower.css";

function ScrollFollowerRobot({ isWalking }) {
  return (
    <svg
      viewBox="0 0 60 85"
      className={`scroll-follower-robot${isWalking ? "" : " idle"}`}
      aria-hidden="true"
    >
      <g stroke="#0ff" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round">

        {/* Head + antenna (grouped so antenna moves with head on look-around) */}
        <g className={`follower-head${isWalking ? "" : " idle"}`}>
          <line x1="30" y1="3" x2="30" y2="9" strokeWidth="1.5" />
          <circle cx="30" cy="2" r="3" fill="#0ff" stroke="none" />
          <rect x="18" y="9" width="24" height="18" rx="2" />
          <rect x="22" y="14" width="5" height="5" rx="1" fill="#0ff" stroke="none" />
          <rect x="33" y="14" width="5" height="5" rx="1" fill="#0ff" stroke="none" />
          <rect x="22" y="22" width="16" height="3" rx="1" />
        </g>

        {/* Neck */}
        <rect x="26" y="27" width="8" height="5" rx="1" />

        {/* Body */}
        <rect x="14" y="32" width="32" height="25" rx="2" />
        <circle cx="30" cy="44" r="6" />
        <circle className="follower-core" cx="30" cy="44" r="3" fill="#0ff" stroke="none" />

        {/* Arms */}
        <rect x="3" y="34" width="10" height="6" rx="2" />
        <rect x="47" y="34" width="10" height="6" rx="2" />

        {/* Left leg */}
        <g className={`follower-leg follower-leg-left${isWalking ? " walking" : ""}`}>
          <rect x="17" y="57" width="10" height="20" rx="2" />
          <rect x="13" y="75" width="14" height="7" rx="2" />
        </g>

        {/* Right leg */}
        <g className={`follower-leg follower-leg-right${isWalking ? " walking" : ""}`}>
          <rect x="33" y="57" width="10" height="20" rx="2" />
          <rect x="33" y="75" width="14" height="7" rx="2" />
        </g>

      </g>
    </svg>
  );
}

export default function ScrollFollower() {
  const [yPos, setYPos] = useState(80);
  const [isWalking, setIsWalking] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = maxScroll > 0 ? scrollY / maxScroll : 0;
      const minY = 70;
      const maxY = window.innerHeight - 130;
      setYPos(minY + ratio * (maxY - minY));
      setIsWalking(true);
      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setIsWalking(false), 200);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <div className="scroll-follower" style={{ top: yPos }} aria-hidden="true">
      <ScrollFollowerRobot isWalking={isWalking} />
    </div>
  );
}
