import { ContactShadows, RandomizedLight, SpotLight, Environment, OrbitControls, Cloud, Clouds, Sky, TransformControls } from "@react-three/drei"
import { Island } from "./Island";
import { Cube } from "./Cube";
import { BrickCube } from "./BrickCube";
import { Tree3 } from "./Tree3";
import { Scenetest } from "./Scenetest";
import { Rails } from "./Rails";
import { useEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { randFloat, randFloatSpread } from "three/src/math/MathUtils";
import { TrainFront } from "./TrainFront";
import ButterFly from "./Butterfly";
import { Mountains } from "./Moutains";
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export const Experience = (props) => {
    const ref = useRef();
    const { transformControlMode } = props;
    const gltf = useLoader(GLTFLoader, './models/TrainFront.glb')

    function Scene() {
        return <primitive object={gltf.scene} />
      }

    useEffect(() => { console.log(transformControlMode) } ,[transformControlMode])
    
    return (
        <>
            <OrbitControls
            makeDefault
                maxAzimuthAngle={40}
                minPolarAngle={0} maxPolarAngle={(Math.PI / 2.1)}
            />
            <ambientLight intensity={.3} />
            <directionalLight position={[4, 5, 6]} intensity={0.8} color={'#08f9b7'} />
            <directionalLight position={[4, 5, 6]} intensity={0.8} color={'#931cff'} />
            <Environment blur={4} preset="sunset" intensity={.7} />
            <gridHelper args={[200, 200, 200]} opacity={.1} />


            <TransformControls mode={transformControlMode}>
                <Scene />
            </TransformControls>


            <ContactShadows
                width={100}
                height={100}
                far={100}
                position={[0, 0, 0]} scale={[1, 1]} opacity={.8} />

            <Sky distance={100} sunPosition={[0, 1, 0]} inclination={0} azimuth={0.25} />

         
        </>
    );
}