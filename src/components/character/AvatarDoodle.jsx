import React from "react";

export default function AvatarDoodle({ className = "w-24 h-24" }) {
  return (
    <svg
      viewBox="0 0 140 140"
      className={`select-none overflow-visible ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Hand-drawn sketchy outer frame / circle with subtle wobble */}
      <circle
        cx="70"
        cy="70"
        r="62"
        fill="#fbfaf5"
        stroke="#0f172a"
        strokeWidth="2.5"
        strokeDasharray="400"
        className="drop-shadow-sm"
      />

      {/* Hair doodle matching the notebook sketch: cloudy, wavy curls */}
      <path
        d="M 38 52 C 30 38, 42 24, 58 20 C 72 16, 90 18, 102 28 C 112 36, 115 50, 108 62 C 102 52, 92 46, 80 46 C 64 46, 50 48, 38 52 Z"
        fill="#1e293b"
      />
      {/* Loose hair pencil doodle strokes */}
      <path
        d="M 34 46 C 26 38, 38 28, 50 24"
        stroke="#0f172a"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M 96 22 C 108 20, 116 32, 110 44"
        stroke="#0f172a"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M 68 18 C 76 12, 86 16, 88 24"
        stroke="#0f172a"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Head Contour: round chin with slight hand-drawn asymmetry */}
      <path
        d="M 44 54 C 42 82, 54 100, 70 100 C 86 100, 98 82, 96 54"
        stroke="#0f172a"
        strokeWidth="3"
        strokeLinecap="round"
        fill="#ffffff"
      />

      {/* The iconic drafting crosshair '+' from the user's sketch */}
      {/* Vertical facial symmetry line */}
      <line
        x1="70"
        y1="50"
        x2="70"
        y2="88"
        stroke="#334155"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Horizontal eye-level guideline */}
      <line
        x1="48"
        y1="64"
        x2="92"
        y2="64"
        stroke="#334155"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Spectacles / Glasses drawn over the crosshair */}
      {/* Left Frame */}
      <rect
        x="50"
        y="58"
        width="16"
        height="14"
        rx="3"
        stroke="#0f172a"
        strokeWidth="2.5"
        fill="#f8fafc"
      />
      {/* Right Frame */}
      <rect
        x="74"
        y="58"
        width="16"
        height="14"
        rx="3"
        stroke="#0f172a"
        strokeWidth="2.5"
        fill="#f8fafc"
      />
      {/* Glasses bridge */}
      <line
        x1="66"
        y1="64"
        x2="74"
        y2="64"
        stroke="#0f172a"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Eyes inside frames */}
      <circle cx="58" cy="65" r="2" fill="#0f172a" />
      <circle cx="82" cy="65" r="2" fill="#0f172a" />

      {/* Subtle friendly smirk */}
      <path
        d="M 62 82 Q 70 90, 78 82"
        stroke="#0f172a"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Neck & Shoulders (matching lines in sketch) */}
      <path
        d="M 54 102 L 48 122 M 86 102 L 92 122"
        stroke="#0f172a"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* V-neck collar */}
      <path
        d="M 58 102 L 70 112 L 82 102"
        stroke="#0f172a"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}
