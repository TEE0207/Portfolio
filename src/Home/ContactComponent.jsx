import { useState } from "react"
import styles from "./contact.module.css"
import { BsSend } from "react-icons/bs";



const ContactComponent = () => {
    
const [nameInput, setNameInput] = useState("")
const [errorNameInput, setErrorNameInput] = useState(false)

const [emailValue, setEmailValue] = useState("")
const [emailError, setEmailError] = useState(false)

const [message, setMessage] = useState("")
const [messageError, setMessageError] = useState(false)



const manageEmail = (e) => {
  const inputEmailValue = e.target.value
  setEmailValue(inputEmailValue)


  if (inputEmailValue.trim().length === 0) {
      setEmailError("This field can't be empty");
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
      setEmailError("Enter a valid email address");
  } else {
      setEmailError(false);
  }
}

const manageName = (e) => {

  const inputName = e.target.value
  setNameInput(inputName)

  if(inputName.trim().length === 0)
    setErrorNameInput(true)
  else{
    setErrorNameInput(false)
  }
}




const manageMessage = (e) => {
  const messageValue = e.target.value
  setMessage(messageValue)


  if (messageValue.trim().length === 0) {
      setMessageError(true);
  }  else {
      setMessageError(false);
  }
}

const manageSubmittion = (e) =>{
  e.preventDefault()

   let isValid = true;

        if (nameInput.trim() === "") {
          setErrorNameInput(true);
            isValid = false;
        }

        if (emailValue.trim() === "") {
            setEmailError("This field can't be empty");
            isValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
            setEmailError("Enter a valid email address");
            isValid = false;
        }

        if (message.trim() === "") {
             setMessageError(true);
            isValid = false;
       
        }
        if (isValid) {
            console.log("Form submitted:", { nameInput, emailValue, message});
        }

         // Reset form values after successful submission
         setNameInput("");
         setEmailValue("");
         setMessage("");
         


         // ✅ Clear all error states
        setErrorNameInput(false);
        setEmailError(false);
        setMessageError(false);
        
}



    return(
        <section id="contact" className={styles.allContentContainer}>

                <div className={styles.scrollAndContactIconContainer}>

                    <div className={styles.scrollIconContainer}>
                        <img src="./Scroll.png" alt="scroll" />

                    </div>

                    <div className={styles.contactIconAndTextContainer}>
                        <div className={styles.contactIconContainer}>
                          <img src="./contact.png" alt="contact" className={styles.contactIcon} />
                        </div>

                        <p className={styles.test}>I’m currently available to work</p>


                    </div>



                </div>

              <div className={styles.theTextContainer}>
                 <p className={styles.sendText}> Send Me A Message</p>
              </div>

              <form onSubmit= {manageSubmittion}>

               <div className={styles.nameAndEmailContainer}>
                    <div className={styles.nameContainer}>
                        <label htmlFor="name" className={styles.label}>Your name*</label>
                          <input type="text" 
                          id="name"
                          placeholder="Enter Your Name"
                          value={nameInput}
                          onChange={manageName}
                          className={styles.inputField}
                        />
                        {errorNameInput && <p>This feild cannot be empty </p>}
                      </div>

                      <div className={styles.emailContainer}>
                        <label htmlFor="email" className={styles.label}>Your email*</label>
                          <input type="email" 
                          id="email"
                          placeholder="Enter Your Email"
                          value={emailValue}
                          onChange={manageEmail}
                          className={styles.inputField}

                        />
                        {emailError && <p>{emailError} </p>}
                      </div>
               </div>


                <div className={styles.messageContainer}>
                  <label htmlFor="message" className={styles.label}>Your message*</label>
                    <input type="text" 
                    id="message"
                    placeholder="Enter Your Message"
                    value={message}
                    onChange={manageMessage}
                    className={styles.messageInputField}

                  />
                  {messageError && <p>This feild cannot be empty </p>}
                </div>



                      <button type="submit">Send Message <BsSend /> </button>
              </form>

        </section>
    )
}

export default ContactComponent