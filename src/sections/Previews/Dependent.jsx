'use client'

import { Dependencies } from '@/utils/bg'
import { CopyBlock, dracula } from 'react-code-blocks'

export default function Dependent() {
  // Convert array to string
  const guide = Dependencies.map((item) => item.Depend).join('\n')

  return (
    <div className="overflow-y-auto rounded-2xl w-full" style={{ height: '120px' }}>
      <CopyBlock 
        text={guide}
        language="javascript"
        theme={dracula}
        showLineNumbers={false}
      />
    </div>
  )
}