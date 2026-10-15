import React from "react";

export default function PolaroidItem() {
  return (
    <div className="relative w-64 h-72 select-none group pointer-events-auto">
      <svg
        viewBox="0 0 250 280"
        className="w-full h-full drop-shadow-desk group-hover:drop-shadow-lifted transition-all duration-200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Polaroid paper drop shadow */}
          <filter id="photoShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="#000" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* Underlying rotated Polaroid photo for realistic "stack" feel */}
        <g transform="rotate(7 125 140)">
          <rect
            x="20"
            y="20"
            width="200"
            height="235"
            rx="5"
            fill="#ede8df"
            stroke="#d4cebe"
            strokeWidth="1.5"
          />
          <rect x="35" y="35" width="170" height="150" fill="#1e1e24" />
        </g>

        {/* Main Top Polaroid Photo */}
        <g transform="rotate(-3 125 140)">
          {/* Cardboard frame */}
          <rect
            x="18"
            y="12"
            width="205"
            height="242"
            rx="6"
            fill="#ffffff"
            stroke="#e2e8f0"
            strokeWidth="2"
            filter="url(#photoShadow)"
          />

          {/* Photo Inner Window with Synthwave / Creative Graphic */}
          <rect x="32" y="26" width="177" height="160" rx="3" fill="#090d16" />

          {/* Creative Graphic: Neon wireframe sphere & mountain grid */}
          <g transform="translate(32, 26)">
            {/* Horizon Glow */}
            <circle cx="88" cy="80" r="45" fill="#f43f5e" opacity="0.8" />
            <rect x="0" y="80" width="177" height="80" fill="#111827" />

            {/* Sun horizontal stripes */}
            {[45, 53, 61, 68, 74].map((y, i) => (
              <line key={i} x1="43" y1={y} x2="133" y2={y} stroke="#090d16" strokeWidth="2.5" />
            ))}

            {/* Perspective grid floor */}
            <path
              d="M 0 160 L 88 80 L 177 160 M 35 160 L 88 80 L 142 160 M 65 160 L 88 80 L 112 160"
              stroke="#06b6d4"
              strokeWidth="1.2"
              opacity="0.8"
            />
            {[90, 102, 118, 138].map((y, i) => (
              <line key={i} x1="0" y1={y} x2="177" y2={y} stroke="#06b6d4" strokeWidth="1" opacity="0.7" />
            ))}

            {/* Floating 3D polygon doodle */}
            <polygon
              points="88,25 118,45 88,65 58,45"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="2"
            />
            <polygon
              points="88,25 118,45 88,50"
              fill="#38bdf8"
              opacity="0.3"
            />
          </g>

          {/* Glossy glare line over photo */}
          <path
            d="M 35 28 L 195 28 L 80 180 Z"
            fill="white"
            opacity="0.06"
          />

          {/* Handwritten Polaroid Caption */}
          <text
            x="40"
            y="214"
            fontFamily="'Caveat', cursive"
            fontSize="21"
            fontWeight="bold"
            fill="#0f172a"
          >
            Creative Canvas & UI Lab ✨
          </text>
          <text
            x="40"
            y="232"
            fontFamily="'Patrick Hand', cursive"
            fontSize="12"
            fill="#64748b"
          >
            Three.js • Framer • Shaders
          </text>

          {/* Metallic Paperclip on top-left corner */}
          <g transform="translate(42, 6)">
            {/* Paperclip Loop */}
            <path
              d="M 8 0 L 8 36 A 6 6 0 0 0 20 36 L 20 8 A 10 10 0 0 0 0 8 L 0 42 A 14 14 0 0 0 28 42 L 28 12"
              stroke="#64748b"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M 8 0 L 8 36 A 6 6 0 0 0 20 36 L 20 8 A 10 10 0 0 0 0 8 L 0 42 A 14 14 0 0 0 28 42 L 28 12"
              stroke="#e2e8f0"
              strokeWidth="1.2"
              strokeLinecap="round"
              fill="none"
            />
          </g>

          {/* Click to inspect sticker */}
          <rect
            x="132"
            y="226"
            width="78"
            height="18"
            rx="4"
            fill="#6366f1"
          />
          <text
            x="140"
            y="238"
            fontFamily="'Space Mono', monospace"
            fontSize="8"
            fontWeight="bold"
            fill="#ffffff"
          >
            VIEW LAB ↗
          </text>
        </g>
      </svg>
    </div>
  );
}
