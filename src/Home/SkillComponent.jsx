import styles from "./skill.module.css"
import { IoCodeSlash } from "react-icons/io5";


const SkillComponent  = () => {

    return(
        <section id="skills" className={styles.allContentContainer} >


                <div className={styles.generalIconContainer}>

                        <div className={styles.theTwoIconContainer}>

                            <div className={styles.dropIconContainer}>
                              <img src="./Scroll.png" alt="scroll" />
                            </div>

                            <div className={styles.fragmetContainer}>

                                <div className={styles.fragmentIconContainer}>
                                <IoCodeSlash className={styles.tag} />
                                </div>
                                
                            </div>

                        </div>

                </div>





        </section>
    )
}

export default SkillComponent