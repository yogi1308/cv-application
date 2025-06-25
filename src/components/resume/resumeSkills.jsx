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
                    else if (skill.skillType === "" && skill.skillName === "") {
                        return (
                            <p> <strong>Programming Languages:</strong> Java, JavaScript, Swift, Python, C/C++, Bash
                                <br /><strong>Front-End:</strong> HTML, CSS, React.js, Bootstrap 
                                <br /><strong>Machine Learning:</strong> CNN, Deep Learning, PyTorch, Transformers, GPT, LangChain, LlamaIndex, RAG pipelines
                                <br /><strong>Tools, Databases, and OS:</strong> Node.js, Express.js, PostgreSQL, Heroku, Git, GitHub, Windows, MacOS, Linux/Unix
                            </p>
                        )
                    }
                })}
            </div>
        </div>
    )
}

export default ResumeSkills