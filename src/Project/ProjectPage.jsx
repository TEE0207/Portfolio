import ProjectComponent from "./ProjectComponent"
import styles from "./projectpage.module.css"

const ProjectPage = () => {

    return(
        <div className={styles.allContentContainer}>

            <div className={styles.projectAndLineImageContainer}>
                <h1 className={styles.projectH}>Projects</h1>
                <img src="./lineImage.png" alt="LineImage" />
                <p className={styles.projectT}>I had the pleasure of working with these awesome projects</p>

            </div>
            
            <div className={styles.allProjectContainer}>
                <ProjectComponent />
                <ProjectComponent />
                <ProjectComponent />
            </div>


        </div>
    )
}


export default ProjectPage