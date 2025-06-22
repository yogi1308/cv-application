function SkillsInfo() {
    return (
        <div className="skills">
            <div className="skill-name">
                <div>
                    <h2>Skill</h2>
                    <input type="text" name="skills" id="skills" placeholder='Front-End'autoComplete="off" />
                </div>
                <div>
                    <h2>Tools</h2>
                    <input type="text" name="tools" id="tools" placeholder='HTML, CSS, JavaScript, React' autoComplete="off" />
                </div>
            </div>
        </div>
    )
}

export default SkillsInfo