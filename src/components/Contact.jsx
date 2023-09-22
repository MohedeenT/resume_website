import "../styles/contact.scss"
import gh from "../images/github.svg"
import linkedIn from "../images/linkedin.svg"
import { useState } from "react"


export default function Contact(){
    const [formData, setFormData] = useState({
        name:"",
        email:"",
        subject:"",
        messageBody:""
    })

    
    const handleSubmit = (e) =>{
        e.preventDefault()
        const config ={
            SecureToken:"0c984fbd-c01b-4634-b734-2c0e29984d42",
            To : 'airings-trivium0x@icloud.com',
            From : 'mohedine.tabbara@gmail.com',
            Subject : `from: ${formData.name} - ${formData.subject}`,
            Body : `Message from ${formData.email}: 
            ${formData.messageBody}`
        }
        if (window.Email) {
            window.Email.send(config).then(
                message => alert("message sent")
              );
        }
        setFormData({
        name:"",
        email:"",
        subject:"",
        messageBody:""
    })
    }

    return(
        <>
        <div className="line">
                <hr />
                <h1>CONTACT ME </h1>
                <hr />
            </div>
            <div id="email-form">
            <form action="submit">
                <section id="nameAndEmail">
                <input 
                id="name" 
                type="text" 
                placeholder="Name"
                onChange={(e) => setFormData((currentData) => ({ ...currentData, name: e.target.value}))}
                value={formData.name} />
                <input 
                id="email" 
                type="email" 
                placeholder="Email address"
                onChange={(e) => setFormData((currentData) => ({ ...currentData, email: e.target.value}))}
                value={formData.email}
                />
                </section>
                <input 
                id="subject" 
                type="text" 
                placeholder="Subject"
                onChange={(e) => setFormData((currentData) => ({ ...currentData, subject: e.target.value}))}
                value={formData.subject}
                />
                <textarea 
                id="message-body" 
                type="text"
                onChange={(e) => setFormData((currentData) => ({ ...currentData, messageBody: e.target.value}))}
                value={formData.messageBody}
                />
                <input 
                id="submit-btn-contact" 
                type="submit" 
                value="Send Email"
                onClick={(e)=>handleSubmit(e)}
                />
            </form>
            </div>
            <div className="line">
                <hr />
                <h1>LINKS</h1>
                <hr />
            </div>
            <div id="links">
                <a href="https://github.com/MohedeenT" target="_blank" rel="noreferrer"><img src={gh} alt="GitHub link" /></a>
                <a href="https://www.linkedin.com/in/mohedeen-tabbara/" target="_blank" rel="noreferrer"><img src={linkedIn} alt="Linkedin link" /></a> 
            </div>
        </>
    )
}