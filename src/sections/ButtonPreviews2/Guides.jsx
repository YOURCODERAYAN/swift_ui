'use client'

import {glowButtonDoc} from '@/Markdown/guides/Button2.md'
import { GuideRenderer } from '@/GuideRenderer'

export default function GuidesTab2(){


            return(
                <div className= "p-6 bg-zinc-700 rounded-2xl w-full overflow-y-auto overflow-x-hidden">
                        <GuideRenderer content={glowButtonDoc} />
                </div>
            )
}