import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { EllipsisVerticalIcon, PaperAirplaneIcon } from '@heroicons/react/20/solid'
import { useCustomization } from '../../contexts/Customization';


export const ColorSelector = () => {


    const {
        currentRing,
        selectedModel,
        setRingColor,
        setRingColorShape2,
        setRingColorShape3,
        setDiamondColor,
        setDiamondColorShape2,
        setDiamondColorShape3,
        setHeaderColor,
        setHeaderColorShape2,
        setHeaderColorShape3,
        currentItem } = useCustomization()

    console.log(currentItem)

    const colorUpdate = (param) => {
        switch (currentItem) {
            case "circle":
                {   
                    setRingColor(param)
                    setRingColorShape2(param)
                    setRingColorShape3(param)
                    break;
                }
            case "diamond":

                {
                    setDiamondColor(param)
                    setDiamondColorShape2(param)
                    setDiamondColorShape3(param)
                    break;
                }
            case "header":
                {
                    setHeaderColor(param)
                    setHeaderColorShape2(param)
                    setHeaderColorShape3(param)
                    break;
                }

            default:
                break;
        }

    }

    return (
        <>

            <div className="wrapper ">
                <div className="">
                    {/* <div className="title">Ring shape</div> */}
                    <div className="options">
                        {/* <h2 className="text-sm font-medium text-gray-500">Colors</h2> */}
                        <div className="colorsList flex flex-col gap-2 items-end bg-black p-4 rounded-3xl">
                            <div onClick={() => { colorUpdate('#f87171') }} className='h-5 rounded-full w-5 bg-red-400'></div>
                            <div onClick={() => { colorUpdate('#facc15') }} className='h-5 rounded-full w-5 bg-yellow-400'></div>
                            <div onClick={() => { colorUpdate('#4ade80') }} className='h-5 rounded-full w-5 bg-green-400'></div>
                            <div onClick={() => { colorUpdate('#60a5fa') }} className='h-5 rounded-full w-5 bg-blue-400'></div>
                            <div onClick={() => { colorUpdate('#ffffff') }} className='h-5 rounded-full w-5 bg-white'></div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}


export default ColorSelector