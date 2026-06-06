'use client'

import {motion , useMotionTemplate , useMotionValue , animate} from 'framer-motion'
import {useEffect} from 'react'
import {Stars} from '@react-three/drei'
import {Canvas} from '@react-three/fiber'



const COLORS =[ "#06B6D4",
  "#2563EB",
  "#4F46E5",
  "#8B5CF6"];


export default function Aurora(){
const color = useMotionValue(COLORS[0]);

const backgroundImage = useMotionTemplate`radial-gradient(  125% 125% at 50% 100%,
  #020617 40%  ,${color})`;

    useEffect(
        ()=>{
    animate(color , COLORS ,{

        ease:'easeInOut',
        duration:10,
        repeat:Infinity,
        repeatType:'mirror' 
        

        })
        },
        []
    )

        return(
            <motion.section className="relative min-h-screen place-content-center overflow-hidden bg-gray-950 px-4 py-24 text-gray-200 " style={{backgroundImage}}>

           



            <div className="absolute inset-0 z-0 ">
                <Canvas>
                    <Stars   radius={100}
                        depth={60}
                        count={5000}
                        factor={2}
                        saturation={0}
                        fade
                        speed={0.8}/>


                  
                </Canvas>
            </div>
             </motion.section>
        )
}
