import outdoors from "../images/outdoors-svgrepo-com.svg"
import gaming from "../images/gaming-screen-svgrepo-com.svg"
import tech from "../images/cpu-5-svgrepo-com.svg"
import travel from "../images/travel-round-svgrepo-com.svg"
import "../styles/home.scss";


export default function Main(){
    return(
        <>
            <div className="line">
                <hr />
                <h1>ABOUT ME </h1>
                <hr />
            </div>
            <h2>FULL STACK JAVASCRIPT WEB DEVELOPER</h2>
            <h3>CAREER OBJECTIVE</h3>
            <p>As an emerging Full Stack Web Developer with a foundational understanding of various technologies and programming languages, I am eager to apply my knowledge in a practical setting. My goal is to secure an entry-level position as a Full Stack Web Developer, where I can grow and harness my developing skills, and contribute to designing, developing, and implementing innovative applications and solutions.</p>
            <div className="line">
                <hr />
            <h1>EDUCATION</h1>
            <hr />
            </div>
            <div id="education">
                <div id="edu-1">
              <h3>Full Stack JavaScript Development Certificate</h3>
            <p>March 2023 {`-`} July 2023</p>
            <p>McGill University, Quebec, Canada</p>      
                </div>
                {/* <hr /> */}
                <div id="edu-2">   
            <h3>Computer and Information Technology Certificate</h3>
            <p>2020 {`-`} 2022</p>
            <p>McGill University, Quebec, Canada</p>
                </div>
            </div>
            <div className="line">
                <hr />
            <h1>HOBBIES</h1>
            <hr />
            </div>
            <div className="hobbies">
                <div className="hobbies-svg">
                    <div className="img-and-txt">
                     <h4>technology</h4>
                    <img src={tech} alt="outdoors" hover="outdoors"/>
                    </div>
                    <div className="img-and-txt">
                     <h4>outdoors</h4>
                    <img src={outdoors} alt="outdoors" hover="outdoors"/>
                    </div>
                    <div className="img-and-txt">
                     <h4>travel</h4>
                    <img src={travel} alt="outdoors" hover="outdoors"/>
                    </div>
                    <div className="img-and-txt">
                     <h4>gaming</h4>
                    <img src={gaming} alt="outdoors" hover="outdoors"/>
                    </div>
                    {/* <img src={tech} alt="" />
                    <img src={travel} alt="" />
                    <img src={gaming} alt="" /> */}
                </div>
            </div>
    </>
    )

}