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
                    <img src="./Profile.png" alt="profile Picture" />

                </div>

                <div className={styles.nameAndProfessionContainer}>
                    <h1></h1>
                    <p></p>

                </div>


            </div>

            <div className={styles.iconsAndDescriptionContainer}>

                <div className={styles.iconAndContent}>
                    <CiMail />
                    <p>Taofeeklwl@gmail.com</p>
                </div>

                <div className={styles.iconAndContent}>
                    <IoLocationOutline />
                    <p>United Kingdom</p>
                </div>

                <div className={styles.iconAndContent}>
                    <FiBriefcase />
                    <p>Full-time / Freelancer</p>
                </div>

                <div className={styles.iconAndContent}>
                 <FaLink />
                 <a href="#">www.taofeeklwl.com</a>
                </div>


            </div>

            <div className={styles.stackContainer}>
                <p>HTML</p>
                <p>CSS</p>
                <p>JS</p>
                <p>REACT</p>
            </div>

            
             <div className={styles.downloadButtonContainer}>
                <a href="#" download="My_CV">
                   <button>Download CV <GoDownload /></button>
                </a>

             </div>



        </div>
    )
}


export default ProfileComponent