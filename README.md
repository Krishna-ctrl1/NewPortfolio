# Krishna Gupta — Portfolio

Personal site: AI Engineer & Data Scientist, AI Developer at Rayi Fintech, B.Tech (Honors) Data Science at IIIT Sri City.

Live: https://krishna-ctrl1.github.io/NewPortfolio/

## Stack

React 19 · Vite · Tailwind CSS v4 · Framer Motion · React Three Fiber (3D orbit hero)

## Editing content

Every word on the site lives in [`src/data.js`](src/data.js): profile, stats, experience, projects, research, skills, leadership and education. Change it there; the sections only render it.

The **Open source** section pulls the latest public repos from the GitHub API on load, so it stays current on its own.

## Layout

```
src/
  data.js            content
  App.jsx            page order
  index.css          theme tokens (colours, fonts) and effects
  sections/
    Hero.jsx         name, 3D planet, live IST clock, ticker
    Globe.jsx        three.js dotted planet with orbiting satellites
    About.jsx        stats + education
    Work.jsx         experience timeline
    Projects.jsx     filterable bento grid
    Research.jsx     publications
    Stack.jsx        skills marquee + groups + leadership
    OpenSource.jsx   live GitHub repos
    Contact.jsx      footer / contact
    Nav.jsx          header, scroll progress, mobile menu
    Palette.jsx      ⌘K / Ctrl+K quick menu
    constants.js     shared easing + section list
    ui.jsx           shared bits (Reveal, SpotCard, CountUp, icons)
  components/        previous design, kept for reference (unused)
```

## Run

```bash
npm install --legacy-peer-deps
npm run dev
```

Pushing to `main` deploys to GitHub Pages via `.github/workflows/deploy.yml`.
