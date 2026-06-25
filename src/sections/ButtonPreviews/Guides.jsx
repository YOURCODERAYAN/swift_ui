'use client'

import {magneticButtonDoc} from '@/Markdown/guides/Button.md'
import { GuideRenderer } from '@/GuideRenderer'

export default function GuidesTab(){


            return(
                <div className= "p-6 bg-zinc-700 rounded-2xl w-full overflow-y-auto overflow-x-hidden">
                        <GuideRenderer content={magneticButtonDoc} />
                </div>
            )
}