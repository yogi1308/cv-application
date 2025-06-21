import '../../styles/sidebar.css'

function SkillsInfo() {
    return (
        <div className="skills">
            <div className="section-heading">
                <h1>Skills Section</h1>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
            </div>
            <div className="skill-name">
                <div>
                    <h2>Skill</h2>
                    <input type="text" name="skills" id="skills" placeholder='Front-End' />
                </div>
                <div>
                    <h2>Tools</h2>
                    <input type="text" name="tools" id="tools" placeholder='HTML, CSS, JavaScript, React' />
                </div>
            </div>
        </div>
    )
}

export default SkillsInfo