import React from 'react'
import { FaXTwitter , FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import styles from "./footercomponent.module.css"




const FooterComponent = () => {
  return (
            <div className={styles.allContentContainer}>
                <div className={styles.leftSideContainer}>
                    <p>© 2025 TaofeekLawal. All rights reserved.</p>
                </div>

                <div className={styles.centerContainer}>
                    <div className={styles.mediaContainer}>
                    <FaXTwitter />
                    </div>

                    <div className={styles.mediaContainer}>
                    <FaLinkedinIn />
                    </div>

                    <div className={styles.mediaContainer}>
                    <FaGithub />
                    </div>

                </div>
                
                <div className={styles.rightSideContainer}>
                    <p>Design By <span className={styles.taofeek}>Taofeeklwl@gmail.com</span> </p>

                </div>

            </div>
  )
}

export default FooterComponent