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
                   <NavLink to={"/"} className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
                   > <li >Home</li> </NavLink> 
                   <NavLink to={"/projects"} className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
                   > <li>Projects</li> </NavLink> 
                </ul>


            </div>

            <div className={styles.theThreeSocialContainer}>

                {/* <div className={styles.twitterContainer}> */}

                    <a href="https://x.com/TE3LAW" target="_blank"className={styles.social}>
                        
                    <FaXTwitter className={styles.icon} />
                    <p className={styles.contact}>Twitter</p>
                    
                    </a>

                {/* </div> */}

                {/* <div className={styles.linkedInContainer}> */}
                    <a href="https://www.linkedin.com/in/taofeek-lawal-2144ba30a/" target="_blank" className={styles.social}>

                    <FaLinkedinIn className={styles.icon}  />
                    <p className={styles.contact}>LinkedIn</p>

                    </a>

                {/* </div> */}

                {/* <div className={styles.GitHubContainer}> */}
                    <a href="https://github.com/TEE0207" target="_blank"className={styles.social}>
                        <FaGithub  className={styles.icon} />
                        <p className={styles.contact}>Github</p>
                    </a>

                {/* </div> */}




            </div>

        </div>
    )
}

export default FirstHeaderComponent