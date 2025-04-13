import SideBar from "../SideBarComponent"
import ProfileComponent from "./ProfileComponent"
import styles from "./header.module.css"
import { MdOutlineMail } from "react-icons/md";



const HeaderComponent = () => {

   

    return(
        <section className={styles.allContentContainer}>



            {/* <SideBar /> */}

               
                
              
                    


                  
            

            <div className={styles.profileContainer}>

             <ProfileComponent />
            </div>


            <div className={styles.devAndAllOtherContentContainer}>

                <div className={styles.devContainer}>
                    <h1> Developer</h1>
                </div>

                <div className={styles.heyNameDeveloperContainer}>

                    <img src="./h1open.png" alt="<h1>" />
                    <div className={styles.heyToH1}>
                        <h3 className={styles.hey}>Hey</h3>
                        <h3 className={styles.iam}>I'm <span className={styles.taofeek}>Taofeek</span></h3>
                        <div className={styles.textAndH1AssetContainer}>
                            <h3 className={styles.frontend}>Front-End Developer</h3>

                            <div className={styles.closingh1Container}>
                              <img src="./h1close.png" alt="</h1>" className={styles.closingH1}/>

                            </div>
                        </div>
                    </div>


                </div>


                <div className={styles.paragraphAndPtagContainer}>
                    <img src="./popen.png" alt="<p>" />
                    <div className={styles.paragraphContainer}>
                        <p>I help business grow by crafting amazing web experiences. If you’re looking for a developer that likes to get stuff done,</p>
                    </div>
                    <img src="./pclose.png" alt="</p>" />
                </div>


                 <div className={styles.letsTalkAndIconContainer}>
                    <h3 className={styles.talk}>Let's Talk </h3>
                    <div className={styles.mailContainer}>
                      <MdOutlineMail />

                    </div>
                   



                 </div>
            </div>




        </section>
    )
}

export default HeaderComponent