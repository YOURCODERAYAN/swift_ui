
 export const glowButtonDoc = `# Glow Button

A button with a cursor-tracked radial glow — three layered radial gradients follow your cursor inside the button bounds and fade in/out on hover, giving a soft neon-spotlight effect.

Built with: \`cn\` (\`clsx\` + \`tailwind-merge\` helper) — no animation library dependency, pure React state + inline gradients.

---

## 📦 Install dependencies

No extra packages needed beyond your existing \`cn\` utility (\`clsx\` + \`tailwind-merge\`).

\`\`\`bash
npm install clsx tailwind-merge
\`\`\`

Make sure \`lib/utils.js\` (the \`cn\` helper) exists in your project and exports a \`cn()\` function.

---

## 📁 Files to copy

| File | Save to |
|---|---|
| \`GlowButton.jsx\` | \`components/ui/GlowButton.jsx\` |

⚠️ **Fix this import path after copying** if your \`cn\` helper lives somewhere other than \`lib/utils\`:

\`\`\`js
import { cn } from '@/lib/utils'
// change to wherever your cn() helper actually lives
\`\`\`

---

## 🚀 Usage

\`\`\`jsx
import GlowButton from '@/components/ui/GlowButton'

export default function Page() {
  return (
    <GlowButton onClick={() => console.log('clicked')}>
      Get Started
    </GlowButton>
  )
}
\`\`\`

---

## ⚙️ Configurable props — \`GlowButton\`

| Prop | Default | Change to |
|---|---|---|
| \`children\` | — | button label / content |
| \`className\` | \`''\` | extra classes merged in via \`cn()\` — overrides conflicting Tailwind classes automatically |

⚠️ **No \`onClick\`, \`disabled\`, or \`type\` props currently exposed.** Unlike \`MagneticButton\`, this component doesn't forward a click handler or disabled state — if you need either, spread \`...props\` onto the \`<button>\` element, or add them explicitly as named props.

---

## 🎨 Glow appearance — currently hardcoded, not prop-driven

| Value | Default | Where |
|---|---|---|
| Glow color | \`#39ff14\` (neon green) at three opacities (\`ff\`, \`66\`, \`22\`) | inline in the \`background\` gradient string |
| Glow radii | \`80px\` / \`150px\` / \`300px\` | same gradient string, one ring per layer |
| Blend mode | \`screen\` | \`mixBlendMode\` style |
| Fade duration | \`duration-300\` (300ms) | Tailwind class on the glow \`<div>\` |

⚠️ These aren't props yet — to reuse this component with a different glow color (e.g. matching the cyan/violet Aurora palette instead of neon green), you'd currently need to edit the gradient string directly. Consider exposing \`glowColor\` as a prop if you plan to reuse this across multiple themed sections.

---

## ⚠️ Not meant to be hand-edited — internals

- \`cursorPosition\` state — raw pixel offset from the button's top-left corner, recalculated on every \`mousemove\` via \`getBoundingClientRect()\`
- The three stacked \`radial-gradient()\` layers — order matters; the brightest/smallest ring must come first or the larger, dimmer rings will visually cover it
- \`pointer-events-none\` on the glow \`<div>\` — required so the glow overlay never intercepts clicks meant for the button itself

---

## 📝 Fixed in this version

- \`useState\` and \`useRef\` were used but never imported from \`react\` — this throws \`useState is not defined\` (or \`useRef is not defined\`) the moment the component renders. Both are now imported on line 1.
`;

export default glowButtonDoc;