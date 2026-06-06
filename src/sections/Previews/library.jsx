'use client'

import {CodeBlock , dracula} from 'react-code-blocks'
import {Utils} from '@/utils/bg'



export default function Library (){

    const chunck = Utils.map((item)=> item.main).join('\n')



        return(
            <div className=" overflow-y-auto  rounded-2xl w-full  bg-black" style={{ height:'200px'}} >
                <CodeBlock 
            text={chunck}
           language="javascript"
            theme={dracula}
            showLineNumbers={true}
               />
           </div>

        )
}