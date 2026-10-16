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
    <div className={`relative w-6 h-7 pointer-events-none drop-shadow-[2px_4px_3px_rgba(0,0,0,0.45)] ${className}`}>
      <svg viewBox="0 0 24 28" className="w-full h-full" fill="none">
        {/* Metal Pin Shaft */}
        <path d="M12 18 L12 26" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M12 26 L12 28" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" />
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
 * Vintage Masking Tape Strip
 */
function TapeStrip({ className = "", rotation = "-2deg" }) {
  return (
    <div
      style={{ transform: `rotate(${rotation})` }}
      className={`h-5 w-24 bg-[#fef08a]/80 border-t border-b border-amber-300/80 shadow-sm pointer-events-none ${className}`}
    />
  );
}

/**
 * Uneven, Asymmetric Cork Tagboard Experience Section
 */
export default function ExperienceSection({ onBackToCover, onGoToProjects }) {
  const experiences = [
    {
      id: "codefiesta",
      title: "Codefiesta 5.0 @ GIT Jaipur",
      role: "Hackathon Competitor (Team Sprint)",
      badge: "7TH RANK OUT OF 250 TEAMS",
      badgeColor: "bg-amber-100 text-amber-900 border-amber-400",
      period: "2026 // ROAD TRIP TO JAIPUR",
      highlight: "Won 5,000 INR Cash Prize Cheque",
      summary:
        "Road trip with the squad from Udaipur to GIT Jaipur for Codefiesta 5.0! Over 250 teams from all over turned up. We locked in, pulled an all-nighter on chai and snacks, debugged until the morning bell, and bagged 7th rank overall with a 5,000 INR prize cheque!",
      tags: ["#JaipurTrip", "#Codefiesta5", "#Top7Rank", "#HackathonSprint", "#CashPrize"],
      cardType: "award",
      polaroidLabel: "Codefiesta 5.0 // GIT Jaipur",
      polaroidSubtitle: "Top 7 / 250 Teams • 5,000 INR Prize",
      pinColor: "red",
      polaroidTilt: "-6.5deg",
      noteTilt: "3.2deg",
      layoutSide: "left",
      offsetClass: "md:pl-4",
    },
    {
      id: "sih-2nd-year",
      title: "Smart India Hackathon (SIH) — 2nd Year",
      role: "Sovereign AI Lead / Intranet Multi-Model",
      badge: "NATIONAL HACKATHON",
      badgeColor: "bg-emerald-100 text-emerald-900 border-emerald-400",
      period: "2026 // 2ND YEAR B.TECH",
      highlight: "Omnitrix: Air-Gapped Intranet AI",
      summary:
        "Returned to SIH in my second year with our team project Omnitrix. Built for companies that cannot leak confidential files to cloud LLMs. We ran multiple offline Ollama models inside private intranet hardware with a smart routing model directing code, text, and data tasks.",
      tags: ["#SIH2026", "#SovereignAI", "#OfflineOllama", "#PrivateIntranet", "#TeamSprint"],
      cardType: "sih",
      polaroidLabel: "SIH // Omnitrix Project",
      polaroidSubtitle: "Air-Gapped Intranet AI",
      pinColor: "emerald",
      polaroidTilt: "7.2deg",
      noteTilt: "-3.5deg",
      layoutSide: "right",
      offsetClass: "md:pr-6",
    },
    {
      id: "busbuddy",
      title: "BusBuddy Campus Transit Ecosystem",
      role: "Creator, Full-Stack & DevOps",
      badge: "COLLEGE TRANSIT IN USE",
      badgeColor: "bg-blue-100 text-blue-900 border-blue-400",
      period: "2025 - 2026 // ACTIVE",
      highlight: "End-to-End Live Bus Tracking",
      summary:
        "Saw fellow college students struggling every day with erratic bus timings and missed rides. Took the initiative, brought the whole idea to life, and built the full stack: Node.js WebSockets server for live GPS coordinate streaming, PostgreSQL database, Android driver GPS app, and student web map.",
      tags: ["#CampusTransit", "#NodeJS", "#WebSockets", "#Postgres", "#AndroidKotlin", "#Docker"],
      cardType: "bus",
      polaroidLabel: "BusBuddy Transit Engine",
      polaroidSubtitle: "Live Tracking for College",
      pinColor: "blue",
      polaroidTilt: "-5.2deg",
      noteTilt: "4.8deg",
      layoutSide: "left",
      offsetClass: "md:pl-10",
    },
    {
      id: "xr-vr-workshop",
      title: "XR / VR Workshop & Hack",
      role: "Spatial Tech Competitor",
      badge: "1ST PRIZE WINNERS",
      badgeColor: "bg-purple-100 text-purple-900 border-purple-400",
      period: "2025 // WORKSHOP SPRINT",
      highlight: "1st Place with My Teammate",
      summary:
        "Jumped into an intensive XR/VR workshop with my mate exploring spatial interfaces, 3D interaction design, and immersive headsets. Put our heads together for the final hands-on build challenge and walked away with 1st place!",
      tags: ["#XRVR", "#1stPrize", "#SpatialComputing", "#VirtualReality", "#TeamWin"],
      cardType: "vr",
      polaroidLabel: "XR / VR Workshop",
      polaroidSubtitle: "1st Prize Trophy",
      pinColor: "purple",
      polaroidTilt: "8.5deg",
      noteTilt: "-4.2deg",
      layoutSide: "right",
      offsetClass: "md:pr-12",
    },
    {
      id: "figma-workshop",
      title: "Figma UI/UX Design Workshop",
      role: "Design Lead & Prototyper",
      badge: "WORKSHOP WINNERS",
      badgeColor: "bg-rose-100 text-rose-900 border-rose-400",
      period: "2025 // DESIGN SPRINT",
      highlight: "1st Position with Design Team",
      summary:
        "Fast-paced design sprint workshop on component systems, wireframing, and interactive UI flows. Designed user journeys that tackled actual user friction points, and our team clinched 1st position in the workshop!",
      tags: ["#Figma", "#UIUXDesign", "#InteractivePrototypes", "#DesignSprint", "#TeamVictory"],
      cardType: "figma",
      polaroidLabel: "Figma Design Sprint",
      polaroidSubtitle: "Winning Interactive Prototype",
      pinColor: "rose",
      polaroidTilt: "-7.8deg",
      noteTilt: "2.5deg",
      layoutSide: "left",
      offsetClass: "md:pl-2",
    },
    {
      id: "sih-1st-year",
      title: "Smart India Hackathon (SIH) — 1st Year",
      role: "First-Year Explorer & Frontend Support",
      badge: "FIRST HACKATHON EXPERIENCE",
      badgeColor: "bg-teal-100 text-teal-900 border-teal-400",
      period: "2024 // 1ST YEAR B.TECH",
      highlight: "Diving In Head-First as a Fresher",
      summary:
        "Participated in SIH right in my first year of B.Tech at Techno NJR. Solving a national-scale problem was intimidating at first, but working alongside seniors and feeling the adrenaline of building under the clock hooked me for good.",
      tags: ["#FirstYear", "#SIHJourney", "#LearningToBuild", "#Teamwork", "#CampusHackathon"],
      cardType: "learning",
      polaroidLabel: "SIH Year 1 // Fresh Beginnings",
      polaroidSubtitle: "The Hackathon Bug Bit Here",
      pinColor: "teal",
      polaroidTilt: "6.2deg",
      noteTilt: "-3.8deg",
      layoutSide: "right",
      offsetClass: "md:pr-4",
    },
  ];

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#160f0a] flex items-center justify-center select-none">
      {/* Background Ambience with Desk Lamp Glow */}
      <div className="absolute inset-0 bg-desk-wood opacity-85 pointer-events-none" />
      <div className="absolute inset-0 lamp-glow pointer-events-none z-10" />

      {/* ======================================================== */}
      {/* MAIN CORK TAGBOARD / PINBOARD CONTAINER WITH WOODEN FRAME */}
      {/* ======================================================== */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="relative w-full h-full bg-tagboard flex flex-col justify-between overflow-hidden z-20 border-[10px] sm:border-[16px] border-[#55381f] shadow-[inset_0_0_60px_rgba(0,0,0,0.55),0_20px_50px_rgba(0,0,0,0.8)]"
      >
        {/* Subtle Cork Texture Vignette */}
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_80px_rgba(40,20,10,0.45)]" />

        {/* Top Header Bar Pinned onto the Tagboard */}
        <header className="relative z-30 px-4 sm:px-8 py-3 bg-[#422915]/90 border-b-4 border-[#2b190c] backdrop-blur-sm flex items-center justify-between shadow-md">
          <button
            onClick={onBackToCover}
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#fef08a] hover:bg-[#fde047] text-slate-950 border-2 border-slate-950 rounded-md font-mono text-xs font-bold shadow-[2px_2px_0px_#000] transition-all active:scale-95 cursor-pointer"
          >
            <ArrowLeftIcon className="w-3.5 h-3.5" />
            <span>Book Cover</span>
          </button>

          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-extrabold text-amber-200 bg-[#2d1b0e] px-3 py-1 rounded border border-[#6b4724] tracking-wider uppercase">
              TAGBOARD // EXPERIENCE & HACKATHONS
            </span>
          </div>

          <button
            onClick={onGoToProjects}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#facc15] hover:bg-[#eab308] text-slate-950 border-2 border-slate-950 rounded-md font-mono text-xs font-bold shadow-[2px_2px_0px_#000] transition-all active:scale-95 cursor-pointer"
          >
            <span>Projects Desk</span>
            <ArrowRightIcon className="w-3.5 h-3.5" />
          </button>
        </header>

        {/* Scrollable Corkboard Area */}
        <div className="relative z-20 flex-1 overflow-y-auto custom-scrollbar px-4 sm:px-8 py-6 max-w-5xl mx-auto w-full">
          
          {/* Tagboard Title Card Pinned with Two Corner Pins */}
          <div className="relative bg-[#fffdf5] p-5 sm:p-6 rounded-lg border-3 border-slate-950 shadow-[6px_6px_0px_rgba(0,0,0,0.35)] transform -rotate-1 mb-12">
            {/* Top Pushpins */}
            <PushPin color="red" className="absolute -top-3 left-4" />
            <PushPin color="yellow" className="absolute -top-3 right-4" />
            <TapeStrip className="absolute -top-2.5 left-1/2 -translate-x-1/2" rotation="1deg" />

            <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-slate-300 pb-2 mb-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-amber-100 border-2 border-slate-950 flex items-center justify-center text-amber-900 shrink-0">
                  <BriefcaseIcon className="w-5 h-5" />
                </div>
                <div>
                  <h1 className="font-hand text-3xl sm:text-4xl font-extrabold text-slate-950 leading-none">
                    Hackathons, Trips & Real Work Pinboard
                  </h1>
                  <p className="font-mono text-xs text-slate-600 mt-1">
                    B.Tech 2nd Year • Techno NJR Institute of Technology, Udaipur
                  </p>
                </div>
              </div>

              <span className="font-mono text-xs font-bold bg-amber-100 text-amber-950 px-2.5 py-1 rounded border border-amber-300">
                2024 — PRESENT
              </span>
            </div>

            <p className="font-sans text-xs sm:text-sm text-slate-800 leading-relaxed">
              Pinned snapshots, artifacts, and stories from my journey so far: road-tripping to Jaipur for Codefiesta, diving into national SIH challenges since 1st year, winning workshops with teammates, and architecting BusBuddy for our college campus.
            </p>
          </div>

          {/* ======================================================== */}
          {/* ASYMMETRICAL PINBOARD CARDS WITH CONNECTING STRING */}
          {/* ======================================================== */}
          <div className="relative space-y-16 sm:space-y-20 pb-12">
            
            {/* Winding Red Yarn / String Overlay Connecting the Pins */}
            <div className="absolute top-8 bottom-12 left-1/2 -translate-x-1/2 w-48 pointer-events-none hidden md:block z-0 opacity-80">
              <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 1200">
                <path
                  d="M 20 20 Q 90 120, 85 240 T 15 480 T 80 720 T 25 960 T 60 1200"
                  fill="none"
                  stroke="#dc2626"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeDasharray="8 4"
                  filter="drop-shadow(2px 3px 2px rgba(0,0,0,0.4))"
                />
              </svg>
            </div>

            {/* List of Uneven Asymmetric Entries */}
            {experiences.map((exp, index) => {
              const isLeft = exp.layoutSide === "left";

              return (
                <div
                  key={exp.id}
                  className={`relative z-10 flex flex-col md:flex-row items-center gap-6 sm:gap-10 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  } ${exp.offsetClass}`}
                >
                  
                  {/* 1. TILTED POLAROID PHOTO FRAME */}
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 0 }}
                    transition={{ duration: 0.2 }}
                    style={{ transform: `rotate(${exp.polaroidTilt})` }}
                    className="relative w-full max-w-[280px] sm:max-w-[300px] bg-white p-3.5 pb-4 rounded-sm shadow-[6px_10px_20px_rgba(0,0,0,0.4)] border border-slate-300 shrink-0"
                  >
                    {/* Push Pin at top */}
                    <PushPin
                      color={exp.pinColor}
                      className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-30"
                    />

                    {/* Masking tape on opposite corner for authentic pinned look */}
                    <TapeStrip
                      className="absolute -top-2 right-2 opacity-90 z-20"
                      rotation={isLeft ? "12deg" : "-10deg"}
                    />

                    {/* Photo Window */}
                    <div className="relative h-44 bg-[#0b0f17] rounded-sm overflow-hidden flex flex-col items-center justify-center p-3 text-center border-2 border-slate-900 shadow-inner">
                      <div className="absolute inset-0 bg-graph-paper opacity-15" />

                      {/* Icon Graphics */}
                      {exp.cardType === "award" && (
                        <div className="relative z-10 flex flex-col items-center gap-1.5">
                          <div className="w-12 h-12 rounded-full bg-amber-400/20 border-2 border-amber-400 flex items-center justify-center text-amber-300">
                            <TrophyIcon className="w-7 h-7" />
                          </div>
                          <span className="font-mono text-xs font-bold text-amber-300">
                            5,000 INR CHEQUE
                          </span>
                          <span className="font-mono text-[9.5px] text-amber-100/80">
                            Top 7 / 250 Teams • Jaipur
                          </span>
                        </div>
                      )}

                      {exp.cardType === "sih" && (
                        <div className="relative z-10 flex flex-col items-center gap-1.5">
                          <div className="w-12 h-12 rounded-full bg-emerald-400/20 border-2 border-emerald-400 flex items-center justify-center text-emerald-300">
                            <CpuIcon className="w-7 h-7" />
                          </div>
                          <span className="font-mono text-xs font-bold text-emerald-300">
                            SOVEREIGN AI WORKBENCH
                          </span>
                          <span className="font-mono text-[9.5px] text-emerald-100/80">
                            Intranet Ollama Cluster
                          </span>
                        </div>
                      )}

                      {exp.cardType === "bus" && (
                        <div className="relative z-10 flex flex-col items-center gap-1.5">
                          <div className="w-12 h-12 rounded-full bg-blue-400/20 border-2 border-blue-400 flex items-center justify-center text-blue-300">
                            <BusIcon className="w-7 h-7" />
                          </div>
                          <span className="font-mono text-xs font-bold text-blue-300">
                            BUSBUDDY TRANSIT
                          </span>
                          <span className="font-mono text-[9.5px] text-blue-100/80">
                            Live Coordinates • Campus Fleet
                          </span>
                        </div>
                      )}

                      {exp.cardType === "vr" && (
                        <div className="relative z-10 flex flex-col items-center gap-1.5">
                          <div className="w-12 h-12 rounded-full bg-purple-400/20 border-2 border-purple-400 flex items-center justify-center text-purple-300">
                            <SparkleStarIcon className="w-7 h-7 text-purple-300" />
                          </div>
                          <span className="font-mono text-xs font-bold text-purple-300">
                            XR / VR 1ST PRIZE
                          </span>
                          <span className="font-mono text-[9.5px] text-purple-100/80">
                            Spatial Interaction Trophy
                          </span>
                        </div>
                      )}

                      {exp.cardType === "figma" && (
                        <div className="relative z-10 flex flex-col items-center gap-1.5">
                          <div className="w-12 h-12 rounded-full bg-rose-400/20 border-2 border-rose-400 flex items-center justify-center text-rose-300">
                            <CodeIcon className="w-7 h-7 text-rose-300" />
                          </div>
                          <span className="font-mono text-xs font-bold text-rose-300">
                            FIGMA WORKSHOP WIN
                          </span>
                          <span className="font-mono text-[9.5px] text-rose-100/80">
                            Winning UI/UX Prototype
                          </span>
                        </div>
                      )}

                      {exp.cardType === "learning" && (
                        <div className="relative z-10 flex flex-col items-center gap-1.5">
                          <div className="w-12 h-12 rounded-full bg-teal-400/20 border-2 border-teal-400 flex items-center justify-center text-teal-300">
                            <TerminalIcon className="w-7 h-7 text-teal-300" />
                          </div>
                          <span className="font-mono text-xs font-bold text-teal-300">
                            1ST YEAR FRESHER RUN
                          </span>
                          <span className="font-mono text-[9.5px] text-teal-100/80">
                            SIH Hackathon Sprint
                          </span>
                        </div>
                      )}

                      <span className="absolute bottom-1.5 right-2 font-mono text-[8px] text-slate-500 uppercase">
                        [ POLAROID SNAPSHOT ]
                      </span>
                    </div>

                    {/* Handwritten Caption under Photo */}
                    <div className="mt-2.5 text-center">
                      <p className="font-hand text-lg font-bold text-slate-900 leading-tight">
                        {exp.polaroidLabel}
                      </p>
                      <p className="font-mono text-[10px] text-slate-500 mt-0.5">
                        {exp.polaroidSubtitle}
                      </p>
                    </div>
                  </motion.div>

                  {/* 2. TILTED PAPER NOTE CARD (UNEVEN DESCRIPTION) */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    style={{ transform: `rotate(${exp.noteTilt})` }}
                    className="relative flex-1 bg-[#fffef8] p-5 sm:p-6 rounded-md shadow-[5px_8px_16px_rgba(0,0,0,0.3)] border-2 border-slate-900 space-y-2.5 max-w-xl"
                  >
                    {/* Pin holding the note */}
                    <PushPin
                      color={exp.pinColor}
                      className="absolute -top-3.5 right-6 z-20"
                    />

                    {/* Badge and Period */}
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-2">
                      <span className={`font-mono text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${exp.badgeColor}`}>
                        {exp.badge}
                      </span>
                      <span className="font-mono text-[11px] text-slate-500 font-semibold">
                        {exp.period}
                      </span>
                    </div>

                    {/* Title */}
                    <div>
                      <h3 className="font-hand text-2xl font-extrabold text-slate-950 leading-tight">
                        {exp.title}
                      </h3>
                      <p className="font-mono text-xs font-bold text-blue-800 mt-0.5">
                        {exp.role}
                      </p>
                    </div>

                    {/* Humanized Story Content */}
                    <p className="font-sans text-xs sm:text-[13px] text-slate-800 leading-relaxed bg-[#faf7ee] p-3 rounded border border-slate-200/90">
                      {exp.summary}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {exp.tags.map((t, idx) => (
                        <span
                          key={idx}
                          className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-amber-50/80 text-slate-800 border border-amber-200"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </motion.div>

                </div>
              );
            })}

            {/* ======================================================== */}
            {/* INFINITE YARN TRAIL & MORE ADVENTURES NOTE */}
            {/* ======================================================== */}
            <div className="pt-12 pb-6 text-center relative flex justify-center">
              <motion.div
                whileHover={{ scale: 1.04, rotate: 0 }}
                style={{ transform: "rotate(-2.5deg)" }}
                className="relative bg-[#fef08a] p-5 sm:p-6 rounded-md border-3 border-slate-950 shadow-[6px_10px_20px_rgba(0,0,0,0.4)] max-w-md text-left"
              >
                <PushPin color="red" className="absolute -top-3 left-6 z-20" />
                <PushPin color="yellow" className="absolute -top-3 right-6 z-20" />

                <div className="flex items-center gap-2 mb-1.5 text-slate-900">
                  <MapPinIcon className="w-4 h-4 text-amber-900" />
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-amber-950">
                    The Board Never Stops Growing...
                  </span>
                </div>
                <p className="font-hand text-xl font-extrabold text-slate-950 leading-snug">
                  More hackathons, team sprints, late-night bugs & road trips to be pinned here soon!
                </p>
                <p className="font-mono text-[11px] text-slate-700 mt-2">
                  (B.Tech 2nd Year • Always exploring architectures, breaking things & building cool stuff.)
                </p>
              </motion.div>
            </div>

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
