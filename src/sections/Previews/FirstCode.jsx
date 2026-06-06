'use client'

import Details from '@/utils/bg'
import { CodeBlock, dracula } from 'react-code-blocks'

export default function First() {
  // Convert array to STRING (join with newlines)
  const code = Details.map((item) => item.code).join('\n')

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