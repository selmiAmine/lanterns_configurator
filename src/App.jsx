import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Canvas } from '@react-three/fiber'
import { Experience } from './components/Experience'
import {  
  PerspectiveCamera,
   Stats } from '@react-three/drei'
// import { PerspectiveCamera } from 'three'




// function CameraHelper(){
//   const camera = new PerspectiveCamera(100,1,1,50)
//   return <group position={[-25,10,10]} rotation={[0,-69.7,0]}>
//     <cameraHelper args={[camera]}/>
//   </group>
// }


function App() {
  const [count, setCount] = useState(0)
  function Plane() {
    return (
        <mesh receiveShadow position={[0, -5, 0]} rotation={[-Math.PI / 2, 0, 0]} >
            <boxGeometry attach="geometry" args={[100, 100]} />
            <meshStandardMaterial color={"f2d4c2"} />
        </mesh>
    )
}
  
  return (
    <Canvas shadows 
    camera={{position:[50,50,120],fov:30}}
    >
      <fog attach="fog" near={60} far={160} args={["#1e1f1e"]} />
      <Experience/>
      {/* Drei perspective camera  */}
      <PerspectiveCamera  position={[-30,10,22]} fov={50} near={1} far={150} makeDefault />
      {/* <CameraHelper/> */}
      {/* <Plane/> */}

      <Stats/>
    </Canvas>
  )
}

export default App
