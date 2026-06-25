'use client'

import {animateCardsDoc} from '@/Markdown/guides/card1.md'
import { GuideRenderer } from '@/GuideRenderer'

export default function GuidesTab3(){


            return(
                <div className= "p-6 bg-zinc-700 rounded-2xl w-full overflow-y-auto overflow-x-hidden">
                        <GuideRenderer content={animateCardsDoc} />
                </div>
            )
}