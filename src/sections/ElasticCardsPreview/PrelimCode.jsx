'use client'

import {Source} from '@/utils/Cards2';
import {CodeBlock , dracula} from 'react-code-blocks';

export default function PrelimCode(){

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