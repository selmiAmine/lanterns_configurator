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

export function RingVariation4(props) {



    const t1 = gsap.timeline()
    const texture = useLoader(RGBELoader, 'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr')

    // const [diamondColor, setDiamondColor] = useState(new THREE.Color(0x39cffe).convertSRGBToLinear())
    const [diamondColor, setDiamondColor] = useState(new THREE.Color(0x39cffe).convertSRGBToLinear())
    const [diamondLerpValue, setDiamondLerpValue] = useState({ x: 0 })



    // setDiamondColor(new Color(0x39cffe).convertSRGBToLinear())

    const config = {
        bounces: 8,
        aberrationStrength: 0.001,
        ior: 1.5,
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


    const texture2 = useTexture('/logo.png')

    const { nodes, materials } = useGLTF('/models/ringVariation4.glb')
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.R7.geometry}
                material={materials.silver}
                position={[-0.001, 0.105, -0.088]}
                rotation={[Math.PI / 2, 0, -Math.PI]}
                scale={87.433}
            >
                {/* <meshStandardMaterial color={'hotpink'} /> */}

                {/* <Decal position={[2, 2, 0.5]} scale={2} map={texture2} /> */}

            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.R6.geometry}
                material={materials['gold.001']}
                position={[-0.001, 0.682, -0.089]}
                rotation={[Math.PI / 2, 0, -Math.PI]}
                scale={87.433}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.R3.geometry}
                material={materials.Material_6}
                position={[0.001, 0.723, -0.084]}
                rotation={[Math.PI / 2, 0, -Math.PI]}
                scale={87.433}
            >
                <MeshRefractionMaterial envMap={texture} {...config} color={diamondColor} toneMapped={true} />
            </mesh>
        </group>
    )
}

useGLTF.preload('/models/ringVariation4.glb')
