'use client'
import {useState} from 'react'
import Button from '@/sections/HoverButton/hoverButton'
import Button2 from '@/sections/HoverButton/hovergradienteffect'
import After from '@/sections/ButtonPreviews/After'
import Initial from '@/sections/ButtonPreviews/Initial'
import Initial2 from '@/sections/ButtonPreviews2/initial'
import GuidesTab from '@/sections/ButtonPreviews/Guides'
import GuidesTab2 from '@/sections/ButtonPreviews2/Guides'
import { IoArrowRedoOutline } from "react-icons/io5"
import { FaSquareJs } from "react-icons/fa6"
import { FaCss } from "react-icons/fa6"
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";





const AURORA_CYAN = '#06B6D4'
const AURORA_VIOLET = '#8B5CF6'



export default function Buttons(){

    const [activeTab , setActiveTab] = useState("Initial")


  


        return(
           
        <>
            <div className=" font-semibold mb-15 text-white/20 flex flex-row items-center gap-5 " style={{fontSize:'30px'}}> <span className="border-b" style={{borderBottomWidth: '4px'  ,  borderImage : `linear-gradient(90deg, ${AURORA_CYAN}, ${AURORA_VIOLET}) 1` }}> Components / buttons </span>  <IoArrowRedoOutline   size={35}/></div>

                   
                     <div className=" flex flex-col items-center  rounded-2xl  w-full">

                        {/* This div is for like the naming purpose */}
                    <div className="flex flex-col gap-1 mb-8 ml-12">
                        <div className=" design-effect flex items-start  py-2 gap-4 w-full   mb-3" id="first-button">  A Hover Effect Button</div>
                        <p className="text-2xl font-arial font-semibold text-zinc-300  ">Shadow & light that follow your cursor across the button's surface depth, without a single line of animation library code.</p>
                        <div className="font-semibold text-zinc-300 text-xl font-arial flex flex-row items-center gap-2 ">Made With : <span className="flex flex-row gap-2 items-center bg-black/20  px-4 py-2 rounded-3xl">  <FaReact size={27}/>  <FaSquareJs  size={27}/>  <FaCss size={27} />   </span></div>
                    </div>
                        {/* This div is for the button preview */}
                        <div className=" bg-black   flex items-center justify-center rounded-2xl ml-8" style={{ width:'100%',height:'40vh'}} id="primary">
                            <Button />
                        </div>

            
                                       {/* This div is for intsalltion and code guides */}
 <div className="flex flex-col items-start w-full pl-8 mt-10 ">
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
                    <h3 className='mb-5 ml-4 font-serif font-semibold text-amber-300'>src/components/</h3>
                    <div className="  flex flex-col items-center " style={{width:'100%' , height:'400px'}}>

                        <div className="flex pl-4 py-2 gap-4 w-full rounded-l-2xl h-10 bg-black  ">
                            <button className = {`px-2  rounded-lg cursor-pointer ${activeTab === 'Initial' ? 'bg-zinc-400' :'bg-black'} `} onClick={()=> setActiveTab('Initial')}>
                                Initial.jsx
                          </button>
                          <button className={`px-2 rounded-lg cursor-pointer ${activeTab === 'After' ? 'bg-zinc-400' : 'bg-black'}`} onClick= { ()=>setActiveTab('After')}>
                                Initial.css
                          </button>
                        </div>
                        {activeTab === 'Initial' && <Initial />}
                        {activeTab === 'After' && <After />}
                            
                        

                    </div>
                </div>

            {/*This is for the Guides of the first button design */}
                
                                       <div className="flex flex-col items-start  ml-30 mt-10 mb-24">
                  <h3 className="mb-5 ml-4 font-serif font-semibold text-amber-300 text-2xl">Guides for Usage</h3>
                
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
                

                       

{/* Second hover button component */}

            <div className="flex flex-col gap-1 mb-8">
              <div className=" design-effect flex items-start  py-2 gap-4 w-full   mb-3" id="second-button">  A Glow Effect Button</div>
              <p className="text-2xl font-arial font-semibold text-zinc-300">A button with presence — tracks your cursor and responds with glow, shift, and shadow in real time</p>
              <div className='font-semibold text-zinc-300 text-xl font-arial flex flex-row items-center gap-2 '>Made With :  <span  className="flex flex-row gap-2 items-center  bg-black/20 px-4  py-2 rounded-3xl"> <FaReact size={27} /> <FaSquareJs size={27} /> <RiTailwindCssFill size={27} /></span></div>
            </div>

            
            <div className=" bg-black   flex items-center justify-center rounded-2xl ml-8 " style={{ width:'100%',height:'40vh'}} id="primary">
                            <Button2 />
                        </div>
                



                 <div className="flex flex-col items-start w-full pl-8 mt-10 ">
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
                    <h3 className='mb-5 ml-4 font-serif font-semibold text-amber-300'>src/components/</h3>
                    <div className="  flex flex-col items-center" style={{width:'100%' , height:'400px'}}>

                        <div className="flex pl-4 py-2 gap-4 w-full rounded-l-2xl h-10 bg-black  ">
                            <button className = "px-2  rounded-lg cursor-pointer bg-zinc-400">
                                GlowButton.jsx
                            </button >
                        </div>
                         <Initial2 />
                        
                            
                        

                    </div>
                </div>







                        <div className="flex flex-col items-start  ml-30 mt-10">
                  <h3 className="mb-5 ml-4 font-semibold font-serif text-amber-300 text-2xl">Guides for Usage</h3>
                
                  <div className="flex flex-col w-[90%]">
                
                    <div className="flex flex-shrink-0 pl-4 py-2 gap-4 w-full rounded-l-2xl min-h-10 bg-black">
                      <button className="px-2 rounded-lg cursor-pointer bg-zinc-400">
                        Guides
                      </button>
                    </div>
                
                    <div className="w-full guide-scroll max-h-[500px] overflow-y-auto rounded-2xl">
                     <GuidesTab2 />
                    </div>
                
                  </div>
                </div>





                      
            
            
            
            
            
            
            
            </div>

        </>

            
        )
}
