/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useState } from 'react'
import { MeshRefractionMaterial, useGLTF } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import { RGBELoader } from 'three/examples/jsm/Addons.js'
import { Color } from 'three'
import * as THREE from 'three';

export function FaceRing(props) {
  const { nodes, materials } = useGLTF('/models/ring-1.glb')
  const texture = useLoader(RGBELoader, 'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr')
  const config = {
    bounces: 4,
    aberrationStrength: 0.03,
    ior: 2.5,
    fresnel: .8,
  }
  const [diamondColor, setDiamondColor] = useState(new THREE.Color(0x39cffe).convertSRGBToLinear())

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ring_7.geometry}
        material={nodes.Ring_7.material}
      >
                    <MeshRefractionMaterial envMap={texture} {...config} color={diamondColor} toneMapped={false} />

        </mesh>
    </group>
  )
}

useGLTF.preload('/models/ring-1.glb')