'use client'

import dynamic from 'next/dynamic'
import Aurora from './Aurora'


const Showcase = dynamic(() => import('@/sections/Aurorabg/spacescene'), {
    ssr: false,
    loading: () => <div className="text-white">Loading 3D...</div>
})

export default function Together(){
    return(
        <div  className ="object-center " style={{position:'relative' , width:'100%' , height:'100vh' , zIndex:0}}>
            {/* Aurora animated background layer */}
            <div style={{position:'absolute' , inset:0 , zIndex:0 }}>
                <Aurora/>
            </div>
            {/* 3D Showcase layer */}
            <div style={{position:'absolute' , inset:0 , zIndex:10}}>
                <Showcase/>
            </div>
        </div>
    )
}
