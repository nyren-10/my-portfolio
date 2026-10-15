import React from "react";
import { motion } from "framer-motion";
import { RocketIcon, PinIcon } from "../ui/Icons";

export function CoffeeStain({ className = "", style = {} }) {
  return (
    <svg
      viewBox="0 0 160 160"
      style={style}
      className={`w-36 h-36 opacity-25 pointer-events-none select-none ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer irregular coffee ring */}
      <circle
        cx="80"
        cy="80"
        r="68"
        stroke="#78350f"
        strokeWidth="6"
        strokeDasharray="40 10 70 8 30 15"
        strokeLinecap="round"
        filter="blur(1px)"
      />
      {/* Inner thin splatter ring */}
      <circle
        cx="78"
        cy="82"
        r="64"
        stroke="#92400e"
        strokeWidth="2"
        strokeDasharray="15 25 35 15"
        opacity="0.6"
      />
      {/* Central wash stain */}
      <circle cx="80" cy="80" r="60" fill="#b45309" opacity="0.08" filter="blur(4px)" />
      {/* Splatter droplets */}
      <circle cx="152" cy="74" r="3" fill="#78350f" opacity="0.4" />
      <circle cx="146" cy="98" r="2" fill="#78350f" opacity="0.3" />
      <circle cx="18" cy="86" r="2.5" fill="#78350f" opacity="0.35" />
    </svg>
  );
}

export function DraggablePencil({ initial = { x: 1050, y: 380 }, rotation = 35 }) {
  return (
    <motion.div
      drag
      dragMomentum={true}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98, cursor: "grabbing" }}
      initial={{ x: initial.x, y: initial.y, rotate: rotation }}
      className="absolute cursor-grab z-10 select-none w-10 h-72 pointer-events-auto"
    >
      <svg viewBox="0 0 40 280" className="w-full h-full drop-shadow-desk" fill="none">
        {/* Pencil eraser band */}
        <rect x="14" y="2" width="12" height="24" rx="4" fill="#fb7185" />
        {/* Metal ferrule */}
        <rect x="13" y="24" width="14" height="20" fill="#94a3b8" stroke="#475569" strokeWidth="1" />
        <line x1="13" y1="30" x2="27" y2="30" stroke="#334155" strokeWidth="1" />
        <line x1="13" y1="38" x2="27" y2="38" stroke="#334155" strokeWidth="1" />
        {/* Yellow wooden body */}
        <rect x="13" y="44" width="14" height="180" fill="#facc15" stroke="#ca8a04" strokeWidth="1" />
        <line x1="17" y1="44" x2="17" y2="224" stroke="#eab308" strokeWidth="1.5" />
        <line x1="23" y1="44" x2="23" y2="224" stroke="#ca8a04" strokeWidth="1" />
        {/* Sharpened wood cone */}
        <polygon points="13,224 27,224 20,260" fill="#fde68a" stroke="#d97706" strokeWidth="1" />
        {/* Graphite tip */}
        <polygon points="18,250 22,250 20,265" fill="#1e293b" />
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
      className="absolute cursor-grab z-10 select-none pointer-events-auto"
    >
      <div className="bg-white border-2 border-slate-900 p-3 rounded-lg shadow-desk flex items-center gap-2 font-mono text-xs font-bold text-slate-950 transform rotate-1">
        <RocketIcon className="w-4 h-4 text-rose-600" />
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
          <PinIcon className="w-3.5 h-3.5 text-amber-800" />
          <span>DESK OF NYREN // WORKSPACE v2.0</span>
        </div>
        <p className="text-[11px] text-amber-900/90 leading-relaxed font-sans">
          • <span className="font-semibold">Drag & Toss:</span> Click & drag any artifact around the desk.
          <br />
          • <span className="font-semibold">Open GDD:</span> Click an item (Notebook, Floppy, Polaroid, Mug, Omnitrix, Cassette) to reveal its hand-drawn Design Blueprint.
        </p>
      </div>
    </div>
  );
}
