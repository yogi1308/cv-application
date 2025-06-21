import '../styles/sidebar.css'
import PersonalInfo from './sidebar/personal-info'
import EducationInfo from './sidebar/education'

function Sidebar() {
  return (
      <div className="sidebar">
        <form action="" autoComplete="on">
            <PersonalInfo />
            <EducationInfo />
        </form>
      </div>
  )
}

export default Sidebar