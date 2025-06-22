import '../styles/sidebar.css'
import PersonalInfo from './sidebar/personal-info'
import EducationInfo from './sidebar/education'
import SkillsInfo from './sidebar/skills'
import ExperienceInfo from './sidebar/experience'
import ProjectsInfo from './sidebar/projects'
import OtherExperience from './sidebar/otherExperience'
import Summary from './sidebar/summary'

function Sidebar({ setName, setOtherPersonalDetails, setSummary}) {
  return (
      <div className="sidebar">
        <form action="" autoComplete="on">
          <div className='section-container'>
            <div className="section-heading">
              <h1>Personal Information</h1>
              <div className="dropdown-svg" onClick={(e) => {e.target.classList.toggle('rotated');document.querySelector('.personal-info').classList.toggle('close'); e.currentTarget.closest('.section-container').style.marginBottom !== '0rem' ? e.currentTarget.closest('.section-container').style.marginBottom = '0rem' : e.currentTarget.closest('.section-container').style.marginBottom = ''}} style={{ fontSize: '1.5rem', cursor: 'pointer', userSelect: 'none' }}>▾</div>
            </div>
            <PersonalInfo setName={setName} setOtherPersonalDetails={setOtherPersonalDetails} />
          </div>
          <div className='section-container'>
            <div className="section-heading">
              <h1>Summary</h1>
              <div className="dropdown-svg" onClick={(e) => {e.target.classList.toggle('rotated');document.querySelector('.summary').classList.toggle('close'); e.currentTarget.closest('.section-container').style.marginBottom !== '0rem' ? e.currentTarget.closest('.section-container').style.marginBottom = '0rem' : e.currentTarget.closest('.section-container').style.marginBottom = ''}} style={{ fontSize: '1.5rem', cursor: 'pointer', userSelect: 'none' }}>▾</div>
            </div>
            <Summary setSummary={setSummary} />
          </div>
          <div className='section-container'>
            <div className="section-heading">
              <h1>Educational Background</h1>
              <div className="dropdown-svg" onClick={(e) => {e.target.classList.toggle('rotated');document.querySelector('.education-name').classList.toggle('close'); e.currentTarget.closest('.section-container').style.marginBottom !== '0rem' ? e.currentTarget.closest('.section-container').style.marginBottom = '0rem' : e.currentTarget.closest('.section-container').style.marginBottom = ''}} style={{ fontSize: '1.5rem', cursor: 'pointer', userSelect: 'none' }}>▾</div>
            </div>
            <EducationInfo />
          </div>
          <div className='section-container'>
            <div className="section-heading">
              <h1>Skills Section</h1>
              <div className="dropdown-svg" onClick={(e) => {e.target.classList.toggle('rotated');document.querySelector('.skills').classList.toggle('close'); e.currentTarget.closest('.section-container').style.marginBottom !== '0rem' ? e.currentTarget.closest('.section-container').style.marginBottom = '0rem' : e.currentTarget.closest('.section-container').style.marginBottom = ''}} style={{ fontSize: '1.5rem', cursor: 'pointer', userSelect: 'none' }}>▾</div>
            </div>
            <SkillsInfo />
          </div>
          <div className='section-container'>
            <div className="section-heading">
              <h1>Professional Experience</h1>
              <div className="dropdown-svg" onClick={(e) => {e.target.classList.toggle('rotated');document.querySelector('.experience').classList.toggle('close'); e.currentTarget.closest('.section-container').style.marginBottom !== '0rem' ? e.currentTarget.closest('.section-container').style.marginBottom = '0rem' : e.currentTarget.closest('.section-container').style.marginBottom = ''}} style={{ fontSize: '1.5rem', cursor: 'pointer', userSelect: 'none' }}>▾</div>
            </div>
            <ExperienceInfo />
          </div>
          <div className='section-container'>
            <div className="section-heading">
              <h1>Project Experience</h1>
              <div className="dropdown-svg" onClick={(e) => {e.target.classList.toggle('rotated');document.querySelector('.project-experience').classList.toggle('close'); e.currentTarget.closest('.section-container').style.marginBottom !== '0rem' ? e.currentTarget.closest('.section-container').style.marginBottom = '0rem' : e.currentTarget.closest('.section-container').style.marginBottom = ''}} style={{ fontSize: '1.5rem', cursor: 'pointer', userSelect: 'none' }}>▾</div>
            </div>
          <ProjectsInfo />
          </div>
          <div className='section-container'>
            <div className="section-heading">
              <h1>Extra-Curricular/Leadership Expereince</h1>
              <div className="dropdown-svg" onClick={(e) => {e.target.classList.toggle('rotated');document.querySelector('.other-experience').classList.toggle('close'); e.currentTarget.closest('.section-container').style.marginBottom !== '0rem' ? e.currentTarget.closest('.section-container').style.marginBottom = '0rem' : e.currentTarget.closest('.section-container').style.marginBottom = ''}} style={{ fontSize: '1.5rem', cursor: 'pointer', userSelect: 'none' }}>▾</div>
            </div>
            <OtherExperience />
          </div>
        </form>
      </div>
  )
}

export default Sidebar