import React, { useEffect, useRef, useState } from "react";
import "./HeroMatrix.css";

// ─── Main hero robot ──────────────────────────────────────────────────────────

function CyberRobot() {
  return (
    <svg className="cyber-robot" viewBox="0 0 260 300" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g stroke="#0ff" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <line x1="130" y1="8" x2="130" y2="22" strokeWidth="2" />
        <circle cx="130" cy="5" r="5" fill="#0ff" stroke="none" />
        <rect x="90" y="22" width="80" height="58" rx="5" />
        <rect className="robot-eye" x="100" y="36" width="20" height="15" rx="3" fill="#0ff" stroke="none" />
        <rect className="robot-eye" x="140" y="36" width="20" height="15" rx="3" fill="#0ff" stroke="none" style={{ animationDelay: "0.08s" }} />
        <rect x="102" y="64" width="56" height="9" rx="3" />
        <line x1="116" y1="64" x2="116" y2="73" strokeWidth="1.5" />
        <line x1="130" y1="64" x2="130" y2="73" strokeWidth="1.5" />
        <line x1="144" y1="64" x2="144" y2="73" strokeWidth="1.5" />
        <rect x="118" y="80" width="24" height="14" rx="3" />
        <rect x="60" y="94" width="140" height="108" rx="6" />
        <rect x="85" y="112" width="90" height="56" rx="4" />
        <circle cx="130" cy="140" r="18" />
        <circle className="robot-core" cx="130" cy="140" r="9" fill="#0ff" stroke="none" />
        <line x1="85" y1="172" x2="175" y2="172" strokeWidth="1.5" />
        <circle cx="70" cy="102" r="5" fill="#0ff" stroke="none" />
        <circle cx="190" cy="102" r="5" fill="#0ff" stroke="none" />
        <g className="robot-wave-arm">
          <rect x="33" y="97" width="26" height="56" rx="5" />
          <rect x="33" y="155" width="26" height="48" rx="5" />
          <rect x="30" y="203" width="32" height="18" rx="6" />
        </g>
        <rect x="201" y="97" width="26" height="56" rx="5" />
        <rect x="201" y="155" width="26" height="48" rx="5" />
        <rect x="198" y="203" width="32" height="18" rx="6" />
        <rect x="80" y="202" width="38" height="72" rx="5" />
        <rect x="142" y="202" width="38" height="72" rx="5" />
        <rect x="72" y="268" width="50" height="22" rx="6" />
        <rect x="138" y="268" width="50" height="22" rx="6" />
      </g>
    </svg>
  );
}

// ─── Mini robots ──────────────────────────────────────────────────────────────

const S = { stroke: "#0ff", strokeWidth: "1.8", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" };

// Shared head helper: centered at cx, top of head at y
function MiniHead({ cx, y, eyesClosed = false }) {
  const hx = cx - 12, hw = 24, hh = 18;
  return (
    <>
      <line x1={cx} y1={y - 7} x2={cx} y2={y} strokeWidth="1.5" />
      <circle cx={cx} cy={y - 8} r="3" fill="#0ff" stroke="none" />
      <rect x={hx} y={y} width={hw} height={hh} rx="2" />
      {eyesClosed ? (
        <>
          <line x1={hx + 5} y1={y + 7} x2={hx + 9} y2={y + 7} strokeWidth="1.5" />
          <line x1={hx + 14} y1={y + 7} x2={hx + 18} y2={y + 7} strokeWidth="1.5" />
        </>
      ) : (
        <>
          <rect x={hx + 5} y={y + 5} width="5" height="5" rx="1" fill="#0ff" stroke="none" />
          <rect x={hx + 14} y={y + 5} width="5" height="5" rx="1" fill="#0ff" stroke="none" />
        </>
      )}
    </>
  );
}

// Shared body helper
function MiniBody({ cx, y, h = 24 }) {
  const bx = cx - 14, bw = 28;
  return (
    <>
      <rect x={cx - 4} y={y} width="8" height="5" rx="1" />
      <rect x={bx} y={y + 5} width={bw} height={h} rx="2" />
      <circle cx={cx} cy={y + 5 + h / 2} r="5" />
      <circle cx={cx} cy={y + 5 + h / 2} r="2.5" fill="#0ff" stroke="none" />
    </>
  );
}

// Standing legs
function MiniLegs({ cx, y }) {
  return (
    <>
      <rect x={cx - 13} y={y} width="9" height="26" rx="2" />
      <rect x={cx + 4} y={y} width="9" height="26" rx="2" />
      <rect x={cx - 17} y={y + 22} width="14" height="7" rx="2" />
      <rect x={cx} y={y + 22} width="14" height="7" rx="2" />
    </>
  );
}

// ── 1. Laptop ─────────────────────────────────────────────────────────────────
function MiniRobotLaptop() {
  return (
    <svg viewBox="0 0 128 95" className="mini-robot" aria-label="Robot working on laptop">
      <g {...S}>
        {/* Desk */}
        <rect x="2" y="68" width="124" height="5" rx="2" />
        <line x1="15" y1="73" x2="15" y2="95" />
        <line x1="113" y1="73" x2="113" y2="95" />
        {/* Laptop screen */}
        <rect x="36" y="28" width="56" height="40" rx="2" />
        <line x1="42" y1="37" x2="86" y2="37" strokeWidth="1" />
        <line x1="42" y1="44" x2="78" y2="44" strokeWidth="1" />
        <line x1="42" y1="51" x2="82" y2="51" strokeWidth="1" />
        <line x1="42" y1="58" x2="72" y2="58" strokeWidth="1" />
        {/* Laptop base on desk */}
        <rect x="32" y="61" width="64" height="7" rx="2" />
        {/* Robot seated behind desk */}
        <MiniHead cx={64} y={8} />
        <MiniBody cx={64} y={26} h={28} />
        {/* Arms typing */}
        <g className="mini-typing-arm">
          <rect x="20" y="37" width="22" height="7" rx="2" />
          <rect x="14" y="43" width="22" height="6" rx="2" />
        </g>
        <g className="mini-typing-arm" style={{ animationDelay: "0.2s" }}>
          <rect x="86" y="37" width="22" height="7" rx="2" />
          <rect x="92" y="43" width="22" height="6" rx="2" />
        </g>
      </g>
    </svg>
  );
}

// ── 2. Cricket ────────────────────────────────────────────────────────────────
function MiniRobotCricket() {
  return (
    <svg viewBox="0 0 95 105" className="mini-robot" aria-label="Robot playing cricket">
      <g {...S}>
        <line x1="0" y1="99" x2="95" y2="99" strokeWidth="1" />
        {/* Robot */}
        <MiniHead cx={42} y={4} />
        <MiniBody cx={42} y={22} />
        <MiniLegs cx={42} y={51} />
        {/* Left arm gripping bat */}
        <rect x="10" y="26" width="16" height="7" rx="2" />
        <rect x="8" y="33" width="14" height="6" rx="2" />
        {/* Right arm gripping bat */}
        <rect x="56" y="28" width="16" height="7" rx="2" />
        <rect x="58" y="35" width="14" height="6" rx="2" />
        {/* Cricket bat (swings) */}
        <g className="mini-bat">
          <rect x="16" y="6" width="7" height="28" rx="2" />
          <rect x="11" y="34" width="17" height="42" rx="3" />
        </g>
        {/* Cricket ball */}
        <circle cx="82" cy="55" r="5" />
        <line x1="78" y1="53" x2="86" y2="57" strokeWidth="1" />
      </g>
    </svg>
  );
}

// ── 3. Watching TV ────────────────────────────────────────────────────────────
function MiniRobotTV() {
  return (
    <svg viewBox="0 0 170 102" className="mini-robot" aria-label="Robot watching TV">
      <g {...S}>
        <line x1="0" y1="98" x2="170" y2="98" strokeWidth="1" />
        {/* Couch */}
        <rect x="4" y="70" width="70" height="12" rx="3" />
        <rect x="4" y="54" width="8" height="28" rx="2" />
        <rect x="66" y="54" width="8" height="28" rx="2" />
        <rect x="4" y="52" width="70" height="8" rx="2" />
        {/* Robot sitting on couch */}
        <MiniHead cx={39} y={8} />
        <MiniBody cx={39} y={26} h={22} />
        {/* Seated legs */}
        <rect x="26" y="58" width="10" height="14" rx="2" />
        <rect x="42" y="58" width="10" height="14" rx="2" />
        <rect x="22" y="72" width="12" height="16" rx="2" />
        <rect x="40" y="72" width="12" height="16" rx="2" />
        {/* Arms resting */}
        <rect x="10" y="30" width="14" height="6" rx="2" />
        <rect x="8" y="36" width="12" height="8" rx="2" />
        <rect x="54" y="30" width="14" height="6" rx="2" />
        <rect x="56" y="36" width="12" height="8" rx="2" />
        {/* TV */}
        <rect x="102" y="16" width="60" height="48" rx="3" />
        <rect className="mini-tv-screen" x="107" y="21" width="50" height="34" rx="2" fill="rgba(0,255,255,0.08)" />
        {/* TV scan lines */}
        <line x1="107" y1="29" x2="157" y2="29" strokeWidth="0.8" opacity="0.5" />
        <line x1="107" y1="37" x2="157" y2="37" strokeWidth="0.8" opacity="0.5" />
        <line x1="107" y1="45" x2="157" y2="45" strokeWidth="0.8" opacity="0.5" />
        {/* TV stand */}
        <rect x="127" y="64" width="8" height="16" rx="1" />
        <rect x="115" y="80" width="32" height="5" rx="2" />
        {/* TV antenna */}
        <line x1="112" y1="16" x2="104" y2="5" />
        <line x1="148" y1="16" x2="156" y2="5" />
        <circle cx="104" cy="4" r="2" fill="#0ff" stroke="none" />
        <circle cx="156" cy="4" r="2" fill="#0ff" stroke="none" />
      </g>
    </svg>
  );
}

// ── 4. Coffee ─────────────────────────────────────────────────────────────────
function MiniRobotCoffee() {
  return (
    <svg viewBox="0 0 80 108" className="mini-robot" aria-label="Robot drinking coffee">
      <g {...S}>
        <line x1="0" y1="103" x2="80" y2="103" strokeWidth="1" />
        <MiniHead cx={40} y={6} />
        <MiniBody cx={40} y={24} />
        <MiniLegs cx={40} y={53} />
        {/* Left arm resting */}
        <rect x="12" y="28" width="14" height="6" rx="2" />
        <rect x="10" y="34" width="12" height="8" rx="2" />
        {/* Right arm raised holding mug */}
        <g className="mini-coffee-arm">
          <rect x="54" y="24" width="7" height="18" rx="2" />
          <rect x="56" y="8" width="7" height="18" rx="2" />
        </g>
        {/* Mug */}
        <rect x="52" y="0" width="18" height="14" rx="2" />
        <path d="M70,3 Q76,3 76,7 Q76,11 70,11" strokeWidth="1.5" />
        {/* Steam */}
        <path className="mini-steam" d="M57,0 C55,-3 59,-6 57,-10" strokeWidth="1.5" />
        <path className="mini-steam" d="M63,0 C61,-3 65,-7 63,-11" strokeWidth="1.5" style={{ animationDelay: "0.4s" }} />
        <path className="mini-steam" d="M69,0 C67,-3 71,-6 69,-10" strokeWidth="1.5" style={{ animationDelay: "0.8s" }} />
      </g>
    </svg>
  );
}

// ── 5. Sleeping ───────────────────────────────────────────────────────────────
function MiniRobotSleeping() {
  return (
    <svg viewBox="0 0 128 95" className="mini-robot" aria-label="Robot sleeping at desk">
      <g {...S}>
        {/* Desk (same as laptop) */}
        <rect x="2" y="68" width="124" height="5" rx="2" />
        <line x1="15" y1="73" x2="15" y2="95" />
        <line x1="113" y1="73" x2="113" y2="95" />
        {/* Robot body (seated, slumped forward) */}
        <rect x="50" y="38" width="28" height="28" rx="2" />
        <circle cx="64" cy="52" r="5" />
        <circle cx="64" cy="52" r="2.5" fill="#0ff" stroke="none" />
        {/* Neck going forward */}
        <rect x="60" y="62" width="8" height="7" rx="1" />
        {/* Head resting sideways on desk */}
        <rect x="44" y="55" width="32" height="14" rx="2" />
        {/* Closed eyes */}
        <line x1="51" y1="62" x2="57" y2="62" strokeWidth="1.5" />
        <line x1="63" y1="62" x2="69" y2="62" strokeWidth="1.5" />
        {/* Drooping antenna */}
        <path d="M64,55 Q68,48 66,42" strokeWidth="1.5" fill="none" />
        <circle cx="66" cy="41" r="3" fill="#0ff" stroke="none" />
        {/* Arms spread on desk */}
        <rect x="6" y="60" width="38" height="6" rx="2" />
        <rect x="84" y="60" width="38" height="6" rx="2" />
        {/* ZZZ floating */}
        <text className="mini-zzz" x="84" y="52" fontSize="9" fontFamily="monospace" fill="#0ff" stroke="none">Z</text>
        <text className="mini-zzz" x="92" y="43" fontSize="11" fontFamily="monospace" fill="#0ff" stroke="none" style={{ animationDelay: "0.6s" }}>Z</text>
        <text className="mini-zzz" x="101" y="32" fontSize="13" fontFamily="monospace" fill="#0ff" stroke="none" style={{ animationDelay: "1.2s" }}>Z</text>
      </g>
    </svg>
  );
}

// ── Strip ─────────────────────────────────────────────────────────────────────
function MiniRobotsStrip() {
  const scenes = [
    { Robot: MiniRobotLaptop,  label: "Working"      },
    { Robot: MiniRobotCricket, label: "Cricket"      },
    { Robot: MiniRobotTV,      label: "Chilling"     },
    { Robot: MiniRobotCoffee,  label: "Coffee Break" },
    { Robot: MiniRobotSleeping,label: "Sleeping"     },
  ];
  return (
    <div className="mini-robots-strip">
      {scenes.map(({ Robot, label }) => (
        <div key={label} className="mini-scene">
          <Robot />
          <span className="mini-label">{label}</span>
        </div>
      ))}
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function HeroMatrix() {
  const canvasRef = useRef(null);
  const [typedText, setTypedText] = useState("");
  const typingSpeed = 100;
  const fullText = "Hi, I am Aditya\nScroll down to know more about me";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setTypedText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(timer);
    }, typingSpeed);
    return () => clearInterval(timer);
  }, [fullText]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const letters =
      "アァイィウヴエェオカガキギクグケゲコゴサザシジスズセゼソゾタダチヂッツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモヤユヨラリルレロワヲンABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const fontSize = 14;
    let columns, drops;

    const setup = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      columns = Math.floor(canvas.width / fontSize);
      drops = Array.from({ length: columns }, () => 1);
    };
    setup();

    function draw() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#0F0";
      ctx.font = `${fontSize}px monospace`;
      for (let i = 0; i < drops.length; i++) {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      }
    }

    const interval = setInterval(draw, 33);
    window.addEventListener("resize", setup);
    return () => { clearInterval(interval); window.removeEventListener("resize", setup); };
  }, []);

  return (
    <section className="hero-matrix">
      <canvas ref={canvasRef} />
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-name">{typedText}</h1>
        </div>
        <div className="hero-robot-wrapper">
          <CyberRobot />
        </div>
      </div>
      <MiniRobotsStrip />
    </section>
  );
}
