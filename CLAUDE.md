# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start        # Dev server at http://localhost:3000
npm run build    # Production build to /build
npm test         # Run tests in watch mode
npm test -- --watchAll=false  # Run tests once (CI mode)
```

## Architecture

This is a single-page React portfolio (Create React App) with no routing — all sections live on one scrollable page. `App.js` composes the sections in vertical order: `Header → HeroHUD → IntroDescription → Projects → ExperienceTimeline → EducationTimeline → Skills → Contact → ScrollToTop → Footer`.

**Design theme:** Cyberpunk/sci-fi aesthetic. Global styles in `src/index.css` set a dark radial background (`#000`/`#01010f`), cyan (`#0ff`) as the primary text/accent color, and the Orbitron font throughout. Every component brings its own co-located `.css` file.

**Component structure:** Each component lives under `src/components/<Name>/` with a `<Name>.js` and `<Name>.css`. No shared component library or UI framework — all styling is hand-written CSS.

**Data files:** Content that's likely to change (experience, education) is extracted into separate data files (`ExperienceData.js`, `EducationData.js`) and imported by their respective timeline components. Projects data is currently defined inline in `Projects.js`.

**Navigation:** The header uses smooth-scroll to `id` anchors (`#projects`, `#experience`, `#education`, `#skills`, `#contact`) — no React Router. The `HeroMatrix` component (unused in current `App.js`) implements a canvas-based Matrix rain effect with a typing animation; `HeroHUD` is the active hero section with a sci-fi HUD panel layout.

**Key libraries:**
- `framer-motion` — animation
- `@react-three/fiber` + `@react-three/drei` — Three.js integration (available but not yet wired into a component)
- `react-icons` — icon sets
