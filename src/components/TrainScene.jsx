/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function TrainScene(props) {
  const { nodes, materials } = useGLTF("/models/trainScene.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[17.9, 0, 0]}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.RailwayTrack_Straight001_1.geometry}
            material={materials["Steel.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.RailwayTrack_Straight001_2.geometry}
            material={materials["Wood.001"]}
          />
        </group>
      </group>
      <group position={[35.9, 0, 0]}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.RailwayTrack_Straight002_1.geometry}
            material={materials["Steel.002"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.RailwayTrack_Straight002_2.geometry}
            material={materials["Wood.002"]}
          />
        </group>
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.RailwayTrack_Straight_1.geometry}
          material={materials.Steel}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.RailwayTrack_Straight_2.geometry}
          material={materials.Wood}
        />
      </group>
      <group
        position={[0.083, 0, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Train_1.geometry}
          material={materials.Black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Train_2.geometry}
          material={materials.Ventilation}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Train_3.geometry}
          material={materials.Main}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Train_4.geometry}
          material={materials.Windows}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Train_5.geometry}
          material={materials.DarkMain}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Train_6.geometry}
          material={materials.Grey}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Train_7.geometry}
          material={materials.DarkGrey}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Train_8.geometry}
          material={materials.Glass}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Train_9.geometry}
          material={materials.Lights}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wheels1.geometry}
        material={materials.Black}
        position={[-3.702, 0.227, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wheels2.geometry}
        material={materials.Black}
        position={[-2.262, 0.227, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wheels3.geometry}
        material={materials.Black}
        position={[2.345, 0.227, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wheels4.geometry}
        material={materials.Black}
        position={[3.785, 0.227, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
    </group>
  );
}

useGLTF.preload("/models/trainScene.glb");