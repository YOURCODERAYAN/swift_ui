'use client'


import {CodeBlock , dracula } from 'react-code-blocks';
import  {Css} from '@/utils/Cards'


export default function ThirdCode(){

    const code = Css.map((item)=> item.code).join('\n');

        return(
     <div className="bg-black overflow-y-auto rounded-2xl w-full" style={{ height: '360px' }}>
      <CodeBlock
        text={code}
        language="css"
        theme={dracula}
        showLineNumbers={true}
      />
    </div>


        )
}