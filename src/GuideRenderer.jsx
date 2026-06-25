import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

// Aurora's own palette, pulled straight from the component being documented —
// makes the docs visually rhyme with the thing they describe instead of
// reading as a generic dark-mode markdown dump.
const AURORA_CYAN = '#06B6D4'
const AURORA_VIOLET = '#8B5CF6'

export function GuideRenderer({ content }) {
  return (
    <div
      className="prose prose-invert max-w-none break-words"
      style={{ '--guide-mono': "'JetBrains Mono', 'Fira Code', monospace" }}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          // H1 — the doc title. Gets the signature gradient rule underneath,
          // a direct visual echo of the Aurora background component itself.
          h1: ({ children }) => (
            <div className="mb-6">
              <h1
                className="text-3xl font-bold tracking-tight text-white mb-2"
                style={{ fontFamily: 'var(--guide-mono)' }}
              >
                {children}
              </h1>
              <div
                className="h-[2px] w-24 rounded-full"
                style={{
                  background: `linear-gradient(90deg, ${AURORA_CYAN}, ${AURORA_VIOLET})`,
                }}
              />
            </div>
          ),

          // H2 — section headers get a small monospace eyebrow tag, like a
          // CLI flag (§ INSTALL). Encodes "this is a structured doc system,"
          // not decoration for its own sake.
          h2: ({ children }) => (
            <h2
              className="flex items-center gap-2 mt-10 mb-4 text-sm font-semibold uppercase tracking-wider"
              style={{ fontFamily: 'var(--guide-mono)', color: AURORA_CYAN }}
            >
              <span className="opacity-50">§</span>
              {children}
            </h2>
          ),

          h3: ({ children }) => (
            <h3 className="mt-6 mb-2 text-base font-semibold text-zinc-200">
              {children}
            </h3>
          ),

          p: ({ children }) => (
            <p className="break-words leading-relaxed text-zinc-300">{children}</p>
          ),

          // Horizontal rules become a faint gradient fade instead of a flat
          // grey line — small touch, ties back to the Aurora gradient motif
          // without competing with the H1 signature rule.
          hr: () => (
            <div
              className="my-8 h-px w-full"
              style={{
                background: `linear-gradient(90deg, transparent, ${AURORA_VIOLET}33, transparent)`,
              }}
            />
          ),

          // react-markdown v9+ no longer passes `inline` as a prop.
          // Detect inline vs block by checking the node itself: a fenced
          // block always carries a language className or an embedded newline.
          code: ({ node, className, children, ...props }) => {
            const isInline = node?.position
              ? node.tagName === 'code' && !className && !String(children).includes('\n')
              : true

            return isInline ? (
              <code
                className="px-1.5 py-0.5 rounded-md text-sm whitespace-pre-wrap break-words border"
                style={{
                  fontFamily: 'var(--guide-mono)',
                  backgroundColor: 'rgba(6, 182, 212, 0.08)',
                  borderColor: 'rgba(6, 182, 212, 0.25)',
                  color: '#67e8f9',
                }}
                {...props}
              >
                {children}
              </code>
            ) : (
              <code
                className={`${className || ''} block whitespace-pre text-sm`}
                style={{ fontFamily: 'var(--guide-mono)' }}
                {...props}
              >
                {children}
              </code>
            )
          },

          // Fenced code blocks get a small colored dot strip up top, like
          // terminal window chrome — reinforces "dev tool" without being a
          // literal skeuomorphic traffic-light cliché.
          pre: ({ children }) => (
            <div className="my-5 rounded-xl overflow-hidden border border-zinc-800 bg-[#0d0f1a]">
              <div className="flex items-center gap-1.5 px-4 py-2 border-b border-zinc-800/80 bg-black/30">
                <span className="w-2 h-2 rounded-full bg-zinc-700" />
                <span className="w-2 h-2 rounded-full bg-zinc-700" />
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: AURORA_CYAN }} />
              </div>
              <pre className="p-4 overflow-x-auto max-w-full text-sm leading-relaxed">
                {children}
              </pre>
            </div>
          ),

          table: ({ children }) => (
            <div className="w-full overflow-x-auto my-5 rounded-lg border border-zinc-800">
              <table className="w-full text-sm border-collapse">{children}</table>
            </div>
          ),

          thead: ({ children }) => (
            <thead className="bg-zinc-900/60">{children}</thead>
          ),

          th: ({ children }) => (
            <th
              className="text-left pb-2.5 pt-2.5 pr-4 pl-4 align-top whitespace-normal text-xs font-semibold uppercase tracking-wide border-b"
              style={{ fontFamily: 'var(--guide-mono)', color: AURORA_VIOLET, borderColor: 'rgba(139, 92, 246, 0.25)' }}
            >
              {children}
            </th>
          ),

          td: ({ children }) => (
            <td className="py-2.5 pr-4 pl-4 border-b border-zinc-800/50 align-top whitespace-normal break-words text-zinc-300">
              {children}
            </td>
          ),

          // Zebra striping via :nth-child would need raw CSS; instead give
          // every row a subtle hover lift so scanning a dense prop table
          // feels less flat without needing extra markup.
          tr: ({ children }) => (
            <tr className="transition-colors hover:bg-white/[0.02]">{children}</tr>
          ),

          li: ({ children }) => (
            <li className="text-zinc-300 marker:text-cyan-500/60">{children}</li>
          ),

          strong: ({ children }) => (
            <strong className="text-white font-semibold">{children}</strong>
          ),

          a: ({ children, href }) => (
            <a
              href={href}
              className="underline decoration-violet-500/40 hover:decoration-violet-400 transition-colors"
              style={{ color: AURORA_CYAN }}
              target="_blank"
              rel="noopener noreferrer"
            >
              {children}
            </a>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}