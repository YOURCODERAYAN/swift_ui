'use client'

import {Dependent} from '@/utils/Cards'
import { CopyBlock, dracula } from 'react-code-blocks'

export default function Dependents() {
  // Convert array to string
  const guide = Dependent.map((item) => item.code).join('\n')

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