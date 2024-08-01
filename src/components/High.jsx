/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import React, { useRef } from 'react'
import { useLayoutEffect, useState } from 'react'
import { Decal, MeshRefractionMaterial, useGLTF, useTexture } from '@react-three/drei'
import gsap from 'gsap'
import { useFrame, useLoader, useThree } from '@react-three/fiber'
import { useControls } from 'leva'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Bloom } from '@react-three/postprocessing'
import { BlurPass, Resizer, KernelSize, Resolution } from 'postprocessing'
import { RGBELoader } from 'three/examples/jsm/Addons.js'
import { Color } from 'three'
import * as THREE from 'three';

// import React, { useRef } from 'react'
// import { useGLTF } from '@react-three/drei'

export function High(props) {

    const t1 = gsap.timeline()
    const texture = useLoader(RGBELoader, 'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr')

    // const [diamondColor, setDiamondColor] = useState(new THREE.Color(0x39cffe).convertSRGBToLinear())
    const [diamondColor, setDiamondColor] = useState(new THREE.Color(0xff4444).convertSRGBToLinear())
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

    let colorLerpValue = { x: 0 }
  const { nodes, materials } = useGLTF('/models/Upgraded.glb')
  return (
  


<group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.R7.geometry}
        material={materials.silver}
        position={[0.126, -34.883, 23.45]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={10000}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.R6.geometry}
        material={materials.gold}
        position={[0.138, 31.181, 23.554]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={10000}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.R3.geometry}
        material={materials.Material_6}
        position={[-0.067, 35.83, 22.982]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={10000}
      >

<MeshRefractionMaterial envMap={texture} {...config} color={diamondColor} toneMapped={true} />

      </mesh>
    </group>
  )
}

useGLTF.preload('/models/Upgraded.glb')