/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import  { useLayoutEffect, useState } from 'react'
import { MeshRefractionMaterial, useGLTF } from '@react-three/drei'
import gsap from 'gsap'
import { useFrame, useLoader, useThree } from '@react-three/fiber'
import { useControls } from 'leva'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Bloom } from '@react-three/postprocessing'
import { BlurPass, Resizer, KernelSize, Resolution } from 'postprocessing'
import { RGBELoader } from 'three/examples/jsm/Addons.js'
import { Color } from 'three'
import * as THREE from 'three';
export function RingVariation2(props) {

    
  const t1 = gsap.timeline()
  const texture = useLoader(RGBELoader, 'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr')

  // const [diamondColor, setDiamondColor] = useState(new THREE.Color(0x39cffe).convertSRGBToLinear())
  const [diamondColor, setDiamondColor] = useState(new THREE.Color(0x39cffe).convertSRGBToLinear())
  const [diamondLerpValue, setDiamondLerpValue] = useState({ x: 0 })



  // setDiamondColor(new Color(0x39cffe).convertSRGBToLinear())

  const config = {
    bounces: 4,
    aberrationStrength: 0.03,
    ior: 2.5,
    fresnel: .8,
  }

  const diamondObjects = [
    'diamonds',
    'diamonds001',
    'diamonds002',
    'diamonds003',
    'diamonds004',
    'diamonds005',
]

let colorLerpValue = {x: 0}


  const { nodes, materials } = useGLTF('/models/ringVariation2.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.R7.geometry}
        material={materials.silver}
        position={[-0.156, 0.006, 1.87]}
        rotation={[-1.478, 0, 0]}
        scale={-22.639}
      />

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.R6.geometry}
        material={materials.gold}
        position={[-0.156, 0.006, 1.87]}
        rotation={[-1.478, 0, 0]}
        scale={-22.639}
      />


      <mesh
        castShadow
        receiveShadow
        geometry={nodes.R3.geometry}
        material={materials.Material_6}
        position={[-0.156, 0.006, 1.87]}
        rotation={[-1.478, 0, 0]}
        scale={-22.639}
      >
                            <MeshRefractionMaterial envMap={texture} {...config} color={diamondColor} toneMapped={false} />

      </mesh>
    </group>
  )
}

useGLTF.preload('/models/ringVariation2.glb')