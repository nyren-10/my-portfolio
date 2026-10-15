import React from "react";

export default function CoffeeMugItem() {
  return (
    <div className="relative w-56 h-56 select-none group pointer-events-auto">
      <svg
        viewBox="0 0 220 220"
        className="w-full h-full drop-shadow-desk group-hover:drop-shadow-lifted transition-all duration-200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="coffeeSurface" cx="45%" cy="45%" r="55%">
            <stop offset="0%" stopColor="#451a03" />
            <stop offset="60%" stopColor="#290e02" />
            <stop offset="100%" stopColor="#170601" />
          </radialGradient>
          <radialGradient id="coasterTexture" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fef3c7" />
            <stop offset="100%" stopColor="#fde68a" />
          </radialGradient>
        </defs>

        {/* Paper Napkin / Cardboard Coaster Under Mug */}
        <g transform="rotate(-6 100 100)">
          <rect
            x="10"
            y="10"
            width="170"
            height="170"
            rx="16"
            fill="url(#coasterTexture)"
            stroke="#d97706"
            strokeWidth="1.5"
            strokeDasharray="4 2"
          />
          <text
            x="20"
            y="30"
            fontFamily="'Space Mono', monospace"
            fontSize="8"
            fontWeight="bold"
            fill="#92400e"
            letterSpacing="0.8"
          >
            ARCHITECTURE & DATA FLOW
          </text>
          <text
            x="22"
            y="165"
            fontFamily="'Patrick Hand', cursive"
            fontSize="12"
            fill="#b45309"
          >
            Backend & LLM Blueprint Philosophy
          </text>
        </g>

        {/* Coffee Mug Cast Shadow */}
        <ellipse cx="112" cy="112" rx="64" ry="64" fill="#000" opacity="0.35" filter="blur(6px)" />

        {/* Ceramic Mug Handle */}
        <g transform="translate(142, 68)">
          <path
            d="M 12 10 C 44 14, 52 56, 16 66"
            stroke="#f8fafc"
            strokeWidth="16"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 12 10 C 44 14, 52 56, 16 66"
            stroke="#cbd5e1"
            strokeWidth="12"
            strokeLinecap="round"
            fill="none"
          />
        </g>

        {/* Ceramic Mug Outer Rim */}
        <circle cx="100" cy="100" r="64" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="4" />
        <circle cx="100" cy="100" r="54" fill="#334155" />

        {/* Coffee Liquid Surface */}
        <circle cx="100" cy="100" r="50" fill="url(#coffeeSurface)" />
        <circle cx="100" cy="100" r="49" fill="none" stroke="#b45309" strokeWidth="2.5" opacity="0.4" />
        
        {/* Latte Art: Network Nodes / Flow Diagram Doodle inside the foam */}
        <g transform="translate(100, 100) scale(0.85)">
          {/* Node 1 */}
          <circle cx="-18" cy="-10" r="6" fill="#fef3c7" stroke="#b45309" strokeWidth="1.5" />
          {/* Node 2 */}
          <circle cx="18" cy="-10" r="6" fill="#fef3c7" stroke="#b45309" strokeWidth="1.5" />
          {/* Node 3 (Bottom) */}
          <circle cx="0" cy="16" r="7" fill="#fef3c7" stroke="#b45309" strokeWidth="1.5" />
          
          {/* Connecting Data Flow lines */}
          <path d="M -12 -10 L 12 -10" stroke="#b45309" strokeWidth="1.5" strokeDasharray="2 2" />
          <path d="M -15 -4 L -3 12" stroke="#b45309" strokeWidth="1.5" />
          <path d="M 15 -4 L 3 12" stroke="#b45309" strokeWidth="1.5" />
        </g>

        {/* Animated Steam Trails */}
        <g className="opacity-40 animate-pulse pointer-events-none">
          <path
            d="M 85 75 Q 80 50, 90 35 T 85 15"
            stroke="#ffffff"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 115 78 Q 125 55, 115 38 T 120 18"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
        </g>

        {/* Floating Pill Tag */}
        <rect
          x="34"
          y="180"
          width="132"
          height="20"
          rx="10"
          fill="#1e293b"
          stroke="#475569"
          strokeWidth="1.5"
        />
        <text
          x="44"
          y="194"
          fontFamily="'Space Mono', monospace"
          fontSize="7.5"
          fontWeight="bold"
          fill="#38bdf8"
        >
          [ ARCHITECTURE & LLMS ]
        </text>
      </svg>
    </div>
  );
}
