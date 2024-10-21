/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'
import { useCustomization } from '../../contexts/Customization'

export function Ring1Unwrapped(props) {
    const { nodes, materials } = useGLTF('/models/rings/Ring1-v3.glb')


    const {setMaterialsImported} = useCustomization()


    useEffect(() => {
        console.log(materials)
        setMaterialsImported(materials)

    }, []);


    //   const [colorMap, displacementMap,normalMap, roughnessMap, metallic, aoMap] = useLoader(TextureLoader, [
    //     '/textures/alien-metal1-bl/alien-metal1-bl/alien-metal_albedo.png',
    //     '/textures/alien-metal1-bl/alien-metal1-bl/alien-metal_height.png',
    //     '/textures/alien-metal1-bl/alien-metal1-bl/alien-metal_normal-ogl.png',
    //     '/textures/alien-metal1-bl/alien-metal1-bl/alien-metal_roughness.png',
    //     '/textures/alien-metal1-bl/alien-metal1-bl/alien-metal_metallic.png',
    //     '/textures/alien-metal1-bl/alien-metal1-bl/alien-metal_ao.png',
    // ])

    const [colorMap, displacementMap, normalMap, roughnessMap, metallic, aoMap] = useLoader(TextureLoader, [
        '/textures/Metal046B_1K-JPG/Metal046B_1K-JPG_Color.jpg',
        '/textures/Metal046B_1K-JPG/Metal046B_1K-JPG_Displacement.jpg',
        '/textures/Metal046B_1K-JPG/Metal046B_1K-JPG_NormalDX.jpg',
        '/textures/Metal046B_1K-JPG/Metal046B_1K-JPG_Roughness.jpg',
        '/textures/Metal046B_1K-JPG/Metal046B_1K-JPG_Metalness.jpg',
        // '/textures/Metal046B_1K-JPG/alien-metal_ao.png',
    ])

    return (
        <group {...props} dispose={null}>
           
        </group>
    )
}

useGLTF.preload('/models/rings/Ring1-v2.glb')