import '../styles/resume.css'
import ResumePersonalInfo from './resume/resumePersonalInfo'
import ResumeSummary from './resume/resumeSummary'
import ResumeEducation from './resume/resumeEducation'
import ResumeSkills from './resume/resumeSkills'
import ResumeGenericExperience from './resume/resumeGenericExperience'

function Resume({ name, otherPersonalDetails, summary, showSummary, education, showSkills, skills, experiences}) {
    return (
        <div className="resume-wrapper">
            <div className="resume">
                <ResumePersonalInfo name={name} otherPersonalDetails={otherPersonalDetails} />
                {showSummary && <ResumeSummary summary={summary} />}
                <ResumeEducation education={education} />
                {showSkills && <ResumeSkills skills={skills} />}
                <ResumeGenericExperience experiences={experiences}/>
            </div>
        </div>
    )
}

export default Resume