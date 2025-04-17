import { Outlet } from "react-router-dom";
import styles from "./homelayout.module.css";
import FirstHeaderComponent from "./Home/FirstHeaderComponent";
import SideBar from "./SideBarComponent";
import FooterComponent from "./FooterComponent";

const HomeLayout = () => {
  return (
   

    <div className={styles.layoutContainer}>
       <FirstHeaderComponent />
{/* 
        <div className={styles.bodyContainer}>
        <SideBar />
            <main id="scroll-container" className={styles.main}>
                <Outlet />
                <FooterComponent />
            </main>
        </div> */}

        
  </div>



  );
};

export default HomeLayout;
