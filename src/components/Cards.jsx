'use client'

import AnimateCards from "@/sections/CardsGsap/AnimateCards"
import StackedCards from '@/sections/ElasticCards/StackedCard'
import  FirstCode from '@/sections/CardsGsapPreviews/FirstCode'
import SecondCode from '@/sections/CardsGsapPreviews/SecondCode'
import ThirdCode from '@/sections/CardsGsapPreviews/ThirdCode'
import Dependents  from '@/sections/CardsGsapPreviews/FourthCode'
import PrelimCode  from  '@/sections/ElasticCardsPreview/PrelimCode'
import SecondaryCode from '@/sections/ElasticCardsPreview/SecondaryCode'
import  GuidesTab3 from '@/sections/CardsGsapPreviews/CardGuides'
import GuidesTab4 from '@/sections/ElasticCardsPreview/ElasticCards'
import { IoArrowRedoOutline } from "react-icons/io5"
import { FaReact } from "react-icons/fa6"
import { RiTailwindCssFill } from "react-icons/ri"
import { FaCss } from "react-icons/fa6" 
import { SiGsap } from "react-icons/si"
import { IoLogoJavascript } from "react-icons/io5"


import {useState} from 'react'

export default function Cards() {                                                                                                                                                                                                                                                    

    const[activeTab , setActiveTab] = useState('FirstCode')
    const[currentTab , setCurrentTab] = useState('PrelimCode')



const AURORA_CYAN = '#06B6D4'
const AURORA_GREEN = '#6AFF00'





  return (
    <>
     <div className=" font-semibold mb-15 text-white/20 flex flex-row items-center gap-5 " style={{fontSize:'30px'}}> <span className="border-b" style={{borderBottomWidth: '4px'  ,  borderImage : `linear-gradient(90deg, ${AURORA_CYAN}, ${AURORA_GREEN}) 1` }}> Components / Cards </span>  <IoArrowRedoOutline   size={35}/></div>

    <div className="flex flex-col items-center overflow-y-auto overflow-x-hidden w-full">
   <div className="flex flex-col gap-1 mb-8 ml-12">
                          <div className=" heading-design flex items-start  py-2 gap-4 w-full   mb-3" id="first-button">  A  SPREAD & FLIP CARD </div>
                          <p className="text-2xl font-arial font-semibold text-zinc-300  ">A stack that spreads, rotates, and flips on cue — scroll-pinned choreography for four cards, timed to the pixel."</p>
                          <div className="font-semibold text-zinc-300 text-xl font-arial flex flex-row items-center gap-2 ">Made With : <span className="flex flex-row gap-2 items-center bg-black/20  px-4 py-2 rounded-3xl"> <FaReact size={27} /> <IoLogoJavascript  size={27} />  <RiTailwindCssFill size={27} /> <SiGsap  size={27} />   </span></div>
                      </div>

    
        <div
          className="bg-black relative mx-auto rounded-2xl"
          style={{
            width: '96%',
            height: 'min(90vh, 800px)',
            overflowY: 'auto',
            overflowX: 'hidden',
            boxSizing: 'border-box',
            scrollBehavior: 'smooth',
          }}
        >
          <AnimateCards />
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
                                     <h3 className='mb-3  ml-4 font-serif font-semibold text-amber-300'>Install Dependencies</h3>
                                     <div  style={{width:'90%'}}>
                                         
                                        <Dependents />
                                     </div>
                                 </div>
                 
                 
                 
                                    
                 
            <div className="flex flex-col items-start w-full ml-30 mt-15 ">
         <h3 className='mb-5 ml-4 font-semibold font-serif text-amber-300 '>src/components/</h3>   
                              <div className="  flex flex-col items-center" style={{width:'90%' , height:'400px'}}>
                 
                                     <div className="flex  pl-4 py-2 gap-4 w-full rounded-l-2xl h-10 bg-black  ">
                                          <button className = {`px-2  rounded-lg cursor-pointer ${activeTab === 'FirstCode' ? 'bg-zinc-400' :'bg-black'} `} onClick={()=> setActiveTab('FirstCode')}>
                                               AnimateCards.jsx
                                            </button >
                                            <button className={`px-2  rounded-lg cursor-pointer ${activeTab === 'SecondCode' ? 'bg-zinc-400' : 'bg-black'}`} onClick={()=> setActiveTab('SecondCode')}>
                                                 CardMain.jsx
                                            </button>
                                            <button className={` px-2 cursor-pointer rounded-lg ${activeTab === 'ThirdCode' ? 'bg-zinc-400' : 'bg-black'}` } onClick={()=> setActiveTab('ThirdCode')}>
                                                 Card.css
                                            </button>
                                            
                                    </div>
                                             
                                            { activeTab === 'FirstCode' && <FirstCode/>}
                                            { activeTab === 'SecondCode' && <SecondCode />}
                                            {activeTab === 'ThirdCode' && <ThirdCode />}
                 
                                     </div>
                                 </div>
                 
                 
                 
 <div className="flex flex-col items-start  ml-30 mt-10 mb-24">
                  <h3 className="mb-5 ml-4 font-serif font-semibold text-amber-300 text-2xl">Guides for Usage</h3>
                
                  <div className="flex flex-col w-[90%]">
                
                    <div className="flex flex-shrink-0 pl-4 py-2 gap-4 w-full rounded-l-2xl min-h-10 bg-black">
                      <button className="px-2 rounded-lg cursor-pointer bg-zinc-400">
                        Guides
                      </button>
                    </div>
                
                    <div className="w-full guide-scroll max-h-[500px] overflow-y-auto rounded-2xl">
                     <GuidesTab3 />
                    </div>
                
                  </div>
                </div>
                 




















   <div className="flex flex-col gap-1 mb-8 ml-12">
                          <div className=" heading-design flex items-start  py-2 gap-4 w-full   mb-3" id="first-button">  A  ELASTIC  CARD </div>
                          <p className="text-2xl font-arial font-semibold text-zinc-300  ">A card stack with real weight — push it with your cursor and watch the whole pile ripple, settle, and bounce back.</p>
                          <div className="font-semibold text-zinc-300 text-xl font-arial flex flex-row items-center gap-2 ">Made With : <span className="flex flex-row gap-2 items-center bg-black/20  px-4 py-2 rounded-3xl">  <FaReact size={27} />  <IoLogoJavascript  size={27} /> <FaCss  size={27}/> <SiGsap  size={27} />  </span></div>
                      </div>

    
        <div
          className="bg-black relative mx-auto rounded-2xl"
          style={{
            width: '96%',
            height: 'min(90vh, 800px)',
            overflowY: 'auto',
            overflowX: 'hidden',
            boxSizing: 'border-box',
            scrollBehavior: 'smooth',
          }}
        >

              <StackedCards />

        </div>




            <div className="flex flex-col items-start w-full ml-30 mt-15 ">
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
                              <div className="  flex flex-col items-center" style={{width:'90%' , height:'400px'}}>
                 
                                     <div className="flex  pl-4 py-2 gap-4 w-full rounded-l-2xl h-10 bg-black  ">
                                          <button className = {`px-2  rounded-lg cursor-pointer ${currentTab === 'PrelimCode' ? 'bg-zinc-400' :'bg-black'} `} onClick={()=> setCurrentTab('PrelimCode')}>
                                               ElasticCards.jsx
                                            </button >
                                            <button className={`px-2  rounded-lg cursor-pointer ${currentTab === 'SecondaryCode' ? 'bg-zinc-400' : 'bg-black'}`} onClick={()=> setCurrentTab('SecondaryCode')}>
                                                 CardMain.css
                                            </button>
                                          
                                            
                                    </div>
                                             
                                            { currentTab === 'PrelimCode' && <PrelimCode/>}
                                            { currentTab === 'SecondaryCode' && <SecondaryCode />}
                                            
                 
                                     </div>
                                 </div>



 <div className="flex flex-col items-start  ml-30 mt-10 mb-24">
                  <h3 className="mb-5 ml-4 font-serif font-semibold text-amber-300 text-2xl">Guides for Usage</h3>
                
                  <div className="flex flex-col w-[90%]">
                
                    <div className="flex flex-shrink-0 pl-4 py-2 gap-4 w-full rounded-l-2xl min-h-10 bg-black">
                      <button className="px-2 rounded-lg cursor-pointer bg-zinc-400">
                        Guides
                      </button>
                    </div>
                
                    <div className="w-full guide-scroll max-h-[500px] overflow-y-auto rounded-2xl">
                     <GuidesTab4 />
                    </div>
                
                  </div>
                </div>





















     
    </div>
    </>
  )
}