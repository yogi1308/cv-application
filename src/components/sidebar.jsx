import '../styles/sidebar.css'
import PersonalInfo from './sidebar/personal-info'
import EducationInfo from './sidebar/education'
import SkillsInfo from './sidebar/skills'
import ExperienceInfo from './sidebar/experience'
import ProjectsInfo from './sidebar/projects'
import OtherExperience from './sidebar/otherExperience'

function Sidebar() {
  return (
      <div className="sidebar">
        <form action="" autoComplete="on">
            <PersonalInfo />
            <EducationInfo />
            <SkillsInfo />
            <ExperienceInfo />
            <ProjectsInfo />
            <OtherExperience />
        </form>
      </div>
  )
}

export default Sidebar