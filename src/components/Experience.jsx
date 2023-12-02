import { ContactShadows, Environment, OrbitControls } from "@react-three/drei"
import { Island } from "./Island";
import { Cube } from "./Cube";
import { BrickCube } from "./BrickCube";
import { Tree3 } from "./Tree3";
export const Experience = () => {

    function Plane(){
        return (
            <mesh position={[0,0,0]} rotation={[-Math.PI/2,0,0]} >
            <planeGeometry attach="geometry" args={[100, 100]} />
            <meshPhongMaterial attach="material"  />
         </mesh>
        )
    }

    return (
        <>
            <OrbitControls />
            <ambientLight intensity={.8} position={[3, 0, 10]} />
            <Environment preset="sunset" intensity={.7} />
            {/* <pointLight position={[0, 0, 0]} /> */}
            {/* <pointLight position={[2, 2, 2]} /> */}
            {/* <pointLight position={[3, 0, 2]} /> */}
            {/* <BrickCube scale= {[0.1,0.1,0.1]} /> */}
            {/* <gridHelper args={[200,200,200]} opacity={.1}/> */}
            <Tree3 />
            <Tree3 position={[-50,0,0]}/>
            <ContactShadows
             width={10}
             height={10}
             far={200}
            //  rotation={[Math.PI / 2, 0, 0]}
            
            position={[0,0,0]} scale={[16,16]} opacity={0.8} />
            {/* <Plane/> */} 
        </>
    );
}