

 export const magneticButtonDoc = `# Magnetic Button

A button with cursor-reactive depth — the inset/outer shadows shift toward your cursor position as you move across it, then spring back to a neutral resting shadow on mouse leave.

Built with: native \`react\` hooks only — no animation library dependency.

---

## 📦 Install dependencies

No extra packages needed — uses only \`react\`'s built-in \`useRef\`, \`useEffect\`, \`useState\`.

---

## 📁 Files to copy

| File | Save to |
|---|---|
| \`MagneticButton.jsx\` | \`components/ui/MagneticButton.jsx\` |
| \`button.css\` | \`styles/button.css\` (or your global stylesheet) |

⚠️ The CSS file defines the \`--dark-color\`, \`--white-color\`, \`--gradient-color\`, \`--body-color\` custom properties on \`:root\`. If your project already defines a \`:root\` block, merge these in rather than overwriting it.

---

## 🚀 Usage

\`\`\`jsx
import MagneticButton from '@/components/ui/MagneticButton'
import '@/styles/button.css'

export default function Page() {
  return (
    <MagneticButton onClick={() => console.log('clicked')}>
      Get Started
    </MagneticButton>
  )
}
\`\`\`

---

## ⚙️ Configurable props — \`MagneticButton\`

| Prop | Default | Change to |
|---|---|---|
| \`children\` | \`'Button'\` | button label / content |
| \`className\` | \`''\` | extra classes appended to the button |
| \`onClick\` | — | click handler |
| \`disabled\` | \`false\` | disables the button, applies \`:disabled\` styling |
| \`variant\` | \`'dark'\` | \`'dark'\` \\| \`'light'\` — see note below |
| \`shadowIntensity\` | \`3\` | lower = shadow follows cursor more aggressively |
| \`insetIntensity\` | \`4\` | lower = inset highlight follows cursor more aggressively |
| \`type\` | \`'button'\` | standard HTML button \`type\` attribute |

⚠️ **\`variant="light"\` is not yet visually implemented.** The component applies a \`button--light\` class, but \`button.css\` only styles the base \`.button\` class — both variants currently render identically. A placeholder \`.button--light\` rule is included in the CSS for you to fill in with an actual light-theme palette.

---

## 🎨 CSS custom properties — \`:root\`

| Variable | Default | Change to |
|---|---|---|
| \`--gradient-color\` | \`linear-gradient(180deg, hsl(235,4%,75%) 0%, hsl(235,4%,50%) 100%)\` | button background gradient |
| \`--dark-color\` | \`hsl(235, 4%, 42%)\` | dark edge of the inset shadow |
| \`--white-color\` | \`hsl(235, 16%, 95%)\` | light edge of the inset shadow + text color |
| \`--body-color\` | \`hsl(235, 4%, 60%)\` | reserved for page-level background pairing, not used inside the button itself |

---

## ⚠️ Not meant to be hand-edited — internals

- The \`handleMouseMove\` shadow math — converts cursor offset from button center into four shadow components (two inset, two outer). Adjust \`shadowIntensity\` / \`insetIntensity\` via props instead of editing the divisors directly.
- \`getDefaultShadow()\` — the resting-state shadow returned on mouse leave and on mount. Keep this in sync with \`button.css\`'s own \`.button\` box-shadow if you ever change one without the other, they'll visibly mismatch on first paint vs. after a mouse interaction.

---

## 📝 Fixed in this version

- Default shadow string and the cursor-reactive shadow string were previously malformed — mixed single-quotes and backticks with stray escaped \`$\` characters, which is invalid JS and would throw \`Unterminated string constant\` on build. Both are now clean template literals.
- \`className\` interpolation had the same quote-mixing issue — fixed the same way.
- CSS: \`coloumn-gap\` typo corrected to \`column-gap\` (the misspelled property was silently ignored by the browser, so the button had no visible gap between children).
`;

export default magneticButtonDoc;