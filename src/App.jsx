import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Canvas } from '@react-three/fiber'
import { Experience } from './components/Experience'
import {
  PerspectiveCamera,
  Stats
} from '@react-three/drei'
// import { PerspectiveCamera } from 'three'
import { BellIcon } from '@heroicons/react/24/outline'
import Testimonials from './Testimonials'
import { Outlet } from 'react-router-dom'




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


    <Outlet/>

      // <Testimonials /> 
  )
}

export default App
