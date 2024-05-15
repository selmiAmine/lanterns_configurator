import { ContactShadows, RandomizedLight, SpotLight, Environment, OrbitControls, Cloud, Clouds, Sky, TransformControls, Stage, MeshReflectorMaterial, Stats } from "@react-three/drei"
import { useEffect, useLayoutEffect, useRef } from "react";
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

gsap.registerPlugin(ScrollTrigger)

export const DiamondDemo = (props) => {

    const ref = useRef();
    const { transformControlMode } = props;
    const gltf = useLoader(GLTFLoader, './models/scene.gltf')
    function Scene() {
        return <primitive object={gltf.scene} />
    }



    useEffect(() => { console.log(transformControlMode) }, [transformControlMode])

    return (
        <>
            <div className="wrapper heroSection">

                <div className="h-screen w-full z-10 fixed top-0 canvasWrapper bg-gradient-to-r from-violet-200 to-pink-200 ">

                    <Canvas className="canvasModelPreview "
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
                        <Environment blur={4} files="./autumn_field_2k.hdr" intensity={.6} castShadow={true} />
                        {/* <gridHelper args={[200, 200, 200]} opacity={.1} /> */}
                        {/* <fog attach="fog" args={["#213547", 10, 20]} /> */}

                        {/* <Stage environment="city" intensity={0.6} castShadow={true}> */}
                        {/* <Scene /> */}
                        <Ring />
                        {/* </Stage> */}
                        {/* <TransformControls mode={transformControlMode}>
                </TransformControls> */}

                        {/* <mesh rotation={[-Math.PI / 2, 0, 0]} position-y={-2}>
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
                        </mesh> */}
                        {/* <ContactShadows
                    width={100}
                    height={100}
                    far={100}
                    position={[0, 0, 0]} scale={[1, 1]} opacity={.8} /> */}

                        {/* <Sky distance={100} sunPosition={[0, 1, 0]} inclination={0} azimuth={0.25} /> */}

                        <Stats />
                    </Canvas>

                </div>

                {/* Header */}
                <div className="headerWrapper w-full flex justify-between items-center absolute z-[99]">
                    <div className="navbar max-w-5xl flex justify-between items-center z-[99] mx-auto mt-4 p-4 w-full bg-red-200">
                        <div className="flex justify-center">
                            <span>
                                LANTERNS STUDIO
                                {/* <img className="w-20" src="./lanterns_studios_logo.jpeg" alt="" /> */}
                            </span>
                        </div>
                        <ul className=" navbarContent flex gap-4">
                            <li>Item</li>
                            <li>Item</li>
                        </ul>
                    </div>
                </div>

                {/* Hero */}
                <section className="h-screen z-50 first-section" >
                    <div className="wrapperContent z-50 absolute flex w-full">
                        <div className="leftSide w-1/2 "></div>
                        <div className="righttSide  w-1/2 h-screen flex items-center">
                            <div className="rightSideContent">
                                <div className="heading right-0 z-50 text-8xl font-bold ">
                                    UNIQUE
                                </div>
                                <div className="heading right-0 z-50 text-8xl font-bold ">
                                    JEWELRY
                                </div>
                                <p className="paragraph">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, est!
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* About */}
                <section className="h-screen z-50 second-section" >
                    <div className="wrapperContentAboutUs z-50 absolute flex w-full">
                        <div className="righttSideAboutUs  w-1/2 h-screen flex items-center ">
                            <div className="rightSideContentAboutUs w-full flex flex-col items-center">
                                <div className="heading bg-red-200 1left-0 z-50 text-8xl font-bold ">
                                    UNIQUE
                                </div>
                                <div className="heading bg-red-200 left-0 z-50 text-8xl font-bold ">
                                    JEWELRY
                                </div>
                                <p className="paragraph">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, est!
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
                        <div className="righttSide  w-1/2 h-screen flex items-center">
                            <div className="rightSideContentCustomizer">
                                <div className="heading right-0 z-50 text-8xl font-bold ">
                                    UNIQUE
                                </div>
                                <div className="heading right-0 z-50 text-8xl font-bold ">
                                    JEWELRY
                                </div>
                                <p className="paragraph">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, est!
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