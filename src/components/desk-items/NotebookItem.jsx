import React from "react";

export default function NotebookItem() {
  return (
    <div className="relative w-68 h-84 select-none group pointer-events-auto">
      {/* Notebook Paper with Spiral & Tape */}
      <svg
        viewBox="0 0 260 330"
        className="w-full h-full drop-shadow-desk group-hover:drop-shadow-lifted transition-all duration-200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="notebookGrid"
            width="14"
            height="14"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 14 0 L 0 0 0 14"
              fill="none"
              stroke="#cfd8dc"
              strokeWidth="0.8"
              opacity="0.85"
            />
          </pattern>
          <filter id="spiralShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="1" dy="2" stdDeviation="1" floodColor="#000" floodOpacity="0.3" />
          </filter>
        </defs>

        {/* Notebook Cover Back Shadow / Thickness */}
        <rect x="18" y="10" width="232" height="312" rx="8" fill="#1e293b" />
        <rect x="22" y="6" width="230" height="312" rx="6" fill="#334155" />

        {/* Top Paper Page with Grid Pattern */}
        <rect x="28" y="2" width="224" height="314" rx="4" fill="#fafafa" />
        <rect x="28" y="2" width="224" height="314" rx="4" fill="url(#notebookGrid)" />

        {/* Left Margin Red Rule Line */}
        <line x1="60" y1="2" x2="60" y2="316" stroke="#f87171" strokeWidth="1.2" opacity="0.75" />

        {/* Spiral Binding Holes & Metallic Rings */}
        {[20, 50, 80, 110, 140, 170, 200, 230, 260, 290, 310].map((y, i) => (
          <g key={i}>
            <circle cx="34" cy={y} r="4" fill="#475569" opacity="0.6" />
            <circle cx="34" cy={y} r="3" fill="#1e293b" />
            <path
              d={`M 14 ${y - 4} C 8 ${y - 2}, 8 ${y + 6}, 36 ${y + 3}`}
              stroke="#94a3b8"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
              filter="url(#spiralShadow)"
            />
            <path
              d={`M 16 ${y - 3} C 12 ${y - 1}, 12 ${y + 4}, 34 ${y + 2}`}
              stroke="#f1f5f9"
              strokeWidth="1"
              strokeLinecap="round"
              fill="none"
            />
          </g>
        ))}

        {/* Washi Tape Strip at Top-Right */}
        <polygon
          points="180,0 240,-2 238,22 178,20"
          fill="#fbbf24"
          opacity="0.8"
          transform="rotate(3 210 10)"
        />

        {/* Hand-drawn CAMPUS BUS DOODLE */}
        <g transform="translate(75, 40)">
          {/* Bus Body */}
          <rect
            x="0"
            y="12"
            width="135"
            height="70"
            rx="12"
            fill="#facc15"
            stroke="#1e293b"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          {/* Bus Roof Bump */}
          <rect
            x="18"
            y="6"
            width="90"
            height="10"
            rx="4"
            fill="#eab308"
            stroke="#1e293b"
            strokeWidth="2.5"
          />

          {/* Front Windshield */}
          <rect
            x="96"
            y="20"
            width="32"
            height="30"
            rx="5"
            fill="#e0f2fe"
            stroke="#1e293b"
            strokeWidth="2.5"
          />
          {/* Side Windows */}
          <rect x="12" y="20" width="24" height="22" rx="3" fill="#e0f2fe" stroke="#1e293b" strokeWidth="2" />
          <rect x="42" y="20" width="24" height="22" rx="3" fill="#e0f2fe" stroke="#1e293b" strokeWidth="2" />
          <rect x="72" y="20" width="18" height="22" rx="3" fill="#e0f2fe" stroke="#1e293b" strokeWidth="2" />

          {/* Window Reflections */}
          <line x1="98" y1="24" x2="115" y2="44" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="14" y1="23" x2="26" y2="38" stroke="#fff" strokeWidth="2" strokeLinecap="round" />

          {/* Bus Headlight */}
          <circle cx="132" cy="62" r="5" fill="#fef08a" stroke="#1e293b" strokeWidth="2" />
          {/* Bus Taillight */}
          <rect x="-2" y="58" width="5" height="10" rx="2" fill="#ef4444" stroke="#1e293b" strokeWidth="1.5" />

          {/* Wheels */}
          <g>
            <circle cx="32" cy="82" r="13" fill="#1e293b" />
            <circle cx="32" cy="82" r="5" fill="#94a3b8" stroke="#0f172a" strokeWidth="2" />
            <circle cx="106" cy="82" r="13" fill="#1e293b" />
            <circle cx="106" cy="82" r="5" fill="#94a3b8" stroke="#0f172a" strokeWidth="2" />
          </g>

          {/* Destination Board */}
          <rect x="94" y="14" width="34" height="6" rx="2" fill="#0f172a" />
          <text x="96" y="19" fill="#22c55e" fontSize="5" fontFamily="monospace" fontWeight="bold">CAMPUS LIVE</text>
        </g>

        {/* Hand-drawn Route Map & Doodles */}
        <g transform="translate(68, 150)">
          <path
            d="M 10 25 Q 50 5, 85 30 T 150 18"
            stroke="#3b82f6"
            strokeWidth="3"
            strokeDasharray="4 3"
            fill="none"
          />
          <circle cx="10" cy="25" r="4.5" fill="#3b82f6" stroke="#fff" strokeWidth="1.5" />
          <circle cx="85" cy="30" r="4.5" fill="#10b981" stroke="#fff" strokeWidth="1.5" />
          <circle cx="150" cy="18" r="4.5" fill="#ef4444" stroke="#fff" strokeWidth="1.5" />
          <text x="75" y="42" fill="#64748b" fontSize="8" fontFamily="'Patrick Hand', cursive">Hostel -&gt; Campus</text>
        </g>

        {/* Handwritten Title & Real Project Description */}
        <text
          x="72"
          y="222"
          fontFamily="'Caveat', cursive"
          fontSize="24"
          fontWeight="bold"
          fill="#0f172a"
        >
          BusBuddy Platform
        </text>
        <text
          x="72"
          y="240"
          fontFamily="'Patrick Hand', cursive"
          fontSize="12.5"
          fill="#334155"
        >
          • Complete College Bus Tracking System
        </text>
        <text
          x="72"
          y="256"
          fontFamily="'Patrick Hand', cursive"
          fontSize="12.5"
          fill="#334155"
        >
          • Student App • Driver GPS • Admin
        </text>
        <text
          x="72"
          y="272"
          fontFamily="'Patrick Hand', cursive"
          fontSize="12.5"
          fill="#334155"
        >
          • WebSockets • Node/Express • Postgres
        </text>
        <text
          x="72"
          y="288"
          fontFamily="'Caveat', cursive"
          fontSize="13"
          fontWeight="bold"
          fill="#b45309"
        >
          Idea, Lead Dev & Full-Stack + DevOps
        </text>

        {/* Interactive Badge / Click Cue */}
        <rect
          x="72"
          y="298"
          width="130"
          height="19"
          rx="4"
          fill="#0284c7"
        />
        <text
          x="80"
          y="311"
          fontFamily="'Space Mono', monospace"
          fontSize="8.5"
          fill="#ffffff"
          fontWeight="bold"
        >
          FULL ECOSYSTEM GDD ↗
        </text>
      </svg>
    </div>
  );
}
