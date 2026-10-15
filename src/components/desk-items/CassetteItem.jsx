import React from "react";

export default function CassetteItem() {
  return (
    <div className="relative w-64 h-48 select-none group pointer-events-auto">
      <svg
        viewBox="0 0 250 170"
        className="w-full h-full drop-shadow-desk group-hover:drop-shadow-lifted transition-all duration-200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="cassetteShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="#000" floodOpacity="0.3" />
          </filter>
        </defs>

        {/* Outer Cassette Plastic Body */}
        <rect
          x="10"
          y="10"
          width="230"
          height="145"
          rx="10"
          fill="#1e293b"
          stroke="#0f172a"
          strokeWidth="3"
          filter="url(#cassetteShadow)"
        />

        {/* Four Corner Screws */}
        {[
          [20, 20],
          [230, 20],
          [20, 145],
          [230, 145],
        ].map(([cx, cy], i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r="3" fill="#64748b" />
            <line x1={cx - 2} y1={cy} x2={cx + 2} y2={cy} stroke="#334155" strokeWidth="1" />
          </g>
        ))}

        {/* Paper Label on Cassette */}
        <path
          d="M 25 24 L 225 24 L 210 120 L 40 120 Z"
          fill="#f8fafc"
          stroke="#cbd5e1"
          strokeWidth="1.5"
        />

        {/* Color stripe on label (Python Blue & Yellow) */}
        <rect x="25" y="24" width="200" height="12" fill="#2563eb" />
        <rect x="25" y="36" width="200" height="4" fill="#fbbf24" />

        <text
          x="32"
          y="33"
          fontFamily="'Space Mono', monospace"
          fontSize="7.5"
          fontWeight="bold"
          fill="#ffffff"
          letterSpacing="0.8"
        >
          SIDE A • PYTHON VOICE REC • 60 MIN
        </text>

        {/* Handwritten Title */}
        <text
          x="35"
          y="58"
          fontFamily="'Caveat', cursive"
          fontSize="17"
          fontWeight="bold"
          fill="#1e293b"
        >
          Speech Recognition
        </text>
        <text
          x="35"
          y="72"
          fontFamily="'Patrick Hand', cursive"
          fontSize="11"
          fill="#475569"
        >
          • pyttsx3 TTS • Google Speech en-in
        </text>

        {/* Center Transparent Tape Window */}
        <rect
          x="65"
          y="80"
          width="120"
          height="34"
          rx="4"
          fill="#0f172a"
          stroke="#475569"
          strokeWidth="1.5"
        />

        {/* Magnetic Tape Spools / Cog Wheels */}
        {/* Left Spool */}
        <g transform="translate(90, 97)">
          <circle cx="0" cy="0" r="14" fill="#334155" />
          <circle cx="0" cy="0" r="8" fill="#1e293b" />
          {[0, 60, 120, 180, 240, 300].map((deg, idx) => (
            <line
              key={idx}
              x1="0"
              y1="-8"
              x2="0"
              y2="-13"
              stroke="#cbd5e1"
              strokeWidth="2"
              transform={`rotate(${deg})`}
            />
          ))}
        </g>

        {/* Right Spool */}
        <g transform="translate(160, 97)">
          <circle cx="0" cy="0" r="14" fill="#334155" />
          <circle cx="0" cy="0" r="8" fill="#1e293b" />
          {[0, 60, 120, 180, 240, 300].map((deg, idx) => (
            <line
              key={idx}
              x1="0"
              y1="-8"
              x2="0"
              y2="-13"
              stroke="#cbd5e1"
              strokeWidth="2"
              transform={`rotate(${deg})`}
            />
          ))}
        </g>

        {/* Center tape bridge line */}
        <line x1="104" y1="97" x2="146" y2="97" stroke="#78350f" strokeWidth="6" />

        {/* Bottom Trapezoid Guide Area */}
        <polygon
          points="55,152 195,152 185,128 65,128"
          fill="#0f172a"
          stroke="#334155"
          strokeWidth="1.5"
        />
        <circle cx="85" cy="140" r="3.5" fill="#475569" />
        <circle cx="165" cy="140" r="3.5" fill="#475569" />

        {/* Interactive Cue Tag */}
        <g transform="translate(85, 128)">
          <rect x="0" y="0" width="80" height="15" rx="3" fill="#2563eb" />
          <text
            x="8"
            y="11"
            fontFamily="'Space Mono', monospace"
            fontSize="7"
            fill="#ffffff"
            fontWeight="bold"
          >
            [ PLAY AUDIO GDD ]
          </text>
        </g>
      </svg>
    </div>
  );
}
