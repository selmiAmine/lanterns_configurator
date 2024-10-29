/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Bounds, MeshRefractionMaterial, useBounds, useGLTF } from '@react-three/drei'
import { useCustomization } from '../../contexts/Customization';
import { useSnapshot } from 'valtio';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { RGBELoader } from 'three/examples/jsm/Addons.js';
import * as THREE from 'three';
import { useControls } from 'leva';
import TransitionMaterialFree from './TransitionMaterialFree';

export function RingShape1(props) {
    const { nodes, materials } = useGLTF('/models/rings/Ring1-variations.glb')

    const {
        ringColor,
        diamondColor,
        headerColor,
        selectedDiamond,
        selectedHeader,
        setCurrentItem,
        materialsImported,
        selectedMaterial
    } = useCustomization();

    // const configDiamond = useControls({
    //     bounces: { value: 3, min: 0, max: 8, step: 1 },
    //     aberrationStrength: { value: 0.01, min: 0, max: 0.1, step: 0.01 },
    //     ior: { value: 2.75, min: 0, max: 10 },
    //     fresnel: { value: 1, min: 0, max: 1 },
    //     color: 'white',
    //   })

    // const snap = useSnapshot(props.colors);

    const [hovered, setHovered] = useState(null);
    // const hexString = snap.Material_6; // Or dynamically from snap.Material_6

    const selectMaterial = () => {

        switch (selectedMaterial) {
            case 1:
                {
                    return materialsImported.gold
                    break;
                }
            case 2:

                {
                    return materialsImported.mat
                    break;
                }
            case 3:
                {
                    return materialsImported.AlienMetal
                    break;
                }
            case 4:
                {
                    return materialsImported.Wood
                    break;
                }

            default:
                break;
        }
    }

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

    const [colorMap, displacementMap, normalMap, roughnessMap, metallic, aoMap] = useLoader(TextureLoader, [
        '/textures/Metal046B_1K-JPG/Metal046B_1K-JPG_Color.jpg',
        '/textures/Metal046B_1K-JPG/Metal046B_1K-JPG_Displacement.jpg',
        '/textures/Metal046B_1K-JPG/Metal046B_1K-JPG_NormalDX.jpg',
        '/textures/Metal046B_1K-JPG/Metal046B_1K-JPG_Roughness.jpg',
        '/textures/Metal046B_1K-JPG/Metal046B_1K-JPG_Metalness.jpg',
        // '/textures/Metal046B_1K-JPG/alien-metal_ao.png',
    ])


    const texture = useLoader(RGBELoader, 'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr')

    const [diamondColor2, setDiamondColor2] = useState(new THREE.Color(0xd9effa).convertSRGBToLinear())

    const config = {
        bounces: 2.4,
        aberrationStrength: 0.03,
        ior: 2.4,
        fresnel: .8,
    }

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
                geometry={nodes.Circle.geometry}
                material={selectMaterial()}
                position={[0, 0.555, 0.001]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={50}
                // scale-x= {20}
                material-color={ringColor}
                name='circle'
            >
                {/* <meshStandardMaterial
                    // displacementScale={0.2}
                    // map={colorMapMat}
                    // displacementMap={displacementMapMat}
                    normalMap={normalMap}
                    roughnessMap={roughnessMap}
                    metalnessMap={metallic}
                // aoMap={aoMap}
                /> */}


                {/* Smooth material transition */}

                {/* <TransitionMaterialFree
                    roughness={0.25}
                    transitionColor={ringColor}
                    metalness={0.25}
                    transitionTime={0.4}
                    clearcoat={1}
                    clearcoatRoughness={0.05}
                /> */}


            </mesh>

            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Header_2.geometry}
                material={materials['R60.003']}
                position={[0, 0.886, 0.002]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={50}
                material-color={headerColor}
                visible={selectedHeader == 'Heading 2'}
                name='header'
            />

            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Diamond_1.geometry}
                material={materials['R30.002']}
                position={[-0.001, 0.909, -0.001]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={50}
                material-color={diamondColor}
                visible={selectedDiamond == 'Diamond 1'}
                name='diamond'

            >
                <MeshRefractionMaterial envMap={texture}
                    // {...configDiamond}
                    color={diamondColor} toneMapped={false} />

            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Diamond_2.geometry}
                material={materials['R30.003']}
                position={[0.001, 0.918, 0]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={50}
                material-color={diamondColor}
                visible={selectedDiamond == 'Diamond 2'}
                name='diamond'
            >
                <MeshRefractionMaterial envMap={texture}
                    // {...configDiamond}
                    color={diamondColor} toneMapped={false} />

            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Header_1.geometry}
                material={materials['R60.004']}
                position={[-0.001, 0.88, 0.001]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={50}
                // scale-x={20}
                material-color={headerColor}
                visible={selectedHeader == 'Heading 1'}
                name='header'

            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Header_3.geometry}
                material={materials['R70.005']}
                position={[-0.001, 0.883, 0.001]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={50}
                material-color={headerColor}
                visible={selectedHeader == 'Heading 3'}
                name='header'
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Diamond_3.geometry}
                material={materials['R60.005']}
                position={[0.001, 0.91, 0]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={50}
                material-color={diamondColor}
                visible={selectedDiamond == 'Diamond 3'}
                name='diamond'
            >
                <MeshRefractionMaterial envMap={texture}
                    // {...configDiamond}
                    color={diamondColor} toneMapped={false} />

            </mesh>
        </group>

    )
}

useGLTF.preload('/models/rings/Ring1-variations.glb')