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
          {/* Radial gradient for hot brewed coffee surface */}
          <radialGradient id="coffeeSurface" cx="45%" cy="45%" r="55%">
            <stop offset="0%" stopColor="#451a03" />
            <stop offset="60%" stopColor="#290e02" />
            <stop offset="100%" stopColor="#170601" />
          </radialGradient>
          {/* Coaster cardboard pattern */}
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
          {/* Coaster text logo */}
          <text
            x="24"
            y="32"
            fontFamily="'Space Mono', monospace"
            fontSize="9"
            fontWeight="bold"
            fill="#92400e"
            letterSpacing="1"
          >
            NYREN // DEV FUEL
          </text>
          <text
            x="24"
            y="165"
            fontFamily="'Patrick Hand', cursive"
            fontSize="12"
            fill="#b45309"
          >
            Click mug for bio & contacts ☕
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
        {/* Mug Inner Rim Wall */}
        <circle cx="100" cy="100" r="54" fill="#334155" />

        {/* Coffee Liquid Surface */}
        <circle cx="100" cy="100" r="50" fill="url(#coffeeSurface)" />

        {/* Coffee Crema Ring & Latte Art Heart */}
        <circle cx="100" cy="100" r="49" fill="none" stroke="#b45309" strokeWidth="2.5" opacity="0.4" />
        
        {/* Latte Art Foam */}
        <g transform="translate(100, 96) scale(0.9)">
          <path
            d="M 0 16 C -18 -8, -32 6, 0 -22 C 32 6, 18 -8, 0 16 Z"
            fill="#fef3c7"
            opacity="0.9"
          />
          <path
            d="M 0 20 L 0 -18"
            stroke="#b45309"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.6"
          />
          <circle cx="0" cy="-20" r="3" fill="#fef3c7" />
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

        {/* Little Floating Pill */}
        <rect
          x="48"
          y="180"
          width="104"
          height="20"
          rx="10"
          fill="#1e293b"
          stroke="#475569"
          strokeWidth="1.5"
        />
        <text
          x="60"
          y="194"
          fontFamily="'Space Mono', monospace"
          fontSize="8"
          fontWeight="bold"
          fill="#38bdf8"
        >
          [ ABOUT NYREN ]
        </text>
      </svg>
    </div>
  );
}
