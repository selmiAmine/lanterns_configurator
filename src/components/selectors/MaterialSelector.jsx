import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { EllipsisVerticalIcon, PaperAirplaneIcon } from '@heroicons/react/20/solid'
import { useCustomization } from '../../contexts/Customization';
import { useControls } from 'leva';
import { useFrame } from '@react-three/fiber';


export const MaterialSelector = () => {


    const {
        selectedMaterial, setSelectedMaterial    
    } = useCustomization()

    const DEG45 = Math.PI / 4;

    const matUpdate = (param) => {
        console.log(param)
        setSelectedMaterial(param)

    }

    return (
        <>

            <div className="wrapper">
                <div className="">
                    {/* <div className="title">Ring shape</div> */}
                    <div className="options">
                        {/* <h2 className="text-sm font-medium text-gray-500">Colors</h2> */}
                        <div className="colorsList flex flex-col bg-black text-white font-bold gap-2 items-start p-4 rounded-3xl">
                            <div className="item flex flex-row gap-4 items-center">
                                <div onClick={() => { matUpdate(1) }} className='h-5 rounded-full w-5 bg-red-400'></div>
                                <div>Gold</div>
                            </div>
                            <div className="item  flex flex-row gap-4 items-center">
                                <div onClick={() => { matUpdate(2) }} className='h-5 rounded-full w-5 bg-red-400'></div>
                                <div>Fabric</div>
                            </div>
                            <div className="item  flex flex-row gap-4 items-center">
                                <div onClick={() => { matUpdate(3) }} className='h-5 rounded-full w-5 bg-red-400'></div>
                                <div>Metal</div>
                            </div>
                            <div className="item  flex flex-row gap-4 items-center">
                                <div onClick={() => { matUpdate(4) }} className='h-5 rounded-full w-5 bg-red-400'></div>
                                <div>Mat</div>
                            </div>
                            {/* <div onClick={() => { colorUpdate('#facc15') }} className='h-5 rounded-full w-5 bg-yellow-400'></div> */}
                            {/* <div onClick={() => { colorUpdate('#4ade80') }} className='h-5 rounded-full w-5 bg-green-400'></div> */}
                            {/* <div onClick={() => { colorUpdate('#60a5fa') }} className='h-5 rounded-full w-5 bg-blue-400'></div> */}
                            {/* <div onClick={() => { colorUpdate('#ffffff') }} className='h-5 rounded-full w-5 bg-white'></div> */}
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}


export default MaterialSelector