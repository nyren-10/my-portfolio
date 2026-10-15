import React, { useState, useRef } from "react";
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

  const bringToFront = (id) => {
    setTopZIndex((prev) => {
      const next = prev >= 30 ? 15 : prev + 1;
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
          <div className="absolute inset-3 sm:inset-6 rounded-2xl bg-cutting-mat shadow-2xl border-4 border-[#2f4f46] overflow-hidden pointer-events-none">
            {/* Metric Grid Ruler Lines on Edge */}
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
            </div>
            <div className="absolute top-0 bottom-0 left-0 w-4 border-r border-white/10 flex flex-col justify-between py-6 text-[9px] font-mono text-emerald-400/50">
              <span>0</span>
              <span>10</span>
              <span>20</span>
              <span>30</span>
              <span>40</span>
              <span>50</span>
            </div>

            {/* Ambient Coffee Stain Rings on the mat */}
            <CoffeeStain className="absolute top-24 left-44" />
            <CoffeeStain className="absolute bottom-24 right-88 transform scale-75" />
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
                  Drag items • Click to inspect
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 pointer-events-auto">
              <button
                onClick={handleResetPositions}
                className="px-3 py-1.5 bg-[#111c19]/90 hover:bg-[#1a2c27] text-emerald-300 border border-emerald-900/70 rounded-lg font-mono text-xs shadow-md transition-all active:scale-95 flex items-center gap-1.5 cursor-pointer"
                title="Reset items to default positions"
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

          {/* Instructions Card Note */}
          <InstructionsNote initial={{ x: 28, y: 64 }} />

          {/* Draggable Ambient Desk Props */}
          <React.Fragment key={`decorations-${positionsKey}`}>
            <DraggablePencil initial={{ x: 1140, y: 220 }} rotation={28} />
            <DraggableSticker initial={{ x: 380, y: 390 }} rotation={-8} />
          </React.Fragment>

          {/* Main Draggable Interactive Project Artifacts */}
          <div key={`projects-${positionsKey}`} className="relative w-full h-full">
            {projects.map((proj) => {
              let isDragging = false;

              return (
                <motion.div
                  key={proj.id}
                  drag
                  dragConstraints={deskRef}
                  dragElastic={0.15}
                  dragMomentum={true}
                  onDragStart={() => {
                    isDragging = true;
                    bringToFront(proj.id);
                  }}
                  onDragEnd={() => {
                    setTimeout(() => {
                      isDragging = false;
                    }, 80);
                  }}
                  onTap={() => {
                    if (!isDragging) {
                      bringToFront(proj.id);
                      handleItemClick(proj);
                    }
                  }}
                  initial={{
                    x: proj.initialPos.x,
                    y: proj.initialPos.y,
                    rotate: proj.rotation,
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
                    zIndex: zIndexes[proj.id] || 10,
                  }}
                  className="absolute cursor-grab touch-none"
                >
                  {renderItemGraphic(proj.type)}
                </motion.div>
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
