import { useProgress } from "@react-three/drei";




export const CustomerLoader = (props) => {
    const {progress} = useProgress()

    console.log(progress)

    return (
        <>
            <div className="wrapper absolute flex z-[99] h-screen w-screen bg-green-400">
        	    <button disabled={progress < 100} >
                    Start    - {progress}            

                </button>

            <div className={`w-${width}`}>
                
            </div>

            </div>

        </>
    );
}


export default CustomerLoader