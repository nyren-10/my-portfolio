export const projects = [
  {
    id: "noicee-dashboard",
    type: "floppy",
    title: "Noicee Command Center",
    subtitle: "AI Research, Personal Command Center & Predictive Tracking",
    docNumber: "REPO // nyren-10/Noicee-dashboard",
    status: "PRIVATE REPO // ACTIVE OPS",
    stamp: "AI CORE",
    stampColor: "text-purple-800 border-purple-800 bg-purple-50",
    initialPos: { x: 500, y: 140 },
    rotation: 5,
    description:
      "Automated personal command center and productivity hub featuring AI-powered research synthesis, automated task management, structured note-taking, and predictive academic tracking.",
    tech: [
      "Python Flask",
      "Google Gemini AI",
      "Ollama",
      "React 19",
      "Three.js / R3F",
      "PostgreSQL",
      "APScheduler",
      "Framer Motion",
      "Render"
    ],
    features: [
      "Dual AI integration: Cloud Google Gemini AI API + local Ollama LLMs for private research queries",
      "Automated background scheduling via APScheduler for academic deadline and milestone alerts",
      "Interactive 3D spatial data visualizations using React Three Fiber, Drei, and OGL",
      "Persistent relational storage with PostgreSQL (psycopg2-binary) and Flask RESTful API",
      "Web scraping pipeline with BeautifulSoup4 for automated academic research gathering",
      "Modern PWA offline-ready frontend powered by React 19, Vite, Recharts, and Tailwind CSS",
      "Production-ready deployment orchestration via Render (render.yaml)"
    ],
    architecture:
      "Full-stack hybrid architecture: A Python Flask backend serving REST endpoints and managing background workers, paired with a React 19 SPA frontend with 3D canvas rendering and PostgreSQL persistence.",
    links: {
      github: "https://github.com/nyren-10/Noicee-dashboard",
      demo: "https://github.com/nyren-10",
    },
    accentColor: "#8b5cf6",
  },
  {
    id: "busbuddy",
    type: "notebook",
    title: "BusBuddy Transit Admin",
    subtitle: "Fleet Management, Driver Dispatch & Schedule Controller",
    docNumber: "PROJECT // BUSBUDDY-CORE",
    status: "LOCAL BUILD // PROTOTYPE",
    stamp: "DISPATCH READY",
    stampColor: "text-amber-800 border-amber-800 bg-amber-50",
    initialPos: { x: 100, y: 130 },
    rotation: -4,
    description:
      "A specialized transit administration system and operational dashboard designed for urban bus fleets. Controls real-time driver-to-route assignment, schedule management, and dispatch timing presets.",
    tech: [
      "JavaScript",
      "HTML5 / CSS3",
      "Custom Design Tokens",
      "Responsive Layouts",
      "Inter Typography",
      "Local Storage"
    ],
    features: [
      "Interactive driver and route Match-Maker engine with instant schedule linking",
      "Live Metric Cards displaying active bus identifiers, departure schedules, and gate statuses",
      "Preset List Management for quick-switching between rush hour, weekend, and holiday timetables",
      "Bespoke tokenized UI design system featuring high-contrast transit yellow (#f6c900) brand aesthetic",
      "Zero-latency client-side state caching with modular multi-screen view transitions"
    ],
    architecture:
      "Lightweight, dependency-free responsive dashboard engineered for high-reliability workstation and tablet displays, with dedicated CSS token architecture.",
    links: {
      github: "https://github.com/nyren-10",
      demo: "https://github.com/nyren-10",
    },
    accentColor: "#f59e0b",
  },
  {
    id: "visual-hanoi",
    type: "polaroid",
    title: "Visual Hanoi Solver",
    subtitle: "Interactive Recursive Tower of Hanoi Simulation & Puzzle Engine",
    docNumber: "PROJECT // VISUAL-HANOI",
    status: "BUILD COMPLETE // VERIFIED",
    stamp: "ALGORITHM",
    stampColor: "text-teal-800 border-teal-800 bg-teal-50",
    initialPos: { x: 880, y: 110 },
    rotation: -7,
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
    initialPos: { x: 500, y: 440 },
    rotation: -4,
    description:
      "Voice recognition and speech synthesis utility built with Python. Captures real-time microphone input, dynamically adjusts for ambient background acoustic noise, and recognizes spoken speech via Google Speech API.",
    tech: [
      "Python 3",
      "SpeechRecognition (sr)",
      "pyttsx3 (TTS)",
      "Google Speech API",
      "Audio Processing"
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
    id: "ghostfiber",
    type: "shader-card",
    title: "GhostFiber WebGL Experiment",
    subtitle: "Real-Time Glowing Fiber Shader & Spatial Visualizer",
    docNumber: "PROJECT // GHOSTFIBER-APP",
    status: "GRAPHICS // WEBGL",
    stamp: "GLSL SHADER",
    stampColor: "text-cyan-800 border-cyan-800 bg-cyan-50",
    initialPos: { x: 880, y: 440 },
    rotation: 6,
    description:
      "High-performance glowing fibrous shader visualization built with OGL and React 19. Renders intricate glowing strand geometry with custom GLSL lighting models and real-time interaction.",
    tech: [
      "React 19",
      "OGL (Minimal WebGL)",
      "GLSL Shaders",
      "Canvas API",
      "Vite"
    ],
    features: [
      "Hardware-accelerated WebGL render pipeline utilizing OGL for ultra-low memory overhead",
      "Custom procedural glowing fiber shader with depth-attenuated bloom lighting",
      "Interactive mouse-tracking motion distortion and camera orbit controls",
      "Buttery 60 FPS performance optimized for mobile and desktop GPU rasterizers",
      "Clean React 19 integration lifecycle managing WebGL contexts and canvas resize observers"
    ],
    architecture:
      "Raw WebGL abstraction using OGL primitives to maximize framerates without the weight of larger 3D engines, compiled with Vite.",
    links: {
      github: "https://github.com/nyren-10",
      demo: "https://github.com/nyren-10",
    },
    accentColor: "#06b6d4",
  },
  {
    id: "coffee-about",
    type: "coffee",
    title: "Developer Dossier: Nyren",
    subtitle: "Full-Stack Web & Python Developer",
    docNumber: "PILOT-ID // nyren-10",
    status: "STATUS: AVAILABLE",
    stamp: "VERIFIED",
    stampColor: "text-rose-800 border-rose-800 bg-rose-50",
    initialPos: { x: 140, y: 460 },
    rotation: 6,
    description:
      "Full-stack developer building robust web applications, AI-integrated command centers, and algorithmic tools. Passionate about Python, modern React ecosystems, spatial web graphics, and clean software architecture.",
    tech: [
      "Python",
      "React 19",
      "JavaScript / TypeScript",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL",
      "Flask",
      "Git & GitHub Actions"
    ],
    features: [
      "Active Repositories: Noicee-dashboard, Basic_Speech_Recognition, fullstackopen, my-portfolio",
      "Full Stack Open coursework: University of Helsinki modern web development",
      "Core competencies: Full-Stack Systems, AI Integration (Gemini/Ollama), WebGL/3D, Algorithmic Visualizations",
      "Available for: Software Engineering Roles, Full-Stack Development, and Technical Collaborations"
    ],
    architecture:
      "Driven by clean code, practical problem-solving, and building software that combines functional utility with intuitive interfaces.",
    links: {
      github: "https://github.com/nyren-10",
      demo: "mailto:nyren@example.com",
    },
    accentColor: "#b45309",
  },
];
