import styles from "./skill.module.css"
import { IoCodeSlash } from "react-icons/io5";


const SkillComponent  = () => {

    return(
        <section className={styles.allContentContainer} >


                <div className={styles.generalIconContainer}>

                        <div className={styles.theTwoIconContainer}>

                            <div className={styles.scrollIconContainer}>
                              <img src="./Scroll.png" alt="scroll" />
                            </div>

                            <div className={styles.fragmetContainer}>

                                <div className={styles.fragmentIconContainer}>
                                <IoCodeSlash className={styles.tag} />
                                </div>
                                
                            </div>

                        </div>

                </div>
                

                <div className={styles.skillsAndTextContainer}>
                    <div className={styles.skillsContainer}>
                        <img src="./Title.png" alt="scroll" />
                    </div>

                    <div className={styles.textContainer}>
                        <p> I am striving to never stop learning and improving</p>

                    </div>

                </div>

                <div className={styles.webdevelopmetContainer}>
                    <img src="./Web.png" alt="" />

                </div>


                <div className={styles.allSkillsContainer}>

                    <div className={styles.eachIconAndTextContainer}>
                        <div className={styles.skillImageContainer}>
                          <img src="./htmlIcon.png" alt="html" className={styles.skillImage} />
                        </div>

                        <h5 className={styles.htmlText}>HTML</h5>

                    </div>

                    <div className={styles.eachIconAndTextContainer}>

                        <div className={styles.skillImageContainer}>
                          <img src="./cssIcon.png" alt="css" className={styles.skillImage} />
                        </div>


                            <h5 className={styles.cssText}>CSS</h5>

                    </div>

                    <div className={styles.eachIconAndTextContainer}>

                        <div className={styles.skillImageContainer}>
                        <img src="./jsIcon.png" alt="js" className={styles.skillImage} />
                     </div>

                        <h5 className={styles.jsText}>JS</h5>

                    </div>

                    <div className={styles.eachIconAndTextContainer}>

                     <div className={styles.skillImageContainer}>
                        <img src="./reactIcon.png" alt="react" className={styles.skillImage} />
                     </div>

                         <h5 className={styles.reactText}>REACT</h5>

                    </div>

                </div>


        </section>
    )
}

export default SkillComponent