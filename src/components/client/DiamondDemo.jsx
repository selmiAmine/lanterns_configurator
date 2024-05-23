import { ContactShadows, RandomizedLight, SpotLight, Environment, OrbitControls, Cloud, Clouds, Sky, TransformControls, Stage, MeshReflectorMaterial, Stats, AccumulativeShadows, Caustics, MeshTransmissionMaterial, Loader } from "@react-three/drei"
import { Suspense, useEffect, useLayoutEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { randFloat, randFloatSpread } from "three/src/math/MathUtils";
import { useLoader, Canvas } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import Chair from "../Chair";
import { ConfiguratorSetting } from "../ConfiguratorSetting";
import { CustomizationProvider } from "../../contexts/Customization";
import { Ring } from "../Ring";
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SpeakerWaveIcon, BeakerIcon } from '@heroicons/react/24/solid'
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import CustomerLoader from "./CustomerLoader";
import { FaceRing } from "../FaceRing";

gsap.registerPlugin(ScrollTrigger)

export const DiamondDemo = (props) => {

    const ref = useRef();
    const { transformControlMode } = props;
    const gltf = useLoader(GLTFLoader, './models/scene.gltf')
    function Scene() {
        return <primitive object={gltf.scene} />
    }
    // useEffect(() => { console.log(transformControlMode) }, [transformControlMode])
    return (
        <>

            <CustomerLoader className="z-[99] absolute h-screen w-screen"/>
            <div className="wrapper heroSection overflow-hidden">
                <div className="h-screen w-full z-10 fixed top-0 canvasWrapper bg-gradient-to-r from-[#F4F4F8] bg-[#E6E6EA] ">

                    <Canvas className="canvasModelPreview"
                        shadows
                        camera={{ position: [50, 50, 120], fov: 30 }}
                        style={{ height: '100%', width: '100%' }}
                    >
                        {/* <color attach="background" args={["#000000"]} /> */}
                        <OrbitControls
                            enableZoom={false}
                            makeDefault
                            maxAzimuthAngle={40}
                            minPolarAngle={0} maxPolarAngle={(Math.PI / 2.1)}
                        />
                        {/* <ambientLight intensity={.3} /> */}
                        {/* <directionalLight position={[4, 5, 6]} intensity={0.8} color={'#08f9b7'} /> */}
                        {/* <directionalLight position={[4, 5, 6]} intensity={0.8} color={'#931cff'} /> */}
                        {/* <Environment blur={4} files="./autumn_field_2k.hdr" intensity={.6} castShadow={true} /> */}

                        {/* <gridHelper args={[200, 200, 200]} opacity={.1} /> */}
                        {/* <fog attach="fog" args={["#213547", 10, 20]} /> */}

                        {/* <Stage environment="city" intensity={0.6} castShadow={true}> */}
                        {/* <Scene /> */}

                        {/* </Stage> */}
                        {/* <TransformControls mode={transformControlMode}>
                </TransformControls> */}

                        {/* <mesh rotation={[-Math.PI / 2, 0, 0]} position-y={-3}>
                            <planeGeometry args={[10, 10]} />
                            <MeshReflectorMaterial
                                blur={[300, 100]}
                                resolution={2048}
                                mixBlur={1}
                                mixStrength={40}
                                roughness={1}
                                depthScale={2}
                                minDepthThreshold={0.4}
                                maxDepthThreshold={1.4}
                                color="#fffeb1"
                            // metalness={0.5}
                            />
                        </mesh> */}
                        {/* <ContactShadows
                    width={100}
                    height={100}
                    far={100}
                    position={[0, 0, 0]} scale={[1, 1]} opacity={.8} /> */}

                        {/* <Sky distance={100} sunPosition={[0, 1, 0]} inclination={0} azimuth={0.25} /> */}


                        <Suspense fallback={null}>
                            {/* <FaceRing scale={400} /> */}
                            <Ring/>
                            <AccumulativeShadows temporal frames={30} color="#FED766" colorBlend={8} toneMapped={true} alphaTest={1} opacity={1} scale={20} position={[0, -1.1, 0]} rotation={[0, 4, 0]} >
                                <RandomizedLight amount={8} radius={10} ambient={0.5} intensity={1} position={[5, 5, -10]} bias={0.001} />
                            </AccumulativeShadows>
                        </Suspense>


                        <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr" />
                        <EffectComposer>
                            <Bloom luminanceThreshold={1} intensity={1} levels={0.2} mipmapBlur />
                        </EffectComposer>
                        <Stats />
                    </Canvas>
                    <Loader />

                </div>

                {/* Header */}
                <div className="headerWrapper w-full flex justify-between items-center absolute z-[99]">
                    <div className="navbar max-w-5xl flex justify-between items-center z-[99] mx-auto mt-4 p-4 w-full ">
                        <div className="flex justify-center">
                            <span>
                                {/* LANTERNS STUDIO */}
                                <img className="w-28" src="./logo.png" alt="" />
                            </span>
                        </div>
                        <ul className="navbarContent  font-Ubuntu flex gap-20 text-[#202426] items-center">
                            <li >Know more</li>
                            <li ><SpeakerWaveIcon className="size-4 " /> </li>
                        </ul>
                    </div>
                </div>

                {/* Hero */}
                <section className="h-screen z-50 first-section " >
                    <div className="wrapperContent z-50 absolute flex w-full">
                        <div className="leftSide w-1/2 "></div>
                        <div className="righttSide w-1/2 h-screen flex items-center text-[#202426]">
                            <div className="rightSideContent text-right ">
                                <div className="heading font-Ubuntu right-0 z-50 text-8xl font-bold ">
                                    UNIQUE
                                </div>
                                <div className="heading font-Ubuntu right-0 z-50 text-8xl font-bold ">
                                    JEWELRY
                                </div>
                                <p className="paragraph  font-Ubuntu font-thin text-sm">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, est!
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* About */}
                <section className="h-screen z-50 second-section" >
                    <div className="wrapperContentAboutUs z-50 absolute flex w-full">
                        <div className="righttSideAboutUs  w-1/2 h-screen flex items-center pl-60">
                            <div className="rightSideContentAboutUs w-full flex flex-col text-[#202426]">
                                <div className="heading font-Ubuntu left-0 z-50 text-base font-bold underline underline-offset-4">
                                    created to last
                                </div>
                                <div className="heading font-Ubuntu left-0 z-50 text-8xl font-bold ">
                                    FOREVER
                                </div>
                                <p className="paragraph font-Ubuntu font-thin text-sm">
                                    Customize your unique ring with graphic angles and pure lines that combine to create the pure beauty of the collection.
                                </p>
                            </div>
                        </div>
                        <div className="leftSide w-1/2 "></div>
                    </div>
                </section>

                {/* Customizer */}
                {/* <section className="h-screen z-50 third-section" >
                    <div className="wrapperContentCustomizer z-50 absolute flex w-full">
                        <div className="buttonWrapper w-full h-screen flex items-center pb-20 justify-center">
                            <div className="buttonWrapperContent font-bold text-2xl bg-black/60 text-white py-4 px-12 rounded-lg">
                                Customize
                            </div>

                        </div>
                    </div>
                </section> */}
                <section className="h-screen z-50 third-section" >
                    <div className="wrapperContent z-50 absolute flex w-full">
                        <div className="leftSide w-1/2 "></div>
                        <div className="righttSide  w-1/2 h-screen flex items-center text-[#202426]">
                            <div className="rightSideContentCustomizer text-right">
                                <div className="heading font-Ubuntu left-0 z-50 text-base font-bold underline underline-offset-4">
                                    feel free to explore our
                                </div>
                                <div className="heading font-Ubuntu left-0 z-50 text-8xl font-bold ">
                                    CUSTOMIZER
                                </div>
                                {/* <div className="heading right-0 z-50 text-8xl font-bold ">
                                    JEWELRY
                                </div> */}
                                <p className="paragraph font-Ubuntu text-sm">
                                    Colorful gemstones from aquamarine, amethyst, tourmaline to diamonds come together.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <div className="optionsWrapper bg-[#f8f8f8] w-[30vw] p-12">
                    <div className="content bg-[#ffffff] rounded-3xl h-full p-4 shadow-lg">
                        <h1 className="text-xl font-bold  text-[#18322f]">Pick your options</h1>    
                        
                    </div>
                </div> */}
            </div>

        </>
    );
}


export default DiamondDemo