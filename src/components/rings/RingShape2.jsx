/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useEffect, useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useCustomization } from '../../contexts/Customization'

export function RingShape2(props) {
  const { nodes, materials } = useGLTF('/models/rings/Ring2-variations.glb')



  const {
    ringColorShape2,
    diamondColorShape2,
    headerColorShape2,
    selectedDiamondShape2,
    selectedHeaderShape2,
    setCurrentItem
  } = useCustomization()


  const [hovered, setHovered] = useState(null);
  // const hexString = snap.Material_6; // Or dynamically from snap.Material_6


  useEffect(() => {
    const cursor =
      `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M19.221 10.803 12 10V4a2 2 0 0 0-4 0v12l-3.031-1.212a2 2 0 0 0-2.64 1.225l-.113.34a.998.998 0 0 0 .309 1.084l5.197 4.332c.179.149.406.231.64.231H19a2 2 0 0 0 2-2v-7.21a2 2 0 0 0-1.779-1.987z"></path></svg>`;
    if (hovered) {
      document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(
        cursor
      )}'), auto`;
    }
    return () => (document.body.style.cursor = "auto");
  }, [hovered]);



  return (
    <group {...props} dispose={null}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(e.object.material.name);
      }}
      onPointerOut={(e) => {
        if (e.intersections.length === 0) {
          setHovered(null);
        }
      }}
      onPointerDown={(e) => {
        e.stopPropagation();
      }}
      onPointerMissed={() => {
      }}
      onClick={(e) => {
        e.stopPropagation()
        setCurrentItem(e.object.name)
      }}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.R2M7001.geometry}
        material={materials['R2M70.003']}
        position={[-0.001, 0.565, 0.002]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={50}
        material-color={ringColorShape2}
        visible={true}
        name="circle"
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.R2M3.geometry}
        material={materials['R2M30.002']}
        position={[0.001, 1.007, -0.001]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={50}
        material-color={diamondColorShape2}
        visible={selectedDiamondShape2 == 'Diamond 1'}
        name="diamond"
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.R2M3001.geometry}
        material={materials['R2M30.003']}
        position={[0.001, 0.999, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={50}
        material-color={diamondColorShape2}
        visible={selectedDiamondShape2 == 'Diamond 2'}
        name="diamond"
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.R2M6.geometry}
        material={materials['R2M60.002']}
        position={[-0.001, 0.97, 0.001]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={50}
        material-color={headerColorShape2}
        visible={selectedHeaderShape2 == "Heading 1"}
        name="header"
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.R2M6001.geometry}
        material={materials['R2M60.003']}
        position={[-0.001, 0.974, 0.001]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={50}
        material-color={headerColorShape2}
        visible={selectedHeaderShape2 == "Heading 2"}
        name="header"
      />
    </group>
  )
}

useGLTF.preload('/models/rings/Ring2-variations.glb')