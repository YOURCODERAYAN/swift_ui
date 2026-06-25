'use client'

import { Dependencies } from '@/utils/bg2'
import { CopyBlock, dracula } from 'react-code-blocks'

export default function  Prelims() {
  // Convert array to string
  const guide = Dependencies.map((item) => item.Depend).join('\n')

  return (
    <div className=" rounded-2xl w-full" style={{ height: '120px' }}>
      <CopyBlock 
        text={guide}
        language="javascript"
        theme={dracula}
        showLineNumbers={false}
      />
    </div>
  )
}