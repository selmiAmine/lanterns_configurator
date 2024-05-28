import { useProgress } from "@react-three/drei";
import { useState } from "react";




export const CustomerLoader = ({started, onStarted}) => {
    const { progress } = useProgress()

    console.log(progress)

    return (
        <>
            <div className={`loadingScreen ${started ? "loadingScreen--started" : ""}`}>


                <div className="contentWrapper flex flex-col gap-10 w-[50%]">
                    <div className="buttonWrapper loadingScreen__board font-Ubuntu text-md text-center text-black">
                        <button disabled={progress < 100} className="py-1 px-6 rounded-md bg-white" onClick={onStarted} >
                            Start the experience
                        </button>
                    </div>
                    <div className={`loadingScreen_value`} style={{ width: `${progress}%` }} />     
                </div>
            </div>


            {/* <div className={`loadingScreen ${started ? "loadingScreen--started" : ""}`}>
               
                <div className="loadingScreen__progress">
                    <div className="loadingScreen__progress__value" style={{ width: `${progress}%` }}/>
                </div>

                <div className="loadingScreen__board">
                    <h1>Start the experience</h1>
                    <button className="loadingScreen__button" disabled={progress < 100} onClick={onStarted}> Start {progress}</button>
                </div>
                
            </div> */}



        </>
    );
}


export default CustomerLoader