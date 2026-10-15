import React from "react";
import { motion } from "framer-motion";

export default function FingerGunsCharacter({ className = "" }) {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [-4, 4, -4] }}
      transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
      className={`relative inline-block select-none ${className}`}
    >
      <svg
        viewBox="0 0 320 340"
        className="w-full h-full drop-shadow-md overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Sparkle star filter for soft glow */}
          <filter id="starGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="#facc15" floodOpacity="0.8" />
          </filter>
        </defs>

        {/* --- SPARKLE STARS --- */}
        {/* Top-Left Sparkle Star */}
        <motion.g
          animate={{ scale: [1, 1.25, 1], rotate: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          transform="translate(68, 48)"
          filter="url(#starGlow)"
        >
          {/* Action curved motion line */}
          <path d="M -8 -12 Q 10 -22, 34 -14" stroke="#000" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          {/* Four-pointed yellow star */}
          <path
            d="M 12 0 Q 12 12, 0 12 Q 12 12, 12 24 Q 12 12, 24 12 Q 12 12, 12 0 Z"
            fill="#facc15"
            stroke="#000"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
        </motion.g>

        {/* Bottom-Left Sparkle Star */}
        <motion.g
          animate={{ scale: [1.2, 0.95, 1.2], rotate: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut", delay: 0.5 }}
          transform="translate(45, 195)"
          filter="url(#starGlow)"
        >
          {/* Action motion line */}
          <path d="M 8 -8 Q 18 -16, 28 -12" stroke="#000" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          {/* Four-pointed yellow star */}
          <path
            d="M 12 0 Q 12 12, 0 12 Q 12 12, 12 24 Q 12 12, 24 12 Q 12 12, 12 0 Z"
            fill="#facc15"
            stroke="#000"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
        </motion.g>

        {/* --- CHARACTER BODY & HEAD --- */}
        {/* Soft pink shadow / accent on right side */}
        <path
          d="M 235 130 C 275 180, 275 250, 245 320 L 220 320 C 240 250, 235 180, 205 140 Z"
          fill="#f3c2c7"
          opacity="0.85"
        />
        <path
          d="M 148 245 C 130 250, 140 290, 165 315 L 140 320 C 120 280, 120 250, 138 238 Z"
          fill="#f3c2c7"
          opacity="0.6"
        />

        {/* Main Body Outline & Fill */}
        <path
          d="M 150 240 C 135 255, 140 295, 155 330 L 255 330 C 275 270, 265 190, 225 125 C 235 105, 235 70, 205 50 C 165 25, 125 45, 115 80 C 105 120, 125 155, 160 170 C 175 200, 165 220, 150 240 Z"
          fill="#ffffff"
        />

        {/* Head Contour (Cute round bean head) */}
        <path
          d="M 135 170 C 95 155, 88 105, 118 65 C 145 28, 205 28, 232 68 C 255 105, 235 160, 185 175 C 170 178, 150 176, 135 170 Z"
          fill="#ffffff"
          stroke="#000000"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Left Ear flap curve */}
        <path
          d="M 112 110 C 102 114, 102 135, 115 142"
          stroke="#000000"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="#ffffff"
        />

        {/* --- SUNGLASSES & SMUG SMILE --- */}
        {/* Left Sunglass Lens */}
        <path
          d="M 118 108 C 122 95, 145 92, 154 102 C 158 115, 145 138, 125 136 C 115 135, 114 118, 118 108 Z"
          fill="#0a0a0a"
          stroke="#000000"
          strokeWidth="3"
        />
        {/* Left Lens Glare */}
        <path
          d="M 124 102 L 138 98"
          stroke="#ffffff"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Sunglass Bridge */}
        <path
          d="M 152 108 C 158 104, 164 104, 170 108"
          stroke="#000000"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* Right Sunglass Lens */}
        <path
          d="M 168 104 C 175 92, 210 88, 222 100 C 226 115, 215 134, 182 134 C 170 134, 164 115, 168 104 Z"
          fill="#0a0a0a"
          stroke="#000000"
          strokeWidth="3"
        />
        {/* Right Lens Glare */}
        <path
          d="M 176 98 L 202 94"
          stroke="#ffffff"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Cute Smug Smile */}
        <path
          d="M 152 138 C 158 148, 172 148, 176 136"
          stroke="#000000"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* --- ARMS DOING FINGER GUNS --- */}
        {/* Upper Arm & Finger Gun (Pointing Top-Right) */}
        <g>
          {/* Arm extending up & over head */}
          <path
            d="M 188 172 C 215 160, 240 120, 245 80 C 248 50, 235 30, 202 38"
            stroke="#000000"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          />
          {/* Hand & Finger Gun Shape */}
          <path
            d="M 204 38 C 195 40, 185 41, 165 42 C 160 42, 155 36, 160 33 C 168 30, 185 30, 195 24 C 198 18, 205 15, 208 24 C 212 32, 212 36, 204 38 Z"
            fill="#ffffff"
            stroke="#000000"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
          {/* Thumb Up in gun posture */}
          <path
            d="M 194 25 C 196 14, 205 14, 206 24"
            stroke="#000000"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
          />
        </g>

        {/* Lower Arm & Finger Gun (Pointing Forward-Left) */}
        <g>
          {/* Arm curving out from chest */}
          <path
            d="M 158 202 C 135 208, 120 225, 126 250 C 130 268, 138 288, 152 315"
            stroke="#000000"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          />
          {/* Hand with Finger Gun Pointing Left */}
          <path
            d="M 126 238 C 115 238, 92 238, 80 238 C 74 238, 72 230, 78 226 C 88 222, 105 224, 114 218 C 118 212, 125 212, 128 220 C 130 228, 130 234, 126 238 Z"
            fill="#ffffff"
            stroke="#000000"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
          {/* Upright Thumb */}
          <path
            d="M 112 218 C 110 206, 120 206, 124 218"
            stroke="#000000"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
          {/* Knuckle Curvature */}
          <path
            d="M 102 238 C 104 246, 114 246, 118 238"
            stroke="#000000"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 116 238 C 118 246, 126 246, 128 238"
            stroke="#000000"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
        </g>

        {/* Body lower right contour */}
        <path
          d="M 235 150 C 265 200, 260 270, 245 328"
          stroke="#000000"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    </motion.div>
  );
}
