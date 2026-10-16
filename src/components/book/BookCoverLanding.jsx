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
  GitHubIcon,
  ExternalLinkIcon,
} from "../ui/Icons";
import { PythonLogo, NodeLogo, ReactLogo, PostgresLogo, DockerLogo, GeminiLogo } from "../ui/TechLogos";

/**
 * Ornate Brass Metal Corner Bracket
 */
function BrassCorner({ position = "top-left" }) {
  const classes = {
    "top-left": "top-1.5 left-1.5",
    "top-right": "top-1.5 right-1.5 -scale-x-100",
    "bottom-left": "bottom-1.5 left-1.5 -scale-y-100",
    "bottom-right": "bottom-1.5 right-1.5 -scale-x-100 -scale-y-100",
  }[position];

  return (
    <div className={`absolute ${classes} w-10 sm:w-14 h-10 sm:h-14 pointer-events-none z-30 drop-shadow-md`}>
      <svg viewBox="0 0 60 60" fill="none" className="w-full h-full">
        <defs>
          <linearGradient id="brassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="30%" stopColor="#eab308" />
            <stop offset="65%" stopColor="#b45309" />
            <stop offset="100%" stopColor="#78350f" />
          </linearGradient>
        </defs>
        {/* Brass corner bracket base */}
        <path
          d="M 4 4 L 54 4 C 54 18, 46 24, 36 24 L 24 24 C 24 36, 18 46, 4 54 Z"
          fill="url(#brassGrad)"
          stroke="#451a03"
          strokeWidth="1.5"
        />
        {/* Inner engraved line */}
        <path
          d="M 8 8 L 44 8 C 40 16, 34 20, 26 20 L 20 20 C 20 26, 16 34, 8 44 Z"
          stroke="#fef08a"
          strokeWidth="1"
          opacity="0.8"
        />
        {/* Metal Rivets */}
        <circle cx="12" cy="12" r="2.5" fill="#2e1002" stroke="#fde047" strokeWidth="0.8" />
        <circle cx="42" cy="10" r="2" fill="#2e1002" stroke="#fde047" strokeWidth="0.6" />
        <circle cx="10" cy="42" r="2" fill="#2e1002" stroke="#fde047" strokeWidth="0.6" />
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

export default function BookCoverLanding({ onOpenProjects, onOpenAboutMe, onOpenExperience, onOpenSection }) {
  const [characterQuote, setCharacterQuote] = useState(
    "Click [EXPLORE MY DESK] to enter the 2D interactive workspace!"
  );
  const [activeModalSection, setActiveModalSection] = useState(null);

  const quotes = [
    "I explore architectures to find the best one... though I mess up and redraw often!",
    "Aspiring game designer, currently having fun with full-stack and DevOps.",
    "BusBuddy was born because our college bus schedule was pure chaos.",
    "Omnitrix SIH: Running offline AI models inside a private company intranet.",
    "Road trip to Jaipur with the squad for Codefiesta 5.0 — 7th rank out of 250 teams!",
    "Animal Crossing, Pokémon, Minecraft, and late-night problem solving.",
    "Click [EXPLORE MY DESK] to drag and toss artifacts across the canvas!",
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
    } else if (section === "experience") {
      if (onOpenExperience) {
        onOpenExperience();
      } else {
        setActiveModalSection("experience");
      }
    } else {
      setActiveModalSection(section);
      if (onOpenSection) onOpenSection(section);
    }
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-desk-wood flex items-center justify-center p-2 sm:p-5 lg:p-8 select-none">
      {/* Desk Lamp Ambient Glow */}
      <div className="absolute inset-0 lamp-glow pointer-events-none z-10" />

      {/* ======================================================== */}
      {/* THE 3D LEATHERBOUND MOLESKINE HARDCOVER BOOK */}
      {/* ======================================================== */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative w-full max-w-5xl h-[94vh] sm:h-[90vh] bg-leather-cover rounded-r-2xl rounded-l-md border-[4px] border-[#422213] shadow-[0_30px_70px_rgba(0,0,0,0.92),0_10px_25px_rgba(0,0,0,0.8),inset_0_2px_4px_rgba(255,255,255,0.08),inset_0_-2px_6px_rgba(0,0,0,0.85)] flex flex-col justify-between overflow-hidden z-20"
      >
        {/* Leather Stitched Perimeter Seam */}
        <div className="absolute inset-2.5 sm:inset-4 rounded-r-xl rounded-l-sm border-2 border-dashed border-[#b8864a]/30 pointer-events-none z-10" />

        {/* 4 Ornate Brass Metal Corner Protectors */}
        <BrassCorner position="top-left" />
        <BrassCorner position="top-right" />
        <BrassCorner position="bottom-left" />
        <BrassCorner position="bottom-right" />

        {/* Heavy Hardcover Spine on Left with Ribbed Bands */}
        <div className="absolute top-0 bottom-0 left-0 w-8 sm:w-12 bg-[#170c06] border-r-2 border-[#3d2012] shadow-[inset_-8px_0_14px_rgba(0,0,0,0.85),inset_2px_0_4px_rgba(255,255,255,0.05)] hidden sm:flex flex-col justify-between items-center py-8 z-30 pointer-events-none">
          {/* Raised Spine Ridges (Ribs) */}
          <div className="w-full h-3 bg-[#0d0603] border-y border-[#3d2012] shadow-sm" />
          <div className="w-full h-3 bg-[#0d0603] border-y border-[#3d2012] shadow-sm" />

          {/* Vertical Gold Foil Spine Stamping */}
          <div className="transform -rotate-90 whitespace-nowrap tracking-[0.25em] font-mono text-[10px] font-bold text-amber-300/70 uppercase">
            VOL. 02 • NYREN LOGBOOK
          </div>

          <div className="w-full h-3 bg-[#0d0603] border-y border-[#3d2012] shadow-sm" />
          <div className="w-full h-3 bg-[#0d0603] border-y border-[#3d2012] shadow-sm" />
        </div>

        {/* Crimson Silk Bookmark Ribbon Peeking from Bottom */}
        <div className="absolute -bottom-5 left-20 sm:left-28 w-6 h-14 bg-gradient-to-b from-[#991b1b] to-[#7f1d1d] shadow-lg border-x border-[#581010] z-20 pointer-events-none" />

        {/* Moleskine Elastic Band on Right with Clickable Latch */}
        <div className="absolute top-0 bottom-0 right-8 sm:right-14 w-5 sm:w-6 bg-[#120804] border-x border-[#381e11] shadow-[3px_0_8px_rgba(0,0,0,0.6),-2px_0_5px_rgba(0,0,0,0.6)] z-30 flex items-center justify-center">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleButtonClick("projects")}
            className="w-7 sm:w-8 h-12 bg-gradient-to-b from-[#fde047] via-[#d97706] to-[#92400e] rounded border border-amber-950 shadow-md flex flex-col items-center justify-center cursor-pointer gap-0.5"
            title="Click latch to open 2D Interactive Desk!"
          >
            <div className="w-4 h-0.5 bg-[#451a03] rounded-full" />
            <div className="w-4 h-0.5 bg-[#451a03] rounded-full" />
            <ArrowRightIcon className="w-3.5 h-3.5 text-[#451a03] mt-0.5" />
          </motion.button>
        </div>

        {/* ======================================================== */}
        {/* MAIN COVER CONTENT AREA */}
        {/* ======================================================== */}
        <div className="relative flex-1 pl-5 sm:pl-16 lg:pl-20 pr-12 sm:pr-20 lg:pr-24 py-4 sm:py-6 flex flex-col justify-between overflow-y-auto custom-scrollbar z-20">

          {/* TOP COVER EMBOSSING: Stamped in Gold Foil directly on leather */}
          <div className="text-center pt-2 sm:pt-3 pb-3">
            <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.3em] font-extrabold text-amber-300/80 bg-[#160a05]/90 px-3.5 py-1 rounded-full border border-amber-600/40 uppercase shadow-inner">
              FIELD JOURNAL // SPECIAL EDITION ARCHIVE
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-black tracking-wider bg-gradient-to-r from-[#fef08a] via-[#facc15] to-[#ca8a04] bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)] mt-1.5 leading-tight">
              MAYANK TELI
            </h1>
            <p className="font-mono text-[10px] sm:text-xs tracking-widest text-amber-200/70 font-semibold uppercase mt-0.5">
              THE NYREN LOGBOOK • GAME DESIGN, FULL-STACK & DEVOPS
            </p>
          </div>

          {/* ======================================================== */}
          {/* PASTED CENTER FIELD LABEL / ARTIST INSERT */}
          {/* ======================================================== */}
          <div className="relative bg-[#fffdf5] rounded-md border-3 border-slate-900 shadow-[6px_10px_24px_rgba(0,0,0,0.65)] p-4 sm:p-6 my-auto transform -rotate-0.5 max-w-4xl mx-auto w-full">
            {/* Masking tape on corners */}
            <TapeStrip className="absolute -top-2.5 -left-3" rotation="-8deg" />
            <TapeStrip className="absolute -top-2.5 -right-3" rotation="8deg" />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
              
              {/* LEFT COLUMN: Avatar + Honest Human Intro */}
              <div className="md:col-span-7 flex flex-col gap-3">
                <div className="flex items-start gap-4">
                  {/* Avatar doodle with ABOUT ME button */}
                  <div className="flex flex-col items-center shrink-0">
                    <motion.div
                      whileHover={{ scale: 1.05, rotate: -2 }}
                      className="bg-white p-1.5 rounded-xl border-3 border-slate-900 shadow-[3px_3px_0px_#0f172a] cursor-pointer"
                      onClick={() => handleButtonClick("about")}
                      title="Click to view full About Me dossier!"
                    >
                      <AvatarDoodle className="w-16 h-16 sm:w-20 sm:h-20" />
                    </motion.div>
                    <motion.button
                      whileHover={{ scale: 1.05, y: -1 }}
                      whileTap={{ scale: 0.96 }}
                      onClick={() => handleButtonClick("about")}
                      className="mt-2 px-3 py-1 bg-white hover:bg-amber-100/80 border-2 border-slate-950 rounded shadow-[2px_2px_0px_#0f172a] font-hand text-base font-extrabold text-slate-950 tracking-wide transition-all cursor-pointer flex items-center gap-1"
                    >
                      <UserIcon className="w-3.5 h-3.5 text-slate-800" />
                      <span>ABOUT ME</span>
                    </motion.button>
                  </div>

                  {/* Intro Copy */}
                  <div className="flex-1">
                    <div className="inline-block">
                      <h2 className="text-3xl sm:text-5xl font-extrabold font-hand tracking-tight text-slate-950 leading-none">
                        Yo Wassup!!
                      </h2>
                      <div className="w-full h-1.5 bg-slate-950 rounded-full mt-0.5 transform -rotate-0.5" />
                    </div>

                    <div className="mt-1">
                      <p className="font-sketch text-xl sm:text-2xl text-slate-800 font-extrabold tracking-wide">
                        I create blunders
                      </p>
                      <div className="w-full h-1 bg-slate-950 rounded-full mt-0.5" />
                    </div>

                    <p className="font-mono text-xs text-slate-700 font-semibold mt-1.5">
                      Mayank Teli • B.Tech at Techno NJR, Udaipur
                    </p>
                  </div>
                </div>

                {/* Honest Human Explanatory Text */}
                <div className="bg-[#faf6eb] p-3 rounded-lg border border-slate-300 text-slate-800 font-sans text-xs sm:text-[13px] leading-relaxed space-y-1.5">
                  <p>
                    I explore architectures to find the best one, though I mess up and redraw often! Aspiring game developer and designer, currently having fun building full-stack web systems and DevOps pipelines.
                  </p>
                  <p className="text-[11.5px] font-mono text-slate-600">
                    <strong>Hobbies:</strong> Poetries, quick doodle drawings, peaceful games (Animal Crossing, Pokémon Let's Go Pikachu, Minecraft), and mystery thriller novels.
                  </p>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap items-center gap-2 pt-0.5">
                  <div className="flex items-center gap-1.5 bg-white border border-slate-900 px-2 py-1 rounded shadow-sm">
                    <NodeLogo className="w-4 h-4" />
                    <PythonLogo className="w-4 h-4" />
                    <PostgresLogo className="w-4 h-4" />
                    <DockerLogo className="w-4 h-4" />
                    <GeminiLogo className="w-4 h-4" />
                    <span className="font-mono text-[9px] font-bold text-slate-700 ml-1">STACK</span>
                  </div>

                  <span className="font-mono text-[10px] font-bold bg-amber-100 text-amber-950 px-2 py-0.5 rounded border border-amber-300">
                    2ND YEAR B.TECH
                  </span>
                </div>
              </div>

              {/* RIGHT COLUMN: Interactive Character + Quote */}
              <div className="md:col-span-5 flex flex-col items-center justify-center text-center">
                
                {/* Speech Bubble */}
                <motion.div
                  key={characterQuote}
                  initial={{ opacity: 0, scale: 0.9, y: 6 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  className="relative bg-white border-2 border-slate-950 rounded-xl p-2.5 sm:p-3 shadow-[3px_3px_0px_#0f172a] max-w-xs mb-2 z-20 cursor-pointer"
                  onClick={handleCharacterClick}
                  title="Tap character for another thought!"
                >
                  <p className="font-hand text-base sm:text-lg font-extrabold text-slate-950 leading-snug">
                    "{characterQuote}"
                  </p>
                  <span className="text-[9px] font-mono text-slate-500 block mt-0.5">
                    (Tap character for more thoughts)
                  </span>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-white border-r-2 border-b-2 border-slate-950 transform rotate-45" />
                </motion.div>

                {/* The Character */}
                <div
                  className="cursor-pointer transform hover:scale-105 transition-transform w-40 sm:w-48 h-40 sm:h-48 z-10"
                  onClick={handleCharacterClick}
                >
                  <FingerGunsCharacter className="w-full h-full" />
                </div>
              </div>

            </div>
          </div>

          {/* ======================================================== */}
          {/* COVER ACTION BUTTONS: Big Main Button + Secondary Badges */}
          {/* ======================================================== */}
          <div className="pt-3 pb-2 flex flex-col sm:flex-row items-center justify-between gap-3">
            
            {/* Primary Action Button: "EXPLORE MY DESK" */}
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleButtonClick("projects")}
              className="w-full sm:w-auto px-6 py-3 bg-[#facc15] hover:bg-[#eab308] border-3 border-slate-950 rounded-xl shadow-[4px_4px_0px_#000] font-mono text-xs sm:text-sm font-extrabold text-slate-950 flex items-center justify-center gap-2.5 transition-all cursor-pointer"
            >
              <BusIcon className="w-4 h-4 text-slate-950" />
              <span>EXPLORE MY 2D INTERACTIVE DESK</span>
              <ArrowRightIcon className="w-4 h-4 text-slate-950" />
            </motion.button>

            {/* Companion Links */}
            <div className="flex items-center gap-2 w-full sm:w-auto justify-center">
              <motion.button
                whileHover={{ scale: 1.04, y: -1 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => handleButtonClick("experience")}
                className="px-3.5 py-2 bg-[#fffdf5] hover:bg-slate-100 border-2 border-slate-950 rounded-lg shadow-[2px_2px_0px_#000] font-mono text-xs font-bold text-slate-950 flex items-center gap-1.5 cursor-pointer"
              >
                <BriefcaseIcon className="w-3.5 h-3.5 text-blue-800" />
                <span>Experience Tagboard</span>
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.04, y: -1 }}
                whileTap={{ scale: 0.96 }}
                href="https://github.com/nyren-10"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 bg-[#120804] hover:bg-slate-900 border-2 border-amber-600/50 rounded-lg shadow-[2px_2px_0px_#000] font-mono text-xs font-bold text-amber-200 flex items-center gap-1.5 cursor-pointer"
              >
                <GitHubIcon className="w-3.5 h-3.5 fill-current" />
                <span>GitHub @nyren-10</span>
                <ExternalLinkIcon className="w-3 h-3 text-amber-300" />
              </motion.a>
            </div>

          </div>

        </div>
      </motion.div>

      {/* ======================================================== */}
      {/* MODAL SYSTEM (No Emojis, Human Tone) */}
      {/* ======================================================== */}
      <AnimatePresence>
        {activeModalSection && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setActiveModalSection(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 15 }}
              className="relative w-full max-w-xl bg-[#fffef8] rounded-xl p-6 sm:p-8 border-4 border-slate-950 shadow-2xl text-slate-900 max-h-[90vh] overflow-y-auto custom-scrollbar"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveModalSection(null)}
                className="absolute top-4 right-4 px-3 py-1 bg-white border-2 border-slate-900 rounded font-mono text-xs font-bold hover:bg-rose-50 hover:text-rose-700 cursor-pointer flex items-center gap-1"
              >
                <CloseIcon className="w-3.5 h-3.5" />
                <span>CLOSE</span>
              </button>

              {/* ABOUT ME MODAL */}
              {activeModalSection === "about" && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 font-mono text-xs font-bold text-amber-800">
                    <UserIcon className="w-4 h-4" />
                    <span>WHO AM I // DOSSIER</span>
                  </div>
                  
                  <h3 className="font-hand text-3xl sm:text-4xl font-extrabold text-slate-950">
                    About Mayank Teli
                  </h3>

                  <div className="space-y-3 font-sans text-xs sm:text-sm text-slate-800 leading-relaxed bg-[#faf7ee] p-4 rounded-xl border-2 border-slate-900">
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
                    <span>REAL WORK & HACKATHONS</span>
                  </div>
                  
                  <h3 className="font-hand text-3xl sm:text-4xl font-extrabold text-slate-950">
                    Experience & Hackathons
                  </h3>

                  <div className="space-y-3 font-sans text-xs sm:text-sm text-slate-800">
                    <div className="bg-[#faf7ee] p-3 rounded-lg border border-slate-300">
                      <span className="font-mono text-[10px] font-bold text-amber-800 uppercase">
                        Codefiesta 5.0 @ GIT Jaipur
                      </span>
                      <h4 className="font-hand text-xl font-bold text-slate-950">
                        7th Rank out of 250 Teams • 5,000 INR Prize
                      </h4>
                      <p className="text-xs text-slate-700 mt-1">
                        Road trip to Jaipur with the squad, all-nighter sprint debugging until morning!
                      </p>
                    </div>

                    <div className="bg-[#faf7ee] p-3 rounded-lg border border-slate-300">
                      <span className="font-mono text-[10px] font-bold text-emerald-800 uppercase">
                        Smart India Hackathon (SIH) 2nd Year
                      </span>
                      <h4 className="font-hand text-xl font-bold text-slate-950">
                        Omnitrix Sovereign AI Workbench
                      </h4>
                      <p className="text-xs text-slate-700 mt-1">
                        Air-gapped offline Ollama multi-model routing inside private company intranet.
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setActiveModalSection(null);
                      if (onOpenExperience) onOpenExperience();
                    }}
                    className="w-full py-3 bg-slate-950 text-white font-mono text-xs font-bold rounded-lg hover:bg-slate-800 flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <span>Open Tagboard Roadmap</span>
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
