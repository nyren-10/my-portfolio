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
 * Full-screen Experience & Hackathon Roadmap
 * Winding path / serpentine road aesthetic with alternating polaroid & text cards
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
        "Hopped on a road trip with the team from Udaipur to GIT Jaipur to take part in Codefiesta 5.0. It was an intense hackathon with over 250 teams from colleges everywhere. We coded straight through the night, survived on chai and snacks, debugged until the last second, and ended up landing 7th rank overall with a 5,000 INR prize cheque!",
      tags: ["#JaipurRoadTrip", "#Codefiesta5", "#Top7Rank", "#HackathonSprint", "#CashPrize"],
      cardType: "award",
      polaroidLabel: "Codefiesta 5.0 // GIT Jaipur",
      polaroidSubtitle: "7th Rank • 5,000 INR Prize",
      accentBorder: "border-amber-400",
      tagColor: "bg-amber-50 text-amber-950 border-amber-300",
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
        "Came back to SIH in my second year with a big idea: building an air-gapped sovereign AI workbench for companies with strictly confidential data. We orchestrated multiple local Ollama models on private hardware with an orchestrator model that intelligently routes tasks (code, docs, excel) without leaking a single byte of data to the public internet.",
      tags: ["#SIH2026", "#SovereignAI", "#OfflineOllama", "#PrivateIntranet", "#TeamSprint"],
      cardType: "sih",
      polaroidLabel: "SIH // Omnitrix Project",
      polaroidSubtitle: "Air-Gapped Intranet AI",
      accentBorder: "border-emerald-500",
      tagColor: "bg-emerald-50 text-emerald-950 border-emerald-300",
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
        "Got tired of students missing college buses every morning because nobody knew where the buses were. Conceived the whole idea and built the entire system: WebSocket server for sub-second GPS coordinate streaming, PostgreSQL database, an Android driver app with big buttons for easy tracking, and a live web map for students.",
      tags: ["#CampusTransit", "#NodeJS", "#WebSockets", "#Postgres", "#AndroidKotlin", "#Docker"],
      cardType: "bus",
      polaroidLabel: "BusBuddy Transit Engine",
      polaroidSubtitle: "Live Tracking for College",
      accentBorder: "border-blue-400",
      tagColor: "bg-blue-50 text-blue-950 border-blue-300",
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
        "Teamed up with my mate for an intensive XR/VR workshop. We explored spatial computing, 3D environment interactions, and immersive UI concepts, pushed through the hands-on project challenge, and took home 1st place in the workshop competition!",
      tags: ["#XRVR", "#1stPrize", "#SpatialComputing", "#VirtualReality", "#TeamWin"],
      cardType: "vr",
      polaroidLabel: "XR / VR Workshop",
      polaroidSubtitle: "1st Prize Trophy",
      accentBorder: "border-purple-400",
      tagColor: "bg-purple-50 text-purple-950 border-purple-300",
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
        "Jumped into a competitive design sprint workshop centered around wireframing, component systems, and intuitive user flows. Collaborated with my team on an interactive prototype that solved real user pain points, and our team ended up winning the workshop challenge!",
      tags: ["#Figma", "#UIUXDesign", "#InteractivePrototypes", "#DesignSprint", "#TeamVictory"],
      cardType: "figma",
      polaroidLabel: "Figma Design Sprint",
      polaroidSubtitle: "Winning Interactive Prototype",
      accentBorder: "border-rose-400",
      tagColor: "bg-rose-50 text-rose-950 border-rose-300",
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
        "Right in my first year of B.Tech at Techno NJR, I jumped straight into SIH. Working on a national-level problem statement was crazy exciting and a little intimidating at first, but it taught me so much about working under tight deadlines, collaborating with seniors, and turning ideas into working code.",
      tags: ["#FirstYear", "#SIHJourney", "#LearningToBuild", "#Teamwork", "#CampusHackathon"],
      cardType: "learning",
      polaroidLabel: "SIH Year 1 // Fresh Beginnings",
      polaroidSubtitle: "The Hackathon Bug Bit Here",
      accentBorder: "border-teal-400",
      tagColor: "bg-teal-50 text-teal-950 border-teal-300",
    },
  ];

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#1a1410] flex items-center justify-center select-none">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-desk-wood opacity-80 pointer-events-none" />
      <div className="absolute inset-0 lamp-glow pointer-events-none z-10" />

      {/* Main Full-Screen Open Dossier Spread */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="relative w-full h-full bg-[#fbf9f4] flex flex-col justify-between overflow-hidden z-20 border-[6px] border-[#2c1d11] shadow-2xl"
      >
        {/* Graph paper texture */}
        <div className="absolute inset-0 bg-graph-paper opacity-50 pointer-events-none" />

        {/* Vintage Drafting Tape Strips on Top Corners */}
        <div className="absolute top-3 left-20 w-28 h-6 bg-[#fef08a]/85 border-t border-b border-amber-300 transform -rotate-2 pointer-events-none shadow-sm z-30" />
        <div className="absolute top-3 right-6 w-32 h-6 bg-[#fef08a]/85 border-t border-b border-amber-300 transform rotate-1 pointer-events-none shadow-sm z-30" />

        {/* Book Spine / Stitched Left Margin on Desktop */}
        <div className="absolute top-0 bottom-0 left-0 w-8 md:w-12 bg-[#2d1e16] border-r-4 border-[#1a0f08] hidden sm:flex flex-col justify-around items-center py-6 shadow-2xl z-30 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <div className="w-2.5 h-2.5 rounded-full bg-[#120a06] border border-[#6b4c35]" />
              <div className="w-0.5 h-6 bg-[#d4af37] opacity-60" />
            </div>
          ))}
        </div>

        {/* Top Header Bar */}
        <header className="relative z-30 px-6 sm:px-12 py-3.5 border-b-3 border-slate-950 bg-white/90 backdrop-blur-sm flex items-center justify-between">
          <button
            onClick={onBackToCover}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white hover:bg-slate-100 text-slate-950 border-2 border-slate-950 rounded-lg font-mono text-xs font-bold shadow-[2px_2px_0px_#0f172a] transition-all active:scale-95 cursor-pointer"
          >
            <ArrowLeftIcon className="w-3.5 h-3.5" />
            <span>Book Cover</span>
          </button>

          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-extrabold text-slate-700 bg-slate-200/90 px-3 py-1 rounded border border-slate-400">
              CHAPTER 02 // HACKATHONS & ROADMAP
            </span>
          </div>

          <button
            onClick={onGoToProjects}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#facc15] hover:bg-[#eab308] text-slate-950 border-2 border-slate-950 rounded-lg font-mono text-xs font-bold shadow-[2px_2px_0px_#0f172a] transition-all active:scale-95 cursor-pointer"
          >
            <span>Projects Desk</span>
            <ArrowRightIcon className="w-3.5 h-3.5" />
          </button>
        </header>

        {/* Scrollable Roadmap Canvas */}
        <div className="relative z-20 flex-1 overflow-y-auto custom-scrollbar p-6 sm:p-10 max-w-5xl mx-auto w-full">
          
          {/* Section Hero Banner */}
          <div className="bg-white/90 p-6 sm:p-7 rounded-xl border-3 border-slate-950 shadow-[4px_4px_0px_#0f172a] mb-10">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-slate-200 pb-3 mb-3">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-lg bg-amber-100 border-2 border-slate-900 flex items-center justify-center text-amber-900 shrink-0">
                  <BriefcaseIcon className="w-6 h-6" />
                </div>
                <div>
                  <h1 className="font-hand text-3xl sm:text-4xl font-extrabold text-slate-950 leading-tight">
                    My Hackathon & Experience Roadmap
                  </h1>
                  <p className="font-mono text-xs text-slate-600">
                    B.Tech 2nd Year • Techno NJR Institute of Technology, Udaipur
                  </p>
                </div>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 border-2 border-amber-300 rounded-lg font-mono text-xs font-bold text-amber-950">
                <TrophyIcon className="w-4 h-4 text-amber-600" />
                <span>Competitions, Trips & Sprints</span>
              </div>
            </div>

            <p className="font-sans text-xs sm:text-sm text-slate-700 leading-relaxed">
              Here is my journey so far—from taking on SIH in my very first year to traveling to Jaipur for Codefiesta 5.0, winning workshop challenges, and building real transit software for our campus. The road is constantly expanding as I take on new challenges!
            </p>
          </div>

          {/* ======================================================== */}
          {/* THE WINDING ROAD TIMELINE (MATCHING USER'S DRAFT SKETCH) */}
          {/* ======================================================== */}
          <div className="relative my-8">
            
            {/* The Winding Connecting Road (Vertical SVG Path in Center) */}
            <div className="absolute top-8 bottom-8 left-1/2 -translate-x-1/2 w-16 pointer-events-none hidden md:block z-0">
              <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 1000">
                <path
                  d="M 50 0 C 15 150, 85 200, 50 350 C 15 500, 85 550, 50 700 C 15 850, 85 920, 50 1000"
                  fill="none"
                  stroke="#cbd5e1"
                  strokeWidth="8"
                  strokeDasharray="12 8"
                  strokeLinecap="round"
                />
                <path
                  d="M 50 0 C 15 150, 85 200, 50 350 C 15 500, 85 550, 50 700 C 15 850, 85 920, 50 1000"
                  fill="none"
                  stroke="#64748b"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* List of Experience Cards - Alternating Left & Right */}
            <div className="space-y-12 sm:space-y-16 relative z-10">
              {experiences.map((exp, index) => {
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className={`flex flex-col md:flex-row items-center gap-6 sm:gap-8 ${
                      isEven ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* 1. POLAROID / SNAPSHOT BADGE (Image Box from Draft) */}
                    <div className="w-full md:w-5/12 flex justify-center">
                      <motion.div
                        whileHover={{ scale: 1.03, rotate: isEven ? -2 : 2 }}
                        className={`w-full max-w-sm bg-white p-3.5 pb-4 rounded-xl border-3 border-slate-950 shadow-[4px_4px_0px_#0f172a] transform ${
                          isEven ? "rotate-[-1.5deg]" : "rotate-[1.5deg]"
                        }`}
                      >
                        {/* Polaroid Inner Window with Graphic Illustration */}
                        <div className="relative h-44 bg-slate-900 rounded-lg border-2 border-slate-800 overflow-hidden flex flex-col items-center justify-center p-4 text-center">
                          {/* Ambient drafting grid background */}
                          <div className="absolute inset-0 bg-graph-paper opacity-20" />
                          
                          {/* Specialized Icon Graphic based on cardType */}
                          {exp.cardType === "award" && (
                            <div className="relative z-10 flex flex-col items-center gap-2">
                              <div className="w-14 h-14 rounded-full bg-amber-400/20 border-2 border-amber-400 flex items-center justify-center text-amber-300 shadow-inner">
                                <TrophyIcon className="w-8 h-8" />
                              </div>
                              <span className="font-mono text-xs font-bold text-amber-300">
                                5,000 INR CHEQUE
                              </span>
                              <span className="font-mono text-[10px] text-amber-200/80">
                                Top 7 / 250 Teams • Jaipur
                              </span>
                            </div>
                          )}

                          {exp.cardType === "sih" && (
                            <div className="relative z-10 flex flex-col items-center gap-2">
                              <div className="w-14 h-14 rounded-full bg-emerald-400/20 border-2 border-emerald-400 flex items-center justify-center text-emerald-300 shadow-inner">
                                <CpuIcon className="w-8 h-8" />
                              </div>
                              <span className="font-mono text-xs font-bold text-emerald-300">
                                OMNITRIX SOVEREIGN AI
                              </span>
                              <span className="font-mono text-[10px] text-emerald-200/80">
                                Air-Gapped Local Model Fleet
                              </span>
                            </div>
                          )}

                          {exp.cardType === "bus" && (
                            <div className="relative z-10 flex flex-col items-center gap-2">
                              <div className="w-14 h-14 rounded-full bg-blue-400/20 border-2 border-blue-400 flex items-center justify-center text-blue-300 shadow-inner">
                                <BusIcon className="w-8 h-8" />
                              </div>
                              <span className="font-mono text-xs font-bold text-blue-300">
                                BUSBUDDY TRANSIT
                              </span>
                              <span className="font-mono text-[10px] text-blue-200/80">
                                Live GPS • Driver & Student App
                              </span>
                            </div>
                          )}

                          {exp.cardType === "vr" && (
                            <div className="relative z-10 flex flex-col items-center gap-2">
                              <div className="w-14 h-14 rounded-full bg-purple-400/20 border-2 border-purple-400 flex items-center justify-center text-purple-300 shadow-inner">
                                <SparkleStarIcon className="w-8 h-8 text-purple-300" />
                              </div>
                              <span className="font-mono text-xs font-bold text-purple-300">
                                XR / VR 1ST PRIZE
                              </span>
                              <span className="font-mono text-[10px] text-purple-200/80">
                                Spatial Interaction Sprint
                              </span>
                            </div>
                          )}

                          {exp.cardType === "figma" && (
                            <div className="relative z-10 flex flex-col items-center gap-2">
                              <div className="w-14 h-14 rounded-full bg-rose-400/20 border-2 border-rose-400 flex items-center justify-center text-rose-300 shadow-inner">
                                <CodeIcon className="w-8 h-8 text-rose-300" />
                              </div>
                              <span className="font-mono text-xs font-bold text-rose-300">
                                FIGMA WORKSHOP WIN
                              </span>
                              <span className="font-mono text-[10px] text-rose-200/80">
                                Team UI/UX Design System
                              </span>
                            </div>
                          )}

                          {exp.cardType === "learning" && (
                            <div className="relative z-10 flex flex-col items-center gap-2">
                              <div className="w-14 h-14 rounded-full bg-teal-400/20 border-2 border-teal-400 flex items-center justify-center text-teal-300 shadow-inner">
                                <TerminalIcon className="w-8 h-8 text-teal-300" />
                              </div>
                              <span className="font-mono text-xs font-bold text-teal-300">
                                1ST YEAR FRESHER RUN
                              </span>
                              <span className="font-mono text-[10px] text-teal-200/80">
                                National Level Problem Solving
                              </span>
                            </div>
                          )}

                          {/* Stamp watermark */}
                          <div className="absolute bottom-2 right-2 text-[9px] font-mono text-slate-500 uppercase tracking-widest">
                            [ PHOTO ARTIFACT ]
                          </div>
                        </div>

                        {/* Handwritten Polaroid Caption */}
                        <div className="mt-3 text-center">
                          <p className="font-hand text-lg font-bold text-slate-900 leading-tight">
                            {exp.polaroidLabel}
                          </p>
                          <p className="font-mono text-[10px] text-slate-500 mt-0.5">
                            {exp.polaroidSubtitle}
                          </p>
                        </div>
                      </motion.div>
                    </div>

                    {/* Central Road Connector Node */}
                    <div className="hidden md:flex w-2/12 justify-center items-center relative">
                      <div className="w-6 h-6 rounded-full bg-white border-3 border-slate-950 shadow-[2px_2px_0px_#0f172a] flex items-center justify-center z-20">
                        <div className="w-2 h-2 rounded-full bg-amber-500" />
                      </div>
                    </div>

                    {/* 2. DESCRIPTION TEXT CARD (Lines of Text from Draft) */}
                    <div className="w-full md:w-5/12">
                      <div className="bg-white p-5 sm:p-6 rounded-xl border-3 border-slate-950 shadow-[4px_4px_0px_#0f172a] space-y-3">
                        
                        {/* Header Badges */}
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className={`font-mono text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${exp.badgeColor}`}>
                            {exp.badge}
                          </span>
                          <span className="font-mono text-[11px] text-slate-500 font-semibold">
                            {exp.period}
                          </span>
                        </div>

                        {/* Title & Role */}
                        <div>
                          <h3 className="font-hand text-2xl font-extrabold text-slate-950 leading-tight">
                            {exp.title}
                          </h3>
                          <p className="font-mono text-xs font-bold text-blue-700 mt-0.5">
                            {exp.role}
                          </p>
                        </div>

                        {/* Story Summary */}
                        <p className="font-sans text-xs sm:text-[13px] text-slate-800 leading-relaxed bg-[#fbf9f4] p-3 rounded-lg border border-slate-200">
                          {exp.summary}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {exp.tags.map((t, idx) => (
                            <span
                              key={idx}
                              className={`font-mono text-[10px] font-bold px-2 py-0.5 rounded border ${exp.tagColor}`}
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                      </div>
                    </div>

                  </motion.div>
                );
              })}
            </div>

            {/* ======================================================== */}
            {/* INFINITE WINDING TRAIL (SUGGESTING MORE TO COME) */}
            {/* ======================================================== */}
            <div className="pt-16 pb-8 text-center relative">
              {/* Sinuous dotted line running into the distance */}
              <div className="w-1 h-20 border-l-3 border-dashed border-slate-400 mx-auto mb-4" />

              <motion.div
                whileHover={{ scale: 1.03 }}
                className="inline-block bg-[#fef08a] p-5 rounded-xl border-3 border-slate-950 shadow-[4px_4px_0px_#0f172a] transform -rotate-1 max-w-md text-left"
              >
                <div className="flex items-center gap-2 mb-1.5 text-slate-900">
                  <MapPinIcon className="w-4 h-4 text-amber-800" />
                  <span className="font-mono text-xs font-bold uppercase tracking-wider">
                    The Road Goes Ever On...
                  </span>
                </div>
                <p className="font-hand text-xl font-extrabold text-slate-950 leading-snug">
                  More hackathons, team sprints, real-world projects & blunders currently in the making!
                </p>
                <p className="font-mono text-[11px] text-slate-700 mt-2">
                  (Currently in 2nd year B.Tech • Always up for building exciting things with passionate people.)
                </p>
              </motion.div>
            </div>

          </div>

          {/* Bottom Navigation Strip */}
          <div className="pt-6 border-t-3 border-slate-950 flex flex-wrap items-center justify-between gap-4">
            <button
              onClick={onBackToCover}
              className="font-mono text-xs font-bold text-slate-800 hover:text-slate-950 underline underline-offset-4 cursor-pointer flex items-center gap-1.5"
            >
              <ArrowLeftIcon className="w-3.5 h-3.5" />
              <span>Return to Book Cover</span>
            </button>

            <button
              onClick={onGoToProjects}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-slate-950 text-white font-mono text-xs font-bold rounded-lg shadow-md hover:bg-slate-800 transition-all cursor-pointer"
            >
              <span>Explore My 2D Interactive Desk</span>
              <ArrowRightIcon className="w-4 h-4 text-yellow-300" />
            </button>
          </div>

        </div>
      </motion.div>
    </div>
  );
}
