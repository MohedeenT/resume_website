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
                <input id="name" type="text" placeholder="Name" />
                <input id="email" type="email" placeholder="Email address" />
                </section>
                <input id="subject" type="text" placeholder="Subject" />
                <textarea id="message-body" type="text" />
                <input id="submit-btn-contact" type="submit" value="Send Email" />
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