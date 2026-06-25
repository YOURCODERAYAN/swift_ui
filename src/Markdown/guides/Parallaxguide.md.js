

export const parallaxDoc = `# Parallax Background

A scroll-driven multi-layer parallax background — stack sky, midground, and foreground images that drift at independent speeds as the page scrolls, with spring-smoothed motion.

Built with: \`motion/react\` (the renamed \`framer-motion\` package).

---

## 📦 Install dependencies

\`\`\`bash
npm install motion
\`\`\`

No \`cn.js\` dependency for this component — class merging isn't used here.

---

## 📁 Files to copy

| File | Save to |
|---|---|
| \`Parallax.jsx\` | \`components/ui/Parallax.jsx\` |

---

## 🚀 Usage (single import)

\`\`\`jsx
import Parallax from '@/components/ui/Parallax'

export default function Page() {
  return (
    <Parallax
      bgImage="/assets/sky.jpg"
      scrollRange={[0, 0.6]}
      layers={[
        { image: '/assets/mountains.png', zIndex: -40, movementRange: '0,30', direction: 'y' },
        { image: '/assets/trees.png', zIndex: -30, movementRange: '0,60', direction: 'y' },
        { image: '/assets/clouds.png', zIndex: -20, movementRange: '-20,20', direction: 'x' },
      ]}
    >
      <h1 className="text-5xl font-bold text-white">Your hero content here</h1>
    </Parallax>
  )
}
\`\`\`

### Layer stack (don't reorder)

\`\`\`
-z-50 → bgImage (base sky, fixed, never moves)
zIndex (per layer, set by you, should be negative and increasing toward camera)
z-0   → children (your text/content)
\`\`\`

⚠️ Each \`layer.zIndex\` should be a unique negative number, lower (more negative) = further back. Layers aren't auto-sorted — you control stacking order entirely through the \`zIndex\` you pass in.

---

## ⚙️ Configurable props — \`Parallax\`

| Prop | Default | Change to |
|---|---|---|
| \`children\` | — | content rendered on top, centered |
| \`layers\` | \`[]\` | array of layer configs, max **8** — see below |
| \`className\` | \`''\` | extra classes on the outer section |
| \`bgImage\` | \`'/assets/sky.jpg'\` | base background image path |
| \`damping\` | \`40\` | spring stiffness — lower = bouncier, higher = stiffer/slower settle |
| \`scrollRange\` | \`[0, 0.5]\` | scroll progress window the effect maps to — \`[0, 1]\` = entire page scroll, \`[0, 0.5]\` = effect completes by the halfway point |

---

## ⚙️ Layer object shape

| Field | Type | Example | Notes |
|---|---|---|---|
| \`image\` | \`string\` | \`'/assets/trees.png'\` | image URL or local path |
| \`zIndex\` | \`number\` | \`-30\` | stacking order, should be negative |
| \`movementRange\` | \`string\` | \`'0,50'\` | \`"start,end"\` as percentages — parsed by splitting on \`,\` |
| \`direction\` | \`'x' \\| 'y'\` | \`'y'\` | axis of movement; defaults to \`'y'\` if omitted — \`'x'\` now moves layers horizontally, distinct from \`'y'\` |

⚠️ **Max 8 layers.** The component pre-allocates a fixed number of internal animation slots (\`MAX_LAYERS = 8\`) so the number of scroll-tracking hooks stays constant across renders, regardless of how many layers you pass in or whether that count changes later. Passing more than 8 layers silently drops the extras — bump \`MAX_LAYERS\` inside the component if you need more.

---

## ⚠️ Not meant to be hand-edited — internals

- \`MAX_LAYERS\` slot system — this is what makes \`layers\` safe to pass as dynamic/changing data (e.g. from state or an API) instead of only a static array. Don't replace it with a plain \`.map()\` over \`layers\` directly; that reintroduces a React hooks-order bug if the layer count ever changes between renders.
- The \`-z-50\` base sky layer — kept separate from the \`layers\` array intentionally, always renders behind everything
- \`trackedProgress\` — the internal scroll-progress value remapped through \`scrollRange\`; layers read from this, not raw \`scrollYProgress\`, so changing \`scrollRange\` affects every layer consistently

---

## 📝 Changelog

- **Fixed:** scroll-tracking hooks were previously called once per layer inside \`.map()\`, which violates React's rules of hooks and would throw or produce stale animations the moment the number of layers changed between renders. Now uses a fixed 8-slot system so layer count can safely change at runtime.
- **Fixed:** \`direction: 'x'\` previously produced identical output to \`'y'\` — both branches of the internal direction check were the same code. Horizontal and vertical movement are now genuinely different.
- **Fixed:** \`scrollRange\` was accepted as a prop but never used — \`useScroll()\` always tracked full-page scroll regardless of what was passed. Now actually remaps the tracked progress to the given range.
`;

export default parallaxDoc;