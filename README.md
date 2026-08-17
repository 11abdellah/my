# Abdellah Guerifi -- Portfolio

A dark-themed personal portfolio landing page for Abdellah Guerifi -- web designer (vibecoding), CEO, forex trader &amp; expert, media personality, and tech presenter. Built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  components/     Reusable UI pieces (FadeIn, Magnet, ContactButton, LiveProjectButton, AnimatedText)
  sections/       Page sections, rendered in order inside App.tsx
  data/           Content data (marquee images, services, projects)
  index.css       Global reset, dark background, .hero-heading gradient text, Kanit font
  App.tsx         Composes the 5 sections: Hero, Marquee, About, Services, Projects
```

## Notes

- The Kanit font is loaded from Google Fonts in `index.html` (weights 300-900).
- Navbar links, the hero Contact button, and the About section Contact button all
  smooth-scroll to the matching section id (`about`, `services`, `projects`, `contact`).
  There's no separate visual "Contact" section, so `#contact` is anchored at the
  bottom of the Projects section, and points to `abdellahgr20@gmail.com`.
- The hero portrait is currently an "AG" monogram placeholder (in
  `src/sections/HeroSection.tsx`, inside the `Magnet` wrapper) since no real
  photo was provided. Swap the `<div>` for an `<img src="/your-photo.jpg" ... />`
  whenever you have one -- the magnetic hover effect will keep working either way.
- The Projects section is now a 20-project grid (`src/data/projects.ts`) spanning
  Web Design, Business, Forex Trading, Media, and Tech Talks, each tagged
  "Ongoing". It uses icon + text cards rather than the original photo-stack
  layout, since there aren't real screenshots for 20 projects yet -- feel free
  to add `image` fields to the data and swap in real project photos later.
- The Marquee section's scroll-linked horizontal movement uses raw
  scroll-position math as specified; no external scroll library is used beyond
  Framer Motion's `useScroll`/`useTransform` (used in `AnimatedText`).
- Decorative 3D renders in the About section and the marquee GIFs are still
  referenced from their original hosted URLs, so an internet connection is
  required to see them load.
