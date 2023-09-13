import image from "../images/headshot.jpeg"

export default function Nav(){
    return (
    <>

        <div id="nav-section">
    <nav>
        <div id="headshot-container">
        <img src={image} alt="" />
        </div>
        <h1>Mohedeen Tabbara</h1>
        <li>
            <button> HOME </button>
            </li>
        <li>
            <button> SKILLSET </button>
            </li>
        <li>
            <button> PROJECTS </button>
            </li>
        <li>
            <button> CONTACT </button>
            </li>
    </nav>
        </div>
    </>
    )
}