import React from 'react'
import styles from "./projectcomponent.module.css"


const ProjectComponent = ({title , description , image , view, stack}) => {

  return (
    <div className={styles.allContentContainer}>

        <div className={styles.imageContainer}>
            {/* <img src="./projectImage.png" alt="Image" className={styles.image}/> */}

        <img src= {image} alt="Image" className={styles.image}/>

            
        </div>

        <div className={styles.allOtherContentContainer}>

            <div className={styles.headingContainer}>
                <h2>{title} </h2>
            </div>

            <div className={styles.descriptionContainer}>
                <p>{description}</p>

            </div>

            <div className={styles.linkContainer}>
                <a href={view.href} target="_blank" rel="noopener noreferrer" className={styles.anchor}>{view.text} </a>

            </div>

            <div className={styles.stackAndContentContainer}>
                {/* <p>STACK  :</p> */}
                <p className={styles.cssColor}>{stack?.css}</p>
                <p className={styles.jsColor}>{stack?.js}</p>
                <p className={styles.reactColor}>{stack?.react}</p>
                <p className={styles.nodeColor}>{stack?.node}</p>
                <p className={styles.tailwindColor}>{stack?.tailwind}</p>
                <p className={styles.expressColor}>{stack?.express}</p>
                <p className={styles.mongodbColor}>{stack?.mongodb}</p>


            </div>
        </div>



    </div>
  )
}

export default ProjectComponent