import React from "react";

export default function OmnitrixItem() {
  return (
    <div className="relative w-64 h-64 select-none group pointer-events-auto">
      <svg
        viewBox="0 0 240 240"
        className="w-full h-full drop-shadow-desk group-hover:drop-shadow-lifted transition-all duration-200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Glowing Green Omnitrix Core Gradient */}
          <radialGradient id="omnitrixGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#4ade80" />
            <stop offset="50%" stopColor="#22c55e" />
            <stop offset="85%" stopColor="#15803d" />
            <stop offset="100%" stopColor="#052e16" />
          </radialGradient>
          {/* Metallic Bezel Gradient */}
          <linearGradient id="bezelMetal" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#94a3b8" />
            <stop offset="35%" stopColor="#475569" />
            <stop offset="70%" stopColor="#64748b" />
            <stop offset="100%" stopColor="#1e293b" />
          </linearGradient>
          {/* Shadow Filter */}
          <filter id="omniShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="2" dy="5" stdDeviation="4" floodColor="#000" floodOpacity="0.4" />
          </filter>
        </defs>

        {/* Cyber Gauntlet / Wrist Strap Base (Black/Dark Slate) */}
        <path
          d="M 50 10 L 190 10 L 210 230 L 30 230 Z"
          fill="#0f172a"
          stroke="#1e293b"
          strokeWidth="3"
          filter="url(#omniShadow)"
        />

        {/* Strap Tread Lines */}
        {[30, 45, 195, 210].map((y, i) => (
          <line key={i} x1="42" y1={y} x2="198" y2={y} stroke="#334155" strokeWidth="2.5" />
        ))}

        {/* Outer Circular Housing Ring */}
        <circle cx="120" cy="120" r="88" fill="#1e293b" stroke="#334155" strokeWidth="4" />

        {/* Outer Metallic Bezel Ring */}
        <circle cx="120" cy="120" r="76" fill="url(#bezelMetal)" stroke="#0f172a" strokeWidth="3" />

        {/* Bezel Rotation Grip Notches */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
          <g key={i} transform={`rotate(${deg} 120 120)`}>
            <rect x="117" y="44" width="6" height="12" rx="2" fill="#0f172a" />
          </g>
        ))}

        {/* Four Side Activation Diodes (Neon Green) */}
        <circle cx="120" cy="36" r="4" fill="#4ade80" className="animate-ping" />
        <circle cx="204" cy="120" r="4" fill="#4ade80" />
        <circle cx="120" cy="204" r="4" fill="#4ade80" />
        <circle cx="36" cy="120" r="4" fill="#4ade80" />

        {/* Inner Dial Face (Dark Gunmetal) */}
        <circle cx="120" cy="120" r="62" fill="#022c22" stroke="#16a34a" strokeWidth="2.5" />

        {/* Glowing Energy Core Center */}
        <circle cx="120" cy="120" r="54" fill="url(#omnitrixGlow)" />

        {/* Iconic Omnitrix Black Hourglass Triangles */}
        {/* Top Triangle */}
        <polygon
          points="120,118 78,74 162,74"
          fill="#0a0a0a"
          stroke="#15803d"
          strokeWidth="2"
        />
        {/* Bottom Triangle */}
        <polygon
          points="120,122 78,166 162,166"
          fill="#0a0a0a"
          stroke="#15803d"
          strokeWidth="2"
        />

        {/* Core Glowing Diamond Highlight */}
        <polygon
          points="120,112 128,120 120,128 112,120"
          fill="#86efac"
          filter="drop-shadow(0 0 6px #4ade80)"
        />

        {/* Futuristic Status Tag / Floating Pill */}
        <g transform="translate(45, 184)">
          <rect
            x="0"
            y="0"
            width="150"
            height="22"
            rx="5"
            fill="#052e16"
            stroke="#22c55e"
            strokeWidth="1.5"
          />
          <text
            x="14"
            y="15"
            fontFamily="'Space Mono', monospace"
            fontSize="8"
            fontWeight="bold"
            fill="#4ade80"
            letterSpacing="0.5"
          >
            [ SIH // OMNITRIX AI ]
          </text>
        </g>

        {/* Handwritten Label taped to strap */}
        <g transform="translate(30, 20) rotate(-4)">
          <rect x="0" y="0" width="118" height="18" rx="2" fill="#fef08a" opacity="0.9" />
          <text
            x="6"
            y="13"
            fontFamily="'Caveat', cursive"
            fontSize="13"
            fontWeight="bold"
            fill="#1e293b"
          >
            Sovereign AI Workbench ⚡
          </text>
        </g>
      </svg>
    </div>
  );
}
