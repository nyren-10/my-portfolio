// src/components/Modal.jsx
import React, { useEffect, useRef } from "react";
import rough from "roughjs/bin/rough";

function Modal({ project, onClose }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const rc = rough.canvas(canvas);
      const { width, height } = canvas;
      rc.rectangle(0, 0, width, height, {
        roughness: 2,
        stroke: "#000",
        fill: "#fff",
        fillStyle: "solid",
        strokeWidth: 2,
      });
    }
  }, []);

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50"
      onClick={onClose}
    >
      <div
        className="relative bg-white p-6 w-96 rounded shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Rough sketchy border */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 pointer-events-none"
          width={400}
          height={300}
        />
        <h2 className="text-xl font-bold mb-2">{project.title}</h2>
        <p className="mb-2">{project.description}</p>
        <div className="mb-2">
          <strong>Tech Stack:</strong>
          <ul className="list-disc list-inside">
            {project.tech.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
        <button
          className="mt-4 px-3 py-1 bg-gray-200 rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;
