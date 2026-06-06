'use client'

import {CodeBlock , dracula} from 'react-code-blocks'
import {Details1} from '@/utils/bg'


export  default function Second(){

    const main = Details1.map((item)=> item.code1).join('\n')




        return(
           <div className=" overflow-y-auto bg-black  rounded-2xl w-full" style={{height:'360px'}} >
                <CodeBlock 
            text={main}
            theme={dracula}
            language="javascript"
             showLineNumbers={true}
               />
           </div>
        )
}