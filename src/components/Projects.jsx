import "../styles/projects.scss"

export default function Projects(){
    return(
        <>
        <div className="line">
                <hr />
                <h1>PROJECTS</h1>
                <hr />
        </div>
        <div id="websites">
        <div id="snooze">
            <h3>PRODUCTIVITY WEBSITE</h3>
            <iframe title="snooze" src="https://mohedeent.github.io/Productivity_app/"></iframe>
            <a href="https://mohedeent.github.io/Productivity_app/" target="_blank" rel="noreferrer">
            <button>VISIT FULL SITE</button>
            </a>
        </div>
        <div id="games">
            <h3>GAMES</h3>
            <div className="placeholder">
                <h4>COMING SOON.</h4>
            </div>
            <a disabled href="https://mohedeent.github.io/Productivity_app/" target="_blank" rel="noreferrer">
            <button disabled={true}>VISIT FULL SITE</button>
            </a>
        </div>
        </div>
        <div className="line">
                <hr />
                <h1>SOURCES</h1>
                <hr />
        </div>
        <h1>TODO: ADD LINK TO GITHUB WITH SVG ALSO</h1>
        </>
    )
}