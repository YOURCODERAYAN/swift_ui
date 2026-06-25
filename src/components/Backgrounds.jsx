'use client'

import dynamic from 'next/dynamic'
import {useState} from 'react'
import {motion} from 'framer-motion'
import First from '@/sections/Previews/FirstCode'
import Second  from '@/sections/Previews/SecondCode'
import Third  from '@/sections/Previews/ThirdCode'
import Fourth from '@/sections/Previews/FourthCode'
import Library from '@/sections/Previews/library'
import Dependent from '@/sections/Previews/Dependent'
import Container from '@/sections/Parallax/container'
import Source from '@/sections/PrallaxPreviews/Source'
import  Guides from '@/sections/Previews/Guides'
import  GuidesTab from  '@/sections/PrallaxPreviews/ParallaxGuides'
import Prelims from '@/sections/PrallaxPreviews/Initial'
import { IoArrowRedoOutline } from "react-icons/io5"
import { FaReact } from "react-icons/fa6"
import { RiTailwindCssFill } from "react-icons/ri"
import { IoLogoJavascript } from "react-icons/io5"
import { SiFramer } from "react-icons/si"
import { SiThreedotjs } from "react-icons/si"

const AuroraPreview = dynamic(() => import('@/sections/Previews/AuroraPreview'), {
    ssr: false,
    loading: () => <div className="w-full h-full flex items-center justify-center text-white text-3xl">Loading...</div>
})


    const  AURORA_AMBER = '#FFBF00'
    const AURORA_CYAN =  '#06B6D4'




export default function Backgrounds(){
    const [activeTab , setActiveTab] = useState("First")


  




    return (
        <>

           <div className=" font-semibold mb-15 text-white/20 flex flex-row items-center gap-5 " style={{fontSize:'30px'}}> <span className="border-b" style={{borderBottomWidth: '4px'  ,  borderImage : `linear-gradient(90deg, ${AURORA_CYAN}, ${AURORA_AMBER}) 1` }}> Components / backgrounds </span>  <IoArrowRedoOutline   size={35}/></div>
        

      
            <div className="flex flex-col items-center overflow-y-auto overflow-x-hidden w-full" id="aurora">

                         <div className="flex flex-col gap-1 mb-8 ml-12">
                                     <div className=" heading-gradient flex items-start  py-2 gap-4 w-full   mb-3" id="first-button">  AURORA 3D BACKGROUND</div>
                                     <p className="text-2xl font-arial font-semibold text-zinc-300  ">"Gradient, starfield, and orbiting 3D planets — layered into one background that never sits still".</p>
                                     <div className="font-semibold text-zinc-300 text-xl font-arial flex flex-row items-center gap-2 ">Made With : <span className="flex flex-row gap-2 items-center bg-black/20  px-4 py-2 rounded-3xl"> <FaReact size={27} /> <IoLogoJavascript  size={27} /> <RiTailwindCssFill size={27} /> <SiFramer  size={27} />  <SiThreedotjs  size={27} />    </span></div>
                                 </div>

                <div className="bg-black p-10 rounded-3xl flex items-center " style={{width:'90%' , height:'120vh'}}>
                       <AuroraPreview />



                </div>

               






        

                <div className="flex flex-col items-start w-full ml-30 mt-20 ">
                     <div 
  className="font-semibold mb-5 text-zinc-600 bg-zinc-300 px-3 py-1.5 rounded-2xl inline-block"
  style={{
    boxShadow: `
      inset 0 2px 4px rgba(0,0,0,0.15),
      inset 0 -1px 1px rgba(255,255,255,0.5),
      inset 0 1px 1px rgba(0,0,0,0.05)
    `,
    border: '1px solid rgba(0,0,0,0.06)'
  }}
>
  Source Code
</div>
                    <h3 className='mb-3  ml-4 font-bold font-serif text-amber-300'>Install Dependencies</h3>
                    <div  style={{width:'90%'}}>
                        <Dependent />

                    </div>

                <div className="mt-7 ml-3 flex flex-row items-center gap-4">
                 <span className="text-amber-300 font-semibold "> Hold on Before Proceding to the next Step please download this asset in public folder / </span>  <span className="bg-zinc-300 text-zinc-900 px-3 py-2 rounded-3xl hover:bg-zinc-800 hover:text-zinc-300"><a href="/space_boi.glb" download="spaceboi.glb">Spaceboi.glb</a></span>
                </div>
                </div>



                      <div className="flex flex-col items-start w-full ml-30 mt-10 ">
                    <h3 className='mb-5 ml-4  font-bold font-serif text-amber-300'>src/lib/utils.js</h3>
                    <div  style={{width:'90%'}}>

                    <Library />
                    </div>
                </div>




                    <div className="flex flex-col items-start w-full ml-30 mt-10 ">
                    <h3 className='mb-5 ml-4 font-serif font-semibold text-amber-300'>src/components/</h3>
                    <div className="  flex flex-col items-center" style={{width:'90%' , height:'400px'}}>

                        <div className="flex  pl-4 py-2 gap-4 w-full rounded-l-2xl h-10 bg-black  ">
                            <button className = {`px-2  rounded-lg cursor-pointer ${activeTab === 'First' ? 'bg-zinc-400' :'bg-black'} `} onClick={()=> setActiveTab('First')}>
                                Aurora.jsx
                            </button >
                            <button className={`px-2  rounded-lg cursor-pointer ${activeTab === 'Second' ? 'bg-zinc-400' : 'bg-black'}`} onClick={()=> setActiveTab('Second')}>
                                Spaceboi.jsx
                            </button>
                            <button className={` px-2 cursor-pointer rounded-lg ${activeTab === 'Third' ? 'bg-zinc-400' : 'bg-black'}` } onClick={()=> setActiveTab('Third')}>
                                Scene.jsx
                            </button>
                            <button className={` px-2 rounded-lg cursor-pointer ${activeTab === 'Fourth' ? 'bg-zinc-400' : 'bg-black'}`} onClick={()=> setActiveTab('Fourth')}>
                                Layer.jsx
                            </button>
                        </div>
                            
                           { activeTab === 'First' && <First />}
                           { activeTab === 'Second' && <Second />}
                           {activeTab === 'Third' && <Third />}
                           {activeTab === 'Fourth' && <Fourth />}

                    </div>
                </div>



                       <div className="flex flex-col items-start ml-30 mt-10">
  <h3 className="mb-5 ml-4 font-semibold text-amber-300 font-semibold text-2xl">Guides for Usage</h3>

  <div className="flex flex-col w-[90%]">

    <div className="flex flex-shrink-0 pl-4 py-2 gap-4 w-full rounded-l-2xl min-h-10 bg-black">
      <button className="px-2 rounded-lg cursor-pointer bg-zinc-400">
        Guides
      </button>
    </div>

    <div className="w-full guide-scroll max-h-[500px] overflow-y-auto rounded-2xl">
      <Guides />
    </div>

  </div>
</div>



           







        {/* Parallax Background Code */}




           <div className="flex flex-col gap-1 mb-8 ml-12 mt-20">
                                     <div className=" heading-gradient flex items-start  py-2 gap-4 w-full   mb-3" id="first-button">  PARALLAX BACKGROUND</div>
                                     <p className="text-2xl font-arial font-semibold text-zinc-300  ">"Sky, mountains, and motion — layers that drift at their own speed as you scroll, building real depth from flat images."</p>
                                     <div className="font-semibold text-zinc-300 text-xl font-arial flex flex-row items-center gap-2 ">Made With : <span className="flex flex-row gap-2 items-center bg-black/20  px-4 py-2 rounded-3xl">   <FaReact  size={27} /> <RiTailwindCssFill  size={27} /> <IoLogoJavascript  size={27} /> <SiFramer size={27} />   </span></div>
                                 </div>




                <div className="bg-black   p-10 rounded-3xl flex  items-center " style={{width:'90%' , height:'120vh'}}>
                      

                <Container />

                </div>








                  <div className="flex flex-col items-start w-full ml-30 mt-20 ">
                     <div 
  className="font-semibold mb-5 text-zinc-600 bg-zinc-300 px-3 py-1.5 rounded-2xl inline-block"
  style={{
    boxShadow: `
      inset 0 2px 4px rgba(0,0,0,0.15),
      inset 0 -1px 1px rgba(255,255,255,0.5),
      inset 0 1px 1px rgba(0,0,0,0.05)
    `,
    border: '1px solid rgba(0,0,0,0.06)'
  }}
>
  Source Code
</div>
                    <h3 className='mb-3  ml-4 font-semibold font-serif text-amber-300' >Install Dependencies</h3>
                    <div  style={{width:'90%'}}>
                        <Prelims />

                    </div>
                </div>



                      <div className="flex flex-col items-start w-full ml-30 mt-10 ">
                    <h3 className='mb-5 ml-4  font-semibold font-serif text-amber-300'>src/lib/utils.js</h3>
                    <div  style={{width:'90%'}}>

                    <Library />
                    </div>
                </div>




                    <div className="flex flex-col items-start w-full ml-30 mt-10 ">
                    <h3 className='mb-5 ml-4 font-serif font-semibold text-amber-300 '>src/components/</h3>
                    <div className="  flex flex-col items-center" style={{width:'90%' , height:'400px'}}>

                        <div className="flex  pl-4 py-2 gap-4 w-full rounded-l-2xl h-10 bg-black  ">
                            <button className = "px-2  rounded-lg cursor-pointer bg-zinc-400">
                                Parallax.jsx
                            </button >
                           
                        </div>


                        <Source />
                            
                          
                          

                    </div>
                </div>




                    
                 <div className="flex flex-col items-start ml-30 mt-10">
  <h3 className="mb-5 ml-4 font-semibold font-serif text-amber-300 text-2xl">Guides for Usage</h3>

  <div className="flex flex-col w-[90%]">

    <div className="flex flex-shrink-0 pl-4 py-2 gap-4 w-full rounded-l-2xl min-h-10 bg-black">
      <button className="px-2 rounded-lg cursor-pointer bg-zinc-400">
        Guides
      </button>
    </div>

    <div className="w-full guide-scroll max-h-[500px] overflow-y-auto rounded-2xl">
      <GuidesTab />
    </div>

  </div>
</div>

                    

            </div>  





</>

    )
}








