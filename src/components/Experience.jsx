import { ContactShadows, Environment, OrbitControls } from "@react-three/drei"
import { Island } from "./Island";
import { Cube } from "./Cube";
import { BrickCube } from "./BrickCube";
import { Tree3 } from "./Tree3";
import { Scenetest } from "./Scenetest";
import { Rails } from "./Rails";
import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { randFloat, randFloatSpread } from "three/src/math/MathUtils";
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
                second
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
                minPolarAngle={0} maxPolarAngle={(Math.PI / 2.1)}
            />
            <ambientLight intensity={.3} />
            <directionalLight position={[4, 5, 6]} intensity={0.8} color={'#08f9b7'} />
            <directionalLight position={[4, 5, 6]} intensity={0.8} color={'#931cff'} />
            <Environment preset="sunset" intensity={.7} />
            <gridHelper args={[200, 200, 200]} opacity={.1} />
            {/* <MovingItem>
                <Tree3 />
            </MovingItem> */}

            <group position={[0, 0, 0]} ref={ref}>
                {Array.from({ length: treeNbr }, (_, index) => (
                    <MovingItem randomPosition randomScale speed={4} key={index} position={[-OFFSET_X + (index / treeNbr) * OFFSET_X * 2, 0, -12]}>
                        <Tree3 scale={1.2} />
                    </MovingItem>
                ))}
            </group>;

            <group position={[0, 0, 0]} ref={ref}>
                {Array.from({ length: treeNbr }, (_, index) => (
                    <MovingItem randomPosition randomScale speed={3} key={index} position={[-OFFSET_X + (index / treeNbr) * OFFSET_X * 2, 0, -4]}>
                        <Tree3 scale={1} />
                    </MovingItem>
                ))}
            </group>;

            <group>
                {Array.from({ length: 50 }, (_, index) => (
                    <Rails scale={1.5}  position={[index + 4, 0, 0]}/>
                ))}
            </group>

            <Tree3 position={[-30, 0, 0]} />

            <ContactShadows
                width={10}
                height={10}
                far={200}
                position={[0, 0, 0]} scale={[16, 16]} opacity={0.8} />
        </>
    );
}