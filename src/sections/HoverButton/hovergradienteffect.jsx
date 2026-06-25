'use client'

import {useRef , useState } from 'react'


export default function Button2(){


    const[cursorPosition , setCursorPosition] = useState({x:0 , y:0})
    const[hoverOpacity , setHoverOpacity] = useState(0);
    const hoverButtonRef = useRef(null);




    const handleMouseMove = (event)=>{

        if(!hoverButtonRef.current) return;

    const rect = hoverButtonRef.current.getBoundingClientRect();


    setCursorPosition({

        x:event.clientX - rect.left,
        y:event.clientY- rect.top
    })
}


const handleMouseEnter = () => setHoverOpacity(1);
const handleMouseLeave = () => setHoverOpacity(0);



        return(

            
                <div className="flex items-center  justify-center bg-white rounded-2xl " style={{width:'30%' , height:'50%'}}>
                    <div 
                    ref={hoverButtonRef}
                    onMouseMove={handleMouseMove} 
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave} 

                    className="border-hsla relative flex w-fit cursor-pointer items-center gap-1  scrollbar-none overflow-hidden rounded-full bg-black px-10 py-5 text-xs uppercase text-white"
                        >

                    <div 
                    className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 "
                    style={{
                        opacity:hoverOpacity,
                        background: `radial-gradient(80px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #39ff14ff, transparent),
                        radial-gradient(150px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #39ff1466, transparent),
                        radial-gradient(300px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #39ff1422, #00000026)`,
                        mixBlendMode: 'screen'}} // ← makes the glow bloom against dark backgrounds
                    /> 
                    <p className="relative z-20">Hover me </p>

                    </div>
                </div>


        )
}







