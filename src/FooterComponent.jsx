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

                   <a href="https://x.com/TE3LAW" target='_blank'>
                    <div className={styles.mediaContainer}>
                        <FaXTwitter />
                        </div>
                   </a>

                    <a href="https://www.linkedin.com/in/taofeek-lawal-2144ba30a/" target='_blank'>
                        <div className={styles.mediaContainer}>
                        <FaLinkedinIn />
                        </div>
                    </a>

                    <a href="https://github.com/TEE0207" target='_blank'  className={styles.icon}>
                        <div className={styles.mediaContainer}>
                        <FaGithub />
                        </div>
                    </a>

                </div>
                
                <div className={styles.rightSideContainer}>
                    <p>Design By <span className={styles.taofeek}>Taofeeklwl@gmail.com</span> </p>

                </div>

            </div>
  )
}

export default FooterComponent