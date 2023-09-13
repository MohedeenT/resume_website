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
            onClick={()=>props.setPage("Main")}
            > HOME </button>
            </li>
        <li>
            <button
            onClick={()=>props.setPage("SkillsExp")}
            > SKILLS AND EXPERIENCE </button>
            </li>
        <li>
            <button
            onClick={()=>props.setPage("Projects")}
            > PROJECTS </button>
            </li>
        <li>
            <button
            onClick={()=>props.setPage("Contact")}
            > CONTACT </button>
            </li>
    </nav>
        </div>
    </>
    )
}