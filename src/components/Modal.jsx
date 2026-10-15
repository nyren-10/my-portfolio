import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import rough from "roughjs/bin/rough";
import {
  ClipboardIcon,
  GearIcon,
  TargetIcon,
  RulerIcon,
  CloseIcon,
  ExternalLinkIcon,
} from "./ui/Icons";

export default function Modal({ project, onClose }) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    // Redraw rough sketch border when modal mounts or resizes
    const drawRoughBorder = () => {
      const canvas = canvasRef.current;
      const container = containerRef.current;
      if (!canvas || !container) return;

      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;

      const rc = rough.canvas(canvas);
      rc.rectangle(4, 4, rect.width - 8, rect.height - 8, {
        roughness: 2.2,
        bowing: 1.5,
        stroke: "#1e293b",
        strokeWidth: 2.5,
      });

      // Second sketchy outline for authentic hand-drawn drafting look
      rc.rectangle(6, 6, rect.width - 12, rect.height - 12, {
        roughness: 1.8,
        bowing: 1.2,
        stroke: "#64748b",
        strokeWidth: 1.2,
      });

      // Divider line under header
      rc.line(20, 115, rect.width - 20, 115, {
        roughness: 2,
        stroke: "#94a3b8",
        strokeWidth: 1.8,
      });
    };

    drawRoughBorder();
    window.addEventListener("resize", drawRoughBorder);
    return () => window.removeEventListener("resize", drawRoughBorder);
  }, [project]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const modalContent = (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/75 backdrop-blur-md overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, scale: 0.92, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 15 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-2xl bg-graph-paper rounded-sm shadow-gdd p-6 sm:p-8 text-[#181b22] my-auto custom-scrollbar overflow-hidden z-20"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Rough.js Canvas Sketch Border */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 pointer-events-none z-10 w-full h-full"
          />

          {/* Masking Tape on Top-Center */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-7 bg-[#fef08a]/80 border-t border-b border-amber-300 transform -rotate-1 shadow-sm z-20 pointer-events-none" />

          {/* Binder Punch Holes on Left Margin */}
          <div className="absolute left-2 top-8 bottom-8 flex flex-col justify-around pointer-events-none z-20 opacity-30">
            <div className="w-3.5 h-3.5 rounded-full bg-slate-900 border border-slate-700 shadow-inner" />
            <div className="w-3.5 h-3.5 rounded-full bg-slate-900 border border-slate-700 shadow-inner" />
            <div className="w-3.5 h-3.5 rounded-full bg-slate-900 border border-slate-700 shadow-inner" />
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-30 px-3 py-1 bg-white/90 border-2 border-slate-900 rounded font-mono text-xs font-bold text-slate-900 hover:bg-rose-50 hover:text-rose-700 hover:border-rose-700 transition-colors shadow-sm cursor-pointer flex items-center gap-1"
            title="Close GDD (Esc)"
          >
            <CloseIcon className="w-3 h-3" />
            <span>ESC</span>
          </button>

          {/* Header Area */}
          <div className="relative pl-4 pr-12 pb-4 mb-4">
            <div className="flex flex-wrap items-center gap-2 mb-1.5 font-mono text-xs">
              <span className="font-bold text-slate-600 bg-slate-200/80 px-2 py-0.5 rounded">
                {project.docNumber || "GDD // ARCHIVE"}
              </span>
              <span className={`border px-2 py-0.5 rounded font-bold uppercase tracking-wider text-[10px] ${project.stampColor || "text-emerald-800 border-emerald-800"}`}>
                {project.stamp || "CONFIDENTIAL"}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold font-hand tracking-tight text-slate-900 flex items-center gap-2">
              <span>{project.title}</span>
            </h2>

            <p className="text-sm font-mono text-slate-600 mt-0.5">
              {project.subtitle}
            </p>
          </div>

          {/* Content Body */}
          <div className="pl-4 space-y-5 text-sm">
            {/* Overview Section */}
            <div>
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-600 mb-1 flex items-center gap-1.5">
                <ClipboardIcon className="w-3.5 h-3.5 text-slate-700" />
                <span>Executive Summary & Quest Objective</span>
              </h3>
              <p className="text-slate-800 leading-relaxed font-sans text-[13.5px] bg-white/70 p-3 rounded border border-slate-200/80">
                {project.description}
              </p>
            </div>

            {/* Tech Stack Pills */}
            <div>
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-600 mb-2 flex items-center gap-1.5">
                <GearIcon className="w-3.5 h-3.5 text-slate-700" />
                <span>Equipped Inventory & Tech Stack</span>
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {project.tech?.map((t, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center px-2.5 py-1 rounded-sm bg-white border border-slate-800 font-mono text-xs font-bold text-slate-900 shadow-[1px_2px_0px_#1e293b]"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Features / Mechanics */}
            {project.features && (
              <div>
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-600 mb-1.5 flex items-center gap-1.5">
                  <TargetIcon className="w-3.5 h-3.5 text-slate-700" />
                  <span>Core Mechanics & Capabilities</span>
                </h3>
                <ul className="space-y-1.5 font-sans text-xs bg-white/60 p-3 rounded border border-slate-200/80">
                  {project.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-slate-800">
                      <span className="text-amber-600 font-bold font-mono">▸</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Architecture Notes */}
            {project.architecture && (
              <div className="p-3 bg-amber-50/70 border border-amber-300/80 rounded">
                <div className="text-[11px] font-mono font-bold text-amber-900 mb-1 flex items-center gap-1.5">
                  <RulerIcon className="w-3.5 h-3.5 text-amber-800" />
                  <span>SYSTEM ARCHITECTURE NOTE</span>
                </div>
                <p className="text-xs text-amber-950/90 font-mono leading-relaxed">
                  {project.architecture}
                </p>
              </div>
            )}

            {/* Action Bar / Links */}
            <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200">
              <div className="flex items-center gap-3">
                {project.links?.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-900 text-white font-mono text-xs font-bold rounded shadow hover:bg-slate-800 active:scale-95 transition-all"
                  >
                    <span>View Repository</span>
                    <ExternalLinkIcon className="w-3.5 h-3.5" />
                  </a>
                )}
                {project.links?.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-white text-slate-900 border-2 border-slate-900 font-mono text-xs font-bold rounded shadow hover:bg-slate-100 active:scale-95 transition-all"
                  >
                    <span>Interactive Link</span>
                    <ExternalLinkIcon className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

              <span className="text-[11px] font-mono text-slate-400">
                [ Close Document ]
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );

  return createPortal(modalContent, document.body);
}
