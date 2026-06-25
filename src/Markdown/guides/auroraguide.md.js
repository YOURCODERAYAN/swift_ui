// Auto-generated from aurora-3d-background.md
// Do NOT hand-edit the escaped string below — edit the source .md and regenerate instead.

 export const auroraDoc = `# Aurora 3D Background

An animated gradient + starfield + orbiting 3D planet scene, layered into one drop-in background component.

Built with: \`framer-motion\`, \`@react-three/fiber\`, \`@react-three/drei\`, \`three\`.

---

## 📦 Install dependencies

\`\`\`bash
npm install framer-motion @react-three/fiber @react-three/drei three
\`\`\`

Make sure \`utils/cn.js\` (clsx + tailwind-merge helper) exists in your project.

---

## 📁 Files to copy

| File | Save to |
|---|---|
| \`Aurora.jsx\` | \`components/ui/Aurora.jsx\` |
| \`SpaceBoi.jsx\` | \`components/ui/SpaceBoi.jsx\` |
| \`space_boi.glb\` | \`public/space_boi.glb\` |
| \`Showcase.jsx\` | \`components/ui/Showcase.jsx\` |
| \`Together.jsx\` | \`components/ui/Together.jsx\` |

⚠️ **Fix these import paths after copying** (they currently point to internal dev paths):

In \`Showcase.jsx\`:

\`\`\`js
import SpaceBoi from '@/sections/Aurorabg/spaceboi'
// change to →
import SpaceBoi from '@/components/ui/SpaceBoi'
\`\`\`

In \`Together.jsx\`:

\`\`\`js
const Showcase = lazy(() => import('@/sections/Aurorabg/spacescene'))
// change to →
const Showcase = lazy(() => import('@/components/ui/Showcase'))
\`\`\`

---

## 🚀 Usage (single import)

\`Together.jsx\` is the final component — import only this one in your page:

\`\`\`jsx
import Together from '@/components/ui/Together'

export default function Page() {
  return (
    <Together>
      <h1 className="text-5xl font-bold text-white">Your hero content here</h1>
    </Together>
  )
}
\`\`\`

### Layer stack (don't reorder)

\`\`\`
z-0  → Aurora gradient + stars background
z-10 → 3D Showcase (SpaceBoi + orbiting planets)
z-20 → children (your text/content)
\`\`\`

---

## ⚙️ Configurable props — \`Together\`

| Prop | Default | Change to |
|---|---|---|
| \`children\` | — | content rendered on top |
| \`auroraColors\` | Aurora default | gradient color array |
| \`auroraAnimationDuration\` | Aurora default | gradient cycle speed |
| \`auroraStarsCount/Radius/Depth/Factor/Speed\` | Aurora defaults | star field tuning |
| \`showcaseProps\` | \`{}\` | pass any Showcase prop, e.g. \`{ modelScale: 10 }\` |
| \`loadingChildren\` | \`'Loading 3D...'\` | custom loading text |
| \`containerClassName\` / \`containerStyle\` | \`''\` / \`{}\` | outer wrapper styling |

---

## ⚙️ Configurable props — \`Aurora\` (standalone)

| Prop | Default | Change to |
|---|---|---|
| \`colors\` | \`["#06B6D4","#2563EB","#4F46E5","#8B5CF6"]\` | gradient color cycle |
| \`animationDuration\` | \`10\` | seconds per transition |
| \`starsCount\` | \`5000\` | number of stars |
| \`starsRadius\` | \`100\` | star field radius |
| \`starsDepth\` | \`60\` | star field depth |
| \`starsFactor\` | \`2\` | star size randomness |
| \`starsSpeed\` | \`0.8\` | twinkle/movement speed |
| \`className\` | \`''\` | extra tailwind classes |

---

## ⚙️ Configurable props — \`Showcase\` (standalone)

| Prop | Default | Change to |
|---|---|---|
| \`cameraPosition\` | \`[0,7,14]\` | camera placement |
| \`cameraFov\` | \`50\` | field of view |
| \`modelScale\` | \`8\` | SpaceBoi size |
| \`modelPosition\` | \`[0,3,0]\` | SpaceBoi placement |
| \`fogColor\` | \`'#0a0e27'\` | fog tint |
| \`fogNear\` / \`fogFar\` | \`6\` / \`35\` | fog distance |
| \`ambientLightIntensity\` | \`1.5\` | overall brightness |
| \`pointLight1Color\` / \`pointLight2Color\` | \`'#1e3a8a'\` | accent light tint |
| \`containerStyle\` | \`{}\` | default height is \`100vh\` |

---

## ⚠️ Not meant to be hand-edited — \`SpaceBoi\`

- All \`geometry={nodes.xxx}\` / \`material={materials['Material.00x']}\` — baked from GLB export
- Orbit \`position\`/\`scale\` values — planet placements
- Orbit speed values inside \`useFrame()\` — edit only to speed up/slow down rotation

\`SpaceBoi\` **must** be rendered inside a \`<Canvas>\` — it has no standalone use.
`;

export default auroraDoc;