import React from "react";

export default function FloppyDiskItem() {
  return (
    <div className="relative w-64 h-68 select-none group pointer-events-auto">
      <svg
        viewBox="0 0 240 250"
        className="w-full h-full drop-shadow-desk group-hover:drop-shadow-lifted transition-all duration-200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Metallic gradient for shutter slider */}
          <linearGradient id="metalShutter" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e2e8f0" />
            <stop offset="40%" stopColor="#94a3b8" />
            <stop offset="70%" stopColor="#cbd5e1" />
            <stop offset="100%" stopColor="#64748b" />
          </linearGradient>
          {/* Disk casing texture gradient */}
          <linearGradient id="diskBody" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e1b2e" />
            <stop offset="100%" stopColor="#0f0c1b" />
          </linearGradient>
        </defs>

        {/* Outer Disk Body (Classic 3.5" Floppy shape with cut corner) */}
        <path
          d="M 15 15 L 205 15 L 225 35 L 225 235 L 15 235 Z"
          fill="url(#diskBody)"
          stroke="#4c1d95"
          strokeWidth="3"
        />

        {/* Top Shutter Slider (Metal Slider) */}
        <rect
          x="55"
          y="15"
          width="110"
          height="80"
          rx="3"
          fill="url(#metalShutter)"
          stroke="#475569"
          strokeWidth="2"
        />

        {/* Shutter Window Cutout exposing magnetic disk hole */}
        <rect x="75" y="30" width="22" height="50" rx="3" fill="#0f0c1b" />
        <line x1="86" y1="30" x2="86" y2="80" stroke="#334155" strokeWidth="2" />

        {/* Disk center arrow indicator */}
        <path
          d="M 195 25 L 205 35 L 195 45"
          stroke="#c084fc"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* Sticker Label Area */}
        <rect
          x="35"
          y="105"
          width="170"
          height="115"
          rx="5"
          fill="#fdf4ff"
          stroke="#c084fc"
          strokeWidth="1.5"
        />

        {/* Purple header stripe on sticker */}
        <rect x="35" y="105" width="170" height="24" rx="3" fill="#6d28d9" />
        <text
          x="44"
          y="121"
          fontFamily="'Space Mono', monospace"
          fontSize="9"
          fontWeight="bold"
          fill="#ffffff"
          letterSpacing="1"
        >
          NOICEE // AI COMMAND
        </text>
        <circle cx="190" cy="117" r="4" fill="#a855f7" className="animate-pulse" />

        {/* AI Brain / Vector Robot Doodle */}
        <g transform="translate(44, 138)">
          <rect x="0" y="2" width="34" height="34" rx="8" fill="#ede9fe" stroke="#7c3aed" strokeWidth="1.5" />
          <path d="M 12 14 L 22 14 M 17 9 L 17 14" stroke="#6d28d9" strokeWidth="2" strokeLinecap="round" />
          <rect x="9" y="14" width="16" height="12" rx="3" fill="#6d28d9" />
          <circle cx="13" cy="19" r="1.5" fill="#f5f3ff" />
          <circle cx="21" cy="19" r="1.5" fill="#f5f3ff" />
          <line x1="13" y1="23" x2="21" y2="23" stroke="#f5f3ff" strokeWidth="1" strokeLinecap="round" />
        </g>

        {/* Real Repository Specs on Label */}
        <text
          x="88"
          y="148"
          fontFamily="'Caveat', cursive"
          fontSize="19"
          fontWeight="bold"
          fill="#4c1d95"
        >
          Noicee Dashboard
        </text>
        <text
          x="88"
          y="164"
          fontFamily="'Patrick Hand', cursive"
          fontSize="12"
          fill="#334155"
        >
          • Flask + Gemini AI & Ollama
        </text>
        <text
          x="88"
          y="178"
          fontFamily="'Patrick Hand', cursive"
          fontSize="12"
          fill="#334155"
        >
          • React 19 + Three.js 3D
        </text>

        {/* Interactive Badge / Click Cue */}
        <g transform="translate(42, 192)">
          <rect
            x="0"
            y="0"
            width="156"
            height="21"
            rx="4"
            fill="#5b21b6"
          />
          <text
            x="14"
            y="14"
            fontFamily="'Space Mono', monospace"
            fontSize="8.5"
            fill="#f5f3ff"
            fontWeight="bold"
          >
            [ OPEN NOICEE GDD ↗ ]
          </text>
        </g>

        {/* Write-protect notch slider hole at bottom left */}
        <rect x="25" y="215" width="12" height="12" rx="2" fill="#334155" />
        <rect x="27" y="217" width="8" height="8" rx="1" fill="#0f0c1b" />
      </svg>
    </div>
  );
}
