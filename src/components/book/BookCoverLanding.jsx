import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FingerGunsCharacter from "../character/FingerGunsCharacter";

export default function BookCoverLanding({ onOpenProjects, onOpenSection }) {
  const [characterQuote, setCharacterQuote] = useState("Click [MY PROJECTS] to explore the messy desk! ✨");
  const [activeModalSection, setActiveModalSection] = useState(null);

  const quotes = [
    "A week of coding saves an hour of planning! 😎",
    "No bugs, just unplanned features! 🚀",
    "WebSockets are live, coffee is hot! ☕",
    "Omnitrix is ready, all offline! 🟢",
    "Click [MY PROJECTS] to explore the messy desk! ✨",
  ];

  const handleCharacterClick = () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setCharacterQuote(randomQuote);
  };

  const handleButtonClick = (section) => {
    if (section === "projects") {
      onOpenProjects();
    } else {
      setActiveModalSection(section);
      if (onOpenSection) onOpenSection(section);
    }
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#181512] flex items-center justify-center p-3 sm:p-6 select-none">
      {/* Wooden Desk Border / Background Ambient */}
      <div className="absolute inset-0 bg-desk-wood opacity-70 pointer-events-none" />
      <div className="absolute inset-0 lamp-glow pointer-events-none z-10" />

      {/* Main Book Cover Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, rotate: -0.5 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative w-full max-w-4xl h-[92vh] max-h-[820px] bg-[#fbf8ee] rounded-xl shadow-2xl border-4 border-[#3d2e24] flex flex-col md:flex-row overflow-hidden z-20"
      >
        {/* Book Spine / Stitched Seam on Left */}
        <div className="hidden md:flex w-12 bg-[#2d1e16] border-r-4 border-[#1c130d] flex-col justify-around items-center py-8 shadow-inner select-none">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <div className="w-2.5 h-2.5 rounded-full bg-[#140b07] border border-[#5c4033]" />
              <div className="w-0.5 h-6 bg-[#d4af37] opacity-60" />
            </div>
          ))}
        </div>

        {/* Book Ribbon Bookmark Hanging at Top */}
        <div className="absolute -top-1 left-24 w-7 h-16 bg-rose-700 shadow-md border-b-4 border-rose-900 clip-ribbon z-30 pointer-events-none" />

        {/* Paper Cover Texture Overlay */}
        <div className="absolute inset-0 bg-graph-paper opacity-40 pointer-events-none" />

        {/* Vintage Tape Strips on Corners */}
        <div className="absolute top-2 left-16 w-24 h-6 bg-[#fef08a]/80 border-t border-b border-amber-300 transform -rotate-3 pointer-events-none" />
        <div className="absolute top-2 right-4 w-24 h-6 bg-[#fef08a]/80 border-t border-b border-amber-300 transform rotate-2 pointer-events-none" />
        <div className="absolute bottom-2 right-6 w-28 h-6 bg-[#fef08a]/80 border-t border-b border-amber-300 transform -rotate-1 pointer-events-none" />

        {/* --- BOOK CONTENT CONTAINER --- */}
        <div className="relative flex-1 p-6 sm:p-10 flex flex-col justify-between overflow-y-auto custom-scrollbar z-20">
          
          {/* Top Section: Greeting & Doodles */}
          <div>
            <div className="flex items-start justify-between">
              <div>
                {/* Hand-Drawn Title matching Sketch */}
                <h1 className="text-4xl sm:text-6xl font-extrabold font-hand tracking-tight text-slate-900 leading-none">
                  Yo wassup!
                </h1>

                {/* Subtitle with playful underline / scribble */}
                <div className="relative inline-block mt-2">
                  <p className="font-sketch text-2xl sm:text-3xl text-slate-700 font-bold tracking-wide">
                    I create blunders ⚡
                  </p>
                  <div className="w-full h-1 bg-slate-900 rounded-full mt-0.5 transform -rotate-0.5" />
                  <span className="text-[11px] font-mono text-slate-500 block mt-1">
                    (and occasionally deploy production-grade software)
                  </span>
                </div>
              </div>

              {/* Top-Right Avatar Doodle */}
              <div className="hidden sm:flex flex-col items-center bg-white p-2.5 rounded-lg border-2 border-slate-900 shadow-[3px_3px_0px_#0f172a] transform rotate-3">
                <div className="w-14 h-14 rounded-full border-2 border-slate-900 bg-amber-100 flex items-center justify-center font-hand font-bold text-2xl text-slate-800">
                  ツ
                </div>
                <span className="font-mono text-[9px] font-bold text-slate-600 mt-1 uppercase">
                  Nyren // Dev
                </span>
              </div>
            </div>
          </div>

          {/* Middle & Lower Section: Menu Buttons & Cute Character */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center my-auto py-4">
            
            {/* LEFT COLUMN: Navigation Buttons (from user's sketch) */}
            <div className="md:col-span-6 flex flex-col gap-3.5">
              
              {/* [ MY PROJECTS ] Button -> Enters the 2D Interactive Desk! */}
              <motion.button
                whileHover={{ scale: 1.03, x: 5 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => handleButtonClick("projects")}
                className="group relative text-left w-full p-4 bg-[#facc15] hover:bg-[#f59e0b] border-3 border-slate-950 rounded-lg shadow-[4px_4px_0px_#0f172a] transition-all cursor-pointer overflow-hidden"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xl">🚌</span>
                      <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-900 bg-white/80 px-2 py-0.5 rounded">
                        Interactive Desk
                      </span>
                    </div>
                    <h3 className="font-hand text-2xl sm:text-3xl font-extrabold text-slate-950 mt-1">
                      MY PROJECTS
                    </h3>
                    <p className="font-sans text-xs text-slate-800 font-semibold">
                      BusBuddy, Omnitrix SIH, Noicee & more
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-slate-950 text-white flex items-center justify-center font-bold text-xl group-hover:translate-x-1 transition-transform">
                    ➔
                  </div>
                </div>

                {/* Yellow tape indicator */}
                <div className="absolute -top-3 right-8 w-16 h-4 bg-amber-400/90 transform rotate-6 pointer-events-none" />
              </motion.button>

              {/* [ ABOUT ME ] Button */}
              <motion.button
                whileHover={{ scale: 1.02, x: 4 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleButtonClick("about")}
                className="text-left w-full p-3.5 bg-white hover:bg-slate-50 border-2 border-slate-950 rounded-lg shadow-[3px_3px_0px_#0f172a] transition-all cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="text-lg">👤</span>
                    <div>
                      <h4 className="font-hand text-xl sm:text-2xl font-bold text-slate-900 leading-none">
                        ABOUT ME
                      </h4>
                      <p className="font-mono text-[11px] text-slate-500 mt-0.5">
                        System Architecture, Data Flows & LLMs
                      </p>
                    </div>
                  </div>
                  <span className="font-mono text-xs font-bold text-slate-500">
                    [ Read ]
                  </span>
                </div>
              </motion.button>

              {/* [ EXPERIENCE ] Button */}
              <motion.button
                whileHover={{ scale: 1.02, x: 4 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleButtonClick("experience")}
                className="text-left w-full p-3.5 bg-white hover:bg-slate-50 border-2 border-slate-950 rounded-lg shadow-[3px_3px_0px_#0f172a] transition-all cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="text-lg">💼</span>
                    <div>
                      <h4 className="font-hand text-xl sm:text-2xl font-bold text-slate-900 leading-none">
                        EXPERIENCE
                      </h4>
                      <p className="font-mono text-[11px] text-slate-500 mt-0.5">
                        SIH Hackathon, College Transit, Collaborations
                      </p>
                    </div>
                  </div>
                  <span className="font-mono text-xs font-bold text-slate-500">
                    [ View ]
                  </span>
                </div>
              </motion.button>

              {/* [ CERTIFICATES ] Button */}
              <motion.button
                whileHover={{ scale: 1.02, x: 4 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleButtonClick("certificates")}
                className="text-left w-full p-3.5 bg-white hover:bg-slate-50 border-2 border-slate-950 rounded-lg shadow-[3px_3px_0px_#0f172a] transition-all cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="text-lg">📜</span>
                    <div>
                      <h4 className="font-hand text-xl sm:text-2xl font-bold text-slate-900 leading-none">
                        CERTIFICATES
                      </h4>
                      <p className="font-mono text-[11px] text-slate-500 mt-0.5">
                        Full Stack Open & Professional Credentials
                      </p>
                    </div>
                  </div>
                  <span className="font-mono text-xs font-bold text-slate-500">
                    [ Inspect ]
                  </span>
                </div>
              </motion.button>

            </div>

            {/* RIGHT COLUMN: The Cute Finger-Guns Character (from Image 2) */}
            <div className="md:col-span-6 flex flex-col items-center justify-center relative">
              
              {/* Speech Bubble above Character */}
              <motion.div
                key={characterQuote}
                initial={{ opacity: 0, scale: 0.85, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                className="relative bg-white border-2 border-slate-900 rounded-xl p-3 shadow-[3px_3px_0px_#0f172a] text-center max-w-xs mb-2 z-30 cursor-pointer"
                onClick={handleCharacterClick}
                title="Click character for more quotes!"
              >
                <p className="font-hand text-base sm:text-lg font-bold text-slate-900 leading-snug">
                  "{characterQuote}"
                </p>
                <span className="text-[10px] font-mono text-slate-400 block mt-0.5">
                  (Tap me for fun facts!)
                </span>
                {/* Speech Bubble Pointer */}
                <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-r-2 border-b-2 border-slate-900 transform rotate-45" />
              </motion.div>

              {/* The Interactive Character */}
              <div
                className="cursor-pointer transform hover:scale-105 transition-transform w-56 sm:w-64 h-56 sm:h-64"
                onClick={handleCharacterClick}
              >
                <FingerGunsCharacter className="w-full h-full" />
              </div>

              <div className="font-mono text-[11px] font-bold text-slate-500 mt-2 bg-slate-200/60 px-3 py-1 rounded-full border border-slate-300">
                ✨ Lead Full-Stack • Problem Solver • DevOps
              </div>
            </div>

          </div>

          {/* Book Bottom Bar */}
          <div className="pt-3 border-t-2 border-slate-900 flex flex-wrap items-center justify-between text-xs font-mono text-slate-600">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-bold text-slate-900">EDITION 2026 // VOL. 1</span>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/nyren-10"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-950 font-bold underline underline-offset-2"
              >
                GitHub @nyren-10 ↗
              </a>
            </div>
          </div>

        </div>
      </motion.div>

      {/* --- PREVIEW MODAL FOR SECTIONS (About Me, Experience, Certificates) --- */}
      <AnimatePresence>
        {activeModalSection && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setActiveModalSection(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg bg-graph-paper rounded-lg p-6 sm:p-8 border-3 border-slate-900 shadow-2xl text-slate-900"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveModalSection(null)}
                className="absolute top-4 right-4 px-3 py-1 bg-white border-2 border-slate-900 rounded font-mono text-xs font-bold hover:bg-rose-50 hover:text-rose-700 cursor-pointer"
              >
                ✕ CLOSE
              </button>

              {activeModalSection === "about" && (
                <div>
                  <div className="flex items-center gap-2 font-mono text-xs font-bold text-amber-700 mb-1">
                    <span>CHAPTER 01</span>
                    <span>•</span>
                    <span>ENGINEERING MINDSET</span>
                  </div>
                  <h3 className="font-hand text-3xl font-extrabold mb-3">About Nyren</h3>
                  <p className="font-sans text-sm text-slate-800 leading-relaxed bg-white/70 p-4 rounded border border-slate-200 mb-4">
                    I love end-to-end problem solving, sketching comprehensive system architectures, and blueprinting data flows before diving into code. Primarily seasoned in resilient backend engineering, event streams, and real-world LLM orchestration within enterprise and air-gapped environments.
                  </p>
                  <div className="bg-amber-50 p-3 rounded border border-amber-200 font-mono text-xs text-amber-950 mb-4">
                    <strong>Core Strengths:</strong> Backend Systems (Node/Python), Distributed Data Flows, LLM Runtimes (Gemini & Ollama), Docker DevOps.
                  </div>
                  <button
                    onClick={() => {
                      setActiveModalSection(null);
                      onOpenProjects();
                    }}
                    className="w-full py-2.5 bg-slate-900 text-white font-mono text-xs font-bold rounded hover:bg-slate-800"
                  >
                    👉 Jump Into Interactive Projects Desk
                  </button>
                </div>
              )}

              {activeModalSection === "experience" && (
                <div>
                  <div className="flex items-center gap-2 font-mono text-xs font-bold text-blue-700 mb-1">
                    <span>CHAPTER 02</span>
                    <span>•</span>
                    <span>WORK & HACKATHONS</span>
                  </div>
                  <h3 className="font-hand text-3xl font-extrabold mb-3">Experience</h3>
                  <div className="space-y-3 font-sans text-xs text-slate-800 mb-4">
                    <div className="bg-white/80 p-3 rounded border border-slate-200">
                      <div className="font-bold text-slate-950 text-sm">Smart India Hackathon (SIH)</div>
                      <div className="font-mono text-emerald-700 text-[11px] mb-1">Omnitrix Sovereign AI Workbench</div>
                      <p>Built an air-gapped multi-model dispatching workbench for secure enterprise intranet tasks.</p>
                    </div>
                    <div className="bg-white/80 p-3 rounded border border-slate-200">
                      <div className="font-bold text-slate-950 text-sm">BusBuddy Campus Transit</div>
                      <div className="font-mono text-amber-700 text-[11px] mb-1">Lead Developer & System Architect</div>
                      <p>Conceived and built full-stack campus tracking: WebSockets, Docker, PostgreSQL, and mobile apps.</p>
                    </div>
                  </div>
                  <p className="font-mono text-[11px] text-slate-500 italic mb-3">
                    * Full interactive experience roadmap arriving in the next section update!
                  </p>
                </div>
              )}

              {activeModalSection === "certificates" && (
                <div>
                  <div className="flex items-center gap-2 font-mono text-xs font-bold text-emerald-700 mb-1">
                    <span>CHAPTER 03</span>
                    <span>•</span>
                    <span>CREDENTIALS</span>
                  </div>
                  <h3 className="font-hand text-3xl font-extrabold mb-3">Certificates</h3>
                  <div className="bg-white/80 p-4 rounded border border-slate-200 mb-4 font-sans text-xs space-y-2">
                    <div className="font-bold text-slate-950 text-sm">
                      University of Helsinki — Full Stack Open
                    </div>
                    <p className="text-slate-700">
                      Deep dive into modern web development: React, Redux, Node.js, Express, MongoDB, GraphQL, and TypeScript.
                    </p>
                  </div>
                  <p className="font-mono text-[11px] text-slate-500 italic mb-3">
                    * Full certificate gallery arriving in the next section update!
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
