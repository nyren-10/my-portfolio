import React from "react";
import { motion } from "framer-motion";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CodeIcon,
  CpuIcon,
  TerminalIcon,
  UserIcon,
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
              CHAPTER 01 // ABOUT MAYANK TELI
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
          
          {/* ======================================================== */}
          {/* WHO I AM: Personal Introduction */}
          {/* ======================================================== */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 bg-white/90 p-6 sm:p-7 rounded-xl border-3 border-slate-950 shadow-[4px_4px_0px_#0f172a]">
            <AvatarDoodle className="w-24 h-24 sm:w-28 sm:h-28 shrink-0" />
            
            <div className="text-center sm:text-left flex-1 space-y-2">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                <span className="px-3 py-0.5 bg-slate-950 text-white font-mono text-xs font-bold rounded">
                  MAYANK TELI // @nyren-10
                </span>
                <span className="px-2.5 py-0.5 bg-amber-100 text-amber-900 border border-amber-300 font-mono text-[11px] font-bold rounded">
                  Udaipur, Rajasthan
                </span>
                <span className="px-2.5 py-0.5 bg-blue-100 text-blue-900 border border-blue-300 font-mono text-[11px] font-bold rounded">
                  Techno NJR Institute of Technology
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-extrabold font-hand text-slate-950 leading-tight">
                Hey, I'm Mayank!
              </h1>
              
              <p className="font-sans text-sm sm:text-base text-slate-800 leading-relaxed font-normal">
                I'm from Udaipur, Rajasthan, currently pursuing my B.Tech degree at <strong>Techno NJR Institute of Technology</strong>. My heart is set on becoming a <strong>game developer and game designer</strong>, but right now I'm having a blast exploring around <strong>full-stack development</strong> and getting my hands dirty with <strong>DevOps</strong>.
              </p>
              
              <p className="font-sans text-sm sm:text-base text-slate-800 leading-relaxed font-normal">
                Whenever I start a project, you'll rarely see me type code right away. I genuinely love sitting down with a pen and notebook, drawing out the system architecture, and mapping out the data flows to figure out the cleanest way things can connect—even if I end up creating a mess and having to redraw it multiple times!
              </p>

              {/* Quick Tech Badge Strip */}
              <div className="pt-2 flex flex-wrap items-center gap-2 font-mono text-xs text-slate-700">
                <span className="font-bold text-slate-900">Tech I fiddle with:</span>
                <span className="inline-flex items-center gap-1 bg-slate-100 border border-slate-300 px-2 py-0.5 rounded">
                  <NodeLogo className="w-3.5 h-3.5" /> Node.js
                </span>
                <span className="inline-flex items-center gap-1 bg-slate-100 border border-slate-300 px-2 py-0.5 rounded">
                  <PythonLogo className="w-3.5 h-3.5" /> Python / Flask
                </span>
                <span className="inline-flex items-center gap-1 bg-slate-100 border border-slate-300 px-2 py-0.5 rounded">
                  <ReactLogo className="w-3.5 h-3.5" /> React 19
                </span>
                <span className="inline-flex items-center gap-1 bg-slate-100 border border-slate-300 px-2 py-0.5 rounded">
                  <PostgresLogo className="w-3.5 h-3.5" /> PostgreSQL
                </span>
                <span className="inline-flex items-center gap-1 bg-slate-100 border border-slate-300 px-2 py-0.5 rounded">
                  <DockerLogo className="w-3.5 h-3.5" /> Docker
                </span>
                <span className="inline-flex items-center gap-1 bg-slate-100 border border-slate-300 px-2 py-0.5 rounded">
                  <GeminiLogo className="w-3.5 h-3.5" /> LLMs (Gemini & Ollama)
                </span>
              </div>
            </div>
          </div>

          {/* ======================================================== */}
          {/* HOW I THINK & HOW I BUILD */}
          {/* ======================================================== */}
          <div className="bg-white/90 p-6 rounded-xl border-3 border-slate-950 shadow-[4px_4px_0px_#0f172a] space-y-3">
            <div className="flex items-center gap-2 border-b-2 border-slate-200 pb-2">
              <CodeIcon className="w-5 h-5 text-amber-700" />
              <h2 className="font-hand text-2xl sm:text-3xl font-extrabold text-slate-950">
                How I Think & What I Love Doing
              </h2>
            </div>

            <p className="font-sans text-sm sm:text-base text-slate-800 leading-relaxed">
              Yes, I love problem solving. But for me, the most exciting part is <strong>drawing the architecture and tracing the data flow</strong>. I explore different architectures to find the best one—testing how requests enter, where state lives, how the database handles it, and how things recover when something breaks.
            </p>
            
            <p className="font-sans text-sm sm:text-base text-slate-800 leading-relaxed">
              Does it get messy? Absolutely. Half the time my first sketch looks like a plate of spaghetti and I have to cross it out and start over. But that trial-and-error process is where the real learning happens. Once the architecture is solid and simple, writing the actual code feels smooth and rewarding.
            </p>

            {/* Hand-drawn flow card */}
            <div className="p-4 bg-[#fefce8] border-2 border-dashed border-amber-400 rounded-lg font-mono text-xs text-amber-950 space-y-1.5">
              <div className="font-bold uppercase tracking-wider text-amber-900">
                [ My Natural Workflow ]
              </div>
              <p className="font-sans text-xs sm:text-sm text-slate-800">
                1. Notice a real pain point (like college buses running blind) → 2. Grab a notebook and sketch out how data should flow → 3. Realize the first design has flaws, tweak and re-sketch → 4. Build the backend core (Node/Python, PostgreSQL, WebSockets) → 5. Craft the frontend client → 6. Dockerize and get it working in the real world.
              </p>
            </div>
          </div>

          {/* ======================================================== */}
          {/* WHAT I'VE BUILT & LEARNT (The Journey So Far) */}
          {/* ======================================================== */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Backend & Systems */}
            <div className="bg-white/90 p-6 rounded-xl border-3 border-slate-950 shadow-[4px_4px_0px_#0f172a] space-y-2.5">
              <div className="flex items-center gap-2 border-b-2 border-slate-200 pb-2">
                <TerminalIcon className="w-5 h-5 text-blue-700" />
                <h3 className="font-hand text-2xl font-bold text-slate-950">
                  Backend & Real-Time Stuff
                </h3>
              </div>
              <p className="font-sans text-xs sm:text-sm text-slate-800 leading-relaxed">
                Most of my engineering hours go into the backend. With <strong>BusBuddy</strong>, I built the entire transit tracking system for our college because students were constantly struggling with bus timings.
              </p>
              <ul className="space-y-1.5 font-sans text-xs sm:text-sm text-slate-800">
                <li className="flex items-start gap-1.5">
                  <span className="font-bold text-blue-700 font-mono">▸</span>
                  <span><strong>WebSockets:</strong> Pushing live bus coordinates to student map screens with zero noticeable delay.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="font-bold text-blue-700 font-mono">▸</span>
                  <span><strong>PostgreSQL:</strong> Designing normalized tables for routes, stops, schedules, and driver logs.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="font-bold text-blue-700 font-mono">▸</span>
                  <span><strong>DevOps:</strong> Wrapping everything with Docker Compose so spinning up the whole stack takes one command.</span>
                </li>
              </ul>
            </div>

            {/* Dealing with LLMs & Environments */}
            <div className="bg-white/90 p-6 rounded-xl border-3 border-slate-950 shadow-[4px_4px_0px_#0f172a] space-y-2.5">
              <div className="flex items-center gap-2 border-b-2 border-slate-200 pb-2">
                <CpuIcon className="w-5 h-5 text-emerald-700" />
                <h3 className="font-hand text-2xl font-bold text-slate-950">
                  LLMs & Offline Intranets
                </h3>
              </div>
              <p className="font-sans text-xs sm:text-sm text-slate-800 leading-relaxed">
                I've also dealt heavily with LLMs in real-world constrained environments. In our Smart India Hackathon project (<strong>Omnitrix</strong>):
              </p>
              <ul className="space-y-1.5 font-sans text-xs sm:text-sm text-slate-800">
                <li className="flex items-start gap-1.5">
                  <span className="font-bold text-emerald-700 font-mono">▸</span>
                  <span><strong>Sovereign AI:</strong> Companies can't leak internal data to public cloud APIs, so we hosted multiple local Ollama models inside an air-gapped private intranet.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="font-bold text-emerald-700 font-mono">▸</span>
                  <span><strong>Intelligent Dispatching:</strong> An orchestrator model figures out whether to send a prompt to a coding model, a summarizer, or a spreadsheet analyzer.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="font-bold text-emerald-700 font-mono">▸</span>
                  <span><strong>Hybrid Workflow:</strong> Using Google Gemini for cloud research and local Ollama for private offline experiments in my personal dashboard (Noicee).</span>
                </li>
              </ul>
            </div>

          </div>

          {/* ======================================================== */}
          {/* HOBBIES & OFF-SCREEN LIFE */}
          {/* ======================================================== */}
          <div className="bg-white/90 p-6 rounded-xl border-3 border-slate-950 shadow-[4px_4px_0px_#0f172a] space-y-3">
            <div className="flex items-center gap-2 border-b-2 border-slate-200 pb-2">
              <SparkleStarIcon className="w-5 h-5 text-amber-500" />
              <h2 className="font-hand text-2xl sm:text-3xl font-extrabold text-slate-950">
                When I'm Not Coding (Hobbies & Chill)
              </h2>
            </div>

            <p className="font-sans text-sm text-slate-700">
              When I step away from terminal windows and server logs, here's what keeps me happy and inspired:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 pt-1">
              
              {/* Poetry */}
              <div className="p-3.5 bg-amber-50/70 border-2 border-amber-300 rounded-lg space-y-1">
                <div className="font-hand text-lg font-bold text-amber-950 flex items-center gap-1.5">
                  <span>Writing Poetries</span>
                </div>
                <p className="font-sans text-xs text-amber-900 leading-relaxed">
                  I love writing poetries whenever thoughts pile up or inspiration strikes. It's my favorite way to express feelings beyond logic.
                </p>
              </div>

              {/* Quick Doodles */}
              <div className="p-3.5 bg-blue-50/70 border-2 border-blue-300 rounded-lg space-y-1">
                <div className="font-hand text-lg font-bold text-blue-950 flex items-center gap-1.5">
                  <span>Quick Doodle Drawing</span>
                </div>
                <p className="font-sans text-xs text-blue-900 leading-relaxed">
                  Grabbing a pen and sketching silly characters, expressive doodles, and notebook cartoons (just like the doodles across this portfolio!).
                </p>
              </div>

              {/* Peaceful Games */}
              <div className="p-3.5 bg-emerald-50/70 border-2 border-emerald-300 rounded-lg space-y-1">
                <div className="font-hand text-lg font-bold text-emerald-950 flex items-center gap-1.5">
                  <span>Peaceful Gaming</span>
                </div>
                <p className="font-sans text-xs text-emerald-900 leading-relaxed">
                  Cozy games where you can just relax and enjoy great game design: <em>Animal Crossing: New Horizons</em>, <em>Pokémon: Let's Go, Pikachu!</em>, and <em>Minecraft</em>.
                </p>
              </div>

              {/* Mystery Novels */}
              <div className="p-3.5 bg-purple-50/70 border-2 border-purple-300 rounded-lg space-y-1">
                <div className="font-hand text-lg font-bold text-purple-950 flex items-center gap-1.5">
                  <span>Mystery Thrillers</span>
                </div>
                <p className="font-sans text-xs text-purple-900 leading-relaxed">
                  Very rarely, when I actually have plenty of quiet time, I love diving into a gripping mystery or detective thriller novel.
                </p>
              </div>

            </div>
          </div>

          {/* ======================================================== */}
          {/* THE BIG DREAM: Game Dev & Design */}
          {/* ======================================================== */}
          <div className="bg-[#f0fdf4] p-5 rounded-xl border-3 border-emerald-950 shadow-[3px_3px_0px_#0f172a] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-200/60 px-2 py-0.5 rounded">
                The Long-Term Dream
              </span>
              <h4 className="font-hand text-2xl font-extrabold text-emerald-950">
                Becoming a Game Developer & Designer
              </h4>
              <p className="font-sans text-xs sm:text-sm text-emerald-900 leading-relaxed">
                Everything I'm learning right now—from state management to multiplayer WebSockets and interactive UI—is part of my journey toward creating games that bring people peaceful, memorable experiences.
              </p>
            </div>
            
            <button
              onClick={onGoToProjects}
              className="shrink-0 px-5 py-2.5 bg-slate-950 text-white hover:bg-slate-800 font-mono text-xs font-bold rounded-lg shadow-md transition-all active:scale-95 flex items-center gap-2 cursor-pointer"
            >
              <span>Explore My Desk</span>
              <ArrowRightIcon className="w-4 h-4 text-yellow-300" />
            </button>
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
              <span>Check Out Interactive Projects Desk</span>
              <ArrowRightIcon className="w-4 h-4 text-yellow-300" />
            </button>
          </div>

        </div>
      </motion.div>
    </div>
  );
}
