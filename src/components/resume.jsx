import '../styles/resume.css'
import ResumePersonalInfo from './resume/resumePersonalInfo'
import ResumeSummary from './resume/resumeSummary'
import ResumeEducation from './resume/resumeEducation'
import ResumeSkills from './resume/resumeSkills'
import ResumeGenericExperience from './resume/resumeGenericExperience'
import ResumeExamplePersonalInfo from './resume/resumeExamplePersonalInfo'
import ResumeExampleSummary from './resume/resumeExampleSummary'
import ResumeExampleEducation from './resume/resumeExampleEducation'
import ResumeExampleSkills from './resume/resumeExampleSkills'
import ResumeExperience from './resume/resumeExperience'
import ResumeProject from './resume/resumeProject'
import ResumeOtherExperience from './resume/resumeOtherExperience'
import ResumeActivities from './resume/resumeActivities'

function Resume({showExample, name, otherPersonalDetails, summary, showSummary, education, showSkills, skills, experiences}) {
    return (
        <div className="resume-wrapper">
            <div className="resume">
                {!showExample ? (
                    <>
                        <ResumePersonalInfo name={name} otherPersonalDetails={otherPersonalDetails} />
                        {showSummary && <ResumeSummary summary={summary} />}
                        <ResumeEducation education={education} />
                        {showSkills && <ResumeSkills skills={skills} />}
                        <ResumeGenericExperience experiences={experiences}/>
                    </>
                ) : (
                    <>
                        <ResumeExamplePersonalInfo/>
                        <ResumeExampleSummary />
                        <ResumeExampleEducation />
                        <ResumeExampleSkills />
                        <ResumeExperience />
                        <ResumeProject />
                        <ResumeOtherExperience />
                        <ResumeActivities />
                    </>
                )
                }
            </div>
        </div>
    )
}

export default Resume