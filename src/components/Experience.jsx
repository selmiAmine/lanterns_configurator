import { ContactShadows, RandomizedLight, SpotLight, Environment, OrbitControls, Cloud, Clouds, Sky } from "@react-three/drei"
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

export const Experience = () => {
    const ref = useRef();

    function Plane() {
        return (
            <mesh position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]} >
                <boxGeometry attach="geometry" args={[100, 100]} />
                <meshStandardMaterial color={"f2d4c2"} />
            </mesh>
        )
    }


    const treeNbr = 20
    const OFFSET_X = 100
    const RANDOM_STRENGTH_POSITION = 1
    const RANDOM_STRENGTH_SCALE = .4

    const MovingItem = (props) => {
        const ref = useRef();

        useFrame((_state, delta) => {
            ref.current.position.x += delta * props.speed

            if (ref.current.position.x >= OFFSET_X) {
                ref.current.position.x = -OFFSET_X
            }

        })

        useEffect(() => {
            if (props.randomPosition) {
                let randmVar = randFloatSpread(RANDOM_STRENGTH_POSITION)
                ref.current.position.x += randmVar
                ref.current.position.z += randmVar
            }

            if (props.randomScale) {
                let randoVar = randFloatSpread(RANDOM_STRENGTH_SCALE)
                ref.current.scale.x += randoVar
                ref.current.scale.y += randoVar
                ref.current.scale.z += randoVar
            }
            return () => {

            }
        }, [])


        return <group ref={ref} position={props.position}>{props.children}</group>
    }



    const MovingTrain = (props) => {
        const ref = useRef();

        useFrame((_state, delta) => {
            ref.current.position.x -= delta * props.speed

            // console.log(ref.current.position.x)
            // console.log(OFFSET_X)
            if (ref.current.position.x <= -OFFSET_X) {
                ref.current.position.x = OFFSET_X
            }

        })

        useEffect(() => {
            if (props.randomPosition) {
                let randmVar = randFloatSpread(RANDOM_STRENGTH_POSITION)
                ref.current.position.x += randmVar
                ref.current.position.z += randmVar
            }

            if (props.randomScale) {
                let randoVar = randFloatSpread(RANDOM_STRENGTH_SCALE)
                ref.current.scale.x += randoVar
                ref.current.scale.y += randoVar
                ref.current.scale.z += randoVar
            }
            return () => {

            }
        }, [])


        return <group ref={ref} position={props.position}>{props.children}</group>
    }


    const numberOfTrees = 20;
    const maxGridSize = 40;

    const getRandomPosition = () => [
        Math.random() * maxGridSize * 2 - maxGridSize,
        0,
        Math.random() * maxGridSize * 2 - maxGridSize,
    ];

    const treeComponents = [];

    for (let i = 0; i < numberOfTrees; i++) {
        const position = getRandomPosition();
        treeComponents.push(<Tree3 key={i} position={position} />);
    }


    return (
        <>
            <OrbitControls
            maxAzimuthAngle={40}
                minPolarAngle={0} maxPolarAngle={(Math.PI / 2.1)}
            />
            <ambientLight intensity={.3} />
            <directionalLight position={[4, 5, 6]} intensity={0.8} color={'#08f9b7'} />
            <directionalLight position={[4, 5, 6]} intensity={0.8} color={'#931cff'} />
            <Environment blur={4} preset="sunset" intensity={.7} />
            {/* <gridHelper args={[200, 200, 200]} opacity={.1} /> */}
            {/* <MovingItem>
                <Tree3 />
            </MovingItem> */}



            <group position={[0, -4, 0]}>

               

                <group position={[0, 0, 0]} ref={ref}>
                    {Array.from({ length: treeNbr }, (_, index) => (
                        <MovingItem randomPosition randomScale speed={2} key={index} position={[-OFFSET_X + (index / 4) * OFFSET_X * 2, 0, -30]}>
                            <Mountains scale={5} />
                        </MovingItem>
                    ))}
                </group>;


                <group position={[0, 0, 0]} ref={ref}>
                    {Array.from({ length: treeNbr }, (_, index) => (
                        <MovingItem randomPosition randomScale speed={2.5} key={index} position={[-OFFSET_X + (index / treeNbr) * OFFSET_X * 2, 0, -8]}>
                            <Tree3 scale={.5} />
                        </MovingItem>
                    ))}
                </group>;

                <group position={[0, 0, 0]} ref={ref}>
                    {Array.from({ length: treeNbr }, (_, index) => (
                        <MovingItem randomPosition randomScale speed={2} key={index} position={[-OFFSET_X + (index / treeNbr) * OFFSET_X * 2, 0, -4]}>
                            <Tree3 scale={.4} />
                        </MovingItem>
                    ))}
                </group>;


                <group position={[0, 0, 0]} ref={ref}>
                    {Array.from({ length: treeNbr }, (_, index) => (
                        <MovingItem randomPosition randomScale speed={2} key={index} position={[-OFFSET_X + (index / treeNbr) * OFFSET_X * 2, 0, 4]}>
                            <Tree3 scale={.4} />
                        </MovingItem>
                    ))}
                </group>;


                <group position={[0, 0, 0]} ref={ref}>
                    {Array.from({ length: treeNbr }, (_, index) => (
                        <MovingItem randomPosition randomScale speed={2.5} key={index} position={[-OFFSET_X + (index / treeNbr) * OFFSET_X * 2, 0, 8]}>
                            <Tree3 scale={.5} />
                        </MovingItem>
                    ))}
                </group>;

                <group ref={ref}>
                    {Array.from({ length: 8.5 }, (_, index) => (
                        <MovingItem speed={2} key={index} position={[-OFFSET_X + (index / 8.5) * OFFSET_X * 2, 0, 0]} >
                            <Rails scale={1.5} />
                        </MovingItem>
                    ))}

                </group>

                {/* <MovingTrain speed={2}  position={[0, 0, 0]}> */}
                {/* <TrainScene/> */}
                {/* <Rails/>
            </MovingTrain> */}

                {/* <Tree3 position={[-30, 0, 0]} /> */}


                <TrainFront />
            </group>

            {/* Particles effect  */}
            {/* <ButterFly position={[-5, 0, 0]}/> */}



            <ContactShadows
                width={100}
                height={100}
                far={100}
                position={[0, -4, 0]} scale={[1, 1]} opacity={.8} />

            {/* <ContactShadows opacity={.4} scale={[16,16]} width={150}/>   */}
            {/* <RandomizedLight castShadow amount={8} frames={100} position={[5, 5, -10]} /> */}
            <Sky distance={100} sunPosition={[0, 1, 0]} inclination={0} azimuth={0.25} />


            {/* <Clouds material={useThree.MeshBasicMaterial}>
                <Cloud segments={40} bounds={[10, 2, 2]} volume={10} color="orange" />
                <Cloud seed={0} scale={.5} volume={1} color="hotpink" fade={100} />
            </Clouds> */}

        </>
    );
}