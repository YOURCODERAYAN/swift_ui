<div align="center">

# Swift UI

<!-- 🖼️ HERO BANNER — replace with a screen recording (GIF/MP4→GIF) of Aurora or a 
     quick montage of 2-3 components in motion. This is the single highest-impact 
     image slot on the whole README; a moving visual here does more than any 
     paragraph of description.
     Suggested path: public/readme/hero.gif
     Suggested size: ~1200px wide, under 5MB (GitHub renders large GIFs slowly) -->
<img width="1859" height="916" alt="Final_Project" src="https://github.com/user-attachments/assets/de8c3c91-0449-4bfc-87cc-12b6bf3f7ad8" />


An animation-forward, copy-paste React component library — built shadcn-style: no package install for the components themselves, just copy the source into your project and own it from there.

Dark, cinematic, space-themed by default. Built for portfolios, landing pages, and product UIs that want real motion, not just hover transitions.

🚧 **Actively growing.** Launched with 6 components across backgrounds, buttons, and cards — more are being added as they're built. This isn't a fixed set; check the live docs for whatever's newest.

🖥️ **Built for large screens.** Swift UI is designed specifically for laptop and desktop viewports — it isn't built or tested for tablet or mobile. The live docs site enforces this with a `MobileGate`, and most components assume a desktop-sized canvas (3D scenes, scroll-pinned animations) that won't translate well to a phone screen.

</div>

---

## ✨ What's inside (so far)

<div align="center">

| Category | Components |
|---|---|
| **Backgrounds** | `Aurora` — animated gradient + starfield + orbiting 3D planet<br>`Parallax` — scroll-driven multi-layer depth background |
| **Buttons** | `MagneticButton` — cursor-tracked shadow depth<br>`GlowButton` — cursor-tracked radial glow |
| **Cards** | `AnimateCards` — scroll-pinned spread/rotate/flip sequence<br>`StackedCards` — cursor-reactive spring-physics card stack |

</div>

More categories (forms, navigation, text effects) are planned as the library grows. Each component has its own guide — full dependency list, install steps, configurable props, and known constraints — in the live docs at `/component/[slug]`.

---

## 📦 Install

Swift UI isn't an npm package — copy the component source directly into your project. Each component depends on different libraries (Framer Motion, GSAP, React Three Fiber, etc.) depending on what it does, so **dependencies aren't listed here** — open the component's own guide for its exact install command and file destinations before copying.

⚠️ **No responsive/mobile support.** None of these components were built with small-viewport layouts in mind — 3D scenes, scroll-pinned sequences, and cursor-tracked effects are all desktop-first by design, not just under-tested on mobile. If you copy a component into a project that needs to work on phones or tablets, expect to add your own breakpoint handling (or your own version of the library's `MobileGate` pattern: detect viewport width and show a fallback below ~1024px).

---

## 🚀 Quick start

```jsx
import Together from '@/sections/Aurorabg/Together'
import MagneticButton from '@/components/Buttons'

export default function Page() {
  return (
    <Together>
      <h1 className="text-5xl font-bold text-white">Your hero content</h1>
      <MagneticButton>Get Started</MagneticButton>
    </Together>
  )
}
```

Every component is self-contained — copy the file, fix the one or two import paths flagged in its guide, and it works without pulling in the rest of the library.

---

## 📁 Project structure

```
swift_ui
├─ public/                  → images, GLB models, icons used by previews
├─ src
│  ├─ app
│  │  ├─ component/[slug]   → live docs route, one page per component
│  │  └─ page.js            → homepage
│  ├─ components/           → top-level component entry points (Backgrounds, Buttons, Cards, Menu, MobileGate)
│  ├─ GuideRenderer.jsx      → renders each component's .md.js guide as styled docs
│  ├─ Markdown/guides/       → one *.md.js file per component, source of the docs site
│  ├─ sections/              → actual component implementations, grouped by feature
│  │  ├─ Aurorabg/           → Aurora background + SpaceBoi 3D model
│  │  ├─ Parallax/           → Parallax background
│  │  ├─ CardsGsap/          → AnimateCards + Cardmain
│  │  ├─ ElasticCards/       → StackedCards (physics stack)
│  │  ├─ HoverButton/        → MagneticButton implementation
│  │  └─ */Previews/         → live preview + step-by-step code shown in the docs UI
│  ├─ constants/             → static data (card info, etc.)
│  └─ utils/                 → shared helpers (bg, button, card configs)
└─ README.md
```

⚠️ Folder names under `sections/` (e.g. `HoverButton`, `ElasticCards`) are internal naming and don't always match the component's exported name — check each component's own guide for its actual import path and export name rather than assuming from the folder.

---

## 🧱 Philosophy

- **Copy, don't install.** You own the code the moment you paste it — no black-box dependency, no version lock-in on the components themselves.
- **One mechanism per component.** Each piece does one specific kind of motion well (cursor-tracked shadow, scroll-pinned flip, spring-physics push) rather than being a generic do-everything animation kit.
- **Dark and atmospheric by default**, built around a dark zinc space palette — but every component accepts enough props to restyle for a different visual direction.

---

## 🛣️ Status

Early and growing — 6 components today, more on the way. Each one gets refined individually as real use surfaces edge cases, so check a component's own guide for its current state rather than assuming this README is fully caught up.

---

## 📄 License

MIT — copy, modify, ship. No attribution required, though it's always appreciated.
