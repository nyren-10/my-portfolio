import React from "react";
import { motion } from "framer-motion";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  BriefcaseIcon,
  TrophyIcon,
  MapPinIcon,
  CodeIcon,
  SparkleStarIcon,
  TerminalIcon,
  BusIcon,
  CpuIcon,
} from "../ui/Icons";

/**
 * 3D Pushpin Graphic Component
 */
function PushPin({ color = "red", className = "" }) {
  const colorMap = {
    red: { head: "#dc2626", highlight: "#f87171", shadow: "#991b1b" },
    blue: { head: "#2563eb", highlight: "#60a5fa", shadow: "#1e40af" },
    yellow: { head: "#eab308", highlight: "#fde047", shadow: "#a16207" },
    emerald: { head: "#059669", highlight: "#34d399", shadow: "#065f46" },
    purple: { head: "#9333ea", highlight: "#c084fc", shadow: "#6b21a8" },
    rose: { head: "#e11d48", highlight: "#fb7185", shadow: "#9f1239" },
    teal: { head: "#0d9488", highlight: "#2dd4bf", shadow: "#115e59" },
  };

  const c = colorMap[color] || colorMap.red;

  return (
    <div className={`relative w-6 h-7 pointer-events-none drop-shadow-[3px_5px_4px_rgba(0,0,0,0.5)] ${className}`}>
      <svg viewBox="0 0 24 28" className="w-full h-full" fill="none">
        {/* Metal Pin Shaft */}
        <path d="M12 18 L12 26" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M12 26 L12 28" stroke="#334155" strokeWidth="1.5" strokeLinecap="round" />
        {/* Shadow under Pin Head */}
        <ellipse cx="12" cy="18" rx="5" ry="2" fill={c.shadow} />
        {/* Main Round Pin Head */}
        <circle cx="12" cy="10" r="7" fill={c.head} />
        {/* Top Spherical Highlight */}
        <circle cx="10" cy="8" r="4.5" fill={c.highlight} opacity="0.8" />
        <circle cx="9" cy="7" r="2" fill="#ffffff" opacity="0.9" />
      </svg>
    </div>
  );
}

/**
 * Masking Tape Strip
 */
function TapeStrip({ className = "", rotation = "-2deg" }) {
  return (
    <div
      style={{ transform: `rotate(${rotation})` }}
      className={`h-5 w-24 bg-[#fef08a]/85 border-t border-b border-amber-300 shadow-sm pointer-events-none ${className}`}
    />
  );
}

/**
 * Paper Clip Graphic
 */
function PaperClip({ className = "" }) {
  return (
    <div className={`w-5 h-10 pointer-events-none drop-shadow-sm ${className}`}>
      <svg viewBox="0 0 20 40" className="w-full h-full" fill="none" stroke="#64748b" strokeWidth="2.5" strokeLinecap="round">
        <path d="M 6 12 L 6 30 A 5 5 0 0 0 16 30 L 16 8 A 7 7 0 0 0 2 8 L 2 28" />
      </svg>
    </div>
  );
}

/**
 * Uneven, Asymmetric Cork Tagboard Experience Section
 * Spans full width, wide breathing room between photos and notes, connecting red yarn
 */
export default function ExperienceSection({ onBackToCover, onGoToProjects }) {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#160f0a] flex items-center justify-center select-none">
      {/* Background Ambience with Desk Lamp Glow */}
      <div className="absolute inset-0 bg-desk-wood opacity-85 pointer-events-none" />
      <div className="absolute inset-0 lamp-glow pointer-events-none z-10" />

      {/* ======================================================== */}
      {/* MAIN CORK TAGBOARD WITH REALISTIC WOODEN BULLETIN FRAME */}
      {/* ======================================================== */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="relative w-full h-full bg-tagboard flex flex-col justify-between overflow-hidden z-20 border-[10px] sm:border-[16px] border-[#55381f] shadow-[inset_0_0_80px_rgba(0,0,0,0.6),0_20px_50px_rgba(0,0,0,0.85)]"
      >
        {/* Corkboard Vignette Depth */}
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(30,15,5,0.5)]" />

        {/* Top Header Bar Pinned across Corkboard */}
        <header className="relative z-30 px-4 sm:px-8 py-3 bg-[#3e2410]/95 border-b-4 border-[#241407] backdrop-blur-sm flex items-center justify-between shadow-lg">
          <button
            onClick={onBackToCover}
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#fef08a] hover:bg-[#fde047] text-slate-950 border-2 border-slate-950 rounded font-mono text-xs font-bold shadow-[2px_2px_0px_#000] transition-all active:scale-95 cursor-pointer"
          >
            <ArrowLeftIcon className="w-3.5 h-3.5" />
            <span>Book Cover</span>
          </button>

          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-extrabold text-amber-200 bg-[#251408] px-3.5 py-1 rounded border border-[#6b4724] tracking-wider uppercase">
              TAGBOARD // EXPERIENCE & HACKATHONS
            </span>
          </div>

          <button
            onClick={onGoToProjects}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#facc15] hover:bg-[#eab308] text-slate-950 border-2 border-slate-950 rounded font-mono text-xs font-bold shadow-[2px_2px_0px_#000] transition-all active:scale-95 cursor-pointer"
          >
            <span>Projects Desk</span>
            <ArrowRightIcon className="w-3.5 h-3.5" />
          </button>
        </header>

        {/* ======================================================== */}
        {/* FULL-WIDTH SCROLLABLE CORKBOARD CANVAS (NO NARROW CENTER GRID) */}
        {/* ======================================================== */}
        <div className="relative z-20 flex-1 overflow-y-auto custom-scrollbar px-4 sm:px-8 md:px-12 lg:px-16 py-8 w-full">
          
          {/* Top Banner Notice Pinned onto Board */}
          <div className="relative bg-[#fffdf5] p-5 sm:p-6 rounded border-3 border-slate-950 shadow-[6px_8px_16px_rgba(0,0,0,0.35)] transform -rotate-1 max-w-4xl mx-auto mb-16">
            <PushPin color="red" className="absolute -top-3.5 left-6" />
            <PushPin color="yellow" className="absolute -top-3.5 right-6" />
            <TapeStrip className="absolute -top-2.5 left-1/2 -translate-x-1/2" rotation="1.5deg" />

            <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-slate-300 pb-2.5 mb-2.5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-amber-100 border-2 border-slate-950 flex items-center justify-center text-amber-900 shrink-0">
                  <BriefcaseIcon className="w-5 h-5" />
                </div>
                <div>
                  <h1 className="font-hand text-3xl sm:text-4xl font-extrabold text-slate-950 leading-none">
                    Hackathons, Trips & Real Work Pinboard
                  </h1>
                  <p className="font-mono text-xs text-slate-600 mt-1">
                    Mayank Teli • B.Tech 2nd Year • Techno NJR Institute of Technology, Udaipur
                  </p>
                </div>
              </div>

              <span className="font-mono text-xs font-bold bg-amber-100 text-amber-950 px-2.5 py-1 rounded border border-amber-300">
                2024 — PRESENT
              </span>
            </div>

            <p className="font-sans text-xs sm:text-sm text-slate-800 leading-relaxed">
              Snapshots, notes, and artifacts pinned across my board: traveling to Jaipur with the squad for Codefiesta, diving into national SIH challenges since 1st year, winning workshops, and building real transit systems.
            </p>
          </div>

          {/* ======================================================== */}
          {/* SPREAD OUT CLUSTERS ACROSS FULL CORKBOARD WIDTH */}
          {/* ======================================================== */}
          <div className="relative space-y-24 sm:space-y-32 pb-16">

            {/* ---------------------------------------------------- */}
            {/* CLUSTER 1: CODEFIESTA 5.0 @ GIT JAIPUR (TOP-7 RANK) */}
            {/* ---------------------------------------------------- */}
            <div className="relative flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-16">
              
              {/* Polaroid on the Far Left */}
              <div className="relative w-full lg:w-auto shrink-0 flex justify-center lg:justify-start lg:ml-4">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 0 }}
                  style={{ transform: "rotate(-8deg)" }}
                  className="relative w-72 bg-white p-3.5 pb-4 rounded-sm shadow-[8px_14px_24px_rgba(0,0,0,0.45)] border border-slate-300"
                >
                  <PushPin color="red" className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-30" />
                  <TapeStrip className="absolute -top-2 right-2 opacity-90 z-20" rotation="10deg" />

                  {/* Photo window */}
                  <div className="relative h-44 bg-[#090d16] rounded-sm overflow-hidden flex flex-col items-center justify-center p-3 text-center border-2 border-slate-900 shadow-inner">
                    <div className="w-14 h-14 rounded-full bg-amber-400/20 border-2 border-amber-400 flex items-center justify-center text-amber-300 mb-1">
                      <TrophyIcon className="w-8 h-8" />
                    </div>
                    <span className="font-mono text-xs font-bold text-amber-300">
                      5,000 INR CHEQUE
                    </span>
                    <span className="font-mono text-[9px] text-amber-100/80">
                      7th Rank / 250 Teams • GIT Jaipur
                    </span>
                    <span className="absolute bottom-1.5 right-2 font-mono text-[8px] text-slate-500 uppercase">
                      [ SNAPSHOT ]
                    </span>
                  </div>

                  <div className="mt-2.5 text-center">
                    <p className="font-hand text-lg font-bold text-slate-900 leading-tight">
                      Codefiesta 5.0 // GIT Jaipur
                    </p>
                    <p className="font-mono text-[10px] text-slate-500 mt-0.5">
                      Road Trip Squad • 7th Rank Winner
                    </p>
                  </div>
                </motion.div>

                {/* Hand-pinned Memo Note next to Polaroid */}
                <motion.div
                  style={{ transform: "rotate(6deg)" }}
                  className="hidden xl:block absolute -right-24 -top-6 bg-[#fef08a] p-3 rounded shadow-md border border-amber-400 w-36 text-center z-20"
                >
                  <PushPin color="yellow" className="absolute -top-3 left-1/2 -translate-x-1/2" />
                  <p className="font-hand text-xs font-extrabold text-amber-950 leading-tight">
                    "Jaipur road trip! All-nighter on chai & snacks."
                  </p>
                </motion.div>
              </div>

              {/* Red Yarn linking Polaroid to Story Card */}
              <div className="hidden lg:block flex-1 h-0.5 border-t-2 border-dashed border-red-600/70 relative top-20 opacity-80" />

              {/* Story Index Card on the Far Right */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                style={{ transform: "rotate(3.5deg)" }}
                className="relative w-full lg:max-w-xl bg-[#fffef8] p-6 rounded-md shadow-[6px_10px_20px_rgba(0,0,0,0.35)] border-2 border-slate-900 space-y-3 lg:mr-4 shrink-0"
              >
                <PushPin color="red" className="absolute -top-3.5 right-8 z-20" />

                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-2">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border bg-amber-100 text-amber-900 border-amber-400">
                    7TH RANK OUT OF 250 TEAMS
                  </span>
                  <span className="font-mono text-[11px] text-slate-500 font-semibold">
                    2026 // ROAD TRIP TO JAIPUR
                  </span>
                </div>

                <div>
                  <h3 className="font-hand text-2xl sm:text-3xl font-extrabold text-slate-950 leading-tight">
                    Codefiesta 5.0 @ GIT Jaipur
                  </h3>
                  <p className="font-mono text-xs font-bold text-blue-800 mt-0.5">
                    Hackathon Competitor • Won 5,000 INR Cash Prize Cheque
                  </p>
                </div>

                <p className="font-sans text-xs sm:text-[13px] text-slate-800 leading-relaxed bg-[#faf7ee] p-3.5 rounded border border-slate-200/90">
                  Hopped on a road trip with the team from Udaipur to GIT Jaipur for Codefiesta 5.0! Over 250 teams from colleges all across the country competed. We coded straight through the night, survived on endless rounds of chai, debugged until the final buzzer, and landed 7th rank overall along with a 5,000 INR prize cheque!
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {["#JaipurTrip", "#Codefiesta5", "#Top7Rank", "#250Teams", "#CashPrize", "#HackathonSprint"].map((t, idx) => (
                    <span key={idx} className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-amber-50 text-slate-800 border border-amber-200">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>

            </div>

            {/* ---------------------------------------------------- */}
            {/* CLUSTER 2: SIH 2ND YEAR — OMNITRIX SOVEREIGN AI */}
            {/* ---------------------------------------------------- */}
            <div className="relative flex flex-col lg:flex-row-reverse items-center lg:items-start justify-between gap-8 lg:gap-16">
              
              {/* Polaroid on the Far Right */}
              <div className="relative w-full lg:w-auto shrink-0 flex justify-center lg:justify-end lg:mr-6">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 0 }}
                  style={{ transform: "rotate(8.5deg)" }}
                  className="relative w-72 bg-white p-3.5 pb-4 rounded-sm shadow-[8px_14px_24px_rgba(0,0,0,0.45)] border border-slate-300"
                >
                  <PushPin color="emerald" className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-30" />
                  <TapeStrip className="absolute -top-2 left-2 opacity-90 z-20" rotation="-8deg" />

                  {/* Photo window */}
                  <div className="relative h-44 bg-[#090d16] rounded-sm overflow-hidden flex flex-col items-center justify-center p-3 text-center border-2 border-slate-900 shadow-inner">
                    <div className="w-14 h-14 rounded-full bg-emerald-400/20 border-2 border-emerald-400 flex items-center justify-center text-emerald-300 mb-1">
                      <CpuIcon className="w-8 h-8" />
                    </div>
                    <span className="font-mono text-xs font-bold text-emerald-300">
                      SOVEREIGN AI WORKBENCH
                    </span>
                    <span className="font-mono text-[9px] text-emerald-100/80">
                      Local Offline Ollama Model Fleet
                    </span>
                    <span className="absolute bottom-1.5 right-2 font-mono text-[8px] text-slate-500 uppercase">
                      [ SNAPSHOT ]
                    </span>
                  </div>

                  <div className="mt-2.5 text-center">
                    <p className="font-hand text-lg font-bold text-slate-900 leading-tight">
                      SIH // Omnitrix Project
                    </p>
                    <p className="font-mono text-[10px] text-slate-500 mt-0.5">
                      Air-Gapped Intranet Multi-Model
                    </p>
                  </div>
                </motion.div>

                {/* Hand-pinned Memo Note */}
                <motion.div
                  style={{ transform: "rotate(-5deg)" }}
                  className="hidden xl:block absolute -left-28 -top-4 bg-[#dcfce7] p-3 rounded shadow-md border border-emerald-400 w-36 text-center z-20"
                >
                  <PushPin color="emerald" className="absolute -top-3 left-1/2 -translate-x-1/2" />
                  <p className="font-hand text-xs font-extrabold text-emerald-950 leading-tight">
                    "Zero cloud data egress! 100% air-gapped models."
                  </p>
                </motion.div>
              </div>

              {/* Red Yarn linking Polaroid to Story Card */}
              <div className="hidden lg:block flex-1 h-0.5 border-t-2 border-dashed border-red-600/70 relative top-20 opacity-80" />

              {/* Story Index Card on the Left */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                style={{ transform: "rotate(-3.2deg)" }}
                className="relative w-full lg:max-w-xl bg-[#fffef8] p-6 rounded-md shadow-[6px_10px_20px_rgba(0,0,0,0.35)] border-2 border-slate-900 space-y-3 lg:ml-6 shrink-0"
              >
                <PushPin color="emerald" className="absolute -top-3.5 left-8 z-20" />
                <PaperClip className="absolute -top-3 right-6 z-20" />

                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-2">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border bg-emerald-100 text-emerald-900 border-emerald-400">
                    NATIONAL HACKATHON SPRINT
                  </span>
                  <span className="font-mono text-[11px] text-slate-500 font-semibold">
                    2026 // 2ND YEAR B.TECH
                  </span>
                </div>

                <div>
                  <h3 className="font-hand text-2xl sm:text-3xl font-extrabold text-slate-950 leading-tight">
                    Smart India Hackathon (SIH) — 2nd Year
                  </h3>
                  <p className="font-mono text-xs font-bold text-emerald-800 mt-0.5">
                    Sovereign AI Lead • Private Intranet Multi-Model
                  </p>
                </div>

                <p className="font-sans text-xs sm:text-[13px] text-slate-800 leading-relaxed bg-[#f0fdf4] p-3.5 rounded border border-emerald-200">
                  Returned to SIH in my second year with our team project Omnitrix. Many companies have confidential trade secrets and cannot leak data to cloud AI services. We built a sovereign AI workbench running 100% offline inside private intranets, using an orchestrator model to route tasks to specialized local Ollama models on local hardware.
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {["#SIH2026", "#SovereignAI", "#OfflineOllama", "#AirGapped", "#PrivateIntranet"].map((t, idx) => (
                    <span key={idx} className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-slate-800 border border-emerald-200">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>

            </div>

            {/* ---------------------------------------------------- */}
            {/* CLUSTER 3: BUSBUDDY CAMPUS TRANSIT ECOSYSTEM */}
            {/* ---------------------------------------------------- */}
            <div className="relative flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-16">
              
              {/* Polaroid on the Far Left */}
              <div className="relative w-full lg:w-auto shrink-0 flex justify-center lg:justify-start lg:ml-6">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 0 }}
                  style={{ transform: "rotate(-6.8deg)" }}
                  className="relative w-72 bg-white p-3.5 pb-4 rounded-sm shadow-[8px_14px_24px_rgba(0,0,0,0.45)] border border-slate-300"
                >
                  <PushPin color="blue" className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-30" />
                  <TapeStrip className="absolute -top-2 right-2 opacity-90 z-20" rotation="8deg" />

                  {/* Photo window */}
                  <div className="relative h-44 bg-[#090d16] rounded-sm overflow-hidden flex flex-col items-center justify-center p-3 text-center border-2 border-slate-900 shadow-inner">
                    <div className="w-14 h-14 rounded-full bg-blue-400/20 border-2 border-blue-400 flex items-center justify-center text-blue-300 mb-1">
                      <BusIcon className="w-8 h-8" />
                    </div>
                    <span className="font-mono text-xs font-bold text-blue-300">
                      BUSBUDDY TRANSIT
                    </span>
                    <span className="font-mono text-[9px] text-blue-100/80">
                      Live Coordinate Engine • College Fleets
                    </span>
                    <span className="absolute bottom-1.5 right-2 font-mono text-[8px] text-slate-500 uppercase">
                      [ SNAPSHOT ]
                    </span>
                  </div>

                  <div className="mt-2.5 text-center">
                    <p className="font-hand text-lg font-bold text-slate-900 leading-tight">
                      BusBuddy Transit Engine
                    </p>
                    <p className="font-mono text-[10px] text-slate-500 mt-0.5">
                      Live Tracking for College Students
                    </p>
                  </div>
                </motion.div>

                {/* Sticky Memo */}
                <motion.div
                  style={{ transform: "rotate(4deg)" }}
                  className="hidden xl:block absolute -right-24 -top-4 bg-[#dbeafe] p-3 rounded shadow-md border border-blue-400 w-36 text-center z-20"
                >
                  <PushPin color="blue" className="absolute -top-3 left-1/2 -translate-x-1/2" />
                  <p className="font-hand text-xs font-extrabold text-blue-950 leading-tight">
                    "Every morning students catch buses on time!"
                  </p>
                </motion.div>
              </div>

              {/* Red Yarn linking Polaroid to Story Card */}
              <div className="hidden lg:block flex-1 h-0.5 border-t-2 border-dashed border-red-600/70 relative top-20 opacity-80" />

              {/* Story Index Card on the Right */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                style={{ transform: "rotate(4.2deg)" }}
                className="relative w-full lg:max-w-xl bg-[#fffef8] p-6 rounded-md shadow-[6px_10px_20px_rgba(0,0,0,0.35)] border-2 border-slate-900 space-y-3 lg:mr-8 shrink-0"
              >
                <PushPin color="blue" className="absolute -top-3.5 right-8 z-20" />

                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-2">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border bg-blue-100 text-blue-900 border-blue-400">
                    COLLEGE TRANSIT IN USE
                  </span>
                  <span className="font-mono text-[11px] text-slate-500 font-semibold">
                    2025 - 2026 // ACTIVE
                  </span>
                </div>

                <div>
                  <h3 className="font-hand text-2xl sm:text-3xl font-extrabold text-slate-950 leading-tight">
                    BusBuddy Campus Transit Ecosystem
                  </h3>
                  <p className="font-mono text-xs font-bold text-blue-800 mt-0.5">
                    Creator, Full-Stack & DevOps
                  </p>
                </div>

                <p className="font-sans text-xs sm:text-[13px] text-slate-800 leading-relaxed bg-[#eff6ff] p-3.5 rounded border border-blue-200">
                  Identified the daily pain of college students missing buses because nobody knew where the buses were. Brought the idea to life and built the complete system: Node.js WebSocket backend for sub-second GPS pings, PostgreSQL database, an Android driver app with big buttons for auto tracking, and a live interactive web map for students.
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {["#CampusTransit", "#NodeJS", "#WebSockets", "#Postgres", "#AndroidKotlin", "#Docker"].map((t, idx) => (
                    <span key={idx} className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-blue-50 text-slate-800 border border-blue-200">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>

            </div>

            {/* ---------------------------------------------------- */}
            {/* CLUSTER 4: XR / VR WORKSHOP (1ST PRIZE WINNERS) */}
            {/* ---------------------------------------------------- */}
            <div className="relative flex flex-col lg:flex-row-reverse items-center lg:items-start justify-between gap-8 lg:gap-16">
              
              {/* Polaroid on the Far Right */}
              <div className="relative w-full lg:w-auto shrink-0 flex justify-center lg:justify-end lg:mr-4">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 0 }}
                  style={{ transform: "rotate(9.2deg)" }}
                  className="relative w-72 bg-white p-3.5 pb-4 rounded-sm shadow-[8px_14px_24px_rgba(0,0,0,0.45)] border border-slate-300"
                >
                  <PushPin color="purple" className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-30" />
                  <TapeStrip className="absolute -top-2 left-2 opacity-90 z-20" rotation="-6deg" />

                  {/* Photo window */}
                  <div className="relative h-44 bg-[#090d16] rounded-sm overflow-hidden flex flex-col items-center justify-center p-3 text-center border-2 border-slate-900 shadow-inner">
                    <div className="w-14 h-14 rounded-full bg-purple-400/20 border-2 border-purple-400 flex items-center justify-center text-purple-300 mb-1">
                      <SparkleStarIcon className="w-8 h-8 text-purple-300" />
                    </div>
                    <span className="font-mono text-xs font-bold text-purple-300">
                      XR / VR 1ST PRIZE
                    </span>
                    <span className="font-mono text-[9px] text-purple-100/80">
                      Spatial Computing Challenge Winners
                    </span>
                    <span className="absolute bottom-1.5 right-2 font-mono text-[8px] text-slate-500 uppercase">
                      [ SNAPSHOT ]
                    </span>
                  </div>

                  <div className="mt-2.5 text-center">
                    <p className="font-hand text-lg font-bold text-slate-900 leading-tight">
                      XR / VR Workshop
                    </p>
                    <p className="font-mono text-[10px] text-slate-500 mt-0.5">
                      1st Prize with Teammate
                    </p>
                  </div>
                </motion.div>

                {/* Hand-pinned Memo Note */}
                <motion.div
                  style={{ transform: "rotate(-6deg)" }}
                  className="hidden xl:block absolute -left-28 -top-4 bg-[#f3e8ff] p-3 rounded shadow-md border border-purple-400 w-36 text-center z-20"
                >
                  <PushPin color="purple" className="absolute -top-3 left-1/2 -translate-x-1/2" />
                  <p className="font-hand text-xs font-extrabold text-purple-950 leading-tight">
                    "Won 1st place in the hands-on spatial challenge!"
                  </p>
                </motion.div>
              </div>

              {/* Red Yarn linking Polaroid to Story Card */}
              <div className="hidden lg:block flex-1 h-0.5 border-t-2 border-dashed border-red-600/70 relative top-20 opacity-80" />

              {/* Story Index Card on the Left */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                style={{ transform: "rotate(-4.8deg)" }}
                className="relative w-full lg:max-w-xl bg-[#fffef8] p-6 rounded-md shadow-[6px_10px_20px_rgba(0,0,0,0.35)] border-2 border-slate-900 space-y-3 lg:ml-8 shrink-0"
              >
                <PushPin color="purple" className="absolute -top-3.5 left-8 z-20" />

                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-2">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border bg-purple-100 text-purple-900 border-purple-400">
                    1ST PRIZE WINNERS
                  </span>
                  <span className="font-mono text-[11px] text-slate-500 font-semibold">
                    2025 // WORKSHOP SPRINT
                  </span>
                </div>

                <div>
                  <h3 className="font-hand text-2xl sm:text-3xl font-extrabold text-slate-950 leading-tight">
                    XR / VR Workshop & Hack
                  </h3>
                  <p className="font-mono text-xs font-bold text-purple-800 mt-0.5">
                    Spatial Tech Competitor • 1st Place with Teammate
                  </p>
                </div>

                <p className="font-sans text-xs sm:text-[13px] text-slate-800 leading-relaxed bg-[#faf5ff] p-3.5 rounded border border-purple-200">
                  Teamed up with my mate for an intensive XR/VR workshop exploring spatial computing, 3D environment interactions, and immersive headsets. Put our heads together for the hands-on project sprint, built a functional prototype, and won 1st place in the workshop!
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {["#XRVR", "#1stPrize", "#SpatialComputing", "#VirtualReality", "#TeamWin"].map((t, idx) => (
                    <span key={idx} className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-purple-50 text-slate-800 border border-purple-200">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>

            </div>

            {/* ---------------------------------------------------- */}
            {/* CLUSTER 5: FIGMA UI/UX DESIGN WORKSHOP (WINNERS) */}
            {/* ---------------------------------------------------- */}
            <div className="relative flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-16">
              
              {/* Polaroid on the Far Left */}
              <div className="relative w-full lg:w-auto shrink-0 flex justify-center lg:justify-start lg:ml-4">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 0 }}
                  style={{ transform: "rotate(-7.5deg)" }}
                  className="relative w-72 bg-white p-3.5 pb-4 rounded-sm shadow-[8px_14px_24px_rgba(0,0,0,0.45)] border border-slate-300"
                >
                  <PushPin color="rose" className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-30" />
                  <TapeStrip className="absolute -top-2 right-2 opacity-90 z-20" rotation="9deg" />

                  {/* Photo window */}
                  <div className="relative h-44 bg-[#090d16] rounded-sm overflow-hidden flex flex-col items-center justify-center p-3 text-center border-2 border-slate-900 shadow-inner">
                    <div className="w-14 h-14 rounded-full bg-rose-400/20 border-2 border-rose-400 flex items-center justify-center text-rose-300 mb-1">
                      <CodeIcon className="w-8 h-8 text-rose-300" />
                    </div>
                    <span className="font-mono text-xs font-bold text-rose-300">
                      FIGMA WORKSHOP WIN
                    </span>
                    <span className="font-mono text-[9px] text-rose-100/80">
                      Team UI/UX Design System Victory
                    </span>
                    <span className="absolute bottom-1.5 right-2 font-mono text-[8px] text-slate-500 uppercase">
                      [ SNAPSHOT ]
                    </span>
                  </div>

                  <div className="mt-2.5 text-center">
                    <p className="font-hand text-lg font-bold text-slate-900 leading-tight">
                      Figma Design Sprint
                    </p>
                    <p className="font-mono text-[10px] text-slate-500 mt-0.5">
                      Winning Interactive Prototype
                    </p>
                  </div>
                </motion.div>

                {/* Sticky Memo */}
                <motion.div
                  style={{ transform: "rotate(5deg)" }}
                  className="hidden xl:block absolute -right-24 -top-4 bg-[#ffe4e6] p-3 rounded shadow-md border border-rose-400 w-36 text-center z-20"
                >
                  <PushPin color="rose" className="absolute -top-3 left-1/2 -translate-x-1/2" />
                  <p className="font-hand text-xs font-extrabold text-rose-950 leading-tight">
                    "From messy wireframes to winning prototype!"
                  </p>
                </motion.div>
              </div>

              {/* Red Yarn linking Polaroid to Story Card */}
              <div className="hidden lg:block flex-1 h-0.5 border-t-2 border-dashed border-red-600/70 relative top-20 opacity-80" />

              {/* Story Index Card on the Right */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                style={{ transform: "rotate(3.2deg)" }}
                className="relative w-full lg:max-w-xl bg-[#fffef8] p-6 rounded-md shadow-[6px_10px_20px_rgba(0,0,0,0.35)] border-2 border-slate-900 space-y-3 lg:mr-6 shrink-0"
              >
                <PushPin color="rose" className="absolute -top-3.5 right-8 z-20" />

                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-2">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border bg-rose-100 text-rose-900 border-rose-400">
                    WORKSHOP WINNERS
                  </span>
                  <span className="font-mono text-[11px] text-slate-500 font-semibold">
                    2025 // DESIGN SPRINT
                  </span>
                </div>

                <div>
                  <h3 className="font-hand text-2xl sm:text-3xl font-extrabold text-slate-950 leading-tight">
                    Figma UI/UX Design Workshop
                  </h3>
                  <p className="font-mono text-xs font-bold text-rose-800 mt-0.5">
                    Design Lead & Prototyper • 1st Position with Team
                  </p>
                </div>

                <p className="font-sans text-xs sm:text-[13px] text-slate-800 leading-relaxed bg-[#fff1f2] p-3.5 rounded border border-rose-200">
                  Fast-paced design sprint workshop on component systems, wireframing, and intuitive user flows. Designed user journeys that tackled actual user friction points, and our team clinched 1st position in the workshop competition!
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {["#Figma", "#UIUXDesign", "#InteractivePrototypes", "#DesignSprint", "#TeamVictory"].map((t, idx) => (
                    <span key={idx} className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-rose-50 text-slate-800 border border-rose-200">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>

            </div>

            {/* ---------------------------------------------------- */}
            {/* CLUSTER 6: SIH 1ST YEAR (FRESHER DISCOVERY) */}
            {/* ---------------------------------------------------- */}
            <div className="relative flex flex-col lg:flex-row-reverse items-center lg:items-start justify-between gap-8 lg:gap-16">
              
              {/* Polaroid on the Far Right */}
              <div className="relative w-full lg:w-auto shrink-0 flex justify-center lg:justify-end lg:mr-6">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 0 }}
                  style={{ transform: "rotate(6.5deg)" }}
                  className="relative w-72 bg-white p-3.5 pb-4 rounded-sm shadow-[8px_14px_24px_rgba(0,0,0,0.45)] border border-slate-300"
                >
                  <PushPin color="teal" className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-30" />
                  <TapeStrip className="absolute -top-2 left-2 opacity-90 z-20" rotation="-7deg" />

                  {/* Photo window */}
                  <div className="relative h-44 bg-[#090d16] rounded-sm overflow-hidden flex flex-col items-center justify-center p-3 text-center border-2 border-slate-900 shadow-inner">
                    <div className="w-14 h-14 rounded-full bg-teal-400/20 border-2 border-teal-400 flex items-center justify-center text-teal-300 mb-1">
                      <TerminalIcon className="w-8 h-8 text-teal-300" />
                    </div>
                    <span className="font-mono text-xs font-bold text-teal-300">
                      1ST YEAR FRESHER RUN
                    </span>
                    <span className="font-mono text-[9px] text-teal-100/80">
                      SIH Problem Solving Sprint
                    </span>
                    <span className="absolute bottom-1.5 right-2 font-mono text-[8px] text-slate-500 uppercase">
                      [ SNAPSHOT ]
                    </span>
                  </div>

                  <div className="mt-2.5 text-center">
                    <p className="font-hand text-lg font-bold text-slate-900 leading-tight">
                      SIH Year 1 // Fresh Beginnings
                    </p>
                    <p className="font-mono text-[10px] text-slate-500 mt-0.5">
                      The Hackathon Bug Bit Here
                    </p>
                  </div>
                </motion.div>

                {/* Sticky Memo */}
                <motion.div
                  style={{ transform: "rotate(-4deg)" }}
                  className="hidden xl:block absolute -left-28 -top-4 bg-[#ccfbf1] p-3 rounded shadow-md border border-teal-400 w-36 text-center z-20"
                >
                  <PushPin color="teal" className="absolute -top-3 left-1/2 -translate-x-1/2" />
                  <p className="font-hand text-xs font-extrabold text-teal-950 leading-tight">
                    "Building under tight clock alongside seniors!"
                  </p>
                </motion.div>
              </div>

              {/* Red Yarn linking Polaroid to Story Card */}
              <div className="hidden lg:block flex-1 h-0.5 border-t-2 border-dashed border-red-600/70 relative top-20 opacity-80" />

              {/* Story Index Card on the Left */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                style={{ transform: "rotate(-3.8deg)" }}
                className="relative w-full lg:max-w-xl bg-[#fffef8] p-6 rounded-md shadow-[6px_10px_20px_rgba(0,0,0,0.35)] border-2 border-slate-900 space-y-3 lg:ml-6 shrink-0"
              >
                <PushPin color="teal" className="absolute -top-3.5 left-8 z-20" />

                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-2">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border bg-teal-100 text-teal-900 border-teal-400">
                    FIRST HACKATHON EXPERIENCE
                  </span>
                  <span className="font-mono text-[11px] text-slate-500 font-semibold">
                    2024 // 1ST YEAR B.TECH
                  </span>
                </div>

                <div>
                  <h3 className="font-hand text-2xl sm:text-3xl font-extrabold text-slate-950 leading-tight">
                    Smart India Hackathon (SIH) — 1st Year
                  </h3>
                  <p className="font-mono text-xs font-bold text-teal-800 mt-0.5">
                    First-Year Explorer & Frontend Support
                  </p>
                </div>

                <p className="font-sans text-xs sm:text-[13px] text-slate-800 leading-relaxed bg-[#f0fdfa] p-3.5 rounded border border-teal-200">
                  Participated in SIH right in my first year of B.Tech at Techno NJR. Solving a national-scale problem was intimidating at first, but working alongside seniors and feeling the adrenaline of building under the clock hooked me for good.
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {["#FirstYear", "#SIHJourney", "#LearningToBuild", "#Teamwork", "#CampusHackathon"].map((t, idx) => (
                    <span key={idx} className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-teal-50 text-slate-800 border border-teal-200">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>

            </div>

          </div>

          {/* ======================================================== */}
          {/* INFINITE YARN TRAIL & MORE ADVENTURES PINNED PAD */}
          {/* ======================================================== */}
          <div className="pt-8 pb-10 text-center relative flex justify-center">
            <motion.div
              whileHover={{ scale: 1.04, rotate: 0 }}
              style={{ transform: "rotate(-2.5deg)" }}
              className="relative bg-[#fef08a] p-6 sm:p-7 rounded-sm border-3 border-slate-950 shadow-[8px_14px_24px_rgba(0,0,0,0.4)] max-w-lg text-left"
            >
              <PushPin color="red" className="absolute -top-3.5 left-8 z-20" />
              <PushPin color="yellow" className="absolute -top-3.5 right-8 z-20" />

              <div className="flex items-center gap-2 mb-2 text-slate-900">
                <MapPinIcon className="w-5 h-5 text-amber-900" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-amber-950">
                  The Board Never Stops Growing...
                </span>
              </div>
              <p className="font-hand text-2xl font-extrabold text-slate-950 leading-snug">
                More hackathons, team sprints, late-night bugs & road trips to be pinned here soon!
              </p>
              <p className="font-mono text-xs text-slate-700 mt-2.5">
                (B.Tech 2nd Year • Always exploring architectures, breaking things & building cool stuff with great teams.)
              </p>
            </motion.div>
          </div>

          {/* Bottom Navigation Strip Pinned on the Board */}
          <div className="pt-6 border-t-2 border-[#8c5a2b] flex flex-wrap items-center justify-between gap-4">
            <button
              onClick={onBackToCover}
              className="px-4 py-2 bg-[#fffdf5] text-slate-950 font-mono text-xs font-bold rounded border-2 border-slate-950 shadow-[3px_3px_0px_#000] hover:bg-slate-100 cursor-pointer flex items-center gap-1.5"
            >
              <ArrowLeftIcon className="w-3.5 h-3.5" />
              <span>Return to Book Cover</span>
            </button>

            <button
              onClick={onGoToProjects}
              className="inline-flex items-center gap-2 px-5 py-2 bg-[#facc15] text-slate-950 font-mono text-xs font-bold rounded border-2 border-slate-950 shadow-[3px_3px_0px_#000] hover:bg-[#eab308] transition-all cursor-pointer"
            >
              <span>Explore My 2D Interactive Desk</span>
              <ArrowRightIcon className="w-4 h-4 text-slate-950" />
            </button>
          </div>

        </div>
      </motion.div>
    </div>
  );
}
