import "../styles/skills-exp.scss";



export default function SkillsExp(){
    return(
        <>
        <div className="line">
                <hr />
                <h1> RELEVANT SKILLS </h1>
                <hr />
            </div>
            <div id="technologies">
                <div id="frontend">
                <div className="box">
                    <h2>FRONTEND</h2>

                            <li>JavaScript</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>SASS</li>
                            <li>React.js</li>


                </div>

                </div>
                <div id="backend">
                <div className="box">
                    <h2>BACKEND</h2>

                            <li>Node.js</li>
                            <li>Express</li>
                            <li>PostgresSQL</li>
                            <li>Insomnia</li>

                </div>

                </div>
            </div>
            
        </>
    )
}