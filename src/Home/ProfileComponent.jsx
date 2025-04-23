import { CiMail } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { FiBriefcase } from "react-icons/fi";
import { FaLink } from "react-icons/fa6";
import { GoDownload } from "react-icons/go";
import styles from "./profile.module.css"






const ProfileComponent = () => {



    return(
        <div className={styles.allContentContainer}>

            <div className={styles.picNameprofessionContainer}>

                <div className={styles.profilePictureContainer}>
                    <img src="./Profile.png" alt="profile Picture" className={styles.pictureProfile}/>

                </div>

                <div className={styles.nameAndProfessionContainer}>
                    <h3 className={styles.myName}>Taofeek</h3>
                    <p className={styles.myProfession}>Front-End Developer</p>

                </div>


            </div>

            <div className={styles.iconsAndDescriptionContainer}>

                <div className={styles.iconAndContent}>
                    <CiMail className={styles.pIcon}/>
                    <p className={styles.profileDes}>Taofeeklwl@gmail.com</p>
                </div>

                <div className={styles.iconAndContent}>
                    <IoLocationOutline className={styles.pIcon} />
                    <p className={styles.profileDes}>United Kingdom</p>
                </div>

                <div className={styles.iconAndContent}>
                    <FiBriefcase className={styles.pIcon}/>
                    <p className={styles.profileDes}>Full-time / Freelancer</p>
                </div>

                <div className={styles.iconAndContent}>
                 <FaLink className={styles.pIcon}/>
                 <a href="#" className={styles.profileDes}>www.taofeeklwl.com</a>
                </div>


            </div>

            <div className={styles.stackContainer}>
                <div className={styles.eachStackContainer}> <p>HTML</p> </div>
                <div className={styles.eachStackContainer}> <p>CSS</p> </div>
                <div className={styles.eachStackContainer}> <p>JS</p> </div>
                <div className={styles.eachStackContainer}> <p>REACT</p> </div>
            </div>

            
             <div className={styles.downloadButtonContainer}>
                <a href="/Taofeek-CV.pdf" target="_blank" rel="noopener noreferrer">
                   <button className={styles.button}>Download CV <GoDownload className={styles.dIcon}/></button>
                </a>

             </div>



        </div>
    )
}


export default ProfileComponent