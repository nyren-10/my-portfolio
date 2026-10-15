import React from "react";
import { motion } from "framer-motion";

export function CoffeeStain({ className = "" }) {
  return (
    <svg
      viewBox="0 0 160 160"
      className={`w-36 h-36 pointer-events-none opacity-30 ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="80"
        cy="80"
        r="60"
        stroke="#451a03"
        strokeWidth="6"
        strokeDasharray="40 10 70 8 30 15"
        strokeLinecap="round"
        opacity="0.7"
      />
      <circle
        cx="80"
        cy="80"
        r="54"
        stroke="#78350f"
        strokeWidth="2"
        strokeDasharray="20 15 50 10"
        opacity="0.4"
      />
      <circle cx="125" cy="45" r="4" fill="#451a03" opacity="0.5" />
      <circle cx="135" cy="55" r="2.5" fill="#451a03" opacity="0.3" />
      <circle cx="35" cy="115" r="3" fill="#451a03" opacity="0.4" />
    </svg>
  );
}

export function DraggablePencil({ initial = { x: 920, y: 440 }, rotation = 32 }) {
  return (
    <motion.div
      drag
      dragMomentum={true}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95, cursor: "grabbing" }}
      initial={{ x: initial.x, y: initial.y, rotate: rotation }}
      className="absolute cursor-grab z-10 select-none"
    >
      <svg
        viewBox="0 0 40 260"
        className="w-10 h-64 drop-shadow-desk"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Pink Rubber Eraser */}
        <rect x="10" y="5" width="20" height="24" rx="4" fill="#fb7185" />
        {/* Metallic Ferrule with crimp lines */}
        <rect x="10" y="27" width="20" height="18" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1" />
        <line x1="10" y1="33" x2="30" y2="33" stroke="#64748b" strokeWidth="1" />
        <line x1="10" y1="39" x2="30" y2="39" stroke="#64748b" strokeWidth="1" />
        {/* Yellow Hexagonal Wood Body */}
        <rect x="10" y="45" width="20" height="150" fill="#facc15" stroke="#eab308" strokeWidth="1" />
        <line x1="16" y1="45" x2="16" y2="195" stroke="#ca8a04" strokeWidth="1.5" />
        <line x1="24" y1="45" x2="24" y2="195" stroke="#fef08a" strokeWidth="1.5" />
        {/* Sharpened Wood Cone Tip */}
        <polygon points="10,195 30,195 20,240" fill="#fde68a" stroke="#d97706" strokeWidth="1" />
        {/* Graphite Lead Tip */}
        <polygon points="17,226 23,226 20,240" fill="#1e293b" />
      </svg>
    </motion.div>
  );
}

export function DraggableSticker({ initial = { x: 420, y: 460 }, rotation = -12 }) {
  return (
    <motion.div
      drag
      dragMomentum={true}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95, cursor: "grabbing" }}
      initial={{ x: initial.x, y: initial.y, rotate: rotation }}
      className="absolute cursor-grab z-10 select-none"
    >
      <div className="bg-white border-2 border-black p-3 rounded-lg shadow-desk flex items-center gap-2 font-mono text-xs font-bold text-black transform rotate-1">
        <span className="text-base">🚀</span>
        <span>NO BUGS // JUST FEATURES</span>
      </div>
    </motion.div>
  );
}

export function InstructionsNote({ initial = { x: 30, y: 20 } }) {
  return (
    <div
      style={{ left: initial.x, top: initial.y }}
      className="absolute z-0 pointer-events-none select-none max-w-sm"
    >
      <div className="bg-[#fffbeb]/90 backdrop-blur-sm border border-amber-300 p-3 rounded shadow-sm text-xs font-mono text-amber-950">
        <div className="flex items-center gap-2 font-bold mb-1 text-amber-900 border-b border-amber-200 pb-1">
          <span className="text-sm">📌</span>
          <span>DESK OF NYREN // WORKSPACE v2.0</span>
        </div>
        <p className="text-[11px] text-amber-900/90 leading-relaxed font-sans">
          • <span className="font-semibold">Drag & Toss:</span> Click & drag any artifact around the desk.
          <br />
          • <span className="font-semibold">Open GDD:</span> Click an item (Notebook, Floppy, Polaroid, Mug, Note) to reveal its hand-drawn Design Blueprint.
        </p>
      </div>
    </div>
  );
}
