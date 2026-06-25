

export const stackedCardsDoc = `# Stacked Cards

A spring-physics card stack — four overlapping cards rest in a fanned layout, and react to cursor movement with proximity-based push force, neighbor influence, and spring-damped settle. Built with vanilla JS physics inside a \`gsap.ticker\` loop, not GSAP's own tween/timeline system.

Built with: \`gsap\` (specifically \`gsap.ticker\`, not \`gsap.to\`/\`gsap.timeline\` for the physics loop itself).

---

## 📦 Install dependencies

\`\`\`bash
npm install gsap
\`\`\`

---

## 📁 Files to copy

| File | Save to |
|---|---|
| \`StackedCards.jsx\` | \`components/ui/StackedCards.jsx\` |
| \`stackedcards.css\` | \`styles/stackedcards.css\` (or your global stylesheet) |

No import paths to fix — this component is fully self-contained.

---

## 🚀 Usage

\`\`\`jsx
import StackedCards from '@/components/ui/StackedCards'

export default function Page() {
  return <StackedCards />
}
\`\`\`

⚠️ **No props — fully self-contained, including its image sources.** Image paths (\`/MONKEYIMAGE.jpg\`) and card count (4) are hardcoded directly in the JSX, not passed in. To reuse with different images, edit the \`<img src>\` values directly inside the component for now.

✅ **Safe to render more than once per page.** All internal queries are scoped to the component's own container via a ref, not the global \`document\` — multiple \`<StackedCards />\` instances on one page won't interfere with each other's cards.

---

## ⚙️ Physics constants — currently hardcoded inside \`StackedCards\`

| Constant | Default | Effect |
|---|---|---|
| \`PROXIMITY_RADIUS\` | \`500\` | how far (px) the cursor's influence reaches from a card's resting position |
| \`PUSH_FORCE\` | \`10\` | how strongly cursor velocity pushes a card away |
| \`TILT_AMOUNT\` | \`0.1\` | how much push force also rotates the card, not just moves it |
| \`NEIGHBOUR_INFLUENCE\` | \`0.2\` | how much force "leaks" from a pushed card to its neighbors, falls off by distance in the stack |
| \`SPRING_STIFFNESS\` | \`0.05\` | how strongly a card is pulled back toward its resting position each tick |
| \`BOUNCE_FRICTION\` | \`0.85\` | velocity damping per tick — lower = settles faster, less bounce |
| \`CURSOR_SMOOTHING\` | \`0.75\` | how much cursor velocity is smoothed frame-to-frame before driving force |

⚠️ None of these are props yet — retuning the feel currently means editing constants directly inside the component file.

---

## ⚙️ Layout — currently hardcoded for exactly 4 cards

| Array | Default | Meaning |
|---|---|---|
| \`layout.rotation\` | \`[5, -5, 7.5, -10]\` | resting rotation (deg) per card, by index |
| \`layout.x\` | \`[-275, -100, 100, 275]\` | resting horizontal offset (px) per card, by index |
| \`layout.y\` | \`[10, -10, 25, -10]\` | resting vertical offset (px) per card, by index |

⚠️ These three arrays must stay the same length as the number of \`.card\` elements rendered. The JSX currently renders exactly 4 \`.card\` divs to match — adding a 5th card without adding a matching 5th entry to all three arrays will read \`undefined\` for that card's layout values.

---

## ⚠️ Not meant to be hand-edited — internals

- \`cardPhysics\` — the per-card physics state array (position, velocity, rest position), built once on mount from \`layout\` and the queried DOM nodes
- \`CalculatePushForce()\` — converts cursor velocity + distance-to-card into a force vector; the \`** 3\` weight curve is what makes the push feel concentrated near the cursor rather than linear
- \`applyNeighbourInfluence()\` — spreads a portion of each card's force to nearby cards in the stack, falling off exponentially by index distance; this is what makes the whole stack feel connected rather than each card moving independently
- \`tick()\` (registered via \`gsap.ticker.add\`) — the actual per-frame physics integration loop (spring pull + friction + neighbor force), runs every frame for the lifetime of the component, and is properly removed via \`gsap.ticker.remove(tick)\` when the component unmounts
- \`containerRef\` — scopes every internal DOM query to this component instance specifically; don't replace the scoped \`root.querySelectorAll(...)\` calls with bare \`document.querySelectorAll(...)\`, that reintroduces cross-instance collisions if this component is ever rendered more than once on the same page

\`StackedCards\` **must** be a client component (\`'use client'\`) — it uses \`document\` queries, DOM event listeners, and \`gsap.ticker\`, all browser-only.

---

## 📝 Fixed in this version

- **Added \`'use client'\`** — previously missing; this component uses browser-only APIs (\`document\`, DOM events, \`gsap.ticker\`) and would fail at the server-render boundary in a Next.js App Router project without it.
- **Scoped all DOM queries to the component's own container** via a ref, instead of unscoped \`document.querySelector\`/\`querySelectorAll\`. Multiple instances on one page no longer collide.
- **Added \`useEffect\` cleanup.** The ticker callback and both event listeners (\`mousemove\`, \`mouseleave\`) are now removed on unmount via \`gsap.ticker.remove(...)\` and \`removeEventListener(...)\`. Previously, the physics loop and listeners kept running indefinitely even after the component left the page.
- **CSS:** \`background: color #141414\` (invalid — \`color\` isn't a valid value for the \`background\` shorthand) corrected to \`background: #141414\`. The original was silently discarded by the browser, leaving \`.spotlight\` with no background at all.

All physics constants and layout arrays (\`PROXIMITY_RADIUS\`, \`PUSH_FORCE\`, \`TILT_AMOUNT\`, \`NEIGHBOUR_INFLUENCE\`, \`SPRING_STIFFNESS\`, \`BOUNCE_FRICTION\`, \`CURSOR_SMOOTHING\`, and the \`layout.rotation\`/\`x\`/\`y\` arrays) are unchanged from the original — only the surrounding structure was fixed.
`;

export default stackedCardsDoc;