import React from "react";

export default function StickyNoteItem() {
  return (
    <div className="relative w-56 h-60 select-none group pointer-events-auto">
      <svg
        viewBox="0 0 220 230"
        className="w-full h-full drop-shadow-desk group-hover:drop-shadow-lifted transition-all duration-200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="stickyShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="2" dy="5" stdDeviation="3" floodColor="#000" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* Sticky Note Body (with dog-ear / curled bottom corner) */}
        <path
          d="M 15 15 L 195 15 L 195 180 L 165 210 L 15 210 Z"
          fill="#fef08a"
          stroke="#fde047"
          strokeWidth="1.5"
          filter="url(#stickyShadow)"
        />

        {/* Curled Corner Flap Shadow & Fold */}
        <polygon points="165,180 195,180 165,210" fill="#facc15" stroke="#eab308" strokeWidth="1" />
        <path d="M 165 180 L 195 210" stroke="#ca8a04" strokeWidth="1" opacity="0.4" />

        {/* Top Adhesive Band (slightly darker yellow) */}
        <rect x="15" y="15" width="180" height="28" fill="#fde047" opacity="0.6" />

        {/* Red Pushpin in top center */}
        <g transform="translate(100, 20)">
          <ellipse cx="6" cy="14" rx="8" ry="4" fill="#000" opacity="0.25" />
          <circle cx="5" cy="5" r="7" fill="#dc2626" />
          <circle cx="3" cy="3" r="3" fill="#f87171" />
          <circle cx="5" cy="5" r="2" fill="#7f1d1d" />
        </g>

        {/* Handwritten Note Content */}
        <text
          x="28"
          y="68"
          fontFamily="'Caveat', cursive"
          fontSize="22"
          fontWeight="bold"
          fill="#0f172a"
        >
          Dev Arsenal
        </text>

        {/* Checkmark items */}
        {[
          { text: "React & Next.js", y: 92 },
          { text: "TypeScript / Node", y: 114 },
          { text: "Tailwind & Motion", y: 136 },
          { text: "Firebase & Cloud", y: 158 },
        ].map((item, i) => (
          <g key={i} transform={`translate(28, ${item.y})`}>
            {/* Hand-drawn checkbox */}
            <rect x="0" y="-10" width="12" height="12" rx="2" fill="none" stroke="#0f172a" strokeWidth="1.5" />
            <path d="M 2 -4 L 5 0 L 12 -8" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <text
              x="18"
              y="0"
              fontFamily="'Patrick Hand', cursive"
              fontSize="14"
              fill="#1e293b"
            >
              {item.text}
            </text>
          </g>
        ))}

        {/* Interactive Cue Sticker */}
        <rect
          x="28"
          y="180"
          width="118"
          height="18"
          rx="4"
          fill="#16a34a"
        />
        <text
          x="35"
          y="192"
          fontFamily="'Space Mono', monospace"
          fontSize="8"
          fontWeight="bold"
          fill="#ffffff"
        >
          FULL LOADOUT ↗
        </text>
      </svg>
    </div>
  );
}
