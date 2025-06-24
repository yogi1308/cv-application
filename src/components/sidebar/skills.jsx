const skillsObject = {skillType: '', skillName: ''}

function SkillsInfo({setSkills, index}) {
    function addSkill() {
        const newEntry = { id: Date.now(), ...skillsObject };
        setSkills(prev => [
            ...prev.slice(0, index + 1), newEntry, ...prev.slice(index + 1)
        ])
    }
    function deleteSkill() {
        setSkills(prev => {
            if (prev.length === 1) {return [{ id: Date.now(), ...skillsObject }]}
            else {return [...prev.slice(0, index), ...prev.slice(index + 1)]}
        })
    }
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
            <div className="add-or-delete">
                <div className="add-icon" onClick={() => addSkill()} style={{ fontSize: '2rem' }} title="Add" >+</div>
                <div className="delete-icon" onClick={() => deleteSkill()} style={{ fontSize: '1.5rem'}} title="delete" >⨂</div>
            </div>
        </div>
    )
}

export default SkillsInfo