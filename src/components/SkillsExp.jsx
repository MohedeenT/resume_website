import "../styles/skills-exp.scss";
import resume from "../resumes/resume.pdf"




export default function SkillsExp(){
    return(
        <>
            <div id="download-btn">
            <a href={resume} download="resume"><button>Download Resume</button></a>
            </div>
        <div className="line">
                <hr />
                <h1> RELEVANT SKILLS </h1>
                <hr />
            </div>
            <div id="technologies">
                <div id="frontend">
                <div className="box">
                <section className="tech-type">
                    <h2>FRONTEND</h2>
                    </section>
                    <section className="tech">
                    <li>JavaScript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>SASS</li>
                    <li>React.js</li>
                    </section>
                </div>

                </div>
                <div id="backend">
                <div className="box">
                    <section className="tech-type">
                    <h2>BACKEND</h2>
                    </section>
                    <section className="tech">
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>PostgresSQL</li>
                    <li>Insomnia</li>
                    </section>
                </div>

                </div>
            </div>
            <div className="line">
                <hr />
                <h1> EXPERIENCE </h1>
                <hr />
            </div>
            <div id="experience">
                <div id="exp-1">
              <h3>Pharmacy Technical customer support agent</h3>
            <p>June 2022 {`-`} persent</p>
            <p>TELUS Health, Montreal, Quebec</p>      
                </div>
                <div id="exp-2">   
            <h3>Mobility Customer Sales and Service Agent</h3>
            <p>Aug 2015 {`-`} June 2022</p>
            <p>TELUS Mobility, Vancouver, BC</p>
                </div>
            </div>
            <div className="line">
                <hr />
                <h1> Languages </h1>
                <hr />
            </div>
            <div id="languages">
                <div><em>EN</em><span>ENGLISH</span> </div>
                <div><em>FR</em><span>FRENCH</span> </div>
                <div><em>AR</em><span>ARABIC</span> </div>
            </div>
        </>
    )
}