import ResumeGenericExperienceSubSection from "./resumeGenericExperienceSubSection"

function ResumeGenericExperience({experiences}) {
        const visibleExperiences = experiences.filter(experience => !experience.hide);
    return (
        <div className="resume-experience-container">
            {visibleExperiences.map((experience) => { return (<>
                <p className="resume-experience resume-header"><strong>{experience.experienceTitle || "Professional Experience"}</strong></p>
                <div className="resume-experience-info">
                    {experience.subSections.map((subSec) => (<ResumeGenericExperienceSubSection subSec={subSec} />))}
                </div>
            </> )})}
        </div>
    )
}

export default ResumeGenericExperience