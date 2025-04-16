import { Outlet } from "react-router-dom";
import styles from "./projectlayout.module.css";
import FirstHeaderComponent from "./Home/FirstHeaderComponent";
import FooterComponent from "./FooterComponent";

const ProjectLayout = () => {
  return (
    <>
      <FirstHeaderComponent />
      <main className={styles.main}>
        <Outlet />
        <FooterComponent />
      </main>
    </>
  );
};

export default ProjectLayout;
