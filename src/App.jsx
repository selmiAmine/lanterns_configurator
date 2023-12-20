import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Canvas } from '@react-three/fiber'
import { Experience } from './components/Experience'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Canvas shadows camera={{position:[50,50,120],fov:30}}>
      <Experience/>
    </Canvas>
  )
}

export default App
