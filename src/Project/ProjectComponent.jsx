import React from 'react'
import styles from "./projectcomponent.module.css"


const ProjectComponent = () => {

  return (
    <div className={styles.allContentContainer}>

        <div className={styles.imageContainer}>
            <img src="./projectImage.png" alt="Image" className={styles.image}/>
            
        </div>

        <div className={styles.allOtherContentContainer}>

            <div className={styles.headingContainer}>
                <h2>Country Explorer with Dark Mode </h2>
            </div>

            <div className={styles.descriptionContainer}>
                <p>A responsive React app that fetches and displays country data via REST API. Includes search, filtering, detail pages, and light/dark theme toggling.</p>

            </div>

            <div className={styles.linkContainer}>
                <a href="#" className={styles.anchor}>View Project </a>

            </div>

            <div className={styles.stackAndContentContainer}>
                {/* <p>STACK  :</p> */}
                <p className={styles.cssColor}>CSS</p>
                <p className={styles.jsColor}>JS</p>
                <p className={styles.reactColor}>REACT</p>
            </div>
        </div>



    </div>
  )
}

export default ProjectComponent