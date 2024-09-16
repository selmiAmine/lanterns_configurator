import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Selector } from "../selectors/Selector";
import { CustomizationProvider } from "../../contexts/Customization";

export const UserExperience = () => {

    return (
        <>



            <div>
                <Navbar />

                <CustomizationProvider>
                    <Outlet />
                    {/* <Selector /> */}
                </CustomizationProvider>
                
                <Footer />

            </div>


        </>
    );
}


export default Footer