'use client'
import {CodeBlock , dracula} from 'react-code-blocks'
import {ButtonInfo} from '@/utils/button'


export default function Initial(){


    const main  = ButtonInfo.map((item)=> item.code).join('\n')



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



        