import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  GitHubIcon,
  CloseIcon,
  ExternalLinkIcon,
  GitBranchIcon,
  GitCommitIcon,
  GitPullRequestIcon,
  TerminalIcon,
  SparkleStarIcon,
  CodeIcon,
  MapPinIcon,
  CpuIcon,
  BusIcon,
  LayersIcon,
} from "../ui/Icons";

export default function GitHubDevHub({ isOpen, onClose, onSelectProject }) {
  const [filter, setFilter] = useState("all"); // "all" | "featured" | "gis" | "ai" | "fullstack"

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const repositories = [
    {
      id: "map-simulation",
      name: "Map_Simulation",
      fullName: "nyren-10/Map_Simulation",
      badge: "NEW // GIS ENGINE",
      badgeColor: "bg-teal-100 text-teal-900 border-teal-400",
      category: "gis",
      description:
        "Flood-aware evacuation route planner combining OpenStreetMap road graphs and Uber's H3 hexagonal spatial indexing. Automatically computes safe routes around water inundation zones directly to emergency shelters.",
      tech: ["Python Flask", "OpenStreetMap", "Uber H3 Hex", "Shapely", "NetworkX", "GeoJSON"],
      repoUrl: "https://github.com/nyren-10/Map_Simulation",
      demoUrl: "https://map-simulation-three.vercel.app/",
      demoLabel: "Live Prototype",
      hasDeskItem: true,
      deskItemId: "map-simulation",
      stars: 1,
      forks: 0,
      recentCommit: "feat: flood hazard polygon thresholding & OSM route graph",
    },
    {
      id: "omnitrix",
      name: "Omnitrix",
      fullName: "nyren-10/Omnitrix",
      badge: "SIH HACKATHON SPRINT",
      badgeColor: "bg-emerald-100 text-emerald-900 border-emerald-400",
      category: "ai",
      description:
        "Sovereign multi-model AI workbench built for enterprise private intranets. Delegates tasks to offline Ollama models running on local hardware with zero external internet dependencies or data egress.",
      tech: ["React 19", "TypeScript", "Offline Ollama", "Multi-Model Router", "Tailwind CSS"],
      repoUrl: "https://github.com/nyren-10/Omnitrix",
      demoUrl: "https://github.com/nyren-10/Omnitrix",
      demoLabel: "GitHub Repo",
      hasDeskItem: true,
      deskItemId: "omnitrix",
      stars: 2,
      forks: 1,
      recentCommit: "feat: air-gapped local model task delegation pipeline",
    },
    {
      id: "busbuddy",
      name: "BusBuddy-Backend & Student",
      fullName: "nyren-10/BusBuddy-Backend",
      badge: "CAMPUS FLEET // IN USE",
      badgeColor: "bg-amber-100 text-amber-900 border-amber-400",
      category: "fullstack",
      description:
        "Live college bus tracking ecosystem born to end chaotic student commutes. Real-time GPS coordinate streaming over WebSockets, PostgreSQL route storage, Android driver app, and student web map.",
      tech: ["Node.js", "WebSockets", "PostgreSQL", "Docker", "Android Kotlin", "React"],
      repoUrl: "https://github.com/nyren-10/BusBuddy-Backend",
      demoUrl: "https://github.com/nyren-10/BusBuddy-Student",
      demoLabel: "Student App Repo",
      hasDeskItem: true,
      deskItemId: "busbuddy",
      stars: 3,
      forks: 1,
      recentCommit: "perf: sub-second WebSocket GPS broadcast & route caching",
    },
    {
      id: "floodsafe-site",
      name: "floodsafe-site",
      fullName: "nyren-10/floodsafe-site",
      badge: "LIVE PORTAL // DISASTER RELIEF",
      badgeColor: "bg-cyan-100 text-cyan-900 border-cyan-400",
      category: "gis",
      description:
        "Comprehensive disaster response & shelter overview portal for FloodSafe. Consolidates community evacuation alerts, flood warning telemetry, high-ground shelter metrics, and volunteer coordination.",
      tech: ["HTML5", "Modern CSS", "JavaScript", "Vercel Deploy"],
      repoUrl: "https://github.com/nyren-10/floodsafe-site",
      demoUrl: "https://floodsafe-overview.vercel.app/",
      demoLabel: "Live FloodSafe Site ↗",
      hasDeskItem: true,
      deskItemId: "floodsafe-overview",
      stars: 1,
      forks: 0,
      recentCommit: "feat: deploy live FloodSafe overview & incident portal",
    },
    {
      id: "noicee-dashboard",
      name: "Noicee-dashboard",
      fullName: "nyren-10/Noicee-dashboard",
      badge: "PERSONAL AI HUB",
      badgeColor: "bg-purple-100 text-purple-900 border-purple-400",
      category: "ai",
      description:
        "Automated personal command center and academic tracker. Features dual AI routing (Google Gemini cloud + local Ollama offline) alongside an interactive 3D Three.js canvas.",
      tech: ["Python Flask", "Gemini API", "Local Ollama", "Three.js", "PostgreSQL"],
      repoUrl: "https://github.com/nyren-10/Noicee-dashboard",
      demoUrl: "https://github.com/nyren-10/Noicee-dashboard",
      demoLabel: "GitHub Repo",
      hasDeskItem: true,
      deskItemId: "noicee-dashboard",
      stars: 2,
      forks: 0,
      recentCommit: "feat: background task scheduler and 3D study canvas",
    },
    {
      id: "visual-hanoi",
      name: "Visual Hanoi Solver",
      fullName: "nyren-10/my-portfolio/hanoi",
      badge: "ALGORITHM LAB",
      badgeColor: "bg-teal-100 text-teal-900 border-teal-400",
      category: "fullstack",
      description:
        "Interactive recursive physics visualizer proving the classic 2^n - 1 Tower of Hanoi algorithm with step-by-step auto-solver and manual puzzle challenge modes.",
      tech: ["React 19", "Framer Motion Springs", "Recursion", "Tailwind CSS"],
      repoUrl: "https://github.com/nyren-10",
      demoUrl: "https://nyren-10.github.io/my-portfolio/",
      demoLabel: "Interactive Solver",
      hasDeskItem: true,
      deskItemId: "visual-hanoi",
      stars: 1,
      forks: 0,
      recentCommit: "feat: spring physics transition states for recursive disks",
    },
    {
      id: "speech-recognition",
      name: "Basic_Speech_Recognition",
      fullName: "nyren-10/Basic_Speech_Recognition",
      badge: "AUDIO I/O",
      badgeColor: "bg-blue-100 text-blue-900 border-blue-400",
      category: "ai",
      description:
        "Python voice calibration and synthesis utility. Calibrates for ambient background room noise, converts live microphone input into text, and responds with audio synthesis.",
      tech: ["Python 3", "SpeechRecognition", "pyttsx3 TTS", "Google Speech API"],
      repoUrl: "https://github.com/nyren-10/Basic_Speech_Recognition",
      demoUrl: "https://github.com/nyren-10/Basic_Speech_Recognition",
      demoLabel: "GitHub Repo",
      hasDeskItem: true,
      deskItemId: "speech-recognition",
      stars: 1,
      forks: 0,
      recentCommit: "feat: ambient noise threshold calibration on microphone stream",
    },
    {
      id: "fullstackopen",
      name: "fullstackopen",
      fullName: "nyren-10/fullstackopen",
      badge: "HELSINKI STUDIES",
      badgeColor: "bg-slate-100 text-slate-900 border-slate-400",
      category: "fullstack",
      description:
        "University of Helsinki Full Stack Open curriculum submissions covering React state management, Redux, Node.js REST APIs, PostgreSQL, MongoDB, and TypeScript best practices.",
      tech: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "PostgreSQL"],
      repoUrl: "https://github.com/nyren-10/fullstackopen",
      demoUrl: "https://github.com/nyren-10/fullstackopen",
      demoLabel: "Course Submissions",
      hasDeskItem: false,
      stars: 1,
      forks: 0,
      recentCommit: "refactor: TypeScript interfaces and backend relational persistence",
    },
  ];

  const filteredRepos =
    filter === "all"
      ? repositories
      : repositories.filter((r) => r.category === filter);

  const modalContent = (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-[10000] flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-md overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.93, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.93, y: 20 }}
          transition={{ type: "spring", damping: 26, stiffness: 320 }}
          className="relative w-full max-w-4xl bg-[#fffef9] rounded-xl border-4 border-slate-950 shadow-[0_25px_60px_rgba(0,0,0,0.85)] p-5 sm:p-7 text-slate-900 my-auto max-h-[92vh] overflow-y-auto custom-scrollbar select-none"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Masking Tape Strips */}
          <div className="absolute -top-3 left-12 w-28 h-6 bg-[#fef08a]/90 border-t border-b border-amber-300 transform -rotate-2 pointer-events-none shadow-sm z-30" />
          <div className="absolute -top-3 right-16 w-32 h-6 bg-[#fef08a]/90 border-t border-b border-amber-300 transform rotate-2 pointer-events-none shadow-sm z-30" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-40 px-3 py-1 bg-white border-2 border-slate-950 rounded font-mono text-xs font-bold text-slate-950 hover:bg-rose-50 hover:text-rose-700 hover:border-rose-700 transition-colors shadow-[2px_2px_0px_#000] cursor-pointer flex items-center gap-1 active:scale-95"
            title="Close GitHub Hub (Esc)"
          >
            <CloseIcon className="w-3.5 h-3.5" />
            <span>ESC</span>
          </button>

          {/* ======================================================== */}
          {/* HEADER: Doodled Octocat & Profile Card */}
          {/* ======================================================== */}
          <div className="relative pb-5 mb-5 border-b-2 border-dashed border-slate-300">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              
              <div className="flex items-start gap-4">
                {/* Doodled Octocat Icon Frame */}
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-slate-950 rounded-2xl border-3 border-slate-950 shadow-[3px_3px_0px_#0f172a] flex items-center justify-center shrink-0 overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 via-transparent to-amber-500/20" />
                  <GitHubIcon className="w-10 h-10 sm:w-12 sm:h-12 text-white group-hover:scale-110 transition-transform" />
                  {/* Pinned pin dot */}
                  <div className="absolute top-1 right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse border border-slate-950" />
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="font-hand text-3xl sm:text-4xl font-extrabold text-slate-950 leading-none">
                      Mayank Teli
                    </h2>
                    <span className="font-mono text-xs font-bold bg-slate-900 text-white px-2.5 py-0.5 rounded-md shadow-sm">
                      @nyren-10
                    </span>
                    <span className="font-mono text-[10px] font-extrabold bg-emerald-100 text-emerald-900 border border-emerald-400 px-2 py-0.5 rounded-full uppercase">
                      7 Public Repos
                    </span>
                  </div>

                  <p className="font-mono text-xs text-slate-600 mt-1">
                    B.Tech 2nd Year • Techno NJR Institute of Technology, Udaipur
                  </p>

                  <p className="font-sans text-xs sm:text-[13px] text-slate-800 mt-1.5 leading-snug">
                    Exploring architectures, building real spatial engines, sovereign AI, and campus systems.
                  </p>
                </div>
              </div>

              {/* Direct GitHub Profile Link */}
              <div className="flex items-center gap-2 shrink-0">
                <a
                  href="https://github.com/nyren-10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-slate-950 hover:bg-slate-800 text-white font-mono text-xs font-bold rounded-lg shadow-[3px_3px_0px_#0f172a] flex items-center gap-2 transition-all active:scale-95"
                >
                  <GitHubIcon className="w-4 h-4 fill-current text-amber-300" />
                  <span>Open Full GitHub Profile</span>
                  <ExternalLinkIcon className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

            {/* Terminal Command Line Snippet */}
            <div className="mt-4 bg-[#0a0f18] text-slate-200 p-3 rounded-lg border-2 border-slate-900 font-mono text-xs shadow-inner overflow-x-auto">
              <div className="flex items-center gap-1.5 pb-1.5 mb-1.5 border-b border-slate-800 text-[10px] text-slate-400">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
                <span className="ml-2">nyren@technonjr-workstation:~/repositories</span>
              </div>
              <div className="space-y-1 text-[11.5px]">
                <p className="text-emerald-400">
                  <span className="text-slate-500">$</span> gh repo list nyren-10 --public --include-featured
                </p>
                <p className="text-slate-400 pl-3">
                  Found <span className="text-amber-300 font-bold">8 tracked projects</span> across Spatial GIS, Sovereign AI, Full-Stack Transit, and Algorithms.
                </p>
              </div>
            </div>
          </div>

          {/* ======================================================== */}
          {/* FILTER PILLS */}
          {/* ======================================================== */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div className="flex flex-wrap items-center gap-1.5">
              {[
                { id: "all", label: "All Repos (8)" },
                { id: "gis", label: "Spatial & GIS (2)" },
                { id: "ai", label: "AI & ML (3)" },
                { id: "fullstack", label: "Full-Stack & Systems (3)" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setFilter(tab.id)}
                  className={`px-3 py-1 rounded font-mono text-xs font-bold border-2 transition-all cursor-pointer ${
                    filter === tab.id
                      ? "bg-amber-300 text-slate-950 border-slate-950 shadow-[2px_2px_0px_#000]"
                      : "bg-white text-slate-700 border-slate-300 hover:border-slate-800"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <span className="font-mono text-[11px] text-slate-500 hidden sm:inline">
              Click [View on Desk] to jump directly to any interactive artifact!
            </span>
          </div>

          {/* ======================================================== */}
          {/* REPOSITORY CARDS GRID */}
          {/* ======================================================== */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredRepos.map((repo) => (
              <div
                key={repo.id}
                className="relative bg-white rounded-lg border-2 border-slate-950 shadow-[3px_4px_0px_#0f172a] p-4 flex flex-col justify-between hover:translate-y-[-2px] transition-transform"
              >
                <div>
                  {/* Top Badges */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className={`font-mono text-[9px] font-extrabold uppercase px-2 py-0.5 rounded border ${repo.badgeColor}`}>
                      {repo.badge}
                    </span>
                    <div className="flex items-center gap-2 font-mono text-[10px] text-slate-500">
                      <span className="flex items-center gap-0.5">
                        <GitBranchIcon className="w-3 h-3 text-slate-400" /> main
                      </span>
                    </div>
                  </div>

                  {/* Repository Title */}
                  <h3 className="font-hand text-2xl font-extrabold text-slate-950 leading-tight">
                    {repo.name}
                  </h3>
                  <p className="font-mono text-[10.5px] text-slate-500 mb-2">
                    {repo.fullName}
                  </p>

                  {/* Description */}
                  <p className="font-sans text-xs text-slate-700 leading-relaxed bg-[#faf8f0] p-2.5 rounded border border-slate-200/90 mb-3">
                    {repo.description}
                  </p>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {repo.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="font-mono text-[9.5px] font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-800 border border-slate-300"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Action Links */}
                <div className="pt-2.5 border-t border-slate-200 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <a
                      href={repo.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 py-1 bg-slate-900 hover:bg-slate-800 text-white font-mono text-[11px] font-bold rounded shadow-sm transition-all"
                    >
                      <GitHubIcon className="w-3 h-3 fill-current" />
                      <span>Code</span>
                      <ExternalLinkIcon className="w-2.5 h-2.5" />
                    </a>

                    {repo.demoUrl && repo.demoUrl !== repo.repoUrl && (
                      <a
                        href={repo.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-2.5 py-1 bg-amber-100 hover:bg-amber-200 text-amber-950 border border-amber-300 font-mono text-[11px] font-bold rounded shadow-sm transition-all"
                      >
                        <span>{repo.demoLabel}</span>
                        <ExternalLinkIcon className="w-2.5 h-2.5" />
                      </a>
                    )}
                  </div>

                  {/* Jump to Desk Artifact Button (if on desk) */}
                  {repo.hasDeskItem && onSelectProject && (
                    <button
                      onClick={() => {
                        onClose();
                        onSelectProject(repo.deskItemId);
                      }}
                      className="inline-flex items-center gap-1 px-2.5 py-1 bg-emerald-50 hover:bg-emerald-100 text-emerald-950 border border-emerald-300 font-mono text-[10.5px] font-bold rounded cursor-pointer transition-all active:scale-95"
                      title="Inspect this project on the 2D interactive desk"
                    >
                      <span>View on Desk</span>
                      <span className="text-emerald-700 font-extrabold">▸</span>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* ======================================================== */}
          {/* DOODLED GIT COMMIT LOG TIMELINE */}
          {/* ======================================================== */}
          <div className="mt-6 pt-4 border-t-2 border-slate-300">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-xs font-bold text-slate-800 flex items-center gap-1.5">
                <GitCommitIcon className="w-4 h-4 text-emerald-700" />
                <span>RECENT GIT LOG & COMMIT SPRINT</span>
              </span>
              <span className="font-mono text-[10px] text-slate-500">
                techno-njr / main branch
              </span>
            </div>

            <div className="bg-[#fffdf5] p-3 rounded-lg border-2 border-slate-900 font-mono text-xs space-y-1.5 shadow-sm">
              <div className="flex items-start gap-2 text-slate-800">
                <span className="text-emerald-600 font-bold shrink-0">● [main]</span>
                <span className="text-slate-500 shrink-0">3884722</span>
                <span className="truncate">feat: FloodSafe H3 spatial hazard estimation & evacuation router</span>
              </div>
              <div className="flex items-start gap-2 text-slate-800">
                <span className="text-blue-600 font-bold shrink-0">● [feat]</span>
                <span className="text-slate-500 shrink-0">c5411a7</span>
                <span className="truncate">feat: Omnitrix sovereign multi-model local Ollama intranet engine</span>
              </div>
              <div className="flex items-start gap-2 text-slate-800">
                <span className="text-amber-600 font-bold shrink-0">● [feat]</span>
                <span className="text-slate-500 shrink-0">05b3c61</span>
                <span className="truncate">feat: BusBuddy real-time GPS WebSocket streaming for student transit</span>
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );

  return createPortal(modalContent, document.body);
}
