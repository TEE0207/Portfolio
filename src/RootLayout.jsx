import { Outlet } from "react-router-dom"
import FirstHeaderComponent from "./Home/FirstHeaderComponent"

const RootLayout = () => {


    return(
        <div className="allContentContainer">

            <FirstHeaderComponent />

            <Outlet />


        </div>
    )
}

export default RootLayout