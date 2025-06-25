import '../styles/resume.css'
import ResumePersonalInfo from './resume/resumePersonalInfo'
import ResumeSummary from './resume/resumeSummary'
import ResumeEducation from './resume/resumeEducation'
import ResumeSkills from './resume/resumeSkills'
import ResumeExperience from './resume/resumeExperience'
import ResumeProject from './resume/resumeProject'
import ResumeOtherExperience from './resume/resumeOtherExperience'
import ResumeActivities from './resume/resumeActivities'

function Resume({ name, otherPersonalDetails, summary, showSummary, education, showSkills, skills, companies}) {
    return (
        <div className="resume-wrapper">
            <div className="resume">
                <ResumePersonalInfo name={name} otherPersonalDetails={otherPersonalDetails} />
                {showSummary && <ResumeSummary summary={summary} />}
                <ResumeEducation education={education} />
                {showSkills && <ResumeSkills skills={skills} />}
                <ResumeExperience companies={companies}/>
                <ResumeProject />
                <ResumeOtherExperience />
                <ResumeActivities />
            </div>
        </div>
    )
}

export default Resume