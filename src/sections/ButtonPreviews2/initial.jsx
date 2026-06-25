import {CodeBlock , dracula} from 'react-code-blocks'
import  {Button2} from '@/utils/button2'

export default function Initial2(){

        const main = Button2.map((item)=> item.main).join('\n')

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