export const projects = [
  {
    id: "busbuddy",
    type: "notebook",
    title: "BusBuddy Transit Engine",
    subtitle: "Real-Time Fleet Tracking & Transit Prediction",
    docNumber: "GDD-01 // TRANSIT-CORE",
    status: "DEPLOYED // OPERATIONAL",
    stamp: "APPROVED",
    stampColor: "text-emerald-700 border-emerald-700 bg-emerald-50",
    initialPos: { x: 120, y: 140 },
    rotation: -4,
    description:
      "A next-generation real-time urban transit navigation system. Empowers daily commuters with live GPS telemetry, sub-second bus arrival predictions, intelligent route re-planning, and offline timetable caching.",
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Mapbox GL",
      "WebSockets",
      "Node.js",
      "GTFS-RT"
    ],
    features: [
      "Live GPS bus telemetry with sub-meter coordinate interpolation",
      "Real-time crowding estimates based on transit hub occupancy",
      "Offline-first PWA caching for zero-connectivity subway use",
      "Smart push notifications triggering 5 minutes before scheduled stop arrival",
      "Interactive SVG map overlays with dynamic route geometry"
    ],
    architecture:
      "Built with a reactive event-driven pub/sub architecture. Frontend renders high-refresh map viewports via Mapbox WebGL, fed by a Node.js WebSocket gateway connected to city transit feeds.",
    links: {
      github: "https://github.com/nyren-10/busbuddy",
      demo: "https://github.com/nyren-10",
    },
    accentColor: "#f59e0b",
  },
  {
    id: "firebase-backend",
    type: "floppy",
    title: "Firebase Cloud Infrastructure",
    subtitle: "Serverless Architecture, Auth & Cloud Pipelines",
    docNumber: "GDD-02 // BACKEND-OPS",
    status: "PRODUCTION // 99.9% SLA",
    stamp: "VERIFIED",
    stampColor: "text-amber-800 border-amber-800 bg-amber-50",
    initialPos: { x: 520, y: 160 },
    rotation: 5,
    description:
      "Enterprise-grade serverless backend built on Google Cloud Platform and Firebase. Architected for zero-maintenance auto-scaling, millisecond real-time document sync, and bulletproof declarative security rules.",
    tech: [
      "Firebase Auth",
      "Cloud Firestore",
      "Cloud Functions v2",
      "Security Rules",
      "Node.js",
      "Google Cloud KMS"
    ],
    features: [
      "Sub-50ms Firestore distributed real-time sync across multi-client sessions",
      "Hardened zero-trust Security Rules preventing privilege escalation and data tampering",
      "Eventarc & Cloud Functions v2 triggers for async billing, emails, and audit logs",
      "Biometric passkey & OAuth multi-factor authentication layer",
      "Automated automated database backup snapshots and cold storage archiving"
    ],
    architecture:
      "Pure serverless paradigm utilizing Firestore distributed collections with compound indexing, backed by 2nd-gen Cloud Functions running on Google Cloud Run for elastic scalability.",
    links: {
      github: "https://github.com/nyren-10",
      demo: "https://github.com/nyren-10",
    },
    accentColor: "#ef4444",
  },
  {
    id: "polaroid-lab",
    type: "polaroid",
    title: "Creative Canvas & UI Lab",
    subtitle: "Experimental 2D/3D Web Interactions & Shaders",
    docNumber: "GDD-03 // CREATIVE-LAB",
    status: "EXPERIMENTAL // ACTIVE",
    stamp: "PROTOTYPE",
    stampColor: "text-indigo-700 border-indigo-700 bg-indigo-50",
    initialPos: { x: 880, y: 120 },
    rotation: -8,
    description:
      "A curated collection of micro-interactions, spring-based physics playgrounds, procedural canvas animations, and unconventional web portfolios designed to break away from sterile corporate templates.",
    tech: [
      "Three.js",
      "Framer Motion",
      "Rough.js",
      "Tailwind CSS",
      "Vite",
      "Canvas API",
      "GLSL Shaders"
    ],
    features: [
      "Custom 2D draggable physics with inertia, boundary collision, and depth shadows",
      "Hand-drawn procedural sketchy wireframes and blueprint aesthetic rendering",
      "Dynamic sound-fx triggers and haptic feedback simulations",
      "Responsive canvas viewports with multi-touch mobile gesture support",
      "Sub-millisecond render loops optimized for 120Hz ProMotion displays"
    ],
    architecture:
      "Composed of modular React canvas layers with optimized RAF (requestAnimationFrame) hooks, minimizing DOM repaints while delegating physics calculations to Framer Motion springs.",
    links: {
      github: "https://github.com/nyren-10",
      demo: "https://github.com/nyren-10",
    },
    accentColor: "#6366f1",
  },
  {
    id: "coffee-about",
    type: "coffee",
    title: "Developer Dossier: Nyren",
    subtitle: "Full-Stack Engineer & Creative Coder",
    docNumber: "PILOT-ID // NYREN-10",
    status: "LEVEL: FULL-STACK",
    stamp: "CONFIDENTIAL",
    stampColor: "text-rose-800 border-rose-800 bg-rose-50",
    initialPos: { x: 180, y: 480 },
    rotation: 6,
    description:
      "Creative developer who loves crafting playful, memorable web software that bridges functional engineering with bold artistic direction. Experienced across modern frontend ecosystems, serverless clouds, and interactive visual computing.",
    tech: [
      "Full-Stack Dev",
      "System Design",
      "Creative UI/UX",
      "API Architecture",
      "Performance Tuning"
    ],
    features: [
      "Philosophy: Software should evoke feeling and joy, not just display data",
      "Strengths: Rapid prototyping, elegant code architecture, aesthetic discernment",
      "Current Focus: Interactive interfaces, real-time spatial web applications, and generative visuals",
      "Open for: High-impact full-stack roles, creative web contracts, and experimental tech collaborations"
    ],
    architecture:
      "Equipped with a problem-solving mindset, obsessive attention to detail, and a constant thirst for learning cutting-edge web APIs.",
    links: {
      github: "https://github.com/nyren-10",
      demo: "mailto:contact@nyren.dev",
    },
    accentColor: "#b45309",
  },
  {
    id: "sticky-skills",
    type: "sticky",
    title: "Arsenal & Skill Matrix",
    subtitle: "Technical Weapons & Core Proficiencies",
    docNumber: "SPECS-05 // LOADOUT",
    status: "STATUS: MAX LEVEL",
    stamp: "QUALIFIED",
    stampColor: "text-emerald-800 border-emerald-800 bg-emerald-50",
    initialPos: { x: 620, y: 520 },
    rotation: -5,
    description:
      "A complete breakdown of languages, libraries, databases, and deployment platforms wielded daily to build robust, scalable applications.",
    tech: [
      "JavaScript (ESNext)",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Tailwind CSS",
      "Firebase",
      "PostgreSQL",
      "Git / CI/CD"
    ],
    features: [
      "Frontend: React, Next.js, Vite, Tailwind CSS, Framer Motion, HTML5/CSS3",
      "Backend: Node.js, Express, Firebase Functions, REST APIs, WebSockets",
      "Databases: Firestore, PostgreSQL, MongoDB, Redis caching",
      "DevOps: GitHub Actions, Docker, Cloudflare, Vercel, Firebase Hosting",
      "Methodologies: Agile sprints, atomic design systems, test-driven reliability"
    ],
    architecture:
      "Pragmatic tech selection tailored to business needs: low-latency, fast iteration speed, and frictionless developer ergonomics.",
    links: {
      github: "https://github.com/nyren-10",
      demo: "https://github.com/nyren-10",
    },
    accentColor: "#10b981",
  },
];
