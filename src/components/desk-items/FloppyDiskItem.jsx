import React from "react";

export default function FloppyDiskItem() {
  return (
    <div className="relative w-60 h-64 select-none group pointer-events-auto">
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
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
        </defs>

        {/* Outer Disk Body (Classic 3.5" Floppy shape with cut corner) */}
        <path
          d="M 15 15 L 205 15 L 225 35 L 225 235 L 15 235 Z"
          fill="url(#diskBody)"
          stroke="#334155"
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
        <rect x="75" y="30" width="22" height="50" rx="3" fill="#0f172a" />
        <line x1="86" y1="30" x2="86" y2="80" stroke="#334155" strokeWidth="2" />

        {/* Disk center arrow indicator */}
        <path
          d="M 195 25 L 205 35 L 195 45"
          stroke="#94a3b8"
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
          fill="#fef08a"
          stroke="#eab308"
          strokeWidth="1.5"
        />

        {/* Red header stripe on sticker */}
        <rect x="35" y="105" width="170" height="24" rx="3" fill="#dc2626" />
        <text
          x="44"
          y="121"
          fontFamily="'Space Mono', monospace"
          fontSize="9"
          fontWeight="bold"
          fill="#ffffff"
          letterSpacing="1"
        >
          FIREBASE CLOUD SYS
        </text>
        <circle cx="190" cy="117" r="4" fill="#22c55e" className="animate-pulse" />

        {/* Hand-drawn Firebase Flame Doodle */}
        <g transform="translate(45, 138)">
          {/* Flame background */}
          <path
            d="M 14 36 C 5 36, 0 30, 0 20 C 0 8, 12 2, 14 0 C 16 6, 18 10, 24 12 C 26 5, 29 2, 33 0 C 35 6, 35 14, 30 20 C 38 22, 38 36, 14 36 Z"
            fill="#f97316"
            stroke="#c2410c"
            strokeWidth="1.5"
          />
          {/* Flame inner yellow core */}
          <path
            d="M 14 34 C 8 34, 5 30, 5 22 C 5 13, 14 8, 14 8 C 14 12, 16 15, 20 16 C 22 12, 23 10, 26 8 C 28 13, 27 18, 23 22 C 28 24, 27 34, 14 34 Z"
            fill="#fde047"
          />
        </g>

        {/* Handwritten Specs on Label */}
        <text
          x="90"
          y="146"
          fontFamily="'Caveat', cursive"
          fontSize="18"
          fontWeight="bold"
          fill="#1e293b"
        >
          Backend & APIs
        </text>
        <text
          x="90"
          y="163"
          fontFamily="'Patrick Hand', cursive"
          fontSize="12"
          fill="#334155"
        >
          • Cloud Firestore
        </text>
        <text
          x="90"
          y="178"
          fontFamily="'Patrick Hand', cursive"
          fontSize="12"
          fill="#334155"
        >
          • Functions v2 & Auth
        </text>

        {/* Interactive Badge / Click Cue */}
        <g transform="translate(45, 190)">
          <rect
            x="0"
            y="0"
            width="150"
            height="22"
            rx="4"
            fill="#0f172a"
          />
          <text
            x="20"
            y="15"
            fontFamily="'Space Mono', monospace"
            fontSize="9"
            fill="#38bdf8"
            fontWeight="bold"
          >
            [ READ ARCHITECTURE ]
          </text>
        </g>

        {/* Write-protect notch slider hole at bottom left */}
        <rect x="25" y="215" width="12" height="12" rx="2" fill="#334155" />
        <rect x="27" y="217" width="8" height="8" rx="1" fill="#0f172a" />
      </svg>
    </div>
  );
}
