import ProfileComponent from "./ProfileComponent"
import styles from "./header.module.css"

const HeaderComponent = () => {



    return(
        <section className={styles.allContentContainer}>

            <div className="allIconContainer">

<ProfileComponent />
            </div>


            <div className="devAndAllOtherContentContainer">

                <div className="devContainer">

                </div>


            </div>




        </section>
    )
}

export default HeaderComponent