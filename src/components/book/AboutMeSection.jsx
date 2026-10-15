import React from "react";
import { motion } from "framer-motion";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CodeIcon,
  CpuIcon,
  TerminalIcon,
  UserIcon,
  BusIcon,
  SparkleStarIcon,
  TargetIcon,
  GearIcon,
} from "../ui/Icons";
import {
  PythonLogo,
  NodeLogo,
  ReactLogo,
  PostgresLogo,
  DockerLogo,
  GeminiLogo,
} from "../ui/TechLogos";
import AvatarDoodle from "../character/AvatarDoodle";

export default function AboutMeSection({ onBackToCover, onGoToProjects }) {
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
              CHAPTER 01 // ARCHITECT DOSSIER
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

        {/* Scrollable Chapter Content */}
        <div className="relative z-20 flex-1 overflow-y-auto custom-scrollbar p-6 sm:p-10 space-y-6 max-w-5xl mx-auto w-full">
          
          {/* Top Hero: Avatar & Mission Statement */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 bg-white/85 p-6 rounded-xl border-3 border-slate-950 shadow-[4px_4px_0px_#0f172a]">
            <AvatarDoodle className="w-24 h-24 shrink-0" />
            <div className="text-center sm:text-left flex-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 bg-slate-950 text-white font-mono text-xs font-bold rounded mb-2">
                <SparkleStarIcon className="w-3 h-3 text-yellow-300" />
                <span>NYREN // LEAD DEVELOPER & ARCHITECT</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold font-hand text-slate-950 leading-tight">
                Problem Solver, Backend Engineer & System Architect
              </h1>
              <p className="font-sans text-sm sm:text-base text-slate-800 font-medium leading-relaxed mt-2">
                I love dissecting real-world problems, blueprinting system architectures, and mapping comprehensive data flows before writing a single line of code. My primary wheelhouse is resilient backend infrastructure, event-driven streams, and orchestrating LLMs inside secure, real-world and air-gapped enterprise environments.
              </p>

              {/* Real Tech Logo Strip */}
              <div className="mt-4 pt-3 border-t border-slate-200 flex flex-wrap items-center gap-3">
                <span className="font-mono text-[11px] font-bold text-slate-500 uppercase">
                  Core Technologies:
                </span>
                <div className="flex items-center gap-1.5 bg-slate-100 px-2.5 py-1 rounded border border-slate-300 text-xs font-mono font-semibold text-slate-800">
                  <NodeLogo className="w-3.5 h-3.5" />
                  <span>Node.js / Express</span>
                </div>
                <div className="flex items-center gap-1.5 bg-slate-100 px-2.5 py-1 rounded border border-slate-300 text-xs font-mono font-semibold text-slate-800">
                  <PythonLogo className="w-3.5 h-3.5" />
                  <span>Python / Flask</span>
                </div>
                <div className="flex items-center gap-1.5 bg-slate-100 px-2.5 py-1 rounded border border-slate-300 text-xs font-mono font-semibold text-slate-800">
                  <PostgresLogo className="w-3.5 h-3.5" />
                  <span>PostgreSQL</span>
                </div>
                <div className="flex items-center gap-1.5 bg-slate-100 px-2.5 py-1 rounded border border-slate-300 text-xs font-mono font-semibold text-slate-800">
                  <DockerLogo className="w-3.5 h-3.5" />
                  <span>Docker & Compose</span>
                </div>
                <div className="flex items-center gap-1.5 bg-slate-100 px-2.5 py-1 rounded border border-slate-300 text-xs font-mono font-semibold text-slate-800">
                  <GeminiLogo className="w-3.5 h-3.5" />
                  <span>Gemini & Ollama</span>
                </div>
              </div>
            </div>
          </div>

          {/* Architecture & Data Flow Philosophy */}
          <div className="bg-white/90 p-6 rounded-xl border-3 border-slate-950 shadow-[4px_4px_0px_#0f172a] space-y-4">
            <div className="flex items-center gap-2.5 border-b-2 border-slate-200 pb-3">
              <CodeIcon className="w-5 h-5 text-amber-600" />
              <h2 className="font-hand text-2xl sm:text-3xl font-extrabold text-slate-950">
                System Architecture & Data Flow Philosophy
              </h2>
            </div>
            
            <p className="font-sans text-sm text-slate-800 leading-relaxed">
              "A week of coding can save an hour of architectural planning." I operate with an architecture-first mindset. Before spinning up servers or drafting API routes, I map out every state transition, data pipeline, and fault tolerance boundary.
            </p>

            {/* Hand-Drawn Flow Diagram Card */}
            <div className="p-4 bg-[#f8fafc] border-2 border-dashed border-slate-400 rounded-lg font-mono text-xs">
              <div className="text-[11px] font-bold text-slate-600 mb-3 uppercase tracking-wider flex items-center gap-1.5">
                <TargetIcon className="w-4 h-4 text-slate-700" />
                <span>My Standard Engineering Lifecycle</span>
              </div>
              <div className="flex flex-wrap items-center gap-2 text-slate-900 font-bold">
                <span className="px-3 py-1.5 bg-white border-2 border-slate-950 rounded shadow-sm">
                  1. Real Problem Discovery
                </span>
                <span className="text-slate-400">→</span>
                <span className="px-3 py-1.5 bg-white border-2 border-slate-950 rounded shadow-sm">
                  2. Architecture & Data Flow Mapping
                </span>
                <span className="text-slate-400">→</span>
                <span className="px-3 py-1.5 bg-white border-2 border-slate-950 rounded shadow-sm">
                  3. Resilient Backend Core & Sockets
                </span>
                <span className="text-slate-400">→</span>
                <span className="px-3 py-1.5 bg-white border-2 border-slate-950 rounded shadow-sm">
                  4. Client Web/Mobile Experience
                </span>
                <span className="text-slate-400">→</span>
                <span className="px-3 py-1.5 bg-white border-2 border-slate-950 rounded shadow-sm">
                  5. Docker DevOps & Deployment
                </span>
              </div>
            </div>
          </div>

          {/* Two-Column Grid: Deep Dive */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Column 1: Backend & Distributed Data */}
            <div className="bg-white/90 p-6 rounded-xl border-3 border-slate-950 shadow-[4px_4px_0px_#0f172a] space-y-3">
              <div className="flex items-center gap-2 border-b-2 border-slate-200 pb-2">
                <TerminalIcon className="w-5 h-5 text-blue-600" />
                <h3 className="font-hand text-2xl font-bold text-slate-950">
                  Backend & Systems Engineering
                </h3>
              </div>
              <ul className="space-y-3 font-sans text-xs sm:text-sm text-slate-800 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-blue-600 font-mono">▸</span>
                  <span><strong>Distributed Real-Time Messaging:</strong> Engineered low-latency sub-second WebSocket streams for live coordinate broadcasting powering BusBuddy.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-blue-600 font-mono">▸</span>
                  <span><strong>Relational Data Modeling:</strong> Normalized PostgreSQL schemas with strict foreign constraints, migration pipelines, and index optimizations.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-blue-600 font-mono">▸</span>
                  <span><strong>DevOps Containerization:</strong> Docker Compose setups with network isolation, health-checks, rate limiters, and Helmet security headers.</span>
                </li>
              </ul>
            </div>

            {/* Column 2: LLMs in Air-Gapped Environments */}
            <div className="bg-white/90 p-6 rounded-xl border-3 border-slate-950 shadow-[4px_4px_0px_#0f172a] space-y-3">
              <div className="flex items-center gap-2 border-b-2 border-slate-200 pb-2">
                <CpuIcon className="w-5 h-5 text-emerald-600" />
                <h3 className="font-hand text-2xl font-bold text-slate-950">
                  LLMs & Sovereign AI
                </h3>
              </div>
              <ul className="space-y-3 font-sans text-xs sm:text-sm text-slate-800 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-emerald-600 font-mono">▸</span>
                  <span><strong>Air-Gapped Intranet Intelligence:</strong> Built SIH Omnitrix, orchestrating multiple offline Ollama models to handle queries dynamically under corporate networks without external egress.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-emerald-600 font-mono">▸</span>
                  <span><strong>Document Automation:</strong> Programmatically generated Word (.docx), Excel (.xlsx), and PDF reports from offline LLM outputs.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-emerald-600 font-mono">▸</span>
                  <span><strong>Cloud & Local Hybrid:</strong> Leveraging Google Gemini API for cloud synthesis and local Ollama for private developer tools (Noicee Dashboard).</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Action Footer Bar */}
          <div className="pt-4 border-t-3 border-slate-950 flex flex-wrap items-center justify-between gap-4">
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
              <span>Explore Interactive Projects Desk</span>
              <ArrowRightIcon className="w-4 h-4 text-yellow-300" />
            </button>
          </div>

        </div>
      </motion.div>
    </div>
  );
}
