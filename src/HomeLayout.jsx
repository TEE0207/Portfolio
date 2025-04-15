import { Outlet } from "react-router-dom";
import styles from "./homelayout.module.css";
import FirstHeaderComponent from "./Home/FirstHeaderComponent";
import SideBar from "./SideBarComponent";

const HomeLayout = () => {
  return (
    // <>
    //   <FirstHeaderComponent />
    //   <SideBar />
    //   <main className={styles.main}>
    //     <Outlet />
    //   </main>
    // </>

    <div className={styles.layoutContainer}>
       <FirstHeaderComponent />

        <div className={styles.bodyContainer}>
        <SideBar />
            <main id="scroll-container" className={styles.main}>
                <Outlet />
            </main>
        </div>
  </div>



  );
};

export default HomeLayout;
