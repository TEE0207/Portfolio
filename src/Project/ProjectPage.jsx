// import { href } from "react-router-dom"
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

              <ProjectComponent
                 image="/movie.png" // ✅ Direct path from public folder

                 title= "Netflix-Gpt"
                 description="AI-powered movie app using OpenAI, TMDB, Firebase, Redux, and Tailwind. Features multilingual search, live trailers, and recommendations."
                 view = {{href : "https://netflixgpt-d1bcb.firebaseapp.com/" , text : "View Project Here"}}
                
                />
                <ProjectComponent
                 image="/country.png" // ✅ Direct path from public folder

                 title= "Country Explorer with Dark Mode"
                 description="A responsive React app that fetches and displays country data via REST API. Includes search, filtering, detail pages, and light/dark theme toggling."
                 view = {{href : "https://rest-countries-gilt-chi.vercel.app/" , text : "View Project Here"}}
                
                />
                <ProjectComponent 
                   image="/payApi.png"
                   title= "Modern Responsive PayAPI Website"
                   description="Developed using React, JavaScript, and CSS. Fully responsive across all devices, featuring a polished multi-page layout with accessible form validation."
                   view={{href : "https://pay-api-pi-ebon.vercel.app/" , text : "View Project Here"}}
                
                />
                <ProjectComponent 
                   image="/desktop.png"
                   title= "Responsive Clipboard Landing Page"
                   description="Crafted with React, CSS, and JavaScript. A sleek, responsive landing page that adapts seamlessly across devices with elegant layout and interactive UI elements."
                   view={{href : "https://desktop-app-hazel.vercel.app/" , text : "View Project Here"}}
                
                />
            </div>

            <div className={styles.seeMoreButtonContainer}>

                    <a
                    href="https://github.com/TEE0207"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.myButton}
                    >
                     See More Projects
                    </a>

            </div>


        </div>
    )
}


export default ProjectPage