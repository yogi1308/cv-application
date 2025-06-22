import '../styles/resume.css'
import ResumePersonalInfo from './resume/resumePersonalInfo'
import ResumeSummary from './resume/resumeSummary'
import ResumeEducation from './resume/resumeEducation'
import ResumeSkills from './resume/resumeSkills'
import ResumeExperience from './resume/resumeExperience'
import ResumeProject from './resume/resumeProject'
import ResumeOtherExperience from './resume/resumeOtherExperience'
import ResumeActivities from './resume/resumeActivities'

function Resume({ name, otherPersonalDetails, summary }) {
    return (
        <div className="resume-wrapper">
            <div className="resume">
                <ResumePersonalInfo name={name} otherPersonalDetails={otherPersonalDetails} />
                <ResumeSummary summary={summary} />
                <ResumeEducation />
                <ResumeSkills />
                <ResumeExperience />
                <ResumeProject />
                <ResumeOtherExperience />
                <ResumeActivities />
            </div>
        </div>
    )
}

export default Resume