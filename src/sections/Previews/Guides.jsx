import {auroraDoc} from '@/Markdown/guides/auroraguide.md'
import { GuideRenderer } from '@/GuideRenderer'

export default function GuidesTab(){


            return(
                <div className= "p-6 bg-zinc-700 rounded-2xl w-full overflow-y-auto overflow-x-hidden   " >
                        <GuideRenderer content={auroraDoc} />
                </div>
            )
}