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

import { ContactShadows, RandomizedLight, SpotLight, Environment, OrbitControls, Cloud, Clouds, Sky, TransformControls, Stage, MeshReflectorMaterial, Stats, AccumulativeShadows, Caustics, MeshTransmissionMaterial, Loader, Grid } from "@react-three/drei"
import { Suspense, useEffect, useLayoutEffect, useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { randFloat, randFloatSpread } from "three/src/math/MathUtils";
import { useLoader, Canvas } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import Chair from "../Chair";
import { ConfiguratorSetting } from "../ConfiguratorSetting";
import { CustomizationProvider } from "../../contexts/Customization";
import { Ring } from "../Ring";
import { RingVariation1 } from "../RingVariation1";
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SpeakerWaveIcon, BeakerIcon } from '@heroicons/react/24/solid'
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import CustomerLoader from "./CustomerLoader";
import { FaceRing } from "../FaceRing";
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
import { RingVariation2 } from "../RingVariation2";
import { RingVariation3 } from "../RingVariation3";
import { RingVariation4 } from "../RingVariation4";
import { Dodo } from "../Dodo";
import { useControls } from "leva";
import { High } from "../High";

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




function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Configurator() {




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
              <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8">
                {/* Left column */}
                <div className="grid grid-cols-1 gap-4 lg:col-span-2">
                  <section aria-labelledby="section-1-title">
                    <h2 id="section-1-title" className="sr-only">
                      Section title
                    </h2>
                    <div className="overflow-hidden rounded-lg bg-white shadow">
                      <div className="p-6">
                        {/* Your content */}
                        
                          this is left side
                        </div>
                    </div>
                  </section>
                </div>
  
                {/* Right column */}
                <div className="grid grid-cols-1 gap-4">
                  <section aria-labelledby="section-2-title">
                    <h2 id="section-2-title" className="sr-only">
                      Section title
                    </h2>
                    <div className="overflow-hidden rounded-lg bg-white shadow">
                      <div className="p-6">
                        {/* Your content */}
                        this is right side
                        
                        </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </main>

        


      </>
    )
  }
  
