'use client'



import {CodeBlock , dracula } from 'react-code-blocks';
import {Source}  from '@/utils/Cards'



export default function FirstCode(){

        const code = Source.map((item) => item.code).join('\n')
        return( 

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