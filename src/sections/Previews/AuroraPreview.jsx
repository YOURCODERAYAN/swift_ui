'use client'

import dynamic from 'next/dynamic'

const Together = dynamic(() => import('../Aurorabg/Together'), {
    ssr: false,
    loading: () => <div className="w-full h-full flex items-center justify-center text-white text-2xl">Loading...</div>
})

export default function AuroraPreview(){
    return <Together />
}
