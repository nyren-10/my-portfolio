// src/App.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useDrag } from "@use-gesture/react";
import Modal from "./components/Modal";

const projects = [
  {
    id: "busbuddy",
    title: "BusBuddy",
    description: "A real‑time bus tracking web app.",
    tech: ["React", "Firebase", "Tailwind"],
    // simple placeholder SVG – in a real project replace with actual artwork
    svg: "<svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'><circle cx='50' cy='50' r='40' fill='#ffcc00' /><text x='50' y='55' font-size='20' text-anchor='middle' fill='#333'>🚌</text></svg>",
    initial: { x: 100, y: 150 }
  },
  {
    id: "firebase-backend",
    title: "Firebase Backend",
    description: "Serverless APIs and auth for my projects.",
    tech: ["Firebase", "Functions", "Firestore"],
    svg: "<svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'><rect width='80' height='80' x='10' y='10' fill='#ff6666' /><text x='50' y='55' font-size='20' text-anchor='middle' fill='#fff'>⚡</text></svg>",
    initial: { x: 300, y: 250 }
  },
  {
    id: "polaroid",
    title: "Polaroid",
    description: "Snapshots of my side projects.",
    tech: ["React", "Vite"],
    svg: "<svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'><rect width='70' height='90' x='15' y='5' fill='#fff' stroke='#000' stroke-width='2' /><text x='50' y='60' font-size='12' text-anchor='middle' fill='#000'>📸</text></svg>",
    initial: { x: 600, y: 120 }
  },
];

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const openModal = (project) => {
    setSelected(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelected(null);
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[url('/desk.jpg')] bg-cover">
      {/* Draggable items */}
      {projects.map((proj) => (
        <DraggableItem key={proj.id} project={proj} onClick={() => openModal(proj)} />
      ))}

      {/* Modal */}
      {isModalOpen && selected && (
        <Modal project={selected} onClose={closeModal} />
      )}
    </div>
  );
}

function DraggableItem({ project, onClick }) {
  const bind = useDrag(({ offset: [x, y] }) => {
    setStyle({ left: x, top: y });
  });

  const [style, setStyle] = React.useState({ left: project.initial.x, top: project.initial.y });

  return (
    <motion.div
      {...bind()}
      className="absolute cursor-move"
      style={{ left: style.left, top: style.top, width: 100, height: 100 }}
      onClick={onClick}
    >
      <div
        className="w-full h-full"
        dangerouslySetInnerHTML={{ __html: project.svg }}
      />
    </motion.div>
  );
}

export default App;
