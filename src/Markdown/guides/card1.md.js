// Auto-generated from animate-cards.md
// Do NOT hand-edit the escaped string below — edit the source .md and regenerate instead.

export const animateCardsDoc = `# Animate Cards

A scroll-pinned card sequence — four flip-cards spread out from a stacked pile, rotate into place, then flip to reveal their back content, all driven by scroll position via GSAP ScrollTrigger.

Built with: \`gsap\`, \`gsap/ScrollTrigger\`, \`@gsap/react\`, \`next/image\`.

---

## 📦 Install dependencies

\`\`\`bash
npm install gsap @gsap/react
\`\`\`

\`next/image\` is already part of Next.js — no separate install needed.

---

## 📁 Files to copy

| File | Save to |
|---|---|
| \`AnimateCards.jsx\` | \`components/ui/AnimateCards.jsx\` |
| \`Cardmain.jsx\` | \`components/ui/Cardmain.jsx\` |
| \`cards.css\` | \`styles/cards.css\` (or your global stylesheet) |

⚠️ **Fix this import path after copying** in \`AnimateCards.jsx\`:

\`\`\`js
import Cardmain from '@/sections/CardsGsap/Cardmain'
// change to →
import Cardmain from '@/components/ui/Cardmain'
\`\`\`

⚠️ \`cards.css\` sets \`height: 500vh\` on \`html, body\`. This is **load-bearing, not leftover scaffolding** — \`ScrollTrigger\`'s pinned scroll distance needs real page height to scroll through. Don't remove it thinking it's unused; removing it will break the pin/scrub animation entirely. The \`background-color: blue\` on \`section\`, on the other hand, **is** a placeholder — replace that with your actual section background.

---

## 🚀 Usage

\`\`\`jsx
import AnimateCards from '@/components/ui/AnimateCards'
import '@/styles/cards.css'

const cards = [
  { frontSrc: '/images/card-1.jpg', frontAlt: 'Card 1', backContent: <p>Back content 1</p> },
  { frontSrc: '/images/card-2.jpg', frontAlt: 'Card 2', backContent: <p>Back content 2</p> },
  { frontSrc: '/images/card-3.jpg', frontAlt: 'Card 3', backContent: <p>Back content 3</p> },
  { frontSrc: '/images/card-4.jpg', frontAlt: 'Card 4', backContent: <p>Back content 4</p> },
]

export default function Page() {
  return <AnimateCards cards={cards} />
}
\`\`\`

⚠️ **Exactly 4 cards expected.** The \`position\` (\`[14, 38, 62, 86]\`) and \`rotation\` (\`[-15, -7.5, 7.5, 15]\`) arrays inside the component are hardcoded for a 4-card spread, and the CSS animation-delay rules only target \`#card-1\` through \`#card-4\`. Passing more or fewer cards won't crash, but extra cards won't get a spread position/rotation/stagger delay, and will visually stack on top of each other.

---

## ⚙️ Configurable props — \`AnimateCards\`

| Prop | Default | Change to |
|---|---|---|
| \`cards\` | \`[]\` | array of exactly 4 card objects, see shape below |

## ⚙️ Card object shape

| Field | Type | Example | Notes |
|---|---|---|---|
| \`frontSrc\` | \`string\` | \`'/images/card-1.jpg'\` | image shown on the card front |
| \`frontAlt\` | \`string\` | \`'Card 1'\` | alt text, passed to \`next/image\` |
| \`backContent\` | \`ReactNode\` | \`<p>Hello</p>\` | rendered inside \`.flip-card-back\` when flipped |

⚠️ \`Cardmain\`'s \`<Image>\` uses fixed \`width={300} height={300}\` props, while \`cards.css\` forces the rendered \`img\` to \`width: 100%; height: 100%\` via the global \`img\` selector. The fixed props control Next's image optimization/aspect-ratio, not the final on-screen size — if you resize \`.card\` in CSS, the image will stretch to fit, but the source resolution Next requests stays tied to the original \`300×300\`. Update both together if you need sharper images at a larger card size.

---

## ⚙️ Animation timing — currently hardcoded inside \`AnimateCards\`

| Value | Default | Where |
|---|---|---|
| Total pinned scroll distance | \`window.innerHeight * 3\` | \`totalScrollHeight\` |
| Spread positions (left %) | \`[14, 38, 62, 86]\` | \`position\` array |
| Spread rotations (deg) | \`[-15, -7.5, 7.5, 15]\` | \`rotation\` array |
| Per-card flip stagger | \`index * 0.05\` | \`staggerOffset\` |
| Flip window (as fraction of total scroll) | \`1/3\` to \`2/3\`, offset per card | \`startOffset\` / \`endOffset\` |

⚠️ None of these are exposed as component props yet — to retime the animation (e.g. faster spread, different stagger), you'd currently edit these constants directly inside \`AnimateCards.jsx\` rather than passing a prop.

---

## ⚠️ Not meant to be hand-edited — internals

- The two \`ScrollTrigger.create()\` calls and the \`cardsArray.forEach\` blocks inside \`useGSAP\` — this is the actual spread/rotate/flip choreography, sequenced against scroll progress
- \`cardRef.current[index] = el\` — the ref-array pattern that lets GSAP target each card DOM node directly; required because GSAP needs real DOM nodes, not React state
- \`.flip-card-front\` / \`.flip-card-back\` \`backface-visibility: hidden\` — required for the 3D flip illusion to work; removing it will show both faces overlapping during rotation

\`AnimateCards\` **must** be a client component (\`'use client'\`) — GSAP and ScrollTrigger require browser APIs (\`window\`, DOM nodes) unavailable during server rendering.

---

## 📝 Notes

- \`useEffect\` is imported in \`AnimateCards.jsx\` but unused — all animation setup runs through \`useGSAP\` instead, which handles its own cleanup on unmount automatically. Safe to remove the unused import if you want a clean lint pass.
`;

export default animateCardsDoc;