# Designer Desk Portfolio

A quirky 2D web developer portfolio that looks like a top‑down view of a messy designer's desk. Projects are draggable SVG objects; clicking opens a hand‑drawn‑style modal.

## Features
- Fixed 100vh/100vw desk background (no scrolling)
- Draggable project icons (using `@use-gesture/react` and `framer‑motion`)
- Reusable modal with Rough.js sketchy border
- Built with React, Vite, Tailwind CSS
- GitHub Pages deployment via GitHub Actions

## Getting Started
```bash
npm install           # install deps
npm run dev           # start dev server at http://localhost:5173
npm run build         # production build (output in ./dist)
```

Add your own desk image to `public/desk.jpg` and extend the `projects` array in `src/App.jsx` to showcase more work.
