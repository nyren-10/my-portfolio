export const projects = [
  {
    id: "omnitrix",
    type: "omnitrix",
    title: "Omnitrix // Sovereign AI Workbench",
    subtitle: "SIH Project • Multi-Model Offline AI Orchestrator & Air-Gapped Workbench",
    docNumber: "SIH-PROJECT // OMNITRIX-AI",
    status: "SIH HACKATHON // COLLABORATION",
    stamp: "SOVEREIGN AI",
    stampColor: "text-emerald-800 border-emerald-800 bg-emerald-50",
    initialPos: { x: 490, y: 120 },
    rotation: 4,
    description:
      "Our Smart India Hackathon (SIH) flagship project: A Sovereign AI Workbench engineered with multiple specialized offline models. When a user submits an enterprise task, an intelligent orchestrator model analyzes the requirement and dynamically delegates the workload to the best-suited local model—running 100% offline under the company's private intranet without leaking a single byte to external clouds.",
    tech: [
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "@shadcn/react",
      "Multi-Model Routing",
      "Offline LLMs",
      "Air-Gapped Intranet",
      "docx / exceljs / jspdf",
      "Recharts",
      "Vite"
    ],
    features: [
      "Dynamic Multi-Model Dispatcher: Analyzes task intent and automatically routes to the optimal offline model (code, document parsing, spreadsheet analysis, agentic reasoning)",
      "Zero-Data Egress / Air-Gapped Security: Completely self-contained under the organization's private corporate intranet for sovereign data governance",
      "Full Offline Document Intelligence: In-browser and local generation/manipulation of Word (docx), Excel (exceljs), and PDF (jspdf) files",
      "Enterprise UI Workbench: Resizable multi-panel layout built with React 19, TypeScript, Shadcn UI, cmdk command palette, and Recharts metrics",
      "Collaborative SIH Engineering: High-intensity hackathon sprint with rigorous unit testing via Vitest and zero-dependency offline bundling"
    ],
    architecture:
      "Air-gapped on-premise architecture. The React 19 frontend coordinates through a local offline inference gateway that switches between specialized quantized models running on private hardware.",
    links: {
      github: "https://github.com/Tauqeer-Raza/Omnitrix",
      demo: "https://github.com/Tauqeer-Raza/Omnitrix",
    },
    accentColor: "#22c55e",
  },
  {
    id: "busbuddy",
    type: "notebook",
    title: "BusBuddy Campus Transit Service",
    subtitle: "Complete College Bus Tracking Platform (Backend + Frontend + DevOps)",
    docNumber: "CAMPUS-TRANSIT // BUSBUDDY-FULL",
    status: "COLLEGE SYSTEM // IN USE",
    stamp: "LEAD DEV & FOUNDER",
    stampColor: "text-amber-800 border-amber-800 bg-amber-50",
    initialPos: { x: 80, y: 100 },
    rotation: -4,
    description:
      "A complete live bus tracking and transit management ecosystem built for our college campus. Identified the critical transit delay and communication dilemma students faced daily, conceived the entire architecture, and spearheaded end-to-end development across Backend, Frontend, and DevOps (handling everything from WebSocket streams to Docker deployments).",
    tech: [
      "Node.js & Express",
      "WebSockets (ws)",
      "PostgreSQL (pg)",
      "Docker & Compose",
      "React 19 (Student Portal)",
      "Google Maps JS API",
      "Android Kotlin (Driver GPS)",
      "Web Push API"
    ],
    features: [
      "Full Ecosystem Engineering: Conceived the concept and developed Student App, Driver Android App, Web Admin, and High-Throughput WebSocket Server",
      "Sub-Second Live GPS Telemetry: WebSockets pipeline broadcasting live bus coordinates directly from driver smartphones to student map viewports",
      "Driver Android Application: Native Kotlin app tracking real-time route progress, turn updates, and automated geofencing arrivals",
      "Student Web Portal: Interactive Google Maps interface calculating real-time ETAs, bus stops, and arrival countdowns",
      "Full-Stack & DevOps Responsibility: Orchestrated PostgreSQL migrations/seeders, Docker Compose development environments, rate-limiting, and Helmet security"
    ],
    architecture:
      "Distributed multi-client architecture: Native Kotlin driver app publishes GPS telemetry via WebSockets to an Express/PostgreSQL gateway; the gateway broadcasts spatial deltas to student React clients with Web Push notification triggers.",
    links: {
      github: "https://github.com/Tauqeer-Raza/BusBuddy-Backend",
      demo: "https://github.com/Tauqeer-Raza",
    },
    accentColor: "#f59e0b",
  },
  {
    id: "noicee-dashboard",
    type: "floppy",
    title: "Noicee Command Center",
    subtitle: "AI Research, Personal Command Center & Predictive Tracking",
    docNumber: "REPO // nyren-10/Noicee-dashboard",
    status: "PERSONAL OPS // ACTIVE",
    stamp: "AI HUB",
    stampColor: "text-purple-800 border-purple-800 bg-purple-50",
    initialPos: { x: 860, y: 100 },
    rotation: 5,
    description:
      "My automated personal command center and productivity engine featuring dual AI research synthesis, automated task management, structured note-taking, and predictive academic tracking.",
    tech: [
      "Python Flask",
      "Google Gemini AI",
      "Ollama (Local LLM)",
      "React 19",
      "Three.js (R3F)",
      "PostgreSQL",
      "APScheduler",
      "Render"
    ],
    features: [
      "Dual AI integration: Cloud Google Gemini API + local Ollama LLMs for private research queries",
      "Automated background scheduling via APScheduler for academic deadline and milestone alerts",
      "Interactive 3D spatial data visualizations using React Three Fiber, Drei, and OGL",
      "Persistent relational storage with PostgreSQL (psycopg2-binary) and Flask RESTful API",
      "Web scraping pipeline with BeautifulSoup4 for automated academic research gathering",
      "PWA offline-ready frontend powered by React 19, Vite, Recharts, and Tailwind CSS",
      "Continuous deployment pipeline hosted on Render"
    ],
    architecture:
      "Python Flask backend serving REST endpoints and background job queues, paired with a React 19 SPA frontend with 3D canvas rendering and PostgreSQL persistence.",
    links: {
      github: "https://github.com/nyren-10/Noicee-dashboard",
      demo: "https://github.com/nyren-10",
    },
    accentColor: "#8b5cf6",
  },
  {
    id: "visual-hanoi",
    type: "polaroid",
    title: "Visual Hanoi Solver",
    subtitle: "Interactive Recursive Tower of Hanoi Simulation & Puzzle Engine",
    docNumber: "PROJECT // VISUAL-HANOI",
    status: "ALGORITHM ENGINE",
    stamp: "RECURSION",
    stampColor: "text-teal-800 border-teal-800 bg-teal-50",
    initialPos: { x: 870, y: 440 },
    rotation: -6,
    description:
      "An interactive algorithmic visualization platform demonstrating the classic Tower of Hanoi mathematical puzzle. Features a step-by-step recursive auto-solver, manual play mode, and fluid spring animations.",
    tech: [
      "React 19",
      "Framer Motion",
      "Tailwind CSS v4",
      "Lucide React",
      "Vite",
      "Algorithms (Recursion)"
    ],
    features: [
      "Pure algorithmic recursive solver generating optimal 2^n - 1 move sequences",
      "Step-by-step execution controls: Play, Pause, Step Forward, Step Backward, and Instant Reset",
      "Color-coded disk spectrum mapping each disk tier to individual hex spectrum palettes",
      "Physics-driven disk translation animations powered by Framer Motion layout springs",
      "Move counter and live rod state inspector across Rods A, B, and C"
    ],
    architecture:
      "Modular separation of concerns: Pure recursive solver generator function decoupling algorithmic calculation from the reactive Framer Motion UI rendering layer.",
    links: {
      github: "https://github.com/nyren-10",
      demo: "https://github.com/nyren-10",
    },
    accentColor: "#14b8a6",
  },
  {
    id: "speech-recognition",
    type: "cassette",
    title: "Basic Speech Recognition",
    subtitle: "Python Voice Assistant & Ambient Noise Calibrated Synthesizer",
    docNumber: "REPO // nyren-10/Basic_Speech_Recognition",
    status: "PUBLIC REPO // OSS",
    stamp: "VOICE I/O",
    stampColor: "text-blue-800 border-blue-800 bg-blue-50",
    initialPos: { x: 480, y: 470 },
    rotation: -3,
    description:
      "Voice recognition and speech synthesis utility built with Python. Captures real-time microphone input, dynamically adjusts for ambient background acoustic noise, and recognizes spoken speech via Google Speech API with audio feedback.",
    tech: [
      "Python 3",
      "SpeechRecognition (sr)",
      "pyttsx3 (TTS)",
      "Google Speech API",
      "Audio Signal Processing"
    ],
    features: [
      "Microphone calibration loop with dynamic ambient noise adjustment (adjust_for_ambient_noise)",
      "Speech-to-text transcription utilizing Google Speech API with Indian English ('en-in') language model",
      "Offline Text-to-Speech (TTS) verbal feedback loop via pyttsx3",
      "Configurable audio timeout and listening phrase time limits",
      "Lightweight command-line integration ready for voice-activated scripting"
    ],
    architecture:
      "Synchronous audio capture pipeline that reads raw microphone PCM stream, normalizes acoustic threshold, and dispatches to recognition API with immediate auditory feedback.",
    links: {
      github: "https://github.com/nyren-10/Basic_Speech_Recognition",
      demo: "https://github.com/nyren-10/Basic_Speech_Recognition",
    },
    accentColor: "#2563eb",
  },
  {
    id: "coffee-about",
    type: "coffee",
    title: "Developer Dossier: Nyren",
    subtitle: "Full-Stack Web & Python Developer",
    docNumber: "PILOT-ID // nyren-10",
    status: "COLLABORATOR & DEV",
    stamp: "VERIFIED",
    stampColor: "text-rose-800 border-rose-800 bg-rose-50",
    initialPos: { x: 120, y: 460 },
    rotation: 6,
    description:
      "Full-stack and systems developer passionate about solving real user problems—from engineering complete campus-wide bus tracking services to building air-gapped sovereign AI workbenches for hackathons and automated command hubs.",
    tech: [
      "Full-Stack Engineering",
      "Python / Flask",
      "React 19 & TypeScript",
      "WebSockets & Real-Time Sync",
      "Docker & DevOps",
      "PostgreSQL",
      "AI / Offline LLM Integration"
    ],
    features: [
      "BusBuddy Campus Platform: Conceived idea, built backend, frontend, WebSockets & Docker DevOps",
      "Omnitrix (SIH Hackathon): Sovereign AI Workbench running multi-model routing 100% offline",
      "Noicee Command Center: AI research hub with Gemini API, Ollama, and Three.js spatial viewports",
      "Collaborative repositories: Tauqeer-Raza/Omnitrix, Tauqeer-Raza/BusBuddy, nyren-10/Noicee-dashboard",
      "Coursework: University of Helsinki Full Stack Open (modern web dev & certifications)"
    ],
    architecture:
      "Problem-first engineering: Identifying real bottlenecks, designing practical architectures, and executing cleanly across frontend, backend, and infrastructure.",
    links: {
      github: "https://github.com/nyren-10",
      demo: "mailto:contact@nyren.dev",
    },
    accentColor: "#b45309",
  },
];
