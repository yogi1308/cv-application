import '../styles/sidebar.css'
import PersonalInfo from './sidebar/personal-info'
import EducationInfo from './sidebar/education'
import SkillsInfo from './sidebar/skills'
import ExperienceInfo from './sidebar/experience'
import ProjectsInfo from './sidebar/projects'
import OtherExperience from './sidebar/otherExperience'
import Summary from './sidebar/summary'

function Sidebar() {
  return (
      <div className="sidebar">
        <form action="" autoComplete="on">
          <div className='section-container'>
            <div className="section-heading">
              <h1>Personal Information</h1>
              <svg xmlns="http://www.w3.org/2000/svg" className="dropdown-svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black" onClick={(e) => {e.target.classList.toggle('rotated');document.querySelector('.personal-info').classList.toggle('close'); e.currentTarget.closest('.section-container').style.marginBottom !== '0rem' ? e.currentTarget.closest('.section-container').style.marginBottom = '0rem' : e.currentTarget.closest('.section-container').style.marginBottom = ''}}><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
            </div>
            <PersonalInfo />
          </div>
          <div className='section-container'>
            <div className="section-heading">
              <h1>Educational Background</h1>
              <svg xmlns="http://www.w3.org/2000/svg" className="dropdown-svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black" onClick={(e) => {e.target.classList.toggle('rotated');document.querySelector('.education-name').classList.toggle('close'); e.currentTarget.closest('.section-container').style.marginBottom !== '0rem' ? e.currentTarget.closest('.section-container').style.marginBottom = '0rem' : e.currentTarget.closest('.section-container').style.marginBottom = ''}}><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
            </div>
            <EducationInfo />
          </div>
          <div className='section-container'>
            <div className="section-heading">
              <h1>Skills Section</h1>
              <svg xmlns="http://www.w3.org/2000/svg" className="dropdown-svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black" onClick={(e) => {e.target.classList.toggle('rotated');document.querySelector('.skills').classList.toggle('close'); e.currentTarget.closest('.section-container').style.marginBottom !== '0rem' ? e.currentTarget.closest('.section-container').style.marginBottom = '0rem' : e.currentTarget.closest('.section-container').style.marginBottom = ''}}><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
            </div>
            <SkillsInfo />
          </div>
          <div className='section-container'>
            <div className="section-heading">
              <h1>Professional Experience</h1>
              <svg xmlns="http://www.w3.org/2000/svg" className="dropdown-svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black" onClick={(e) => {e.target.classList.toggle('rotated');document.querySelector('.experience').classList.toggle('close'); e.currentTarget.closest('.section-container').style.marginBottom !== '0rem' ? e.currentTarget.closest('.section-container').style.marginBottom = '0rem' : e.currentTarget.closest('.section-container').style.marginBottom = ''}}><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
            </div>
            <ExperienceInfo />
          </div>
          <div className='section-container'>
            <div className="section-heading">
              <h1>Project Experience</h1>
              <svg xmlns="http://www.w3.org/2000/svg" className="dropdown-svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black" onClick={(e) => {e.target.classList.toggle('rotated');document.querySelector('.project-experience').classList.toggle('close'); e.currentTarget.closest('.section-container').style.marginBottom !== '0rem' ? e.currentTarget.closest('.section-container').style.marginBottom = '0rem' : e.currentTarget.closest('.section-container').style.marginBottom = ''}}><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
            </div>
          <ProjectsInfo />
          </div>
          <div className='section-container'>
            <div className="section-heading">
              <h1>Extra-Curricular/Leadership Expereince</h1>
              <svg xmlns="http://www.w3.org/2000/svg" className="dropdown-svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black" onClick={(e) => {e.target.classList.toggle('rotated');document.querySelector('.other-experience').classList.toggle('close'); e.currentTarget.closest('.section-container').style.marginBottom !== '0rem' ? e.currentTarget.closest('.section-container').style.marginBottom = '0rem' : e.currentTarget.closest('.section-container').style.marginBottom = ''}}><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
            </div>
            <OtherExperience />
          </div>
          <div className='section-container'>
            <div className="section-heading">
              <h1>Summary</h1>
              <svg xmlns="http://www.w3.org/2000/svg" className="dropdown-svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black" onClick={(e) => {e.target.classList.toggle('rotated');document.querySelector('.summary').classList.toggle('close'); e.currentTarget.closest('.section-container').style.marginBottom !== '0rem' ? e.currentTarget.closest('.section-container').style.marginBottom = '0rem' : e.currentTarget.closest('.section-container').style.marginBottom = ''}}><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
            </div>
            <Summary />
          </div>
        </form>
      </div>
  )
}

export default Sidebar