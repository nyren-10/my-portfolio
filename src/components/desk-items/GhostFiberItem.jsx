import React from "react";

export default function GhostFiberItem() {
  return (
    <div className="relative w-64 h-56 select-none group pointer-events-auto">
      <svg
        viewBox="0 0 250 200"
        className="w-full h-full drop-shadow-desk group-hover:drop-shadow-lifted transition-all duration-200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="shaderCardShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="2" dy="5" stdDeviation="3" floodColor="#000" floodOpacity="0.3" />
          </filter>
        </defs>

        {/* Dark Glass Specimen / Circuit Card Frame */}
        <rect
          x="12"
          y="10"
          width="226"
          height="175"
          rx="8"
          fill="#090d16"
          stroke="#06b6d4"
          strokeWidth="2"
          filter="url(#shaderCardShadow)"
        />

        {/* Grid dots on card */}
        <pattern id="cardDots" width="16" height="16" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="#155e75" opacity="0.6" />
        </pattern>
        <rect x="14" y="12" width="222" height="171" rx="6" fill="url(#cardDots)" />

        {/* Top Header Label */}
        <rect x="22" y="20" width="130" height="18" rx="4" fill="#083344" stroke="#0e7490" strokeWidth="1" />
        <text
          x="30"
          y="32"
          fontFamily="'Space Mono', monospace"
          fontSize="8"
          fontWeight="bold"
          fill="#22d3ee"
          letterSpacing="1"
        >
          OGL WEBGL // SHADER
        </text>

        {/* Glowing Fiber Strands Graphic */}
        <g transform="translate(18, 45)">
          <rect x="0" y="0" width="214" height="95" rx="5" fill="#030712" />
          
          {/* Glowing optical fiber curved paths */}
          <path
            d="M 10 80 Q 70 10, 110 50 T 200 20"
            stroke="#22d3ee"
            strokeWidth="3.5"
            strokeLinecap="round"
            filter="drop-shadow(0 0 6px #06b6d4)"
            fill="none"
          />
          <path
            d="M 20 90 Q 90 20, 130 65 T 195 40"
            stroke="#38bdf8"
            strokeWidth="2.5"
            strokeLinecap="round"
            filter="drop-shadow(0 0 4px #0284c7)"
            fill="none"
          />
          <path
            d="M 10 40 Q 60 90, 120 40 T 205 70"
            stroke="#67e8f9"
            strokeWidth="2"
            strokeLinecap="round"
            filter="drop-shadow(0 0 5px #06b6d4)"
            fill="none"
          />

          {/* Core glow nodes */}
          <circle cx="110" cy="50" r="4" fill="#ecfeff" filter="drop-shadow(0 0 8px #22d3ee)" />
          <circle cx="200" cy="20" r="3" fill="#ecfeff" filter="drop-shadow(0 0 6px #22d3ee)" />

          {/* GLSL Code Snippet in background */}
          <text x="12" y="22" fill="#155e75" fontSize="7" fontFamily="'Space Mono', monospace">gl_FragColor = vec4(glow, 1.0);</text>
        </g>

        {/* Card Footer Text */}
        <text
          x="24"
          y="160"
          fontFamily="'Caveat', cursive"
          fontSize="18"
          fontWeight="bold"
          fill="#ecfeff"
        >
          GhostFiber Visualizer ⚡
        </text>
        <text
          x="24"
          y="173"
          fontFamily="'Patrick Hand', cursive"
          fontSize="11"
          fill="#94a3b8"
        >
          React 19 • OGL WebGL • GLSL Strands
        </text>

        {/* Action button */}
        <rect x="145" y="152" width="85" height="18" rx="4" fill="#0891b2" />
        <text
          x="152"
          y="164"
          fontFamily="'Space Mono', monospace"
          fontSize="7.5"
          fill="#ffffff"
          fontWeight="bold"
        >
          INSPECT GLSL ↗
        </text>
      </svg>
    </div>
  );
}
