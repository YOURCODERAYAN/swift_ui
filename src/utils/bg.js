const Details = [
  {
    code: `'use client'

import { motion, useMotionTemplate, useMotionValue, animate } from 'framer-motion'
import { useEffect } from 'react'
import { Stars } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { cn } from '@/utils/cn'

const COLORS = ["#06B6D4", "#2563EB", "#4F46E5", "#8B5CF6"];

export default function Aurora({
  className = '',
  colors = COLORS,
  animationDuration = 10,
  starsCount = 5000,
  starsRadius = 100,
  starsDepth = 60,
  starsFactor = 2,
  starsSpeed = 0.8,
  children = null,
  ...props
}) {
  const color = useMotionValue(colors[0]);

  const backgroundImage = useMotionTemplate\`radial-gradient(125% 125% at 50% 100%, 
    #020617 40%, \${color})\`;

  useEffect(() => {
    animate(color, colors, {
      ease: 'easeInOut',
      duration: animationDuration,
      repeat: Infinity,
      repeatType: 'mirror'
    })
  }, [color, colors, animationDuration])

  return (
    <motion.section
      className={cn(
        "relative min-h-screen place-content-center overflow-hidden bg-gray-950 px-4 py-24 text-gray-200",
        className
      )}
      style={{
        backgroundImage,
        ...props.style
      }}
      {...props}
    >
      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars
            radius={starsRadius}
            depth={starsDepth}
            count={starsCount}
            factor={starsFactor}
            saturation={0}
            fade
            speed={starsSpeed}
          />
        </Canvas>
      </div>

      {children}
    </motion.section>
  )
}`
  }
]

export default Details;





export  const Details1 =[
    {

code1:`
'use client'

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function SpaceBoi(props) {
  const { nodes, materials } = useGLTF('/space_boi.glb')

  // Orbit refs - these rotate AROUND the center character
  const orbit1Ref = useRef(null) // Left planet orbit
  const orbit2Ref = useRef(null) // Right-top planet orbit
  const orbit3Ref = useRef(null) // Right planet orbit
  const orbit4Ref = useRef(null) // Left small planet orbit
  const orbit5Ref = useRef(null) // Small sphere orbit

  useFrame(() => {
    // All orbit around Y axis = around the character
    if (orbit1Ref.current) orbit1Ref.current.rotation.y += 0.004
    if (orbit2Ref.current) orbit2Ref.current.rotation.y -= 0.003 // Opposite direction
    if (orbit3Ref.current) orbit3Ref.current.rotation.y += 0.005
    if (orbit4Ref.current) orbit4Ref.current.rotation.y -= 0.002
    if (orbit5Ref.current) orbit5Ref.current.rotation.y += 0.006
  })

  return (
    <group {...props} dispose={null} scale={0.01}>
      {/* ===== CENTER CHARACTER (Never moves) ===== */}
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.body_Material001_0.geometry}
          material={materials['Material.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.body_Material002_0.geometry}
          material={materials['Material.002']}
        />
      </group>

      {/* ===== PLANET 1 - Orbits around character ===== */}
      {/* Outer group rotates (orbit), inner group has planet offset */}
      <group ref={orbit1Ref}>
        <group
          position={[-357.404, 392.646, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={39.706}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere002_Material001_0.geometry}
            material={materials['Material.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere002_Material002_0.geometry}
            material={materials['Material.002']}
          />
        </group>
        {/* Planet ring/companion sphere */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere003_Material002_0.geometry}
          material={materials['Material.002']}
          position={[-357.404, 392.646, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={41.075}
        />
      </group>

      {/* ===== PLANET 2 - Orbits opposite direction ===== */}
      <group ref={orbit2Ref}>
        <group
          position={[199.634, 566.883, -221.001]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={39.706}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere007_Material001_0.geometry}
            material={materials['Material.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere007_Material002_0.geometry}
            material={materials['Material.002']}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere008_Material002_0.geometry}
          material={materials['Material.002']}
          position={[199.634, 566.883, -221.001]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={41.075}
        />
      </group>

      {/* ===== PLANET 3 - Right planet with rings ===== */}
      <group ref={orbit3Ref}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere_Material001_0.geometry}
          material={materials['Material.001']}
          position={[375.469, 427.948, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={62.402}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere001_Material002_0.geometry}
          material={materials['Material.002']}
          position={[375.469, 427.948, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={60.324}
        />
        {/* Planet ring */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere004_Material002_0.geometry}
          material={materials['Material.002']}
          position={[375.469, 427.948, 0]}
          rotation={[-0.688, 0, 0]}
          scale={[104.129, 81.609, 0]}
        />
      </group>

      {/* ===== PLANET 4 - Left small ===== */}
      <group ref={orbit4Ref}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere005_Material001_0.geometry}
          material={materials['Material.001']}
          position={[-341.988, 460.196, -117.028]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={62.402}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere006_Material002_0.geometry}
          material={materials['Material.002']}
          position={[-341.988, 460.196, -117.028]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={60.324}
        />
      </group>

      {/* ===== SMALL SPHERES - Fast orbit ===== */}
      <group ref={orbit5Ref}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere009_Material002_0.geometry}
          material={materials['Material.002']}
          position={[507.522, 667.594, -214.475]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={16.881}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere010_Material002_0.geometry}
          material={materials['Material.002']}
          position={[-287.442, 585.792, -311.857]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={16.881}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere011_Material002_0.geometry}
          material={materials['Material.002']}
          position={[-553.462, 331.074, -379.067]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={11.437}
        />
      </group>

      {/* ===== WAVES (Static - never moves) ===== */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.waves_Material002_0.geometry}
        material={materials['Material.002']}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 1.891]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.waves1_Material002_0.geometry}
        material={materials['Material.002']}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 1.891]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.waves2_Material002_0.geometry}
        material={materials['Material.002']}
        position={[92.464, 15.529, 2.112]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 1.891]}
      />

      {/* ===== PARTICLES (Static) ===== */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.particles_Material002_0.geometry}
        material={materials['Material.002']}
        position={[489.69, 793.811, 355.293]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={20.408}
      />
    </group>
  )
}

useGLTF.preload('/space_boi.glb')
       
    `
    }



]



export const Details2 =[

{
   code2:`
   'use client'

import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import SpaceBoi from '@/sections/Aurorabg/spaceboi'

export default function Showcase({
  // Canvas settings
  dpr = [1, 1.5],
  canvasConfig = { antialias: true, alpha: true },
  
  // Fog settings
  fogColor = '#0a0e27',
  fogNear = 6,
  fogFar = 35,
  
  // Camera settings
  cameraPosition = [0, 7, 14],
  cameraFov = 50,
  cameraNear = 0.1,
  cameraFar = 5000,
  
  // Model settings
  modelScale = 8,
  modelPosition = [0, 3, 0],
  
  // Lighting settings
  ambientLightIntensity = 1.5,
  directionalLightPosition = [5, 5, 5],
  directionalLightIntensity = 2,
  pointLight1Position = [-5, 3, 3],
  pointLight1Intensity = 1.5,
  pointLight1Color = '#1e3a8a',
  pointLight2Position = [5, 3, -3],
  pointLight2Intensity = 1.5,
  pointLight2Color = '#1e3a8a',
  
  // Container styles
  containerClassName = '',
  containerStyle = {},
  
  ...props
}) {
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        ...containerStyle
      }}
      className={containerClassName}
      {...props}
    >
      <Canvas
        dpr={dpr}
        shadows
        gl={{ antialias: canvasConfig.antialias, alpha: canvasConfig.alpha }}
      >
        {/* Fog */}
        <fog attach="fog" args={[fogColor, fogNear, fogFar]} />

        {/* Camera - Locked to match your screenshot */}
        <PerspectiveCamera
          makeDefault
          position={cameraPosition}
          fov={cameraFov}
          near={cameraNear}
          far={cameraFar}
        />

        {/* Lighting */}
        <ambientLight intensity={ambientLightIntensity} />
        
        <directionalLight
          position={directionalLightPosition}
          intensity={directionalLightIntensity}
          castShadow
        />
        
        <pointLight
          position={pointLight1Position}
          intensity={pointLight1Intensity}
          color={pointLight1Color}
        />
        
        <pointLight
          position={pointLight2Position}
          intensity={pointLight2Intensity}
          color={pointLight2Color}
        />

        {/* Model */}
        <SpaceBoi scale={modelScale} position={modelPosition} />
      </Canvas>
    </div>
  )
}
   `
}



]


export const Details3 = [



   {

      code3:`
         'use client'

import { Suspense, lazy } from 'react'
import { cn } from '@/utils/cn'
import Aurora from './Aurora'

// Universal lazy loading - works in Next.js, Vite, and any React app
const Showcase = lazy(() => import('@/sections/Aurorabg/spacescene'))

// Loading fallback component
const LoadingFallback = ({
  className = '',
  children = 'Loading 3D...',
  ...props
}) => (
  <div className={cn('text-white', className)} {...props}>
    {children}
  </div>
)

export default function Together({
   children,  

  // Aurora props
  auroraClassName = '',
  auroraColors = undefined,
  auroraAnimationDuration = undefined,
  auroraStarsCount = undefined,
  auroraStarsRadius = undefined,
  auroraStarsDepth = undefined,
  auroraStarsFactor = undefined,
  auroraStarsSpeed = undefined,
  
  // Showcase props
  showcaseProps = {},
  
  // Loading fallback props
  loadingClassName = '',
  loadingChildren = 'Loading 3D...',
  loadingStyle = {},
  
  // Container props
  containerClassName = '',
  containerStyle = {},
  
  // Layer props
  auroraLayerClassName = '',
  auroraLayerStyle = {},
  showcaseLayerClassName = '',
  showcaseLayerStyle = {},
  
  ...props
}) {
  // Aurora configuration
  const auroraConfig = {
    className: auroraClassName,
    ...(auroraColors !== undefined && { colors: auroraColors }),
    ...(auroraAnimationDuration !== undefined && { animationDuration: auroraAnimationDuration }),
    ...(auroraStarsCount !== undefined && { starsCount: auroraStarsCount }),
    ...(auroraStarsRadius !== undefined && { starsRadius: auroraStarsRadius }),
    ...(auroraStarsDepth !== undefined && { starsDepth: auroraStarsDepth }),
    ...(auroraStarsFactor !== undefined && { starsFactor: auroraStarsFactor }),
    ...(auroraStarsSpeed !== undefined && { starsSpeed: auroraStarsSpeed }),
  }

  return (
    <div
      className={cn('object-center', containerClassName)}
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        zIndex: 0,
        ...containerStyle
      }}
      {...props}
    >
      {/* Aurora animated background layer */}
      <div
        className={cn('', auroraLayerClassName)}
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          ...auroraLayerStyle
        }}
      >
        <Aurora {...auroraConfig} />
      </div>

      {/* 3D Showcase layer */}
      <div
        className={cn('', showcaseLayerClassName)}
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 10,
          ...showcaseLayerStyle
        }}
      >
        <Suspense
          fallback={
            <LoadingFallback
              className={loadingClassName}
              style={loadingStyle}
            >
              {loadingChildren}
            </LoadingFallback>
          }
        >
          <Showcase {...showcaseProps} />
        </Suspense>
      </div>

      <div
      style={{
   position:'relative',
   zIndex:20,
   width:'100%',
   height:'100%',
    }}
   >

    {children}
    </div>
    </div>
  )
}
      
      `
   }
]



export const Utils = [

{
   main : `
import {clsx} from 'clsx';
import {twMerge} from 'tailwind-merge'
export function cn(...inputs){
   return twMerge(clsx(inputs))
}

   `
}
]




export const Dependencies = [

   
      {
        Depend : `
       npm install framer-motion three @react-three/fiber @react-three/drei clsx tailwind-merge 
        
        
        `
      }
]