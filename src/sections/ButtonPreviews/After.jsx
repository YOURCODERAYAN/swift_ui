'use client'
import {CodeBlock , dracula} from 'react-code-blocks'
import {Buttoncss} from '@/utils/button'


export default function Initial(){


    const main  = Buttoncss.map((item)=> item.css).join('\n')



        return(
 <div className="bg-black overflow-y-auto  rounded-2xl w-full" style={{ height: '360px' }}>
      <CodeBlock
        text={main} 
        language="javascript"
        theme={dracula}
        showLineNumbers={true}
      />
    </div>
  )
}



        