function ResumeSkills({skills}) {
    return (
        <div className="resume-skills-container">
            <p className="resume-skills resume-header"><strong>Technical Skills</strong></p>
            <div className="resume-skills-info">
                {skills.map((skill, idx) => {
                    if (skill.skillType !== "" && skill.skillName !== "") {
                        return (
                            <p key={idx}>
                                <strong>{skill.skillType}:</strong> {skill.skillName}
                            </p>
                        )
                    }
                    else if (skill.skillType === "" && skill.skillName !== "") {
                        return (
                            <p key={idx}>{skill.skillName}</p>
                        )
                    }
                    else if (skill.skillType !== "" && skill.skillName === "") {
                        return (
                            <p><strong>{skill.skillType}:</strong></p>
                        )
                    }
                })}
            </div>
        </div>
    )
}

export default ResumeSkills