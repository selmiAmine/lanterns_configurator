/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Bounds, CameraControls, Environment, PerspectiveCamera, useBounds, useEnvironment, useGLTF } from '@react-three/drei'
import { useCustomization } from '../../contexts/Customization';
import { useSnapshot } from 'valtio';
import { useControls } from 'leva';
import { useFrame, useThree } from '@react-three/fiber';
import { RingShape3 } from './RingShape3';
import { RingShape2 } from './RingShape2';
import { High } from '../High';
import { RingShape1 } from './RingShape1';

export function RingLoader(props) {
  const { nodes, materials } = useGLTF('/models/rings/Ring1-variations.glb')


  // const snap = useSnapshot(props.colors);
  const { cameraControlRef, zoomToDiamond, selectedModel, setSelectedModel } = useCustomization()

  const [hovered, setHovered] = useState(null);
  // const hexString = snap.Material_6; // Or dynamically from snap.Material_6

  useEffect(() => {
    const cursor =
      `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M19.221 10.803 12 10V4a2 2 0 0 0-4 0v12l-3.031-1.212a2 2 0 0 0-2.64 1.225l-.113.34a.998.998 0 0 0 .309 1.084l5.197 4.332c.179.149.406.231.64.231H19a2 2 0 0 0 2-2v-7.21a2 2 0 0 0-1.779-1.987z"></path></svg>`;
    if (hovered) {
      document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(
        cursor
      )}'), auto`;
    }
    return () => (document.body.style.cursor = "auto");
  }, [hovered]);

  const {
    ringColor,
    diamondColor,
    headerColor,
    selectedDiamond,
    selectedHeader,
    setCurrentItem,

    canAnimate, setCanAnimate,

    registerFunction,
    setCurrentModelAttributes
    
  } = useCustomization();

  const model = useRef()

  // const { cameraPosition, scenePosition, sceneRotation } = useControls({
  //   cameraPosition: {
  //     value: { x: 0, y: 2, z: 9 },
  //     step: 0.05
  //   },
  // })

  useMemo(() => {
    // cameraControlRef.current?.setPosition(cameraPosition.x, cameraPosition.y, cameraPosition.z, true)
    // cameraControlRef.current?.setLookAt(cameraPosition.x, cameraPosition.y, cameraPosition.z, 0,1,0, true)


    // camera.position.x = cameraPosition.x
    // camera.position.y = cameraPosition.y
    // camera.position.z = cameraPosition.z

  })

  useEffect(() => {

    console.log(cameraControlRef.current)
    cameraControlRef.current.setPosition(0, 2, 4, true)

    console.log('model', model.current)


    // currentModelAttributes
    setCurrentModelAttributes(model.current)

  }, []);

  const renderSelectedModel = () => {
    switch (selectedModel) {
      case "High":
        return (
          <High
            scale={.1} position={[0, 15, 0]}
            castShadow
          // colors={RingState.colors}
          />
        );

      case 1:
        return (
          <RingShape1
            scale={2}
            rotation={[0, Math.PI / 2, 0]}
            position={[0, 0, 0]}
            castShadow
          // colors={RingState.colors}
          />
        );

      case 2:
        return (
          <RingShape2
            scale={2}
            rotation={[0, Math.PI / 2, 0]}
            position={[0, 0, 0]}
            castShadow
          // colors={RingState.colors}
          />
        );

      case 3:
        return (
          <RingShape3
            scale={2}
            rotation={[0, Math.PI / 2, 0]}
            position={[0, 0, 0]}
            castShadow
          // colors={RingState.colors}
          />
        );

        return (
          <Teapot
            castShadow
          // colors={TeapotState.colors}
          // updateCurrent={updateTeapotCurrent}
          />
        );
      default:
        break;
    }
  };

  useFrame(() => {
    // canAnimate, setCanAnimate
    if (canAnimate)
      model.current.rotation.y += 0.005
  })



  const { gl, scene } = useThree();
  const strDownloadMime = "image/octet-stream";
  const topCamera = useRef(); // Ref for the top-down camera

  const saveFile = (strData, filename) => {
    const link = document.createElement('a');
    if (typeof link.download === 'string') {
      document.body.appendChild(link);
      link.download = filename;
      link.href = strData;
      link.click();
      document.body.removeChild(link);
    }
  };

  const takeScreenshot = () => {
    try {
      const strMime = "image/png"; // Use PNG to support transparency

      // Set background to transparent
      const originalBackground = scene.background;
      scene.background = null; // Set the scene background to null for transparency

      // Render the scene using the top-down camera
      gl.render(scene, topCamera.current);

      // Capture the screenshot with transparency
      const imgData = gl.domElement.toDataURL(strMime);
      saveFile(imgData.replace(strMime, strDownloadMime), "top-down-screenshot.png");

      // Restore original background if necessary
      scene.background = originalBackground;
    } catch (e) {
      console.error(e);
    }
  };

  const functionInComponent1 = () => {
    // console.log('Function in Component 1 triggered!');
    // Your function logic here

    takeScreenshot()
  };


  const hasRegistered = useRef(false); // Use a ref to track registration

  useEffect(() => {

    // console.log(registerFunction)
    // if(registerFunction)
      // console.log('hello')

    // console.log(registerFunction)
    // registerFunction(functionInComponent1); // Call the registerFunction
  
    if (!hasRegistered.current) {
      console.log(functionInComponent1)
      registerFunction(functionInComponent1); // Call the registerFunction
      hasRegistered.current = true; // Set the flag to true to prevent future calls
    }

    // topCamera.current.setPosition(0, 4, 4, true)
    // topCamera.current.setTarget(0, 0, 0, true)

    // Wait until the next animation frame to ensure the canvas is rendered

    // requestAnimationFrame(() => {
    //   takeScreenshot();
    // });

  }, [registerFunction]);

  const env = useEnvironment({ files: 'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr' })


  return (
    <>
        <Environment  blur={2} map={env} />

      <PerspectiveCamera
        name='ScreenShot-camera'
        ref={topCamera}
        // makeDefault
        position={[2, 3, 5]}  // Camera placed above the scene (adjust height as needed)
        fov={50}               // Adjust FOV as needed
        near={0.1}
        far={100}
        onUpdate={(self) => self.lookAt(0, 0, 0)}  // Look at the center of the scene
      />

      {/* < CameraControls
        // enabled={false}
        ref={topCamera}
      /> */}

      <group {...props} dispose={null}
        ref={model}
        onPointerOver={(e) => {
          // console.log(e.object.material.name)
          // console.log(snap)
          // console.log(hexValue + '  ' + hexString + '  '+ snap.Material_6)

          e.stopPropagation();
          setHovered(e.object.material.name);
        }}
        onPointerOut={(e) => {
          if (e.intersections.length === 0) {
            setHovered(null);
          }
        }}
        onPointerDown={(e) => {
          e.stopPropagation();
          // props.updateCurrent(e.object.material.name);
        }}
        onPointerMissed={() => {
          // props.updateCurrent(null);
        }}
        onClick={(e) => {
          e.stopPropagation()
          setCurrentItem(e.object.name)
          console.log(e.object.name)
        }}
      >
        {renderSelectedModel()}
      </group>
    </>

  )
}

// useGLTF.preload('/models/rings/Ring1-variations.glb')