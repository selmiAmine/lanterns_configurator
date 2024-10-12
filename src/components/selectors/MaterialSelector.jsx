import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { EllipsisVerticalIcon, PaperAirplaneIcon } from '@heroicons/react/20/solid'
import { useCustomization } from '../../contexts/Customization';
import { useControls } from 'leva';
import { useFrame } from '@react-three/fiber';


export const MaterialSelector = () => {


    const {
        selectedMaterial, setSelectedMaterial,
        currentRing, setCurrentRing
    } = useCustomization()

    const DEG45 = Math.PI / 4;

    const matUpdate = (param) => {
        setSelectedMaterial(param)
        currentRing.shape.options.material = param
        setCurrentRing(currentRing)
        // console.log(selectedMaterial)
    }

    return (
        <>

            <div className="wrapper">
                <div className="">
                    {/* <div className="title">Ring shape</div> */}
                    <div className="options">
                        {/* <h2 className="text-sm font-medium text-gray-500">Colors</h2> */}
                        <div className="colorsList flex flex-col text-sm font-medium text-gray-500 gap-2 items-start p-4 rounded-3xl">
                            <div className="item flex flex-row gap-4 items-center" onClick={() => { matUpdate(1) }}>
                                <div className={`h-4 rounded-full w-10 bg-yellow-400  ${selectedMaterial == 1 ? 'outline outline-gray-800 outline-2 shadow-xl' : 'bg-black'}`}></div>
                                <div 
                                className={`${selectedMaterial == 1 ? 'underline underline-offset-8' : ''}`}>Gold</div>
                            </div>
                            <div className="item flex flex-row gap-4 items-center" onClick={() => { matUpdate(2) }}>
                                <div
                                className={`h-4 rounded-full w-10 bg-black ${selectedMaterial == 2 ? 'outline outline-gray-800 outline-2 shadow-xl' : 'bg-black'}`}></div>
                                <div
                                className={`${selectedMaterial == 2 ? 'underline underline-offset-8' : ''}`}
                                >Matte</div>
                            </div>
                            <div className="item flex flex-row gap-4 items-center" onClick={() => { matUpdate(3) }}>
                                <div
                                    style={{ backgroundImage: `url('/textures/alien-metal1-bl/alien-metal1-bl/alien-metal_albedo.png')` }}
                                    className={`h-4 rounded-full w-10 bg-red-400 bg-contain ${selectedMaterial == 3 ? 'outline outline-gray-800 outline-2 shadow-xl' : 'bg-black'}`}></div>
                                <div
                                className={`${selectedMaterial == 3 ? 'underline underline-offset-8' : ''}`}
                                >Round Hammer</div>
                            </div>
                            <div className="item flex flex-row gap-4 items-center" onClick={() => { matUpdate(4) }}> 
                                <div
                                    style={{ backgroundImage: `url('/textures/fabric/Fabric_Knitted_006_ambientOcclusion.jpg')` }}
                                    className={`h-4 rounded-full w-10 bg-red-400 bg-contain ${selectedMaterial == 4 ? 'outline outline-gray-800 outline-2 shadow-xl' : 'bg-black'}`}></div>
                                <div
                                className={`${selectedMaterial == 4 ? 'underline underline-offset-8' : ''}`}
                                >Fabric</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}


export default MaterialSelector