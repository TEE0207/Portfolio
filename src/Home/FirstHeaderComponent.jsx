import { NavLink } from "react-router-dom"
import { FaXTwitter , FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import styles from "./firstheader.module.css"





const FirstHeaderComponent = () => {


    return(
        <div className={styles.allContentContainer}>

            <div className={styles.tagAndNameContainer}>

                <div className={styles.tagContainer}>
                    <img src="./T_tag.png" alt="T tag" className={styles.tag} />

                </div>

                <div className={styles.nameContainer}>
                    <p>TaofeekLawal</p>

                </div>


            </div>

            <div className={styles.homeAndProjectsContainer}>
                <ul className={styles.list}>
                   <NavLink to={"/"}> <li className={styles.lists}>Home</li> </NavLink> 
                   <NavLink to={"/projects"}> <li className={styles.lists}>Projects</li> </NavLink> 
                </ul>


            </div>

            <div className={styles.theThreeSocialContainer}>

                {/* <div className={styles.twitterContainer}> */}

                    <a href="" className={styles.social}>
                        
                    <FaXTwitter className={styles.icon} />
                    <p className={styles.contact}>Twitter</p>
                    
                    </a>

                {/* </div> */}

                {/* <div className={styles.linkedInContainer}> */}
                    <a href="" className={styles.social}>

                    <FaLinkedinIn className={styles.icon}  />
                    <p className={styles.contact}>LinkedIn</p>

                    </a>

                {/* </div> */}

                {/* <div className={styles.GitHubContainer}> */}
                    <a href="" className={styles.social}>
                        <FaGithub  className={styles.icon} />
                        <p className={styles.contact}>Github</p>
                    </a>

                {/* </div> */}




            </div>

        </div>
    )
}

export default FirstHeaderComponent