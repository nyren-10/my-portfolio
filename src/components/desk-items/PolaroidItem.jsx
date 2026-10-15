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
          <rect x="35" y="35" width="170" height="150" fill="#0f172a" />
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

          {/* Photo Inner Window with Tower of Hanoi Illustration */}
          <rect x="32" y="26" width="177" height="160" rx="3" fill="#090d16" />

          {/* Visual Hanoi Simulation Graphic */}
          <g transform="translate(32, 26)">
            {/* Dark grid background */}
            <rect x="0" y="0" width="177" height="160" fill="#0f172a" />

            {/* Base platform */}
            <rect x="15" y="135" width="147" height="8" rx="2" fill="#334155" />

            {/* Rods A, B, C */}
            {/* Rod A */}
            <rect x="42" y="55" width="6" height="80" rx="3" fill="#64748b" />
            <text x="41" y="152" fill="#94a3b8" fontSize="8" fontFamily="'Space Mono', monospace" fontWeight="bold">A</text>

            {/* Rod B */}
            <rect x="86" y="55" width="6" height="80" rx="3" fill="#64748b" />
            <text x="85" y="152" fill="#94a3b8" fontSize="8" fontFamily="'Space Mono', monospace" fontWeight="bold">B</text>

            {/* Rod C */}
            <rect x="130" y="55" width="6" height="80" rx="3" fill="#64748b" />
            <text x="129" y="152" fill="#94a3b8" fontSize="8" fontFamily="'Space Mono', monospace" fontWeight="bold">C</text>

            {/* Disks stacked on Rod A (Actual hex spectrum from Nyren's code) */}
            {/* Largest Disk (Rose) */}
            <rect x="17" y="125" width="56" height="10" rx="3" fill="#FB7185" />
            {/* Amber Disk */}
            <rect x="21" y="114" width="48" height="10" rx="3" fill="#FBBF24" />
            {/* Fuchsia Disk */}
            <rect x="25" y="103" width="40" height="10" rx="3" fill="#E879F9" />
            {/* Violet Disk */}
            <rect x="29" y="92" width="32" height="10" rx="3" fill="#A78BFA" />

            {/* Moving Disk on Rod C (Teal Disk) */}
            <rect x="121" y="125" width="24" height="10" rx="3" fill="#2DD4BF" />

            {/* Curved Motion Arc of Sky Disk translating */}
            <path
              d="M 45 90 Q 88 35, 133 90"
              stroke="#38BDF8"
              strokeWidth="2"
              strokeDasharray="4 3"
              fill="none"
            />
            {/* Floating Sky-400 Disk mid-air */}
            <rect x="79" y="38" width="20" height="9" rx="3" fill="#38BDF8" stroke="#fff" strokeWidth="1" />

            {/* Top HUD badge */}
            <rect x="8" y="8" width="70" height="16" rx="4" fill="#1e293b" opacity="0.9" />
            <text x="14" y="19" fill="#2dd4bf" fontSize="8" fontFamily="'Space Mono', monospace" fontWeight="bold">2^n - 1 MOVES</text>
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
            Visual Hanoi Solver
          </text>
          <text
            x="40"
            y="232"
            fontFamily="'Patrick Hand', cursive"
            fontSize="12"
            fill="#64748b"
          >
            React 19 • Framer Motion • Recursion
          </text>

          {/* Metallic Paperclip on top-left corner */}
          <g transform="translate(42, 6)">
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
            fill="#0d9488"
          />
          <text
            x="139"
            y="238"
            fontFamily="'Space Mono', monospace"
            fontSize="8"
            fontWeight="bold"
            fill="#ffffff"
          >
            VIEW SOLVER ↗
          </text>
        </g>
      </svg>
    </div>
  );
}
