'use client'


import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import SpaceBoi from '@/sections/Aurorabg/spaceboi'


export default function Showcase(){

        return(


         <div style={{ width: '100%', height: '100vh' }}>
      <Canvas  dpr={[1, 1.5]} shadows gl={{ antialias: true, alpha:true }}>

                       <fog attach="fog" args={['#0a0e27', 6, 35]} />

        {/* Camera - Locked to match your screenshot */}
        <PerspectiveCamera 
          makeDefault 
          position={[0, 7, 14]}
          fov={50}
          near={0.1}
          far={5000}
        />

        {/* Lighting */}
        <ambientLight intensity={1.5} />
        <directionalLight position={[5, 5, 5]} intensity={2} castShadow />
        <pointLight position={[-5, 3, 3]} intensity={1.5} color="#1e3a8a" />
        <pointLight position={[5, 3, -3]} intensity={1.5} color="#1e3a8a" />

        {/* Model */}
        <SpaceBoi scale={8} position={[0, 3, 0]} />

        
      </Canvas>
    </div>
          
        )
}
