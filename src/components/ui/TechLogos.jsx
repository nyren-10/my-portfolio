import React from "react";

export function PythonLogo({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M11.9 2c-3.1 0-5 1.4-5 3.3v2.2h5.1v.7H4.4C2.5 8.2 1 10.1 1 12.3c0 2.3 1.6 3.9 3.5 3.9h1.7v-2.4c0-2 1.7-3.7 3.7-3.7h5.1c1.6 0 3-1.3 3-3V5.3c0-2-1.9-3.3-5-3.3h-1.1zm-1.8 1.8c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1z"
        fill="#3776ab"
      />
      <path
        d="M12.1 22c3.1 0 5-1.4 5-3.3v-2.2H12v-.7h7.6c1.9 0 3.4-1.9 3.4-4.1 0-2.3-1.6-3.9-3.5-3.9h-1.7v2.4c0 2-1.7 3.7-3.7 3.7H9c-1.6 0-3 1.3-3 3v1.9c0 2 1.9 3.3 5 3.3h1.1zm1.8-1.8c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z"
        fill="#ffd438"
      />
    </svg>
  );
}

export function NodeLogo({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#339933">
      <path d="M12 2l9 5.2v10.4L12 22.8 3 17.6V7.2L12 2zm0 2.3L4.9 8.4v7.2L12 19.7l7.1-4.1V8.4L12 4.3z" />
    </svg>
  );
}

export function ReactLogo({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="-11.5 -10.23174 23 20.46348" fill="none">
      <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
      <g stroke="#61dafb" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

export function PostgresLogo({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#336791" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  );
}

export function DockerLogo({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#2496ed">
      <path d="M13 10.5h2v2h-2v-2zm-3 0h2v2h-2v-2zm-3 0h2v2H7v-2zm-3 0h2v2H4v-2zm9-3h2v2h-2V7.5zm-3 0h2v2h-2V7.5zm-3 0h2v2H7V7.5zm9 0h2v2h-2V7.5zm1.5 6.5c-.5-.3-1.6-.4-2.5.2-.8.5-1.5.5-2 .2-.5-.3-.9-1-2-1s-1.5.7-2 1c-.5.3-1.2.3-2-.2-.9-.6-2-.5-2.5-.2C.9 14.8.4 16.5.6 18c.3 1.8 1.8 3.5 4.5 3.8 6.4.7 11.4-.4 14.5-3.3 2.5-2.3 2.1-4.2 1.4-4.8-.4-.3-1.2-.4-2-.2z" />
    </svg>
  );
}

export function GeminiLogo({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2C12 7.5 7.5 12 2 12C7.5 12 12 16.5 12 22C12 16.5 16.5 12 22 12C16.5 12 12 7.5 12 2Z"
        fill="url(#geminiGrad)"
      />
      <defs>
        <linearGradient id="geminiGrad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1a73e8" />
          <stop offset="0.5" stopColor="#8ab4f8" />
          <stop offset="1" stopColor="#c58af9" />
        </linearGradient>
      </defs>
    </svg>
  );
}
