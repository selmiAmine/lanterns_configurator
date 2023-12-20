import { ContactShadows, Environment, OrbitControls } from "@react-three/drei"
import { Island } from "./Island";
import { Cube } from "./Cube";
import { BrickCube } from "./BrickCube";
import { Tree3 } from "./Tree3";
import { Scenetest } from "./Scenetest";
import { Rails } from "./Rails";
export const Experience = () => {

    function Plane() {
        return (
            <mesh position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]} >
                <boxGeometry attach="geometry" args={[100, 100]} />
                <meshStandardMaterial  color={"f2d4c2"}/>
            </mesh>
        )
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
            <ambientLight intensity={.3}
            // position={[3, 0, 10]}
            />
            <directionalLight position={[4, 5, 6]} intensity={0.8} color={'#08f9b7'} />
            <directionalLight position={[4, 5, 6]} intensity={0.8} color={'#931cff'} />
            <Environment preset="sunset" intensity={.7} />
            {/* <pointLight position={[0, 0, 0]} /> */}
            {/* <pointLight position={[2, 2, 2]} /> */}
            {/* <pointLight position={[3, 0, 2]} /> */}
            {/* <BrickCube scale= {[0.1,0.1,0.1]} /> */}
            {/* <gridHelper args={[200,200,200]} opacity={.1}/> */}
            <Tree3 />
            <Tree3 position={[-30, 0, 0]} />
            {/* {treeComponents} */}

            <Rails scale={'2'} position={[-20, 0, 10]}/>

            <ContactShadows
                width={10}
                height={10}
                far={200}
                //  rotation={[Math.PI / 2, 0, 0]}
                position={[0, 0, 0]} scale={[16, 16]} opacity={0.8} />
            <Plane/>
            <Scenetest scale={"1.5"} position={[15, 0, 20]} />
        </>
    );
}