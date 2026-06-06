'use client'


import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function SpaceBoi(props) {
  const { nodes, materials } = useGLTF('/space_boi.glb')

  // Orbit refs - these rotate AROUND the center character
  const orbit1Ref = useRef(null)  // Left planet orbit
  const orbit2Ref = useRef(null)  // Right-top planet orbit
  const orbit3Ref = useRef(null)  // Right planet orbit
  const orbit4Ref = useRef(null)  // Left small planet orbit
  const orbit5Ref = useRef(null)  // Small sphere orbit

  useFrame(() => {
    // All orbit around Y axis = around the character
    if (orbit1Ref.current) orbit1Ref.current.rotation.y += 0.004
    if (orbit2Ref.current) orbit2Ref.current.rotation.y -= 0.003  // Opposite direction
    if (orbit3Ref.current) orbit3Ref.current.rotation.y += 0.005
    if (orbit4Ref.current) orbit4Ref.current.rotation.y -= 0.002
    if (orbit5Ref.current) orbit5Ref.current.rotation.y += 0.006
  })

  return (
    <group {...props} dispose={null} scale={0.01}>

      {/* ===== CENTER CHARACTER (Never moves) ===== */}
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh castShadow receiveShadow
          geometry={nodes.body_Material001_0.geometry}
          material={materials['Material.001']}
        />
        <mesh castShadow receiveShadow
          geometry={nodes.body_Material002_0.geometry}
          material={materials['Material.002']}
        />
      </group>

      {/* ===== PLANET 1 - Orbits around character ===== */}
      {/* Outer group rotates (orbit), inner group has planet offset */}
      <group ref={orbit1Ref}>
        <group position={[-357.404, 392.646, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={39.706}>
          <mesh castShadow receiveShadow
            geometry={nodes.Sphere002_Material001_0.geometry}
            material={materials['Material.001']}
          />
          <mesh castShadow receiveShadow
            geometry={nodes.Sphere002_Material002_0.geometry}
            material={materials['Material.002']}
          />
        </group>
        {/* Planet ring/companion sphere */}
        <mesh castShadow receiveShadow
          geometry={nodes.Sphere003_Material002_0.geometry}
          material={materials['Material.002']}
          position={[-357.404, 392.646, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={41.075}
        />
      </group>

      {/* ===== PLANET 2 - Orbits opposite direction ===== */}
      <group ref={orbit2Ref}>
        <group position={[199.634, 566.883, -221.001]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={39.706}>
          <mesh castShadow receiveShadow
            geometry={nodes.Sphere007_Material001_0.geometry}
            material={materials['Material.001']}
          />
          <mesh castShadow receiveShadow
            geometry={nodes.Sphere007_Material002_0.geometry}
            material={materials['Material.002']}
          />
        </group>
        <mesh castShadow receiveShadow
          geometry={nodes.Sphere008_Material002_0.geometry}
          material={materials['Material.002']}
          position={[199.634, 566.883, -221.001]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={41.075}
        />
      </group>

      {/* ===== PLANET 3 - Right planet with rings ===== */}
      <group ref={orbit3Ref}>
        <mesh castShadow receiveShadow
          geometry={nodes.Sphere_Material001_0.geometry}
          material={materials['Material.001']}
          position={[375.469, 427.948, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={62.402}
        />
        <mesh castShadow receiveShadow
          geometry={nodes.Sphere001_Material002_0.geometry}
          material={materials['Material.002']}
          position={[375.469, 427.948, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={60.324}
        />
        {/* Planet ring */}
        <mesh castShadow receiveShadow
          geometry={nodes.Sphere004_Material002_0.geometry}
          material={materials['Material.002']}
          position={[375.469, 427.948, 0]}
          rotation={[-0.688, 0, 0]}
          scale={[104.129, 81.609, 0]}
        />
      </group>

      {/* ===== PLANET 4 - Left small ===== */}
      <group ref={orbit4Ref}>
        <mesh castShadow receiveShadow
          geometry={nodes.Sphere005_Material001_0.geometry}
          material={materials['Material.001']}
          position={[-341.988, 460.196, -117.028]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={62.402}
        />
        <mesh castShadow receiveShadow
          geometry={nodes.Sphere006_Material002_0.geometry}
          material={materials['Material.002']}
          position={[-341.988, 460.196, -117.028]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={60.324}
        />
      </group>

      {/* ===== SMALL SPHERES - Fast orbit ===== */}
      <group ref={orbit5Ref}>
        <mesh castShadow receiveShadow
          geometry={nodes.Sphere009_Material002_0.geometry}
          material={materials['Material.002']}
          position={[507.522, 667.594, -214.475]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={16.881}
        />
        <mesh castShadow receiveShadow
          geometry={nodes.Sphere010_Material002_0.geometry}
          material={materials['Material.002']}
          position={[-287.442, 585.792, -311.857]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={16.881}
        />
        <mesh castShadow receiveShadow
          geometry={nodes.Sphere011_Material002_0.geometry}
          material={materials['Material.002']}
          position={[-553.462, 331.074, -379.067]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={11.437}
        />
      </group>

      {/* ===== WAVES (Static - never moves) ===== */}
      <mesh castShadow receiveShadow
        geometry={nodes.waves_Material002_0.geometry}
        material={materials['Material.002']}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 1.891]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes.waves1_Material002_0.geometry}
        material={materials['Material.002']}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 1.891]}
      />
      <mesh castShadow receiveShadow
        geometry={nodes.waves2_Material002_0.geometry}
        material={materials['Material.002']}
        position={[92.464, 15.529, 2.112]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 1.891]}
      />

      {/* ===== PARTICLES (Static) ===== */}
      <mesh castShadow receiveShadow
        geometry={nodes.particles_Material002_0.geometry}
        material={materials['Material.002']}
        position={[489.69, 793.811, 355.293]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={20.408}
      />

      {/* ===== GROUND ===== */}
     
    </group>
  )
}

useGLTF.preload('/space_boi.glb')
