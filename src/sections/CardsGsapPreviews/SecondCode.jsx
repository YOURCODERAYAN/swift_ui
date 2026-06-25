'use client'

import {CodeBlock , dracula} from 'react-code-blocks';
import  {SecondSource} from '@/utils/Cards'
export default function SecondCode(){

    const code = SecondSource.map((item)=> item.main).join('\n');
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