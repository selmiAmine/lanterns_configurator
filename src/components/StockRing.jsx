/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function StockRing(props) {
  const { nodes, materials } = useGLTF('/models/stockRing.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.R7.geometry}
        material={materials.sole}
        position={[0.002, -0.503, 0.309]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={141.089}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.R6.geometry}
        material={materials.mesh}
        position={[0.002, 0.429, 0.31]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={141.089}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.R3.geometry}
        material={materials['sole.001']}
        position={[-0.001, 0.495, 0.302]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={141.089}
      />
    </group>
  )
}

useGLTF.preload('/models/stockRing.glb')