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

const scriptURL = "https://script.google.com/macros/s/AKfycbyaQXm-_PIuP_GvGXLqOFm2eUTwT6okSgYWS7vipH-4r8ttriJMnXn1yli5-6NWouuY/exec";



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

const manageSubmittion = (e) => {
  e.preventDefault();

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

  if (!isValid) return;

  // 👇 Send to Google Sheet
  const formData = new FormData();
  formData.append("name", nameInput);
  formData.append("email", emailValue);
  formData.append("message", message);

  fetch(scriptURL, {
    method: "POST",
    body: formData,
  })
    .then((res) => {
      alert("✅ Message sent successfully!");
      // Reset after success
      setNameInput("");
      setEmailValue("");
      setMessage("");
      setErrorNameInput(false);
      setEmailError(false);
      setMessageError(false);
    })
    .catch((err) => {
      console.error("Error!", err.message);
      alert("❌ Failed to send message. Please try again.");
    });
};




    return(
        <section className={styles.allContentContainer}>

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
                          className={`${styles.inputField} ${errorNameInput ? styles.error : ""}`}
                        />
                        {errorNameInput && <p className={styles.errorMessage}>This feild cannot be empty </p>}
                      </div>

                      <div className={styles.emailContainer}>
                        <label htmlFor="email" className={styles.label}>Your email*</label>
                          <input type="email" 
                          id="email"
                          placeholder="Enter Your Email"
                          value={emailValue}
                          onChange={manageEmail}
                          className={`${styles.inputField} ${emailError ? styles.error : ""}`}

                        />
                        {emailError && <p className={styles.errorMessage}>{emailError} </p>}
                      </div>
               </div>


                <div className={styles.messageContainer}>
                  <div className={styles.messageLabel}> 
                    <label htmlFor="message" className={styles.label}>Your message*</label>
                  </div>
                    <input type="text" 
                    id="message"
                    placeholder="Enter Your Message"
                    value={message}
                    onChange={manageMessage}
                    className={`${styles.messageInputField} ${messageError ? styles.error : ""}`}

                  />
                  {messageError && <p className={styles.errorMessage}>This feild cannot be empty </p>}
                </div>
                        

                <div className={styles.buttonContainer}>
                       <button type="submit" className={styles.button}>Send Message <BsSend /> </button>
                </div>
            </form>

        </section>
    )
}

export default ContactComponent