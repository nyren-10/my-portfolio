import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FingerGunsCharacter from "../character/FingerGunsCharacter";
import AvatarDoodle from "../character/AvatarDoodle";
import {
  FolderIcon,
  BriefcaseIcon,
  CertificateIcon,
  UserIcon,
  ArrowRightIcon,
  CloseIcon,
  BoltIcon,
  SparkleStarIcon,
  CodeIcon,
  TerminalIcon,
  CpuIcon,
  BusIcon,
} from "../ui/Icons";
import { PythonLogo, NodeLogo, ReactLogo, PostgresLogo, DockerLogo, GeminiLogo } from "../ui/TechLogos";

export default function BookCoverLanding({ onOpenProjects, onOpenAboutMe, onOpenSection }) {
  const [characterQuote, setCharacterQuote] = useState(
    "Click [MY PROJECTS] to enter the 2D interactive desk!"
  );
  const [activeModalSection, setActiveModalSection] = useState(null);

  const quotes = [
    "I explore architectures to find the best one... though I mess up and redraw often!",
    "Aspiring game designer, currently having fun with full-stack and DevOps.",
    "BusBuddy was born because our college bus schedule was pure chaos.",
    "Omnitrix SIH: Running offline AI models inside a private company intranet.",
    "Animal Crossing, Pokémon, Minecraft, and late-night problem solving.",
    "Click [MY PROJECTS] to drag artifacts across the desk!",
  ];

  const handleCharacterClick = () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setCharacterQuote(randomQuote);
  };

  const handleButtonClick = (section) => {
    if (section === "projects") {
      onOpenProjects();
    } else if (section === "about") {
      if (onOpenAboutMe) {
        onOpenAboutMe();
      } else {
        setActiveModalSection("about");
      }
    } else {
      setActiveModalSection(section);
      if (onOpenSection) onOpenSection(section);
    }
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#1a1410] flex items-center justify-center select-none">
      {/* Outer ambient desk background with warm lamp light */}
      <div className="absolute inset-0 bg-desk-wood opacity-80 pointer-events-none" />
      <div className="absolute inset-0 lamp-glow pointer-events-none z-10" />

      {/* FULL SCREEN Open Book Cover / Architectural Sketchbook Spread */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative w-full h-full bg-[#fbf8ee] flex flex-col justify-between overflow-hidden z-20 border-[6px] border-[#2c1d11] shadow-2xl"
      >
        {/* Book Spine / Stitched Left Margin on Desktop */}
        <div className="absolute top-0 bottom-0 left-0 w-8 md:w-12 bg-[#2d1e16] border-r-4 border-[#1a0f08] hidden sm:flex flex-col justify-around items-center py-6 shadow-2xl z-30 pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <div className="w-2.5 h-2.5 rounded-full bg-[#120a06] border border-[#6b4c35]" />
              <div className="w-0.5 h-6 bg-[#d4af37] opacity-60" />
            </div>
          ))}
        </div>

        {/* Vintage Bookmark Ribbon at Top */}
        <div className="absolute -top-1 left-16 md:left-24 w-8 h-20 bg-rose-700 shadow-lg border-b-4 border-rose-900 clip-ribbon z-30 pointer-events-none" />

        {/* Architectural Graph Paper & Sketch Grid Overlay */}
        <div className="absolute inset-0 bg-graph-paper opacity-50 pointer-events-none" />

        {/* Vintage Drafting Tape Strips on Corners */}
        <div className="absolute top-3 left-20 w-28 h-6 bg-[#fef08a]/85 border-t border-b border-amber-300 transform -rotate-2 pointer-events-none shadow-sm" />
        <div className="absolute top-3 right-6 w-32 h-6 bg-[#fef08a]/85 border-t border-b border-amber-300 transform rotate-1 pointer-events-none shadow-sm" />
        <div className="absolute bottom-3 right-8 w-36 h-6 bg-[#fef08a]/85 border-t border-b border-amber-300 transform -rotate-1 pointer-events-none shadow-sm" />

        {/* --- MAIN PAGE CONTENT CANVAS (FULL SCREEN SPREAD) --- */}
        <div className="relative flex-1 pl-6 sm:pl-16 md:pl-20 pr-6 sm:pr-10 py-5 sm:py-7 flex flex-col justify-between overflow-y-auto custom-scrollbar z-20">
          
          {/* ======================================================== */}
          {/* TOP SECTION: Matches Draft Sketch (Avatar + Yo wassuh!) */}
          {/* ======================================================== */}
          <div className="pt-2">
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
              
              {/* TOP-LEFT: Sketched Avatar Doodle with [ ABOUT ME ] button underneath */}
              <div className="flex flex-col items-center shrink-0">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  className="bg-white p-2 rounded-xl border-3 border-slate-900 shadow-[4px_4px_0px_#0f172a] cursor-pointer"
                  onClick={() => handleButtonClick("about")}
                  title="Click to view About Me!"
                >
                  <AvatarDoodle className="w-20 h-20 sm:w-24 sm:h-24" />
                </motion.div>

                {/* Hand-drawn [ ABOUT ME ] Box Button directly underneath avatar (from sketch) */}
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => handleButtonClick("about")}
                  className="mt-2.5 px-4 py-1.5 bg-white hover:bg-amber-100/70 border-3 border-slate-950 rounded-md shadow-[3px_3px_0px_#0f172a] font-hand text-lg sm:text-xl font-extrabold text-slate-950 tracking-wide transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <UserIcon className="w-4 h-4 text-slate-800" />
                  <span>ABOUT ME</span>
                </motion.button>
              </div>

              {/* Title & Subtitle from Sketch: "Yo wassuh !" & "I create blunders" */}
              <div className="flex-1 mt-1 sm:mt-0">
                <div className="inline-block">
                  <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-hand tracking-tight text-slate-950 leading-none">
                    Yo wassuh !
                  </h1>
                  {/* Hand-drawn underline stroke */}
                  <div className="w-full h-1.5 bg-slate-950 rounded-full mt-1 transform -rotate-0.5" />
                </div>

                <div className="mt-2 sm:mt-3">
                  <div className="inline-block relative">
                    <p className="font-sketch text-2xl sm:text-4xl text-slate-800 font-extrabold tracking-wide">
                      I create blunders
                    </p>
                    {/* Double hand-drawn underline bars from sketch */}
                    <div className="w-full h-1 bg-slate-950 rounded-full mt-1" />
                    <div className="w-4/5 h-0.5 bg-slate-700 rounded-full mt-0.5" />
                  </div>
                  
                  {/* Clear Personal Details */}
                  <div className="flex flex-wrap items-center gap-2 mt-2">
                    <span className="text-xs sm:text-sm font-mono text-slate-800 font-bold bg-amber-100/80 px-2 py-0.5 rounded border border-amber-300">
                      Mayank Teli (@nyren-10)
                    </span>
                    <span className="text-xs sm:text-sm font-mono text-slate-700 font-medium">
                      B.Tech at Techno NJR, Udaipur
                    </span>
                    <span className="text-xs font-mono text-slate-500 hidden md:inline">
                      • Aspiring Game Dev & Designer • Full-Stack Explorer
                    </span>
                  </div>
                </div>
              </div>

              {/* Tech Stack Indicator Ribbon (Zero Emojis - Real SVG Logos) */}
              <div className="hidden lg:flex items-center gap-2 bg-white/90 border-2 border-slate-900 rounded-lg p-2 shadow-[2px_2px_0px_#0f172a]">
                <NodeLogo className="w-5 h-5" />
                <PythonLogo className="w-5 h-5" />
                <PostgresLogo className="w-5 h-5" />
                <DockerLogo className="w-5 h-5" />
                <GeminiLogo className="w-5 h-5" />
                <span className="text-[10px] font-mono font-bold text-slate-600 ml-1">
                  DEV STACK
                </span>
              </div>

            </div>
          </div>

          {/* ======================================================== */}
          {/* MIDDLE SECTION: Left Buttons + Right Character in Circle */}
          {/* ======================================================== */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center my-auto py-4">
            
            {/* LEFT COLUMN: Three Stacked Sketched Buttons (from sketch) */}
            <div className="md:col-span-6 lg:col-span-6 flex flex-col gap-4">
              
              {/* 1. [ MY PROJECTS ] -> Opens the 2D Interactive Messy Desk */}
              <motion.button
                whileHover={{ scale: 1.02, x: 6 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleButtonClick("projects")}
                className="group relative text-left w-full p-4 sm:p-5 bg-[#facc15] hover:bg-[#eab308] border-4 border-slate-950 rounded-xl shadow-[5px_5px_0px_#0f172a] transition-all cursor-pointer overflow-hidden"
              >
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <BusIcon className="w-5 h-5 text-slate-950" />
                      <span className="font-mono text-[11px] font-extrabold uppercase tracking-widest text-slate-950 bg-white/90 px-2.5 py-0.5 rounded border border-slate-900">
                        Interactive 2D Desk
                      </span>
                    </div>
                    <h3 className="font-hand text-3xl sm:text-4xl font-extrabold text-slate-950 leading-tight">
                      MY PROJECTS
                    </h3>
                    <p className="font-mono text-xs sm:text-sm text-slate-900 font-semibold">
                      BusBuddy, Omnitrix SIH, Noicee, Hanoi & more
                    </p>
                  </div>

                  <div className="w-12 h-12 rounded-full bg-slate-950 text-white flex items-center justify-center font-bold text-2xl group-hover:translate-x-1.5 transition-transform shrink-0 shadow-md">
                    <ArrowRightIcon className="w-6 h-6 text-yellow-300" />
                  </div>
                </div>

                {/* Hand-drawn tape accent */}
                <div className="absolute -top-3 right-12 w-20 h-5 bg-amber-400/90 transform rotate-6 pointer-events-none" />
              </motion.button>

              {/* 2. [ EXPERIENCE ] -> SIH Sovereign AI & BusBuddy Lead Dev */}
              <motion.button
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleButtonClick("experience")}
                className="text-left w-full p-3.5 sm:p-4 bg-white hover:bg-slate-50 border-3 border-slate-950 rounded-xl shadow-[4px_4px_0px_#0f172a] transition-all cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 border-2 border-slate-900 flex items-center justify-center text-blue-900 shrink-0">
                      <BriefcaseIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-hand text-2xl sm:text-3xl font-extrabold text-slate-950 leading-none">
                        EXPERIENCE
                      </h4>
                      <p className="font-mono text-xs text-slate-600 mt-1">
                        SIH Hackathon, BusBuddy Campus Lead, Real Deployments
                      </p>
                    </div>
                  </div>
                  <span className="font-mono text-xs font-bold text-slate-600 border border-slate-300 px-2 py-1 rounded bg-slate-100">
                    [ View ]
                  </span>
                </div>
              </motion.button>

              {/* 3. [ CERTIFICATES ] -> Full Stack Open & Credentials */}
              <motion.button
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleButtonClick("certificates")}
                className="text-left w-full p-3.5 sm:p-4 bg-white hover:bg-slate-50 border-3 border-slate-950 rounded-xl shadow-[4px_4px_0px_#0f172a] transition-all cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-100 border-2 border-slate-900 flex items-center justify-center text-emerald-900 shrink-0">
                      <CertificateIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-hand text-2xl sm:text-3xl font-extrabold text-slate-950 leading-none">
                        CERTIFICATES
                      </h4>
                      <p className="font-mono text-xs text-slate-600 mt-1">
                        University of Helsinki Full Stack Open & Coursework
                      </p>
                    </div>
                  </div>
                  <span className="font-mono text-xs font-bold text-slate-600 border border-slate-300 px-2 py-1 rounded bg-slate-100">
                    [ Inspect ]
                  </span>
                </div>
              </motion.button>

            </div>

            {/* RIGHT COLUMN: The Sketched Circle with CUTE CHARACTER (from Draft Sketch) */}
            <div className="md:col-span-6 lg:col-span-6 flex flex-col items-center justify-center relative">
              
              {/* Speech Bubble above Character (No Emojis) */}
              <motion.div
                key={characterQuote}
                initial={{ opacity: 0, scale: 0.85, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                className="relative bg-white border-3 border-slate-950 rounded-xl p-3 sm:p-4 shadow-[4px_4px_0px_#0f172a] text-center max-w-sm mb-3 z-30 cursor-pointer"
                onClick={handleCharacterClick}
                title="Tap character for another thought!"
              >
                <p className="font-hand text-base sm:text-xl font-extrabold text-slate-950 leading-snug">
                  "{characterQuote}"
                </p>
                <span className="text-[10px] font-mono text-slate-500 block mt-1 font-semibold">
                  (Tap character for more thoughts)
                </span>
                {/* Speech Bubble Pointer */}
                <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-r-3 border-b-3 border-slate-950 transform rotate-45" />
              </motion.div>

              {/* The Hand-Drawn Circular Boundary labeled "CUTE CHARACTER" in sketch */}
              <div className="relative w-64 sm:w-72 md:w-80 h-64 sm:h-72 md:h-80 flex items-center justify-center">
                {/* Hand-drawn sketchy circle border */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
                  viewBox="0 0 300 300"
                >
                  <circle
                    cx="150"
                    cy="150"
                    r="140"
                    fill="#fefce8"
                    stroke="#0f172a"
                    strokeWidth="3.5"
                    strokeDasharray="9 4"
                    opacity="0.9"
                  />
                  <circle
                    cx="150"
                    cy="150"
                    r="134"
                    fill="none"
                    stroke="#334155"
                    strokeWidth="1.5"
                    opacity="0.5"
                  />
                </svg>

                {/* Animated FingerGuns Character */}
                <div
                  className="cursor-pointer transform hover:scale-105 transition-transform w-56 sm:w-64 h-56 sm:h-64 z-20"
                  onClick={handleCharacterClick}
                >
                  <FingerGunsCharacter className="w-full h-full" />
                </div>
              </div>

              {/* Tag below character */}
              <div className="font-mono text-xs font-bold text-slate-700 mt-2 bg-white/80 px-3.5 py-1 rounded-full border-2 border-slate-900 shadow-sm flex items-center gap-1.5">
                <SparkleStarIcon className="w-3.5 h-3.5 text-amber-500" />
                <span>Aspiring Game Designer • Full Stack & DevOps</span>
              </div>
            </div>

          </div>

          {/* ======================================================== */}
          {/* BOTTOM FOOTER BAR */}
          {/* ======================================================== */}
          <div className="pt-3 border-t-3 border-slate-950 flex flex-wrap items-center justify-between text-xs font-mono text-slate-700">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse" />
              <span className="font-bold text-slate-950">MAYANK TELI // PORTFOLIO</span>
              <span className="text-slate-400 hidden sm:inline">•</span>
              <span className="hidden sm:inline text-slate-600">Techno NJR Institute of Technology, Udaipur</span>
            </div>
            
            <div className="flex items-center gap-4">
              <button
                onClick={() => handleButtonClick("about")}
                className="font-bold hover:text-slate-950 underline underline-offset-2 cursor-pointer"
              >
                [ Read About Me ]
              </button>
              <a
                href="https://github.com/nyren-10"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-slate-950 hover:underline flex items-center gap-1"
              >
                <span>GitHub @nyren-10</span>
                <ArrowRightIcon className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>
      </motion.div>

      {/* ======================================================== */}
      {/* RICH INLINE MODALS FOR SECTIONS (NO EMOJIS, HUMAN TONE) */}
      {/* ======================================================== */}
      <AnimatePresence>
        {activeModalSection && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
            onClick={() => setActiveModalSection(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 15 }}
              className="relative w-full max-w-xl bg-graph-paper rounded-xl p-6 sm:p-8 border-4 border-slate-950 shadow-2xl text-slate-900 max-h-[90vh] overflow-y-auto custom-scrollbar"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveModalSection(null)}
                className="absolute top-4 right-4 px-3 py-1 bg-white border-2 border-slate-900 rounded font-mono text-xs font-bold hover:bg-rose-50 hover:text-rose-700 cursor-pointer flex items-center gap-1"
              >
                <CloseIcon className="w-3.5 h-3.5" />
                <span>CLOSE</span>
              </button>

              {/* ABOUT ME MODAL (if opened as modal) */}
              {activeModalSection === "about" && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 font-mono text-xs font-bold text-amber-800">
                    <UserIcon className="w-4 h-4" />
                    <span>CHAPTER 01 // WHO AM I</span>
                  </div>
                  
                  <h3 className="font-hand text-3xl sm:text-4xl font-extrabold text-slate-950">
                    About Mayank Teli
                  </h3>

                  <div className="space-y-3 font-sans text-xs sm:text-sm text-slate-800 leading-relaxed bg-white/80 p-4 rounded-xl border-2 border-slate-900">
                    <p>
                      I'm <strong>Mayank Teli</strong> from Udaipur, Rajasthan, currently doing my B.Tech degree from <strong>Techno NJR Institute of Technology</strong>.
                    </p>
                    <p>
                      My real dream is to be a <strong>game developer or game designer</strong>. Right now, I'm exploring full-stack web development, working on backend architectures, and doing DevOps stuff to learn how systems actually run.
                    </p>
                    <p>
                      When I'm not coding, I write poetries, draw quick doodles, play peaceful games (like <em>Animal Crossing: New Horizons</em>, <em>Pokémon: Let's Go, Pikachu!</em>, and <em>Minecraft</em>), and very rarely read mystery thriller novels when I have plenty of free time.
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      setActiveModalSection(null);
                      if (onOpenAboutMe) onOpenAboutMe();
                    }}
                    className="w-full py-3 bg-slate-950 text-white font-mono text-xs font-bold rounded-lg hover:bg-slate-800 flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <span>Read Full Dossier Page</span>
                    <ArrowRightIcon className="w-4 h-4" />
                  </button>
                </div>
              )}

              {/* EXPERIENCE CHAPTER */}
              {activeModalSection === "experience" && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 font-mono text-xs font-bold text-blue-800">
                    <BriefcaseIcon className="w-4 h-4" />
                    <span>CHAPTER 02 // REAL WORK & HACKATHONS</span>
                  </div>
                  
                  <h3 className="font-hand text-3xl sm:text-4xl font-extrabold text-slate-950">
                    Experience & Projects
                  </h3>

                  <div className="space-y-3 font-sans text-xs sm:text-sm text-slate-800">
                    
                    {/* SIH Sovereign AI */}
                    <div className="bg-white p-4 rounded-xl border-2 border-slate-900 shadow-[2px_2px_0px_#0f172a]">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-slate-950 text-base">
                          Smart India Hackathon (SIH) — Omnitrix
                        </span>
                        <span className="font-mono text-[10px] font-bold bg-emerald-100 text-emerald-900 px-2 py-0.5 rounded border border-emerald-300">
                          HACKATHON TEAM
                        </span>
                      </div>
                      <div className="font-mono text-blue-700 text-xs font-bold mt-0.5 mb-2">
                        Sovereign AI Workbench for Private Intranets
                      </div>
                      <p className="leading-relaxed text-slate-700">
                        Built for companies that have strictly confidential data. We orchestrated multiple local offline models (via Ollama) inside a private intranet with zero cloud egress. An orchestrator model delegates tasks to the best local model for code, text, or spreadsheet analysis.
                      </p>
                      <div className="mt-2 pt-2 border-t border-slate-200 flex flex-wrap gap-1.5 font-mono text-[10px]">
                        <span className="bg-slate-100 px-2 py-0.5 rounded border">Python</span>
                        <span className="bg-slate-100 px-2 py-0.5 rounded border">Ollama</span>
                        <span className="bg-slate-100 px-2 py-0.5 rounded border">Offline Intranet</span>
                      </div>
                    </div>

                    {/* BusBuddy Lead Dev */}
                    <div className="bg-white p-4 rounded-xl border-2 border-slate-900 shadow-[2px_2px_0px_#0f172a]">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-slate-950 text-base">
                          BusBuddy College Transit
                        </span>
                        <span className="font-mono text-[10px] font-bold bg-amber-100 text-amber-900 px-2 py-0.5 rounded border border-amber-300">
                          LEAD DEV & CREATOR
                        </span>
                      </div>
                      <div className="font-mono text-amber-800 text-xs font-bold mt-0.5 mb-2">
                        Live Bus Tracking Built for College Students
                      </div>
                      <p className="leading-relaxed text-slate-700">
                        Saw my fellow college students struggling every day with erratic bus timings. Conceived the whole idea and built the entire system: WebSockets server for real-time GPS streaming, Android driver app, student web map, and Docker deployment.
                      </p>
                      <div className="mt-2 pt-2 border-t border-slate-200 flex flex-wrap gap-1.5 font-mono text-[10px]">
                        <span className="bg-slate-100 px-2 py-0.5 rounded border">Node.js</span>
                        <span className="bg-slate-100 px-2 py-0.5 rounded border">WebSockets</span>
                        <span className="bg-slate-100 px-2 py-0.5 rounded border">PostgreSQL</span>
                        <span className="bg-slate-100 px-2 py-0.5 rounded border">Docker</span>
                      </div>
                    </div>

                  </div>

                  <button
                    onClick={() => {
                      setActiveModalSection(null);
                      onOpenProjects();
                    }}
                    className="w-full py-3 bg-slate-950 text-white font-mono text-xs font-bold rounded-lg hover:bg-slate-800 flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <span>View Projects on 2D Desk</span>
                    <ArrowRightIcon className="w-4 h-4" />
                  </button>
                </div>
              )}

              {/* CERTIFICATES CHAPTER */}
              {activeModalSection === "certificates" && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 font-mono text-xs font-bold text-emerald-800">
                    <CertificateIcon className="w-4 h-4" />
                    <span>CHAPTER 03 // LEARNING & CREDENTIALS</span>
                  </div>
                  
                  <h3 className="font-hand text-3xl sm:text-4xl font-extrabold text-slate-950">
                    Certificates & Studies
                  </h3>

                  <div className="bg-white p-5 rounded-xl border-2 border-slate-900 shadow-[2px_2px_0px_#0f172a] space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-950 text-base">
                        Full Stack Open
                      </span>
                      <span className="font-mono text-[10px] font-bold bg-blue-100 text-blue-900 px-2 py-0.5 rounded">
                        UNIV OF HELSINKI
                      </span>
                    </div>
                    <p className="font-sans text-xs sm:text-sm text-slate-700 leading-relaxed">
                      Learned practical modern full-stack web development: React state, Redux, Node.js and Express REST APIs, PostgreSQL and MongoDB database persistence, and TypeScript typing.
                    </p>
                    <div className="pt-2 flex flex-wrap gap-1.5 font-mono text-[10px]">
                      <span className="bg-slate-100 px-2 py-0.5 rounded border">React & TypeScript</span>
                      <span className="bg-slate-100 px-2 py-0.5 rounded border">Node / Express</span>
                      <span className="bg-slate-100 px-2 py-0.5 rounded border">REST & Databases</span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setActiveModalSection(null);
                      onOpenProjects();
                    }}
                    className="w-full py-3 bg-slate-950 text-white font-mono text-xs font-bold rounded-lg hover:bg-slate-800 flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <span>Explore My Desk</span>
                    <ArrowRightIcon className="w-4 h-4" />
                  </button>
                </div>
              )}

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
