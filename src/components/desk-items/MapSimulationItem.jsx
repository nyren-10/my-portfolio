import React from "react";

export default function MapSimulationItem() {
  return (
    <div className="relative w-72 h-64 select-none group pointer-events-auto">
      <svg
        viewBox="0 0 280 250"
        className="w-full h-full drop-shadow-desk group-hover:drop-shadow-lifted transition-all duration-200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Card shadow */}
          <filter id="mapShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="3" dy="6" stdDeviation="4" floodColor="#000" floodOpacity="0.35" />
          </filter>

          {/* Paper texture gradient */}
          <linearGradient id="mapPaper" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0e2a24" />
            <stop offset="50%" stopColor="#0a221d" />
            <stop offset="100%" stopColor="#071a16" />
          </linearGradient>

          {/* Crease shadow for folded map realism */}
          <linearGradient id="foldV" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#000000" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.25" />
          </linearGradient>

          <linearGradient id="foldH" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#000000" stopOpacity="0.25" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.2" />
          </linearGradient>

          {/* Hexagon pattern for H3 Grid */}
          <pattern id="h3Hex" width="34" height="58.8" patternUnits="userSpaceOnUse">
            <polygon
              points="17,0 34,9.8 34,29.4 17,39.2 0,29.4 0,9.8"
              fill="none"
              stroke="#2dd4bf"
              strokeWidth="0.8"
              opacity="0.28"
            />
            <polygon
              points="17,39.2 34,49 34,68.6 17,78.4 0,68.6 0,49"
              fill="none"
              stroke="#2dd4bf"
              strokeWidth="0.8"
              opacity="0.28"
            />
          </pattern>
        </defs>

        {/* ======================================================== */}
        {/* UNDERLYING FOLDED CORNER / SHADOW LAYER */}
        {/* ======================================================== */}
        <g transform="rotate(3 140 125)">
          <rect
            x="14"
            y="12"
            width="252"
            height="226"
            rx="4"
            fill="#061612"
            stroke="#134e4a"
            strokeWidth="1.5"
            opacity="0.6"
          />
        </g>

        {/* ======================================================== */}
        {/* MAIN FOLDED FIELD MAP CANVAS */}
        {/* ======================================================== */}
        <g transform="rotate(-1.5 140 125)">
          {/* Base map sheet */}
          <rect
            x="12"
            y="10"
            width="256"
            height="230"
            rx="5"
            fill="url(#mapPaper)"
            stroke="#14b8a6"
            strokeWidth="2"
            filter="url(#mapShadow)"
          />

          {/* Subtle grid dots on sheet */}
          <rect x="16" y="14" width="248" height="222" rx="4" fill="url(#h3Hex)" />

          {/* Topographic elevation contour lines */}
          <path
            d="M 18 60 Q 70 45, 120 70 T 230 50"
            fill="none"
            stroke="#115e59"
            strokeWidth="1.2"
            strokeDasharray="4 3"
            opacity="0.7"
          />
          <path
            d="M 18 110 Q 80 90, 140 120 T 260 100"
            fill="none"
            stroke="#115e59"
            strokeWidth="1.2"
            strokeDasharray="4 3"
            opacity="0.7"
          />
          <path
            d="M 18 160 Q 90 145, 160 175 T 260 150"
            fill="none"
            stroke="#115e59"
            strokeWidth="1.2"
            strokeDasharray="4 3"
            opacity="0.7"
          />

          {/* River Watercourse with Flood Hazard Zone */}
          <path
            d="M 18 190 C 80 170, 100 110, 160 100 C 210 90, 230 40, 260 30"
            fill="none"
            stroke="#38bdf8"
            strokeWidth="8"
            strokeLinecap="round"
            opacity="0.8"
          />
          {/* Inner flowing stream line */}
          <path
            d="M 18 190 C 80 170, 100 110, 160 100 C 210 90, 230 40, 260 30"
            fill="none"
            stroke="#e0f2fe"
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity="0.9"
          />

          {/* Flood Inundation Buffer Zones (Hatching) */}
          <ellipse cx="140" cy="115" rx="35" ry="22" fill="#ef4444" opacity="0.2" />
          <ellipse cx="140" cy="115" rx="35" ry="22" stroke="#f87171" strokeWidth="1.2" strokeDasharray="3 3" fill="none" />
          <text x="122" y="118" fill="#fca5a5" fontSize="7" fontFamily="'Space Mono', monospace" fontWeight="bold">
            FLOOD ZONE
          </text>

          {/* Safe Population Zone (Teal H3 Hexagon Highlight) */}
          <polygon
            points="55,120 72,130 72,150 55,160 38,150 38,130"
            fill="#10b981"
            opacity="0.3"
            stroke="#34d399"
            strokeWidth="1.5"
          />
          <text x="43" y="142" fill="#6ee7b7" fontSize="7" fontFamily="'Space Mono', monospace" fontWeight="bold">
            SAFE H3
          </text>

          {/* OpenStreetMap Road Network Vectors */}
          <path
            d="M 45 40 L 95 65 L 175 45 L 235 75"
            stroke="#94a3b8"
            strokeWidth="2"
            fill="none"
            opacity="0.6"
          />
          <path
            d="M 95 65 L 110 145 L 185 165"
            stroke="#94a3b8"
            strokeWidth="1.8"
            fill="none"
            opacity="0.5"
          />
          <path
            d="M 45 140 L 110 145 L 210 205"
            stroke="#94a3b8"
            strokeWidth="2"
            fill="none"
            opacity="0.6"
          />

          {/* Calculated Evacuation Route (Bypassing Flood Zone to Shelter) */}
          <path
            d="M 50 140 C 65 175, 110 185, 170 190 C 200 192, 215 160, 220 135"
            stroke="#fbbf24"
            strokeWidth="3.2"
            strokeDasharray="6 4"
            fill="none"
            strokeLinecap="round"
          />
          {/* Evacuation Waypoint Arrow */}
          <polygon points="218,138 223,128 228,138" fill="#fbbf24" />

          {/* Emergency Evacuation Shelter Pin Marker */}
          <g transform="translate(210, 110)">
            <circle cx="12" cy="12" r="14" fill="#065f46" opacity="0.8" />
            <circle cx="12" cy="12" r="14" stroke="#34d399" strokeWidth="1.8" fill="none" />
            <circle cx="12" cy="12" r="18" stroke="#34d399" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" fill="none" />
            {/* Shelter Shield / Tent Icon */}
            <path d="M 6 17 L 12 7 L 18 17 Z" fill="#34d399" />
            <rect x="10" y="13" width="4" height="4" fill="#064e3b" />
          </g>

          {/* Technical Map Coordinates & Compass Header */}
          <g transform="translate(24, 22)">
            {/* Compass Rose */}
            <circle cx="14" cy="14" r="12" fill="#042f2e" stroke="#2dd4bf" strokeWidth="1" />
            <line x1="14" y1="4" x2="14" y2="24" stroke="#2dd4bf" strokeWidth="1.2" />
            <line x1="4" y1="14" x2="24" y2="14" stroke="#2dd4bf" strokeWidth="1.2" />
            <polygon points="14,4 12,14 16,14" fill="#fbbf24" />
            <text x="12" y="2" fill="#fbbf24" fontSize="7" fontFamily="'Space Mono', monospace" fontWeight="bold">N</text>

            <text x="32" y="11" fill="#2dd4bf" fontSize="8.5" fontFamily="'Space Mono', monospace" fontWeight="bold">
              FLOODSAFE // EVACUATION ENGINE
            </text>
            <text x="32" y="21" fill="#99f6e4" fontSize="7" fontFamily="'Space Mono', monospace">
              H3-L9 • 24.5854°N, 73.7125°E • UDAIPUR RUN
            </text>
          </g>

          {/* Vertical Fold Crease Line */}
          <rect x="138" y="10" width="4" height="230" fill="url(#foldV)" pointerEvents="none" />
          {/* Horizontal Fold Crease Line */}
          <rect x="12" y="123" width="256" height="4" fill="url(#foldH)" pointerEvents="none" />

          {/* Masking Tape Strip on Top Edge */}
          <g transform="translate(160, 5) rotate(4)">
            <rect x="0" y="0" width="70" height="15" fill="#fef08a" opacity="0.85" />
            <rect x="0" y="0" width="70" height="1" fill="#fde047" />
            <text x="6" y="11" fill="#713f12" fontSize="7" fontFamily="'Space Mono', monospace" fontWeight="bold">
              OSM GRAPH ROUTER
            </text>
          </g>

          {/* Bottom Interactive Action Badge / Sticker */}
          <g transform="translate(22, 205)">
            <rect x="0" y="0" width="125" height="24" rx="4" fill="#042f2e" stroke="#14b8a6" strokeWidth="1.5" />
            <circle cx="10" cy="12" r="3" fill="#10b981" />
            <text x="18" y="11" fill="#ffffff" fontSize="9" fontFamily="'Caveat', cursive" fontWeight="bold">
              FloodSafe Simulation
            </text>
            <text x="18" y="19" fill="#2dd4bf" fontSize="6.5" fontFamily="'Space Mono', monospace" fontWeight="bold">
              OSM • H3 Hex • Evacuation Routing
            </text>
          </g>

          <g transform="translate(165, 208)">
            <rect
              x="0"
              y="0"
              width="90"
              height="20"
              rx="4"
              fill="#0d9488"
              className="transition-colors hover:fill-teal-700"
            />
            <text
              x="8"
              y="13"
              fill="#ffffff"
              fontSize="7.5"
              fontFamily="'Space Mono', monospace"
              fontWeight="bold"
            >
              INSPECT SIM ↗
            </text>
          </g>
        </g>
      </svg>
    </div>
  );
}
