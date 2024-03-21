import { ContactShadows, RandomizedLight, SpotLight, Environment, OrbitControls, Cloud, Clouds, Sky, TransformControls, Stage, MeshReflectorMaterial, Stats } from "@react-three/drei"
import { useEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { randFloat, randFloatSpread } from "three/src/math/MathUtils";
import { useLoader, Canvas } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export const ModelPreview = (props) => {
    const ref = useRef();
    const { transformControlMode } = props;
    const gltf = useLoader(GLTFLoader, './models/scene.gltf')

    function Scene() {
        return <primitive object={gltf.scene} />
    }

    useEffect(() => { console.log(transformControlMode) }, [transformControlMode])

    return (
        <>
            <div className="wrapper flex">
                <div className="canvasWrapper" style={{ height: '100vh', width: '70vw' }}
                >
                    <Canvas className="canvasModelPreview"
                        shadows
                        camera={{ position: [50, 50, 120], fov: 30 }}
                        style={{ height: '100%', width: '100%' }}
                    >
                        <color attach="background" args={["#ffffff"]} />
                        <OrbitControls
                            makeDefault
                            maxAzimuthAngle={40}
                            minPolarAngle={0} maxPolarAngle={(Math.PI / 2.1)}
                        />
                        {/* <ambientLight intensity={.3} /> */}
                        {/* <directionalLight position={[4, 5, 6]} intensity={0.8} color={'#08f9b7'} /> */}
                        {/* <directionalLight position={[4, 5, 6]} intensity={0.8} color={'#931cff'} /> */}
                        {/* <Environment blur={4} preset="sunset" intensity={.7} /> */}
                        {/* <gridHelper args={[200, 200, 200]} opacity={.1} /> */}
                        {/* <fog attach="fog" args={["#213547", 10, 20]} /> */}

                        <Stage environment="city" intensity={0.6} castShadow={true}>
                            <Scene />
                        </Stage>
                        {/* <TransformControls mode={transformControlMode}>
                </TransformControls> */}

                        <mesh rotation={[-Math.PI / 2, 0, 0]} position-y={-1}>
                            <planeGeometry args={[170, 170]} />
                            <MeshReflectorMaterial
                                blur={[300, 100]}
                                resolution={2048}
                                mixBlur={1}
                                mixStrength={40}
                                roughness={1}
                                depthScale={2}
                                minDepthThreshold={0.4}
                                maxDepthThreshold={1.4}
                                color="#ffffff"
                            // metalness={0.5}
                            />
                        </mesh>
                        {/* <ContactShadows
                    width={100}
                    height={100}
                    far={100}
                    position={[0, 0, 0]} scale={[1, 1]} opacity={.8} /> */}

                        {/* <Sky distance={100} sunPosition={[0, 1, 0]} inclination={0} azimuth={0.25} /> */}
                    </Canvas>
                </div>

                <div className="optionsWrapper bg-[#f8f8f8] w-[30vw] p-12">
                    <div className="content bg-[#ffffff] rounded-3xl h-full p-4 shadow-lg">
                        <h1 className="text-xl font-bold  text-[#18322f]">Pick your options</h1>
                        
                    </div>
                </div>
            </div>
            <Stats />

        </>
    );
}


export default ModelPreview