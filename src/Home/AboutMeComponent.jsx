import styles from "./aboutme.module.css"

const AboutMeComponent = () => {


    return(
        <section className={styles.allContentContainer}>

            <div className={styles.scrollContainer}>
                <img src="./Scroll.png" alt="Image" className={styles.scroll}/>
               
            </div>

            <div className={styles.aboutDescriptionImageContainer}>
                    
                    <div className={styles.aboutNdescriptionContainer}>

                        <div className={styles.aboutContainer}>
                            <h4>About Me</h4>

                        </div>
                        <div className={styles.descriptionContainer}>

                            <img src="./popen.png" alt="paragraph open tag" />

                           <div className={styles.allParagraphContent}>
                             <h3 className={styles.tagStyle} > Hello!</h3>

                            <p className={styles.paragraph}>My name is Taofeek and I specialize in front-end developement that utilizes <span className={styles.tagStyle}>HTML</span>,  <span className={styles.tagStyle}>CSS</span>, <span className={styles.tagStyle}>JS</span>, and <span className={styles.tagStyle}>REACT</span> </p>


                             <p className={styles.otherParagraph}>
                                    I am a highly motivated individual and eternal optimist dedicated to writing clear, concise, robust code that works. Striving to never stop learning and improving.
                                    When I'm not coding, I am reading, or picking up some new hands-on art project like <span className={styles.tagStyle}>photography.</span>
                                </p>
                           

                           
                                 <p className={styles.otherParagraph}>
                                    I like to have my perspective and belief systems challenged so that I see the world through new eyes.
                                    </p>
                           

                            </div>

                            <img src="./pclose.png" alt="paragraph open tag" />

                            

                        </div>
                    </div>

                    <div className={styles.imageContainer}>

                    <img src="./devimage.png" alt="paragraph open tag" className={styles.devImage}/>


                    </div>
            </div>
        
        
        
        
        </section>
    )
}

export default AboutMeComponent