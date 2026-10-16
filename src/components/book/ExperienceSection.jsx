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
    <div className={`relative w-6 h-7 pointer-events-none drop-shadow-[2px_4px_3px_rgba(0,0,0,0.5)] ${className}`}>
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
    <svg className={`w-4 h-7 text-slate-700 pointer-events-none drop-shadow-sm ${className}`} viewBox="0 0 16 32" fill="none">
      <path
        d="M5 10 L5 24 C5 27 11 27 11 24 L11 6 C11 2 1 2 1 6 L1 22 C1 28 15 28 15 22 L15 10"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * Organic Side Memo Note pinned across the board to fill space naturally without separating the pair
 */
function SideMemoNote({ pinColor = "yellow", title, text, tag, tilt = "-3deg", className = "" }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, rotate: 0 }}
      transition={{ duration: 0.15 }}
      style={{ transform: `rotate(${tilt})` }}
      className={`relative w-full max-w-[270px] bg-[#fffde7] p-4 rounded-sm border-2 border-slate-900 shadow-[5px_8px_16px_rgba(0,0,0,0.35)] select-none shrink-0 ${className}`}
    >
      <PushPin color={pinColor} className="absolute -top-3.5 left-6 z-20" />
      <PaperClip className="absolute -top-2 right-4 z-20" />
      <div className="font-hand text-lg font-bold text-slate-950 leading-tight mb-1 border-b border-amber-300 pb-1">
        {title}
      </div>
      <p className="font-sans text-xs text-slate-800 leading-relaxed italic">
        "{text}"
      </p>
      {tag && (
        <span className="inline-block mt-2 font-mono text-[9px] font-bold text-amber-950 bg-amber-200/90 px-2 py-0.5 rounded border border-amber-300">
          {tag}
        </span>
      )}
    </motion.div>
  );
}

/**
 * Sweeping Diagonal Red Yarn connecting Box to Box across the corkboard
 */
function YarnConnector({ fromLeftToRight = true }) {
  return (
    <div className="w-full h-24 sm:h-32 my-[-14px] pointer-events-none relative z-0 hidden lg:block overflow-visible">
      <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 1000 120">
        <path
          d={
            fromLeftToRight
              ? "M 130 0 C 130 75, 870 45, 870 120"
              : "M 870 0 C 870 75, 130 45, 130 120"
          }
          fill="none"
          stroke="#dc2626"
          strokeWidth="3.5"
          strokeDasharray="9 6"
          strokeLinecap="round"
          filter="drop-shadow(2px 4px 3px rgba(0,0,0,0.45))"
        />
        {/* Subtle red pin anchor dots */}
        <circle cx={fromLeftToRight ? "130" : "870"} cy="0" r="4.5" fill="#991b1b" />
        <circle cx={fromLeftToRight ? "870" : "130"} cy="120" r="4.5" fill="#991b1b" />
      </svg>
    </div>
  );
}

/**
 * Tagboard Experience Section following the user's exact hand-drawn draft sketch:
 * - Staggered pairs: Polaroid Box and Text Card stay tightly together as a unit (~680px max)
 * - The pairs alternate across the board: Left-aligned pair -> Right-aligned pair -> Left-aligned pair
 * - Authentic pinned side memos in the opposing gaps to balance space naturally
 * - Diagonal sweeping red yarn connecting the pinned boxes across the board
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
        "Road trip with the squad from Udaipur to GIT Jaipur for Codefiesta 5.0! Over 250 teams from all over competed. We locked in, pulled an all-nighter on chai and snacks, debugged until the morning bell, and bagged 7th rank overall with a 5,000 INR prize cheque!",
      tags: ["#JaipurTrip", "#Codefiesta5", "#Top7Rank", "#HackathonSprint", "#CashPrize"],
      cardType: "award",
      polaroidLabel: "Codefiesta 5.0 // GIT Jaipur",
      polaroidSubtitle: "Top 7 / 250 Teams • 5,000 INR Prize",
      pinColor: "red",
      polaroidTilt: "-4.5deg",
      noteTilt: "1.5deg",
      boxOnLeft: true,
      memoTitle: "Road Trip to Jaipur",
      memoText: "Drove with the squad from Udaipur to GIT Jaipur. 250 teams, all-nighter on chai and snacks, debugged until the final buzzer!",
      memoTag: "#5000INR_Cheque",
      memoTilt: "4deg",
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
      polaroidTilt: "5deg",
      noteTilt: "-2deg",
      boxOnLeft: false,
      memoTitle: "Air-Gapped Intranet AI",
      memoText: "Built Omnitrix for enterprise confidentiality: 100% air-gapped local hardware with a smart routing model handling text & code with 0 cloud data egress.",
      memoTag: "#PrivateOllama",
      memoTilt: "-3deg",
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
      polaroidTilt: "-5deg",
      noteTilt: "2deg",
      boxOnLeft: true,
      memoTitle: "Live GPS on Campus",
      memoText: "Got tired of erratic college bus times. Built the full stack myself with WebSockets streaming so students can track buses in real-time.",
      memoTag: "#LiveTransit",
      memoTilt: "3.5deg",
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
      polaroidTilt: "4.5deg",
      noteTilt: "-2.5deg",
      boxOnLeft: false,
      memoTitle: "Spatial 3D Interaction",
      memoText: "Teamed up for an intensive XR/VR hackathon sprint exploring spatial interfaces and walked away with 1st place!",
      memoTag: "#1stPlaceTrophy",
      memoTilt: "-4deg",
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
        "Fast-paced design sprint workshop on component systems, wireframing, and intuitive user flows. Designed user journeys that tackled actual user friction points, and our team clinched 1st position in the workshop competition!",
      tags: ["#Figma", "#UIUXDesign", "#InteractivePrototypes", "#DesignSprint", "#TeamVictory"],
      cardType: "figma",
      polaroidLabel: "Figma Design Sprint",
      polaroidSubtitle: "Winning Interactive Prototype",
      pinColor: "rose",
      polaroidTilt: "-4deg",
      noteTilt: "1.5deg",
      boxOnLeft: true,
      memoTitle: "Design Sprint Victory",
      memoText: "Designed frictionless user journeys, interactive wireframes and components to win 1st place with our design squad.",
      memoTag: "#FigmaChampions",
      memoTilt: "3deg",
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
      polaroidTilt: "5deg",
      noteTilt: "-2deg",
      boxOnLeft: false,
      memoTitle: "Where It All Started",
      memoText: "Fresher year diving head-first into national SIH. Intimidated at first, but hooked on the adrenaline of building under the clock forever.",
      memoTag: "#TheBeginning",
      memoTilt: "-3.5deg",
    },
  ];

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#160f0a] flex items-center justify-center select-none">
      {/* Background Ambience with Desk Lamp Glow */}
      <div className="absolute inset-0 bg-desk-wood opacity-85 pointer-events-none" />
      <div className="absolute inset-0 lamp-glow pointer-events-none z-10" />

      {/* ======================================================== */}
      {/* MAIN CORK TAGBOARD CONTAINER WITH WOODEN BULLETIN FRAME */}
      {/* ======================================================== */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="relative w-full h-full bg-tagboard flex flex-col justify-between overflow-hidden z-20 border-[10px] sm:border-[16px] border-[#55381f] shadow-[inset_0_0_80px_rgba(0,0,0,0.6),0_20px_50px_rgba(0,0,0,0.85)]"
      >
        {/* Corkboard Vignette Depth */}
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_90px_rgba(30,15,5,0.45)]" />

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
        {/* SCROLLABLE PINBOARD CANVAS (MATCHING EXACT DRAFT SKETCH) */}
        {/* ======================================================== */}
        <div className="relative z-20 flex-1 overflow-y-auto custom-scrollbar px-3 sm:px-8 lg:px-12 py-8 w-full">
          
          <div className="max-w-7xl mx-auto">

            {/* Top Pinned Banner */}
            <div className="relative bg-[#fffdf5] p-5 sm:p-6 rounded border-3 border-slate-950 shadow-[6px_8px_16px_rgba(0,0,0,0.35)] transform -rotate-1 mb-10 max-w-4xl mx-auto">
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
            {/* STAGGERED PAIRS FOLLOWING THE DRAFT SKETCH WITH S-CURVE YARN */}
            {/* ======================================================== */}
            <div className="relative space-y-6 sm:space-y-8">
              {experiences.map((exp, index) => {
                const isLeft = exp.boxOnLeft;
                const nextExp = experiences[index + 1];

                return (
                  <React.Fragment key={exp.id}>
                    {/* The Row Container: Staggered across board */}
                    <div className="relative">
                      <div
                        className={`flex flex-col lg:flex-row items-center gap-6 lg:gap-10 relative z-10 ${
                          isLeft ? "lg:justify-start" : "lg:justify-end"
                        }`}
                      >
                        {/* 1. TIGHT PAIR UNIT: Polaroid Box and Text Card comfortably side by side */}
                        <div
                          className={`flex flex-col sm:flex-row items-center sm:items-stretch gap-4 sm:gap-5 w-full lg:w-auto lg:max-w-3xl ${
                            isLeft ? "sm:flex-row" : "sm:flex-row-reverse"
                          }`}
                        >
                          {/* POLAROID / BOX (Matching the [Box] in your sketch) */}
                          <motion.div
                            whileHover={{ scale: 1.04, rotate: 0 }}
                            transition={{ duration: 0.15 }}
                            style={{ transform: `rotate(${exp.polaroidTilt})` }}
                            className="relative w-full sm:w-[230px] bg-white p-3 pb-3.5 rounded-sm shadow-[6px_10px_18px_rgba(0,0,0,0.4)] border border-slate-300 shrink-0 flex flex-col justify-between"
                          >
                            <PushPin
                              color={exp.pinColor}
                              className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-30"
                            />
                            <TapeStrip
                              className="absolute -top-2 right-1 opacity-90 z-20"
                              rotation={isLeft ? "8deg" : "-8deg"}
                            />

                            {/* Photo window */}
                            <div className="relative h-38 bg-[#090d16] rounded-sm overflow-hidden flex flex-col items-center justify-center p-3 text-center border-2 border-slate-900 shadow-inner">
                              <div className="absolute inset-0 bg-graph-paper opacity-15" />

                              {/* Graphical Icon Badge */}
                              {exp.cardType === "award" && (
                                <div className="relative z-10 flex flex-col items-center gap-1">
                                  <div className="w-11 h-11 rounded-full bg-amber-400/20 border-2 border-amber-400 flex items-center justify-center text-amber-300">
                                    <TrophyIcon className="w-6 h-6" />
                                  </div>
                                  <span className="font-mono text-xs font-bold text-amber-300">
                                    5,000 INR CHEQUE
                                  </span>
                                  <span className="font-mono text-[9px] text-amber-100/80">
                                    7th Rank / 250 Teams
                                  </span>
                                </div>
                              )}

                              {exp.cardType === "sih" && (
                                <div className="relative z-10 flex flex-col items-center gap-1">
                                  <div className="w-11 h-11 rounded-full bg-emerald-400/20 border-2 border-emerald-400 flex items-center justify-center text-emerald-300">
                                    <CpuIcon className="w-6 h-6" />
                                  </div>
                                  <span className="font-mono text-xs font-bold text-emerald-300">
                                    SOVEREIGN AI
                                  </span>
                                  <span className="font-mono text-[9px] text-emerald-100/80">
                                    Air-Gapped Intranet
                                  </span>
                                </div>
                              )}

                              {exp.cardType === "bus" && (
                                <div className="relative z-10 flex flex-col items-center gap-1">
                                  <div className="w-11 h-11 rounded-full bg-blue-400/20 border-2 border-blue-400 flex items-center justify-center text-blue-300">
                                    <BusIcon className="w-6 h-6" />
                                  </div>
                                  <span className="font-mono text-xs font-bold text-blue-300">
                                    BUSBUDDY TRANSIT
                                  </span>
                                  <span className="font-mono text-[9px] text-blue-100/80">
                                    Live GPS Fleet
                                  </span>
                                </div>
                              )}

                              {exp.cardType === "vr" && (
                                <div className="relative z-10 flex flex-col items-center gap-1">
                                  <div className="w-11 h-11 rounded-full bg-purple-400/20 border-2 border-purple-400 flex items-center justify-center text-purple-300">
                                    <SparkleStarIcon className="w-6 h-6 text-purple-300" />
                                  </div>
                                  <span className="font-mono text-xs font-bold text-purple-300">
                                    XR / VR 1ST PRIZE
                                  </span>
                                  <span className="font-mono text-[9px] text-purple-100/80">
                                    Spatial Interaction
                                  </span>
                                </div>
                              )}

                              {exp.cardType === "figma" && (
                                <div className="relative z-10 flex flex-col items-center gap-1">
                                  <div className="w-11 h-11 rounded-full bg-rose-400/20 border-2 border-rose-400 flex items-center justify-center text-rose-300">
                                    <CodeIcon className="w-6 h-6 text-rose-300" />
                                  </div>
                                  <span className="font-mono text-xs font-bold text-rose-300">
                                    FIGMA WORKSHOP WIN
                                  </span>
                                  <span className="font-mono text-[9px] text-rose-100/80">
                                    Winning Prototype
                                  </span>
                                </div>
                              )}

                              {exp.cardType === "learning" && (
                                <div className="relative z-10 flex flex-col items-center gap-1">
                                  <div className="w-11 h-11 rounded-full bg-teal-400/20 border-2 border-teal-400 flex items-center justify-center text-teal-300">
                                    <TerminalIcon className="w-6 h-6 text-teal-300" />
                                  </div>
                                  <span className="font-mono text-xs font-bold text-teal-300">
                                    1ST YEAR FRESHER RUN
                                  </span>
                                  <span className="font-mono text-[9px] text-teal-100/80">
                                    SIH Hackathon Sprint
                                  </span>
                                </div>
                              )}

                              <span className="absolute bottom-1 right-1.5 font-mono text-[8px] text-slate-500 uppercase">
                                [ SNAPSHOT ]
                              </span>
                            </div>

                            {/* Caption under Photo */}
                            <div className="mt-2 text-center">
                              <p className="font-hand text-base font-bold text-slate-900 leading-tight">
                                {exp.polaroidLabel}
                              </p>
                              <p className="font-mono text-[9px] text-slate-500 mt-0.5">
                                {exp.polaroidSubtitle}
                              </p>
                            </div>
                          </motion.div>

                          {/* TEXT CARD (Matching the lines of text in your sketch) */}
                          <motion.div
                            whileHover={{ scale: 1.01 }}
                            style={{ transform: `rotate(${exp.noteTilt})` }}
                            className="relative flex-1 w-full sm:w-[380px] bg-[#fffef8] p-4 sm:p-5 rounded-md shadow-[5px_8px_16px_rgba(0,0,0,0.3)] border-2 border-slate-900 space-y-2.5 flex flex-col justify-between"
                          >
                            <PushPin
                              color={exp.pinColor}
                              className={`absolute -top-3.5 ${isLeft ? "right-6" : "left-6"} z-20`}
                            />

                            {/* Top Badges */}
                            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-2">
                              <span className={`font-mono text-[9.5px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${exp.badgeColor}`}>
                                {exp.badge}
                              </span>
                              <span className="font-mono text-[10.5px] text-slate-500 font-semibold">
                                {exp.period}
                              </span>
                            </div>

                            {/* Heading & Role */}
                            <div>
                              <h3 className="font-hand text-xl sm:text-2xl font-extrabold text-slate-950 leading-tight">
                                {exp.title}
                              </h3>
                              <p className="font-mono text-xs font-bold text-blue-800 mt-0.5">
                                {exp.role}
                              </p>
                            </div>

                            {/* Real-world Story Text */}
                            <p className="font-sans text-xs sm:text-[12.5px] text-slate-800 leading-relaxed bg-[#faf7ee] p-2.5 rounded border border-slate-200/90">
                              {exp.summary}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-1.5 pt-0.5">
                              {exp.tags.map((t, idx) => (
                                <span
                                  key={idx}
                                  className="font-mono text-[9.5px] font-bold px-2 py-0.5 rounded bg-amber-50 text-slate-800 border border-amber-200"
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                          </motion.div>
                        </div>

                        {/* 2. AUTHENTIC PINNED SIDE MEMO in the opposing space (Fills the board naturally with no huge empty voids!) */}
                        <div
                          className={`hidden lg:flex items-center ${
                            isLeft ? "lg:ml-auto lg:mr-4" : "lg:mr-auto lg:ml-4 lg:order-first"
                          }`}
                        >
                          <SideMemoNote
                            pinColor={exp.pinColor}
                            title={exp.memoTitle}
                            text={exp.memoText}
                            tag={exp.memoTag}
                            tilt={exp.memoTilt}
                          />
                        </div>
                      </div>

                      {/* S-CURVE YARN PATH FROM BOX TO BOX (Sweeps diagonally across the board) */}
                      {nextExp && (
                        <YarnConnector fromLeftToRight={isLeft} />
                      )}
                    </div>
                  </React.Fragment>
                );
              })}
            </div>

            {/* ======================================================== */}
            {/* TRAILING THREAD INTO FUTURE ADVENTURES PINNED NOTE */}
            {/* ======================================================== */}
            <div className="pt-10 pb-8 text-center relative flex justify-center">
              <motion.div
                whileHover={{ scale: 1.03, rotate: 0 }}
                style={{ transform: "rotate(-2deg)" }}
                className="relative bg-[#fef08a] p-5 sm:p-6 rounded-md border-3 border-slate-950 shadow-[6px_10px_20px_rgba(0,0,0,0.4)] max-w-lg text-left"
              >
                <PushPin color="red" className="absolute -top-3.5 left-8 z-20" />
                <PushPin color="yellow" className="absolute -top-3.5 right-8 z-20" />

                <div className="flex items-center gap-2 mb-1.5 text-slate-900">
                  <MapPinIcon className="w-4 h-4 text-amber-900" />
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-amber-950">
                    The Board Never Stops Growing...
                  </span>
                </div>
                <p className="font-hand text-xl sm:text-2xl font-extrabold text-slate-950 leading-snug">
                  More hackathons, team sprints, late-night bugs & road trips to be pinned here soon!
                </p>
                <p className="font-mono text-xs text-slate-700 mt-2">
                  (B.Tech 2nd Year • Always exploring architectures, breaking things & building cool stuff.)
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

        </div>
      </motion.div>
    </div>
  );
}
