import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "./data/projects";
import BookCoverLanding from "./components/book/BookCoverLanding";
import AboutMeSection from "./components/book/AboutMeSection";
import OmnitrixItem from "./components/desk-items/OmnitrixItem";
import NotebookItem from "./components/desk-items/NotebookItem";
import FloppyDiskItem from "./components/desk-items/FloppyDiskItem";
import PolaroidItem from "./components/desk-items/PolaroidItem";
import CassetteItem from "./components/desk-items/CassetteItem";
import CoffeeMugItem from "./components/desk-items/CoffeeMugItem";
import {
  CoffeeStain,
  DraggablePencil,
  DraggableSticker,
  InstructionsNote,
} from "./components/desk-items/Decorations";
import Modal from "./components/Modal";
import { BookOpenIcon, ExternalLinkIcon, UserIcon } from "./components/ui/Icons";

/**
 * Dedicated Draggable Item Component with bulletproof Drag vs Click detection.
 * Prevents opening modal when dragging, releasing, or throwing artifacts across the desk.
 */
function DraggableDeskArtifact({
  project,
  initialPos,
  zIndex,
  bringToFront,
  onOpenModal,
  deskRef,
  renderGraphic,
}) {
  const isDraggingRef = useRef(false);
  const pointerStartRef = useRef({ x: 0, y: 0, time: 0 });

  return (
    <motion.div
      drag
      dragConstraints={deskRef}
      dragElastic={0.12}
      dragMomentum={true}
      onPointerDown={(e) => {
        isDraggingRef.current = false;
        pointerStartRef.current = {
          x: e.clientX,
          y: e.clientY,
          time: Date.now(),
        };
      }}
      onDragStart={() => {
        isDraggingRef.current = true;
        bringToFront(project.id);
      }}
      onDrag={() => {
        isDraggingRef.current = true;
      }}
      onDragEnd={() => {
        // Keep isDragging true for a grace period to prevent mouseup/tap from triggering modal
        setTimeout(() => {
          isDraggingRef.current = false;
        }, 180);
      }}
      onTap={(e) => {
        const dx = e.clientX - pointerStartRef.current.x;
        const dy = e.clientY - pointerStartRef.current.y;
        const distance = Math.hypot(dx, dy);

        // If pointer moved more than 6px or was dragged/thrown, DO NOT OPEN MODAL!
        if (isDraggingRef.current || distance > 6) {
          return;
        }

        bringToFront(project.id);
        onOpenModal(project);
      }}
      onClick={(e) => {
        // Prevent any synthetic click from firing if it was part of a drag/throw
        if (isDraggingRef.current) {
          e.preventDefault();
          e.stopPropagation();
        }
      }}
      initial={{
        x: initialPos.x,
        y: initialPos.y,
        rotate: project.rotation,
      }}
      whileHover={{
        scale: 1.04,
        cursor: "grab",
        transition: { duration: 0.15 },
      }}
      whileTap={{
        scale: 0.98,
        cursor: "grabbing",
      }}
      style={{
        zIndex: zIndex || 10,
      }}
      className="absolute cursor-grab touch-none select-none"
    >
      {renderGraphic(project.type)}
    </motion.div>
  );
}

export default function App() {
  const [activeView, setActiveView] = useState("cover"); // "cover" | "about" | "projects"
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [topZIndex, setTopZIndex] = useState(15);
  const [zIndexes, setZIndexes] = useState({
    omnitrix: 12,
    busbuddy: 11,
    "noicee-dashboard": 10,
    "coffee-about": 9,
    "visual-hanoi": 8,
    "speech-recognition": 7,
  });
  const [positionsKey, setPositionsKey] = useState(0);

  const deskRef = useRef(null);

  // Track window dimensions to spread items across the full available desk
  const [windowDimensions, setWindowDimensions] = useState(() => ({
    width: typeof window !== "undefined" ? window.innerWidth : 1600,
    height: typeof window !== "undefined" ? window.innerHeight : 900,
  }));

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Compute well-balanced coordinates that spread across the entire desk width and height
  const getSpreadPositions = useCallback(() => {
    const w = windowDimensions.width;
    const h = windowDimensions.height;

    return {
      // Zone 1: Far Left (Top) -> BusBuddy Campus Bus Notebook
      busbuddy: {
        x: Math.max(25, Math.round(w * 0.04)),
        y: Math.max(90, Math.round(h * 0.11)),
      },
      // Zone 2: Far Left (Bottom) -> Coffee Mug (Philosophy & System Design)
      "coffee-about": {
        x: Math.max(35, Math.round(w * 0.06)),
        y: Math.max(450, Math.round(h * 0.58)),
      },
      // Zone 3: Center-Left (Top) -> SIH Sovereign AI Omnitrix
      omnitrix: {
        x: Math.max(280, Math.round(w * 0.26)),
        y: Math.max(90, Math.round(h * 0.13)),
      },
      // Zone 4: Center-Left (Bottom) -> Speech Recognition Cassette
      "speech-recognition": {
        x: Math.max(290, Math.round(w * 0.28)),
        y: Math.max(460, Math.round(h * 0.63)),
      },
      // Zone 5: Center-Right (Top) -> Noicee Command Center Floppy Disk
      "noicee-dashboard": {
        x: Math.max(540, Math.round(w * 0.51)),
        y: Math.max(90, Math.round(h * 0.12)),
      },
      // Zone 6: Center-Right (Mid) -> "NO BUGS // JUST FEATURES" Sticker
      sticker: {
        x: Math.max(480, Math.round(w * 0.47)),
        y: Math.max(400, Math.round(h * 0.52)),
      },
      // Zone 7: Right Side (Upper-Mid) -> Visual Hanoi Polaroid
      "visual-hanoi": {
        x: Math.min(w - 270, Math.max(760, Math.round(w * 0.72))),
        y: Math.max(120, Math.round(h * 0.24)),
      },
      // Zone 8: Far Right (Top) -> Yellow Drafting Pencil
      pencil: {
        x: Math.min(w - 80, Math.max(920, Math.round(w * 0.88))),
        y: Math.max(110, Math.round(h * 0.18)),
      },
    };
  }, [windowDimensions]);

  const spreadPositions = getSpreadPositions();

  const bringToFront = (id) => {
    setTopZIndex((prev) => {
      const next = prev >= 40 ? 15 : prev + 1;
      setZIndexes((curr) => ({ ...curr, [id]: next }));
      return next;
    });
  };

  const handleItemClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const handleResetPositions = () => {
    setPositionsKey((prev) => prev + 1);
  };

  // Component mapper for Nyren's real project artifacts
  const renderItemGraphic = (type) => {
    switch (type) {
      case "omnitrix":
        return <OmnitrixItem />;
      case "notebook":
        return <NotebookItem />;
      case "floppy":
        return <FloppyDiskItem />;
      case "polaroid":
        return <PolaroidItem />;
      case "cassette":
        return <CassetteItem />;
      case "coffee":
        return <CoffeeMugItem />;
      default:
        return null;
    }
  };

  return (
    <AnimatePresence mode="wait">
      {/* 1. BOOK COVER LANDING VIEW (FULL SCREEN SPREAD) */}
      {activeView === "cover" && (
        <motion.div
          key="cover-view"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="w-screen h-screen overflow-hidden"
        >
          <BookCoverLanding
            onOpenProjects={() => setActiveView("projects")}
            onOpenAboutMe={() => setActiveView("about")}
          />
        </motion.div>
      )}

      {/* 2. ABOUT ME ARCHITECTURAL DOSSIER VIEW (FULL SCREEN SPREAD) */}
      {activeView === "about" && (
        <motion.div
          key="about-view"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="w-screen h-screen overflow-hidden"
        >
          <AboutMeSection
            onBackToCover={() => setActiveView("cover")}
            onGoToProjects={() => setActiveView("projects")}
          />
        </motion.div>
      )}

      {/* 3. 2D INTERACTIVE DESK VIEW (SPREAD ACROSS ENTIRE VIEWPORT) */}
      {activeView === "projects" && (
        <motion.div
          key="projects-desk-view"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.35 }}
          ref={deskRef}
          className={`relative w-screen h-screen overflow-hidden select-none bg-desk-wood ${
            isModalOpen ? "pointer-events-none" : ""
          }`}
        >
          {/* Architect / Designer Cutting Mat in Center */}
          <div className="absolute inset-3 sm:inset-5 rounded-2xl bg-cutting-mat shadow-2xl border-4 border-[#2f4f46] overflow-hidden pointer-events-none">
            {/* Metric Grid Ruler Lines on Top Edge */}
            <div className="absolute top-0 left-0 right-0 h-4 border-b border-white/10 flex justify-between px-6 text-[9px] font-mono text-emerald-400/50">
              <span>0cm</span>
              <span>10cm</span>
              <span>20cm</span>
              <span>30cm</span>
              <span>40cm</span>
              <span>50cm</span>
              <span>60cm</span>
              <span>70cm</span>
              <span>80cm</span>
              <span>90cm</span>
              <span>100cm</span>
              <span>110cm</span>
              <span>120cm</span>
            </div>
            {/* Metric Grid Ruler Lines on Left Edge */}
            <div className="absolute top-0 bottom-0 left-0 w-4 border-r border-white/10 flex flex-col justify-between py-6 text-[9px] font-mono text-emerald-400/50">
              <span>0</span>
              <span>10</span>
              <span>20</span>
              <span>30</span>
              <span>40</span>
              <span>50</span>
              <span>60</span>
              <span>70</span>
            </div>

            {/* Ambient Coffee Stain Rings Spread Naturally Across Mat */}
            {/* Stain 1: Near bottom-left coffee mug */}
            <CoffeeStain
              className="absolute pointer-events-none"
              style={{
                left: `${spreadPositions["coffee-about"].x - 20}px`,
                top: `${spreadPositions["coffee-about"].y - 20}px`,
              }}
            />
            {/* Stain 2: Ambient ring on the right section */}
            <CoffeeStain
              className="absolute pointer-events-none transform scale-80"
              style={{
                left: `${spreadPositions["visual-hanoi"].x + 80}px`,
                top: `${spreadPositions["visual-hanoi"].y + 160}px`,
              }}
            />
          </div>

          {/* Desk Lamp Ambient Glow */}
          <div className="absolute inset-0 lamp-glow pointer-events-none z-10" />

          {/* Top Desk Header / Navigation Bar */}
          <header className="absolute top-3 left-4 sm:left-6 right-4 sm:right-6 z-30 flex items-center justify-between pointer-events-none">
            <div className="flex items-center gap-2 sm:gap-3 pointer-events-auto">
              {/* Back to Book Cover Navigation Button */}
              <button
                onClick={() => setActiveView("cover")}
                className="px-3 py-1.5 bg-[#facc15] hover:bg-[#eab308] text-slate-950 border-2 border-slate-950 rounded-lg font-mono text-xs font-bold shadow-[2px_2px_0px_#0f172a] transition-all active:scale-95 flex items-center gap-1.5 cursor-pointer"
                title="Return to Book Cover Landing Page"
              >
                <BookOpenIcon className="w-3.5 h-3.5 text-slate-950" />
                <span>Book Cover</span>
              </button>

              <button
                onClick={() => setActiveView("about")}
                className="px-3 py-1.5 bg-white hover:bg-slate-100 text-slate-950 border-2 border-slate-950 rounded-lg font-mono text-xs font-bold shadow-[2px_2px_0px_#0f172a] transition-all active:scale-95 flex items-center gap-1.5 cursor-pointer"
                title="Open About Me Dossier"
              >
                <UserIcon className="w-3.5 h-3.5 text-slate-950" />
                <span>About Me</span>
              </button>

              <div className="hidden md:flex items-center gap-2.5 bg-[#111c19]/90 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-emerald-900/60 shadow-lg">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <h1 className="font-mono text-xs font-bold text-emerald-300 tracking-wider">
                  2D DESK
                </h1>
                <span className="text-[10px] font-mono text-emerald-400/60 border-l border-emerald-900/80 pl-2.5">
                  Drag & Toss anywhere • Click to inspect GDD
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 pointer-events-auto">
              <button
                onClick={handleResetPositions}
                className="px-3 py-1.5 bg-[#111c19]/90 hover:bg-[#1a2c27] text-emerald-300 border border-emerald-900/70 rounded-lg font-mono text-xs shadow-md transition-all active:scale-95 flex items-center gap-1.5 cursor-pointer"
                title="Reset items across full desk layout"
              >
                <span>Reset Desk</span>
              </button>

              <a
                href="https://github.com/nyren-10"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-mono text-xs font-bold rounded-lg shadow-md transition-all active:scale-95 flex items-center gap-1.5"
              >
                <span>GitHub</span>
                <ExternalLinkIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </header>

          {/* Instructions Card Note Pinned at Top-Left */}
          <InstructionsNote initial={{ x: 28, y: 56 }} />

          {/* Draggable Ambient Desk Props Spread Across Center & Far Right */}
          <React.Fragment key={`decorations-${positionsKey}`}>
            <DraggablePencil initial={spreadPositions.pencil} rotation={26} />
            <DraggableSticker initial={spreadPositions.sticker} rotation={-6} />
          </React.Fragment>

          {/* Main Draggable Interactive Project Artifacts Spread Over Full Canvas */}
          <div key={`projects-${positionsKey}`} className="relative w-full h-full">
            {projects.map((proj) => {
              const pos = spreadPositions[proj.id] || proj.initialPos;

              return (
                <DraggableDeskArtifact
                  key={proj.id}
                  project={proj}
                  initialPos={pos}
                  zIndex={zIndexes[proj.id]}
                  bringToFront={bringToFront}
                  onOpenModal={handleItemClick}
                  deskRef={deskRef}
                  renderGraphic={renderItemGraphic}
                />
              );
            })}
          </div>

          {/* Single Reusable Game Design Document (GDD) Modal */}
          {isModalOpen && selectedProject && (
            <Modal project={selectedProject} onClose={handleCloseModal} />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
