/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function BrickCube(props) {
  const { nodes, materials } = useGLTF("/models/Bricks_Red.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bricks_Red.geometry}
        material={materials.Blocks_Pixelart}
      />
    </group>
  );
}

useGLTF.preload("/models/Bricks_Red.gltf");