'use client'
import  {Second} from '@/utils/bg2'
import { CodeBlock, dracula } from 'react-code-blocks'

export default function Source() {
  // Convert array to STRING (join with newlines)
  const code = Second.map((item) => item.source).join('\n')

  return (
    <div className="bg-black overflow-y-auto rounded-2xl w-full" style={{ height: '360px' }}>
      <CodeBlock
        text={code}
        language="javascript"
        theme={dracula}
        showLineNumbers={true}
      />
    </div>
  )
}