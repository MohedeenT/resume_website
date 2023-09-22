import image from "../images/headshot.jpeg"

export default function Nav(props){
    console.log(props.page);



    return (
    <>

        <div id="nav-section">
    <nav>
        <div id="headshot-container">
        <img src={image} alt="" />
        </div>
        <h1>Mohedeen Tabbara</h1>
        <li>
            <button
            style={props.page === "Main" ? {background:'white'}:{}}
            onClick={()=>props.setPage("Main")}
            > HOME </button>
            </li>
        <li>
            <button
            style={props.page === "SkillsExp" ? {background:'white'}:{}}
            onClick={()=>props.setPage("SkillsExp")}
            > SKILLS & EXPERIENCE </button>
            </li>
        <li>
            <button
            style={props.page === "Projects" ? {background:'white'}:{}}
            onClick={()=>props.setPage("Projects")}
            > PROJECTS </button>
            </li>
        <li>
            <button
            style={props.page === "Contact" ? {background:'white'}:{}}
            onClick={()=>props.setPage("Contact")}
            > CONTACT </button>
            </li>
    </nav>
        </div>
    </>
    )
}