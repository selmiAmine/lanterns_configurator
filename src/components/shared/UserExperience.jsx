import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Selector } from "../selectors/Selector";
import { CustomizationProvider } from "../../contexts/RingContext/Customization";

export const UserExperience = () => {

    return (
        <>
 

        
        <div>
            <Navbar/>
                {/* <Outlet/> */}
                    <Selector/>
            <Footer/>

        </div>


        </>
    );
}


export default Footer