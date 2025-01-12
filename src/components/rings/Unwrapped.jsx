/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useCustomization } from '../../contexts/Customization';

export function Unwrapped(props) {
  const { nodes, materials } = useGLTF('/models/rings/Unwrapped.glb')

  const {setMaterialsImported,materialsImported} = useCustomization()


  console.log(materialsImported)
    useEffect(() => {

        // setMaterialsImported(materials)

    }, []);

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle.geometry}
        material={materialsImported.AlienMetal}
        position={[0, 0.555, 0.001]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={50}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Header_2.geometry}
        material={materials['R60.003']}
        position={[0, 0.886, 0.002]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={50}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Diamond_1.geometry}
        material={materials['R30.002']}
        position={[-0.001, 0.909, -0.001]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={50}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Diamond_2.geometry}
        material={materials['R30.003']}
        position={[0.001, 0.918, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={50}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Header_1.geometry}
        material={materials['R60.004']}
        position={[-0.001, 0.88, 0.001]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={50}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Header_3.geometry}
        material={materials['R70.005']}
        position={[-0.001, 0.883, 0.001]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={50}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Diamond_3.geometry}
        material={materials['R60.005']}
        position={[0.001, 0.91, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={50}
      />
    </group>
  )
}

useGLTF.preload('/models/rings/Unwrapped.glb')