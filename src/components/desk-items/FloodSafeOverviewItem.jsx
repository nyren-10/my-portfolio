import React from "react";

/**
 * FloodSafe Overview Site - Incident Command Clipboard Desk Item
 * Physical tactile emergency dispatch clipboard with pinned incident report,
 * caution hazard stripes, live telemetry badges, and link to floodsafe-overview.vercel.app.
 */
export default function FloodSafeOverviewItem() {
  return (
    <div className="relative w-64 h-76 select-none group pointer-events-auto">
      <svg
        viewBox="0 0 240 290"
        className="w-full h-full drop-shadow-desk group-hover:drop-shadow-lifted transition-all duration-200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Wood clipboard board gradient */}
          <linearGradient id="boardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#633919" />
            <stop offset="50%" stopColor="#4a2810" />
            <stop offset="100%" stopColor="#301809" />
          </linearGradient>

          {/* Metal clamp chrome gradient */}
          <linearGradient id="metalClamp" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f8fafc" />
            <stop offset="25%" stopColor="#cbd5e1" />
            <stop offset="60%" stopColor="#94a3b8" />
            <stop offset="100%" stopColor="#475569" />
          </linearGradient>

          {/* Paper sheet subtle gradient */}
          <linearGradient id="paperDocGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#f8fafc" />
          </linearGradient>

          {/* Hazard stripes pattern */}
          <pattern id="hazardStripes" width="16" height="16" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <rect width="8" height="16" fill="#facc15" />
            <rect x="8" width="8" height="16" fill="#0f172a" />
          </pattern>
        </defs>

        {/* 1. Masonite Clipboard Backing */}
        <rect
          x="10"
          y="15"
          width="220"
          height="265"
          rx="12"
          fill="url(#boardGrad)"
          stroke="#201208"
          strokeWidth="3.5"
        />
        {/* Inner bevel stroke */}
        <rect
          x="14"
          y="19"
          width="212"
          height="257"
          rx="9"
          fill="none"
          stroke="#78401b"
          strokeWidth="1.5"
          opacity="0.8"
        />

        {/* 2. Pinned Incident Briefing Paper Document */}
        <rect
          x="22"
          y="38"
          width="196"
          height="232"
          rx="3"
          fill="url(#paperDocGrad)"
          stroke="#334155"
          strokeWidth="2"
        />

        {/* Subtle document grid lines */}
        <g opacity="0.08" stroke="#0284c7" strokeWidth="1">
          <line x1="30" y1="95" x2="210" y2="95" />
          <line x1="30" y1="125" x2="210" y2="125" />
          <line x1="30" y1="155" x2="210" y2="155" />
          <line x1="30" y1="185" x2="210" y2="185" />
          <line x1="30" y1="215" x2="210" y2="215" />
        </g>

        {/* Document Header Caution Banner */}
        <rect x="23" y="39" width="194" height="10" fill="url(#hazardStripes)" />

        {/* Official Header Badge */}
        <g transform="translate(32, 56)">
          {/* Disaster Relief Shield Emblem */}
          <rect x="0" y="0" width="28" height="28" rx="6" fill="#0284c7" />
          <path
            d="M 14 5 L 23 8 L 23 16 C 23 21, 14 24, 14 24 C 14 24, 5 21, 5 16 L 5 8 Z"
            fill="#0369a1"
            stroke="#ffffff"
            strokeWidth="1.2"
          />
          {/* Water wave crest inside shield */}
          <path
            d="M 8 16 Q 11 13 14 16 Q 17 19 20 16"
            stroke="#38bdf8"
            strokeWidth="1.8"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 9 19 Q 12 17 14 19 Q 16 21 19 19"
            stroke="#bae6fd"
            strokeWidth="1.4"
            strokeLinecap="round"
            fill="none"
          />

          {/* Title and Doc Code */}
          <text x="35" y="11" fill="#0f172a" fontSize="11" fontFamily="'Space Mono', monospace" fontWeight="900" letterSpacing="0.5">
            FLOODSAFE
          </text>
          <text x="35" y="21" fill="#0284c7" fontSize="7" fontFamily="'Space Mono', monospace" fontWeight="bold">
            RELIEF & OVERVIEW PORTAL
          </text>
          <text x="35" y="28" fill="#64748b" fontSize="5.5" fontFamily="'Space Mono', monospace">
            INCIDENT COMMAND // SYS-2026
          </text>
        </g>

        {/* Status Pills */}
        <g transform="translate(32, 94)">
          <rect x="0" y="0" width="86" height="15" rx="3" fill="#ecfeff" stroke="#06b6d4" strokeWidth="1" />
          <circle cx="7" cy="7.5" r="3" fill="#06b6d4" />
          <text x="14" y="10.5" fill="#0e7490" fontSize="6" fontFamily="'Space Mono', monospace" fontWeight="bold">
            COMMUNITY PORTAL
          </text>

          <rect x="92" y="0" width="84" height="15" rx="3" fill="#f0fdf4" stroke="#22c55e" strokeWidth="1" />
          <circle cx="99" cy="7.5" r="3" fill="#22c55e" />
          <text x="106" y="10.5" fill="#15803d" fontSize="6" fontFamily="'Space Mono', monospace" fontWeight="bold">
            SHELTERS ONLINE
          </text>
        </g>

        {/* Live Site URL Box */}
        <g transform="translate(32, 116)">
          <rect x="0" y="0" width="176" height="24" rx="4" fill="#0f172a" stroke="#1e293b" strokeWidth="1.5" />
          <text x="8" y="10" fill="#94a3b8" fontSize="5.5" fontFamily="'Space Mono', monospace">
            DEPLOYED AT:
          </text>
          <text x="8" y="19" fill="#38bdf8" fontSize="7.5" fontFamily="'Space Mono', monospace" fontWeight="bold">
            floodsafe-overview.vercel.app
          </text>
          {/* External link symbol */}
          <path d="M 160 9 L 168 9 L 168 17 M 168 9 L 158 19" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" />
        </g>

        {/* Incident Summary Briefing Checklist */}
        <g transform="translate(32, 148)">
          <text x="0" y="10" fill="#0f172a" fontSize="8" fontFamily="'Space Mono', monospace" fontWeight="bold">
            INCIDENT PROTOCOLS:
          </text>

          {/* Checklist item 1 */}
          <g transform="translate(0, 18)">
            <rect x="0" y="0" width="9" height="9" rx="1.5" fill="#0284c7" />
            <path d="M 2 4.5 L 4 6.5 L 7 2.5" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" fill="none" />
            <text x="13" y="7" fill="#334155" fontSize="6.5" fontFamily="'Space Mono', monospace">
              High-Elevation Safe Shelters
            </text>
          </g>

          {/* Checklist item 2 */}
          <g transform="translate(0, 31)">
            <rect x="0" y="0" width="9" height="9" rx="1.5" fill="#0284c7" />
            <path d="M 2 4.5 L 4 6.5 L 7 2.5" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" fill="none" />
            <text x="13" y="7" fill="#334155" fontSize="6.5" fontFamily="'Space Mono', monospace">
              Real-Time Flood Warnings
            </text>
          </g>

          {/* Checklist item 3 */}
          <g transform="translate(0, 44)">
            <rect x="0" y="0" width="9" height="9" rx="1.5" fill="#0284c7" />
            <path d="M 2 4.5 L 4 6.5 L 7 2.5" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" fill="none" />
            <text x="13" y="7" fill="#334155" fontSize="6.5" fontFamily="'Space Mono', monospace">
              Volunteer & Resource Triage
            </text>
          </g>

          {/* Checklist item 4 */}
          <g transform="translate(0, 57)">
            <rect x="0" y="0" width="9" height="9" rx="1.5" fill="#0284c7" />
            <path d="M 2 4.5 L 4 6.5 L 7 2.5" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" fill="none" />
            <text x="13" y="7" fill="#334155" fontSize="6.5" fontFamily="'Space Mono', monospace">
              Direct OSM Simulation Link
            </text>
          </g>
        </g>

        {/* Action Button Banner on the Paper */}
        <g transform="translate(32, 228)">
          <rect
            x="0"
            y="0"
            width="176"
            height="26"
            rx="5"
            fill="#0284c7"
            className="transition-colors group-hover:fill-[#0369a1]"
            stroke="#075985"
            strokeWidth="1.5"
          />
          <text
            x="88"
            y="17"
            textAnchor="middle"
            fill="#ffffff"
            fontSize="8.5"
            fontFamily="'Space Mono', monospace"
            fontWeight="bold"
            letterSpacing="0.5"
          >
            INSPECT FLOODSAFE SITE ↗
          </text>
        </g>

        {/* Pinned Official Red Rubber Stamp */}
        <g transform="translate(148, 160) rotate(-14)">
          <rect
            x="0"
            y="0"
            width="58"
            height="22"
            rx="3"
            fill="#fef2f2"
            stroke="#dc2626"
            strokeWidth="1.8"
            strokeDasharray="4 2"
            opacity="0.88"
          />
          <text
            x="29"
            y="14"
            textAnchor="middle"
            fill="#b91c1c"
            fontSize="7"
            fontFamily="'Space Mono', monospace"
            fontWeight="900"
            letterSpacing="0.8"
          >
            DISASTER HUB
          </text>
        </g>

        {/* 3. Heavy-Duty Metallic Spring Clipboard Clamp on Top */}
        <g transform="translate(75, 4)">
          {/* Clamp Base Plate */}
          <path
            d="M 5 18 L 85 18 L 82 46 L 8 46 Z"
            fill="url(#metalClamp)"
            stroke="#1e293b"
            strokeWidth="2.5"
          />
          {/* Central hanging punch hole bracket */}
          <rect x="32" y="6" width="26" height="16" rx="4" fill="url(#metalClamp)" stroke="#1e293b" strokeWidth="2" />
          <circle cx="45" cy="13" r="4.5" fill="#301809" stroke="#1e293b" strokeWidth="1.5" />

          {/* Spring Torsion Bar */}
          <rect x="20" y="24" width="50" height="9" rx="3" fill="#334155" stroke="#0f172a" strokeWidth="1.5" />
          <line x1="26" y1="26" x2="26" y2="31" stroke="#64748b" strokeWidth="1.5" />
          <line x1="33" y1="26" x2="33" y2="31" stroke="#64748b" strokeWidth="1.5" />
          <line x1="40" y1="26" x2="40" y2="31" stroke="#64748b" strokeWidth="1.5" />
          <line x1="47" y1="26" x2="47" y2="31" stroke="#64748b" strokeWidth="1.5" />
          <line x1="54" y1="26" x2="54" y2="31" stroke="#64748b" strokeWidth="1.5" />
          <line x1="61" y1="26" x2="61" y2="31" stroke="#64748b" strokeWidth="1.5" />

          {/* Pressure lip holding paper down */}
          <rect x="14" y="38" width="62" height="6" rx="2" fill="#475569" stroke="#0f172a" strokeWidth="1" />
          <circle cx="22" cy="41" r="1.5" fill="#cbd5e1" />
          <circle cx="68" cy="41" r="1.5" fill="#cbd5e1" />
        </g>
      </svg>
    </div>
  );
}
