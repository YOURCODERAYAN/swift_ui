'use client'

import {motion, useScroll, useSpring, useTransform} from 'framer-motion'
import { useRef } from 'react'

function Parallax(){
    const containerRef = useRef(null)
    const {scrollYProgress} = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    // Use scrollYProgress directly or with spring for smoother animation
    const x = useSpring(scrollYProgress, {
        damping: 20,
        mass: 1,
        
    });

    // Extend range to [0, 1] to cover full scroll range
    const mountain3Y = useTransform(x, [0, 1], ["0%", "50%"]);
    const planetsY = useTransform(x, [0, 1], ["0%", "-15%"]);
    const mountain2Y = useTransform(x, [0, 1], ["0%", "20%"]);
    const mountain1Y = useTransform(x, [0, 1], ["0%", "15%"]);

    return(
        <section ref={containerRef} className="relative z-20 w-full h-screen overflow-hidden">
            <div className="relative h-full">
                {/* BACKGROUND SKY */}
                <div
                    className="absolute inset-0 w-full h-full z-10"
                    style={{
                        backgroundImage: "url(/sky.jpg)",
                        backgroundPosition: "bottom",
                        backgroundSize: "cover"
                    }}
                />
                
                {/* MOUNTAIN Layer 3 */}
                <motion.div
                    className="absolute inset-0 z-10"
                    style={{
                        backgroundImage: "url(/mountain-3.png)",
                        backgroundPosition: "bottom",
                        backgroundSize: "cover",
                        y: mountain3Y
                    }}
                />
                
                {/* Planets */}
                <motion.div
                    className="absolute inset-0 z-20"
                    style={{
                        backgroundImage: "url(/planets.png)",
                        backgroundPosition: "bottom",
                        backgroundSize: "cover",
                        y: planetsY
                    }}
                />
                
                {/* MOUNTAIN Layer 2 */}
                <motion.div
                    className="absolute inset-0 z-30"
                    style={{
                        backgroundImage: "url(/mountain-2.png)",
                        backgroundPosition: "bottom",
                        backgroundSize: "cover",
                        y: mountain2Y
                    }}
                />
                
                {/* MOUNTAIN Layer 1 */}
                <motion.div
                    className="absolute inset-0 z-40"
                    style={{
                        backgroundImage: "url(/mountain-1.png)",
                        backgroundPosition: "bottom",
                        backgroundSize: "cover",
                        y: mountain1Y
                    }}
                />
            </div>
        </section>
    )
}

export default Parallax