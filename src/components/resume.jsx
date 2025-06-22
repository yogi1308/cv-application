import '../styles/resume.css'
import ResumePersonalInfo from './resume/resumePersonalInfo'
import ResumeSummary from './resume/resumeSummary'
import ResumeEducation from './resume/resumeEducation'
import ResumeSkills from './resume/resumeSkills'
import ResumeExperience from './resume/resumeExperience'
import ResumeProject from './resume/resumeProject'
import ResumeOtherExperience from './resume/resumeOtherExperience'
import ResumeActivities from './resume/resumeActivities'

function Resume() {
    return (
        <div className="resume-wrapper">
            <div className="resume">
                <ResumePersonalInfo />
                <ResumeSummary />
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