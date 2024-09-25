/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/

import { ContactShadows, RandomizedLight, SpotLight, Environment, OrbitControls, Cloud, Clouds, Sky, TransformControls, Stage, MeshReflectorMaterial, Stats, AccumulativeShadows, Caustics, MeshTransmissionMaterial, Loader, Grid, Float, CameraControls, Bounds, useBounds } from "@react-three/drei"
import { Suspense, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { randFloat, randFloatSpread } from "three/src/math/MathUtils";
import { useLoader, Canvas } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Popover,
  PopoverBackdrop,
  PopoverButton,
  PopoverPanel,
} from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'

import { useControls } from "leva";
import { High } from "../High";
import { proxy } from "valtio";
import ColorPicker from "./ColorPicker";
import { StockRing } from "../StockRing";
import { RingShape1 } from "../rings/RingShape1";
import Selector from "../selectors/Selector";
import { useCustomization } from "../../contexts/Customization";
import { RingShape2 } from "../rings/RingShape2";
import { RingShape3 } from "../rings/RingShape3";
import ColorSelector from "../selectors/ColorSelector";
import gsap from 'gsap'

import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { RingLoader } from "../rings/RingLoader";

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'Profile', href: '#', current: false },
  { name: 'Resources', href: '#', current: false },
  { name: 'Company Directory', href: '#', current: false },
  { name: 'Openings', href: '#', current: false },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

const RingState = proxy({
  current: null,
  colors: {
    Material_6: "#d3d3d3",
    gold: "#d3d3d3",
    silver: "#d3d3d3",
  },
})



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}



function ThreejsScene() {
  const t1 = gsap.timeline()

  

  const { cameraControlRef, selectedModel, setSelectedModel } = useCustomization()
  const meshRef = useRef()
  // const cameraControlRef = useRef()
  const updateShoeCurrent = (value) => {
    RingState.current = value;
  };

  const renderSelectedModel = () => {
    switch (selectedModel) {
      case "High":
        return (
          <High
            scale={.1} position={[0, 15, 0]}
            castShadow
            colors={RingState.colors}
            updateCurrent={updateShoeCurrent}
          />
        );

      case 1:
        return (
          <RingShape1
            scale={2}
            rotation={[0, Math.PI / 2, 0]}
            position={[0, 0, 0]}
            castShadow
            colors={RingState.colors}
            updateCurrent={updateShoeCurrent}
          />
        );

      case 2:
        return (
          <RingShape2
            scale={2}
            rotation={[0, Math.PI / 2, 0]}
            position={[0, 0, 0]}
            castShadow
            colors={RingState.colors}
            updateCurrent={updateShoeCurrent}
          />
        );

      case 3:
        return (
          <RingShape3
            scale={2}
            rotation={[0, Math.PI / 2, 0]}
            position={[0, 0, 0]}
            castShadow
            colors={RingState.colors}
            updateCurrent={updateShoeCurrent}
          />
        );

        return (
          <Teapot
            castShadow
            colors={TeapotState.colors}
            updateCurrent={updateTeapotCurrent}
          />
        );
      default:
        break;
    }
  };


  // cameraControlRef.current?.dolly(2, true)

  //   const { cameraPosition, scenePosition, sceneRotation } = useControls({
  //     cameraPosition: {
  //         value: { x: 0, y: 2, z: 9 },
  //         step: 0.05
  //     },
  // })

  // useMemo(() => {
  //     cameraControlRef.current?.setPosition(cameraPosition.x, cameraPosition.y, cameraPosition.z, true)
  //     cameraControlRef.current?.setLookAt(cameraPosition.x, cameraPosition.y, cameraPosition.z, 0,1,0, true)


  // })

  return (
    <>
      <Canvas className="canvasModelPreview"
        shadows
        // camera={{ position: [20, 20, 120], fov: 5 }}
        style={{ height: '100%', width: '100%' }
        }
      >

        {/* <OrbitControls
                            enableZoom={true}
                            makeDefault
                            maxAzimuthAngle={40}
                            minPolarAngle={0} maxPolarAngle={(Math.PI / 2.1)}
                          /> */}

        < CameraControls
          ref={cameraControlRef}
        />

        {/* < gridHelper args={[200, 200, 200]} opacity={.1} /> */}

        {/* <Float
          speed={1}
          rotationIntensity={1}
          floatIntensity={1}
          floatingRange={[0, 0.3]}
        > */}

          {/* <group ref={meshRef}>
            {renderSelectedModel()}
          </group> */}

          <RingLoader />

        {/* </Float> */}

        {/* <AccumulativeShadows temporal frames={100} color="#FFFFFF" colorBlend={8} toneMapped={true} alphaTest={1} opacity={1} scale={100} position={[0, 0, 0]} rotation={[0, 0, 0]} >
                            <RandomizedLight amount={15} radius={1} ambient={1} intensity={.5} position={[5, 5, -10]} bias={0.001} />
                          </AccumulativeShadows> */}

        <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr" />
        <EffectComposer>
          <Bloom luminanceThreshold={.4} intensity={.01} levels={0.15} mipmapBlur />
        </EffectComposer>

        {/* <AccumulativeShadows temporal frames={30} color="#FED766" colorBlend={8} toneMapped={true} alphaTest={1} opacity={1} scale={20} position={[0, 0, 0]} rotation={[0, 4, 0]} >
                                <RandomizedLight amount={8} radius={10} ambient={0.5} intensity={1} position={[5, 5, -10]} bias={0.001} />
                            </AccumulativeShadows> */}

        <ContactShadows
          width={10}
          height={10}
          far={100}
          position={[0, 0, 0]} scale={[1, 1]} opacity={.3} />

        <Stats />
      </Canvas >

    </>)
}

export default function Configurator() {




  // const { cameraPosition, scenePosition, sceneRotation } = useControls({
  //   cameraPosition: {
  //       value: { x:4.45, y:0.45, z:9 },
  //       step: 0.05
  //   },
  //   scenePosition : {
  //       value : { x:0.25, y:0, z:4.35 },
  //       step: 0.05
  //   },
  //   sceneRotation : {
  //       value : { x:0, y:0, z:0 },
  //       step: 0.01
  //   },

  // }) 




  const { selectedModel, setSelectedModel, currentRing, cameraControlRef } = useCustomization()

  const [linkOpened, setLinkOpened] = useState(false);
  const controls = useRef();



  const updateRingColor = (pro, value) => {
    RingState.colors[pro] = value;
  };

  const updateSelectedModel = (selectedModel) => {
    controls.current.reset();
    setSelectedModel(selectedModel);
  };


  const renderSelectedColorPicker = () => {
    switch (selectedModel) {
      case "High":
        return <ColorPicker state={RingState} updateColor={updateRingColor} />;

      default:
        break;
    }
  };




  return (
    <>
      {/*
          This example requires updating your template:
  
          ```
          <html class="h-full bg-gray-100">
          <body class="h-full">
          ```
        */}

      <main className="-mt-24 pb-8">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="sr-only">Page title</h1>
          {/* Main 3 column grid */}
          <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-1 lg:gap-8">
            {/* Left column */}
            <div className="grid grid-cols-1 gap-4 lg:col-span-2">
              <section aria-labelledby="section-1-title">
                <h2 id="section-1-title" className="sr-only">
                  Section title
                </h2>
                <div className="overflow-hidden rounded-lg bg-white shadow h-[600px]">
                  <div className="h-full shadow-2xl">
                    {/* Your content */}
                    <div className="h-full w-full z-10 relative  canvasWrapper bg-gradient-to-r from-[#F4F4F8] bg-[#E6E6EA] ">
                      {renderSelectedColorPicker()}
                      <Suspense fallback={null}>


                        <ThreejsScene />

                      </Suspense>


                      {/* <div className="max-w-full w-full bg-red-200 absolute bottom-0">
                        <Selector />
                      </div> */}

                      <div className="selectorWrapper absolute w-full bottom-4">
                        <Selector />
                      </div>

                      <div className="selectorWrapper absolute top-20 right-20">
                        <ColorSelector />
                      </div>


                    </div>

                  </div>

                </div>
              </section>
            </div>

            {/* Right column */}
            {/* <div className="grid grid-cols-1 gap-4">
              <section aria-labelledby="section-2-title">
                <h2 id="section-2-title" className="sr-only">
                  Section title
                </h2>
                <div className="overflow-hidden rounded-lg bg-white shadow">
                  <div className="p-6">



                    Right side

                  </div>
                </div>
              </section>
            </div> */}

          </div>
        </div>
      </main>




    </>
  )
}

