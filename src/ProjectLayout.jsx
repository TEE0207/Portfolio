import { Outlet } from "react-router-dom";
import styles from "./projectlayout.module.css";
import FirstHeaderComponent from "./Home/FirstHeaderComponent";

const ProjectLayout = () => {
  return (
    <>
      <FirstHeaderComponent />
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
};

export default ProjectLayout;
