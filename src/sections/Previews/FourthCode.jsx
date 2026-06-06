'use client'

import {Details3} from '@/utils/bg'
import {CodeBlock , dracula} from 'react-code-blocks'

export default function Fourth(){


    const combine = Details3.map((item)=> item.code3).join('\n')

        return(

            <div className=" overflow-y-auto  rounded-2xl  w-full bg-black" style={{height:'360px'}} >
                <CodeBlock 
            text={combine}
           language="javascript"
            theme={dracula}
            showLineNumbers={true}
               />
           </div>

        )
}