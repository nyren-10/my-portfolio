export const projects = [
  {
    id: "busbuddy",
    type: "notebook",
    title: "BusBuddy College Transit",
    subtitle: "Live campus bus tracking ecosystem I built from scratch for our college",
    docNumber: "CAMPUS-TRANSIT // BUSBUDDY",
    status: "COLLEGE TRANSIT // IN USE",
    stamp: "LEAD DEV & CREATOR",
    stampColor: "text-amber-800 border-amber-800 bg-amber-50",
    initialPos: { x: 70, y: 100 },
    rotation: -4,
    description:
      "BusBuddy was born out of pure frustration with our college bus schedule. Students had no clue when the bus would arrive, and people were constantly missing rides or stranded waiting. I took the idea, designed the whole flow, and ended up building the entire system—from the backend WebSocket server and PostgreSQL database to the student web portal, the Android driver GPS app, and Docker setups. Basically an all-in-one developer here! Seeing students actually use it every morning to catch their bus made all the late-night debugging completely worth it.",
    tech: [
      "Node.js & Express",
      "WebSockets (ws)",
      "PostgreSQL (pg)",
      "Docker & Compose",
      "React 19 (Student Portal)",
      "Google Maps JS API",
      "Android Kotlin (Driver GPS)"
    ],
    features: [
      "Built the entire ecosystem: Conceived the idea and built the student web portal, driver Android GPS tracker, and admin controls.",
      "Live coordinate streaming: Used WebSockets so bus locations update smoothly on the map in sub-seconds without lag.",
      "Android Driver App: Built a simple Kotlin app for bus drivers with big buttons and auto route tracking.",
      "Student Map UI: Interactive map showing bus stops, live vehicle locations, and estimated arrival times.",
      "DevOps & Database: Set up PostgreSQL for routes and schedules, and Dockerized everything so it's easy to spin up and maintain."
    ],
    architecture:
      "Driver smartphones send GPS pings via WebSockets to our Node.js backend, which stores route logs in PostgreSQL and broadcasts live coordinates to students' browser maps in real time.",
    links: {
      github: "https://github.com/Tauqeer-Raza/BusBuddy-Backend",
      demo: "https://github.com/Tauqeer-Raza",
    },
    accentColor: "#f59e0b",
  },
  {
    id: "omnitrix",
    type: "omnitrix",
    title: "Omnitrix // Sovereign AI Workbench",
    subtitle: "Our SIH hackathon project: an offline, multi-model AI system for private intranets",
    docNumber: "SIH-PROJECT // OMNITRIX-AI",
    status: "SIH HACKATHON // TEAM WORK",
    stamp: "SIH HACKATHON",
    stampColor: "text-emerald-800 border-emerald-800 bg-emerald-50",
    initialPos: { x: 480, y: 120 },
    rotation: 4,
    description:
      "This was our team project for the Smart India Hackathon (SIH). A lot of organizations deal with confidential data and can't send documents or code out to cloud AI services. We built Omnitrix—a sovereign AI workbench that runs 100% offline inside a company's private intranet. It hosts several local models (using Ollama). When you give it a task, an orchestrator model figures out which local model is best suited (like writing code, summarizing files, or analyzing spreadsheets) and delegates the work—zero internet required, zero data leaked.",
    tech: [
      "React 19",
      "TypeScript",
      "Offline LLMs (Ollama)",
      "Intranet Multi-Model Routing",
      "docx / exceljs / jspdf",
      "Tailwind CSS",
      "Vite"
    ],
    features: [
      "Smart task routing: An orchestrator model checks your prompt and sends it to the best local model for that specific job.",
      "100% Air-gapped & Offline: Runs completely inside the local company intranet without pinging external servers.",
      "Local document generator: Can read and generate Word (.docx), Excel (.xlsx), and PDF files directly offline.",
      "SIH Team Sprint: Built under tight hackathon pressure, coordinating with teammates to connect the UI, local models, and document pipelines."
    ],
    architecture:
      "A React frontend connects to a local backend gateway running on the internal network. The gateway manages local quantized Ollama model runtimes on private hardware.",
    links: {
      github: "https://github.com/Tauqeer-Raza/Omnitrix",
      demo: "https://github.com/Tauqeer-Raza/Omnitrix",
    },
    accentColor: "#22c55e",
  },
  {
    id: "noicee-dashboard",
    type: "floppy",
    title: "Noicee Dashboard",
    subtitle: "My personal AI command center and college study tracker",
    docNumber: "REPO // nyren-10/Noicee-dashboard",
    status: "PERSONAL PROJECT",
    stamp: "AI HUB",
    stampColor: "text-purple-800 border-purple-800 bg-purple-50",
    initialPos: { x: 920, y: 110 },
    rotation: 5,
    description:
      "I built this for myself because I wanted one clean, central place to organize college assignments, notes, and research. It connects to both Google's Gemini API for smart cloud lookups and a local Ollama model when I want to work completely offline. I also added some 3D interactive graphics using Three.js just because experimenting with 3D on the web is super fun.",
    tech: [
      "Python Flask",
      "Google Gemini AI",
      "Ollama (Local LLM)",
      "React 19",
      "Three.js (R3F)",
      "PostgreSQL",
      "APScheduler"
    ],
    features: [
      "Dual AI setup: Uses Gemini for quick cloud research and local Ollama when working offline.",
      "Task & deadline alerts: Background scheduler keeps track of college assignment due dates.",
      "Interactive 3D canvas: Built mini 3D scenes using React Three Fiber and Three.js.",
      "PostgreSQL & Flask: Clean REST API with database storage for notes and logs."
    ],
    architecture:
      "Flask backend with PostgreSQL handling data storage and background cron jobs, hooked up to a React 19 frontend with 3D canvas elements.",
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
    subtitle: "Watching recursion solve the classic puzzle step-by-step",
    docNumber: "PROJECT // VISUAL-HANOI",
    status: "ALGORITHM ENGINE",
    stamp: "RECURSION",
    stampColor: "text-teal-800 border-teal-800 bg-teal-50",
    initialPos: { x: 1360, y: 220 },
    rotation: -6,
    description:
      "Recursion is one of those concepts that makes complete sense on paper, but seeing it visually in motion is so satisfying. I built this interactive Tower of Hanoi tool with smooth spring animations so you can watch the recursive algorithm solve the puzzle step-by-step, adjust the speed, or pause and try solving it yourself.",
    tech: [
      "React 19",
      "Framer Motion",
      "Tailwind CSS",
      "Algorithms (Recursion)",
      "Vite"
    ],
    features: [
      "Step-by-step recursive player: Step forward, backward, auto-play, or pause at any move.",
      "Fluid physics animations: Smooth disk movements powered by Framer Motion springs.",
      "Manual puzzle mode: Move disks yourself and try matching the optimal 2^n - 1 move count."
    ],
    architecture:
      "A pure recursive generator computes the optimal sequence of rod transitions, decoupled from the reactive Framer Motion animated UI.",
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
    subtitle: "A Python script that listens to your voice and talks back",
    docNumber: "REPO // nyren-10/Basic_Speech_Recognition",
    status: "PYTHON EXPERIMENT",
    stamp: "VOICE I/O",
    stampColor: "text-blue-800 border-blue-800 bg-blue-50",
    initialPos: { x: 500, y: 580 },
    rotation: -3,
    description:
      "A fun little Python weekend project where I wanted to experiment with voice input and audio processing. It listens through your microphone, calibrates for ambient room noise so it doesn't get thrown off by background sounds, transcribes what you said, and replies back with speech synthesis.",
    tech: [
      "Python 3",
      "SpeechRecognition (sr)",
      "pyttsx3 (TTS)",
      "Google Speech API",
      "Audio Signal Processing"
    ],
    features: [
      "Ambient noise calibration: Automatically adjusts mic sensitivity so background noises don't mess up speech.",
      "Speech-to-text: Uses Google Speech recognition tuned for Indian English accents.",
      "Voice feedback: Speaks responses back aloud using offline pyttsx3 TTS.",
      "Fun CLI tool: Quick to run from the command line whenever you want to test audio hooks."
    ],
    architecture:
      "Simple Python pipeline: mic input -> noise thresholding -> audio transcription -> spoken TTS feedback.",
    links: {
      github: "https://github.com/nyren-10/Basic_Speech_Recognition",
      demo: "https://github.com/nyren-10/Basic_Speech_Recognition",
    },
    accentColor: "#2563eb",
  },
  {
    id: "coffee-about",
    type: "coffee",
    title: "My Project Interests & How I Build",
    subtitle: "Architecture, data flows, backend tinkering, and the fun in figuring things out",
    docNumber: "INTERESTS // HOW-I-WORK",
    status: "DEVELOPER MINDSET",
    stamp: "MY INTERESTS",
    stampColor: "text-amber-800 border-amber-800 bg-amber-50",
    initialPos: { x: 80, y: 560 },
    rotation: 6,
    description:
      "Whenever I start a project, I don't just dive head-first into writing code. I love sitting down with a notebook and drawing out the system architecture and data flows first. Figuring out how everything connects, finding where things might break, and exploring around to find the cleanest design—even though it gets messy pretty often and I end up re-sketching it a bunch of times! Most of my time goes into backend development with Node.js and Python, designing database schemas, and experimenting with LLMs in real and air-gapped environments.",
    tech: [
      "System Architecture & Flow Diagrams",
      "Backend (Node.js & Python)",
      "LLMs (Gemini & Local Ollama)",
      "WebSockets & Real-Time Streams",
      "PostgreSQL Schemas",
      "Docker & DevOps Basics"
    ],
    features: [
      "Drawing architecture first: Exploring how data travels between the client, backend, and database before writing APIs.",
      "Embracing the mess: Sketching out multiple designs, testing what holds up, and iterating until the flow feels right.",
      "Backend focus: Building the server logic with Node.js and Python Flask, handling real-time WebSockets, and setting up PostgreSQL.",
      "Tinkering with LLMs: Running local models with Ollama and cloud models with Gemini, especially figuring out how to make them work in private/offline networks.",
      "Getting things to run: Packaging services with Docker and getting hands dirty with DevOps so the project actually works in production."
    ],
    architecture:
      "My approach is simple: figure out the real problem first, map the data flow on paper, build a solid backend, and don't be afraid to scrap an architecture if a simpler, better one comes along.",
    links: {
      github: "https://github.com/nyren-10",
      demo: "https://github.com/nyren-10",
    },
    accentColor: "#b45309",
  },
];
