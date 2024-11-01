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

import { ContactShadows, RandomizedLight, SpotLight, Environment, OrbitControls, Cloud, Clouds, Sky, TransformControls, Stage, MeshReflectorMaterial, Stats, AccumulativeShadows, Caustics, MeshTransmissionMaterial, Loader, Grid, Float, CameraControls, Bounds, useBounds, useEnvironment } from "@react-three/drei"
import { Suspense, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { randFloat, randFloatSpread } from "three/src/math/MathUtils";
import { useLoader, Canvas } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Bloom, EffectComposer, N8AO, SMAA, ToneMapping, Vignette } from "@react-three/postprocessing";
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
import { Bars3Icon, BellIcon, CameraIcon, XMarkIcon, FingerPrintIcon } from '@heroicons/react/24/outline'
import { MagnifyingGlassIcon, ArrowPathIcon } from '@heroicons/react/20/solid'

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
import { Ring1Unwrapped } from "../rings/Ring1Unwrapped";
import { Unwrapped } from "../rings/Unwrapped";
import { MaterialSelector } from "../selectors/MaterialSelector";
import { useSpring, a } from "@react-spring/three";
import { RenderPass } from "postprocessing";
import { useParams } from "react-router-dom";

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

  const { id } = useParams(); // Get the id from the URL
  const t1 = gsap.timeline()



  const { cameraControlRef, selectedModel, setSelectedModel, isFloating } = useCustomization()
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

  const { position, rotation } = useSpring({
    position: isFloating ? [0, 0, 0] : [0, 0, 0], // initial and final position
    rotation: isFloating ? [0, 0, 0] : [0, 0, 0], // initial and final rotation
    config: { tension: 170, friction: 26 }, // Controls the smoothness of the animation
  });

  // const env = useEnvironment({ files: 'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/peppermint_powerplant_2_1k.hdr' })

  return (
    <>
      <Canvas className="canvasModelPreview"
        dpr={[1, 1.5]} gl={{ antialias: false }}
        shadows
        // camera={{ position: [20, 20, 120], fov: 5 }}
        style={{ height: '100%', width: '100%' }
        }
      >
        <spotLight color={'#000000'} position={[0, 1, 0]} angle={0.15} penumbra={1} decay={0} intensity={1} />
        
        < CameraControls
          ref={cameraControlRef}
        />

        {isFloating ? (
          <Float speed={4} rotationIntensity={3} floatIntensity={2} floatingRange={[0, 0.3]}>
            <Ring1Unwrapped scale={2} position={[2, 0, 0]} rotation={[0, Math.PI / 2, 0]} />
            <RingLoader productId={id} />
          </Float>
        ) : (
          <>
            <a.group position={position} rotation={rotation}>

              <Ring1Unwrapped scale={2} position={[2, 0, 0]} rotation={[0, Math.PI / 2, 0]} />
              <RingLoader productId={id} />
            </a.group>

          </>
        )}

        <AccumulativeShadows temporal frames={100} color={'#000000'} opacity={.4}>
          <RandomizedLight radius={2} position={[4, 10, 8]} />
        </AccumulativeShadows>

        <EffectComposer>
 
          <N8AO aoRadius={0.15} intensity={4} distanceFalloff={2} />
          <Bloom luminanceThreshold={1} intensity={1} levels={0.2} mipmapBlur />
          <SMAA />
          <Vignette offset={0.5} darkness={0.4} /> 

        </EffectComposer>

        <Stats />
      </Canvas >

    </>)
}

export default function ViewRing() {




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

  const { selectedModel, setSelectedModel, currentRing, cameraControlRef, setCanAnimate, canAnimate, takeScreenshot, exposedFunction, setIsFloating, isFloating, currentModelAttributes, setCurrentModelAttributes,
    setLayingPosition, setResetPositon, exposedFunction2,formDataContent,
    setCurrentRing,
    fetchRing

  } = useCustomization()

  const { id } = useParams(); // Get the id from the URL
  const [linkOpened, setLinkOpened] = useState(false);
  const controls = useRef();
  const [ownerShip, setOwnerShip] = useState(false);





  const handleClick = () => {
    if (exposedFunction) {
      exposedFunction(); // Trigger the function from Component 1
      exposedFunction2(); // Trigger the function from Component 1
    }
  };

  useEffect(() => {
    
    currentRing.thumbnail = formDataContent
    setCurrentRing(currentRing)
  
  }, [formDataContent]);


  const updateRingColor = (pro, value) => {
    RingState.colors[pro] = value;
  };

  const updateSelectedModel = (selectedModel) => {
    controls.current.reset();
    setSelectedModel(selectedModel);
  };

  const currentUserID = ''

// This effect runs whenever currentRing is updated, allowing you to log the new value

useEffect(() => {
  if (id) {  // Check if id exists to avoid unnecessary fetch calls
    fetchRing(id);
  }
}, [fetchRing, id]);


useEffect(() => {
  console.log("Updated currentRing Configurator:", currentRing);

  const currentUserID = currentRing.ownerId
  const token = localStorage.getItem("token")
  const payloadBase64 = token.split(".")[1];
  const payload = JSON.parse(atob(payloadBase64));
  const userID = payload.id

  console.log(userID)
  console.log(currentUserID)


   if (userID == currentUserID)
    setOwnerShip(true)
  else setOwnerShip(false)

}, [currentRing]);




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


                      <div className="selectorWrapper absolute top-5 left-20 px-4">
                        {/* <Selector /> */}
                        <div

                          className={`wrapper p-2 rounded-lg shadow-lg
                          ${canAnimate == false ? 'outline outline-gray-400 outline-2 text-gray-400' : 'outline outline-gray-8 outline-2 text-gray-900'}`}
                          onClick={() => { setCanAnimate(!canAnimate) }}>
                          <ArrowPathIcon className='w-4 h-4' alt="" />
                        </div>
                      </div>

                      <div className="selectorWrapper absolute top-5 left-40 px-4">
                        {/* <Selector /> */}
                        <div

                          className={`wrapper p-2 rounded-lg shadow-lg
                          ${isFloating == false ? 'outline outline-gray-400 outline-2 text-gray-400' : 'outline outline-gray-8 outline-2 text-gray-900'}`}
                          onClick={() => { setIsFloating(!isFloating) }}>
                          <FingerPrintIcon className='w-4 h-4' alt="" />
                        </div>
                      </div>

                      <div className="selectorWrapper absolute top-5 left-60 px-4">
                        {/* <Selector /> */}
                        <div

                          className={`wrapper p-2 rounded-lg shadow-lg outline outline-gray-8 outline-2 text-gray-900`}
                          // onClick={() => { takeScreenshot() }}
                          onClick={handleClick}
                        >
                          <CameraIcon className='w-4 h-4' alt="" />
                        </div>
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

