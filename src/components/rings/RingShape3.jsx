/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useEffect, useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useCustomization } from '../../contexts/Customization'

export function RingShape3(props) {
  const { nodes, materials } = useGLTF('/models/rings/Ring3-variations.glb')


  const {
    ringColorShape3,
    diamondColorShape3,
    headerColorShape3,
    selectedDiamondShape3,
    selectedHeaderShape3,
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
        // console.log(e.object.material.name)
        // console.log(snap)
        // console.log(hexValue + '  ' + hexString + '  '+ snap.Material_6)

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
        props.updateCurrent(e.object.material.name);
      }}
      onPointerMissed={() => {
        props.updateCurrent(null);
      }}
      onClick={(e) => {
        e.stopPropagation()
        setCurrentItem(e.object.name)
        console.log(e.object.name)
      }}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cirlcle.geometry}
        material={materials.R3M50}
        position={[-0.001, 0.579, 0.001]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={50}
        visible={true}
        material-color={ringColorShape3}
        name='circle'
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Header1.geometry}
        material={materials.R3M40}
        position={[-0.001, 1.112, 0.001]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={50}
        visible={selectedHeaderShape3 == 'Heading 1'}
        material-color={headerColorShape3}
        name='header'
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Diamond1.geometry}
        material={materials.R3M10}
        position={[0.001, 1.137, 0.001]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={50}
        visible={selectedDiamondShape3 == 'Diamond 1'}
        material-color={diamondColorShape3}
        name='diamond'
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Diamond2.geometry}
        material={materials.R3M30}
        position={[0, 1.146, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={50}
        visible={selectedDiamondShape3 == 'Diamond 2'}
        material-color={diamondColorShape3}
        name='diamond'

      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Header2.geometry}
        material={materials.R3M60}
        position={[0, 1.107, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={50}
        visible={selectedHeaderShape3 == 'Heading 2'}
        material-color={headerColorShape3}
        name='header'
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Diamond3.geometry}
        material={materials['R3M30.001']}
        position={[0, 1.135, 0.001]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={50}
        visible={selectedDiamondShape3 == 'Diamond 3'}
        material-color={diamondColorShape3}
        name='diamond'
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Header3.geometry}
        material={materials.R3M90}
        position={[0, 1.113, 0.001]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={50}
        visible={selectedHeaderShape3 == 'Heading 3'}
        material-color={headerColorShape3}
        name='header'
      />
    </group>
  )
}

useGLTF.preload('/models/rings/Ring3-variations.glb')