'use client'

import {CodeBlock , dracula} from 'react-code-blocks'
import {Details2} from '@/utils/bg'


export default function Third (){

    const scene = Details2.map((item)=> item.code2).join('\n')


        return(

        <div className=" overflow-y-auto  rounded-2xl w-full bg-black " style={{ height:'360px'}} >
                <CodeBlock 
            text={scene}
           language="javascript"
            theme={dracula}
            showLineNumbers={true}
               />
           </div>
        )
}