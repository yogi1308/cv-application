import '../styles/sidebar.css'
import PersonalInfo from './sidebar/personal-info'
import EducationInfo from './sidebar/education'
import SkillsInfo from './sidebar/skills'
import Summary from './sidebar/summary'
import GenericSection from './sidebar/genericExperience'
import Print from './sidebar/print'
import Customize from './sidebar/customize'

import {emptySchool, emptyExperienceSubsection, skillsObject} from '../App'

const eyeOpenPath = "M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z";
const eyeClosedPath = "m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z"

export {eyeOpenPath, eyeClosedPath}

function Sidebar({setShowExample, showExample, setName, setOtherPersonalDetails, setSummary, showSummary, setShowSummary, setEducation, education, showSkills, setShowSkills, setSkills, skills, setExperience, experiences}) {
  return ( 
  <>
    <div className="close-sidebar-icon" title='Open/Close Sidebar' onClick={(e) => {document.querySelector('.sidebar').classList.toggle('sidebar-close'); 
      document.querySelector('.close-sidebar-icon').classList.toggle('rotated-icon'); 
      e.currentTarget.querySelector('p').classList.toggle('turn-the-icon');
      document.querySelector('.resume-wrapper').classList.toggle('shift')}}><p>◁</p></div>
      <div className="sidebar">
        <form action="" autoComplete="on">
          <div className='section-container'>
            <div className="section-heading">
              <h1>Personal Information</h1>
              <div className="dropdown-svg" onClick={(e) => {e.target.classList.toggle('rotated');document.querySelector('.personal-info').classList.toggle('close'); e.currentTarget.closest('.section-container').style.marginBottom !== '0rem' ? e.currentTarget.closest('.section-container').style.marginBottom = '0rem' : e.currentTarget.closest('.section-container').style.marginBottom = ''}} style={{ fontSize: '2.5rem', cursor: 'pointer', userSelect: 'none' }}>▾</div>
            </div>
            <PersonalInfo setName={setName} setOtherPersonalDetails={setOtherPersonalDetails} />
          </div>
          <div className='section-container'>
            <div className="section-heading">
              <h1>Summary</h1>
              <div className='summary-dropdown-hide' >
                <div className="hide" > <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setShowSummary(prev => !prev)} height="25px" viewBox="0 -960 960 960" width="25px"><path d={showSummary ? eyeOpenPath : eyeClosedPath} /></svg></div>
                <div className="dropdown-svg" onClick={(e) => {e.target.classList.toggle('rotated');document.querySelector('.summary').classList.toggle('close'); e.currentTarget.closest('.section-container').style.marginBottom !== '0rem' ? e.currentTarget.closest('.section-container').style.marginBottom = '0rem' : e.currentTarget.closest('.section-container').style.marginBottom = ''}} style={{ fontSize: '2.5rem', cursor: 'pointer', userSelect: 'none' }}>▾</div>              
              </div>
            </div>
            <Summary setSummary={setSummary} />
          </div>
          <div className='section-container'>
            <div className="section-heading">
              <h1>Educational Background</h1>
              <div className="dropdown-svg" onClick={(e) => {e.target.classList.toggle('rotated'); document.querySelector('.education-info-container').classList.toggle('close'); e.currentTarget.closest('.section-container').style.marginBottom !== '0rem' ? e.currentTarget.closest('.section-container').style.marginBottom = '0rem' : e.currentTarget.closest('.section-container').style.marginBottom = ''}} style={{ fontSize: '2.5rem', cursor: 'pointer', userSelect: 'none' }}>▾</div>
            </div>
            <div className="education-info-container">
              {education.length === 0 && setEducation({id: 0, ...emptySchool})}
              {education.map((ed, idx) => (
                <EducationInfo setEducation={setEducation} key={ed.id} index={idx} education={education} />
              ))}
            </div>
          </div>
          <div className='section-container'>
            <div className="section-heading">
              <h1>Skills Section</h1>
              <div className="summary-dropdown-hide">
                <div className="hide"> <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setShowSkills(prev => !prev)} height="25px" viewBox="0 -960 960 960" width="25px"><path d={showSkills ? eyeOpenPath : eyeClosedPath} /></svg></div>
                <div className="dropdown-svg" onClick={(e) => {e.target.classList.toggle('rotated');document.querySelector('.skills-info-container').classList.toggle('close'); e.currentTarget.closest('.section-container').style.marginBottom !== '0rem' ? e.currentTarget.closest('.section-container').style.marginBottom = '0rem' : e.currentTarget.closest('.section-container').style.marginBottom = ''}} style={{ fontSize: '2.5rem', cursor: 'pointer', userSelect: 'none' }}>▾</div>
              </div>
            </div>
            <div className="skills-info-container">
              {skills.length === 0 && setSkills({id:0, ...skillsObject})}
              {skills.map((skill, idx) => (
                <SkillsInfo setSkills={setSkills} key={skill.id} index={idx} />
              ))}
            </div>
          </div>
          <div className='section-container'>
            <div className="section-heading">
              <h1>Experiences</h1>
              <div className="dropdown-hide">
                <div className="dropdown-svg" onClick={(e) => {e.target.classList.toggle('rotated');document.querySelector('.generic-info-container').classList.toggle('close'); e.currentTarget.closest('.section-container').style.marginBottom !== '0rem' ? e.currentTarget.closest('.section-container').style.marginBottom = '0rem' : e.currentTarget.closest('.section-container').style.marginBottom = ''}} style={{ fontSize: '2.5rem', cursor: 'pointer', userSelect: 'none' }}>▾</div>
              </div>
            </div>
            <div className="generic-info-container">
              {experiences.length === 0 && setExperience({id: crypto.randomUUID(), hide: false, experienceTitle: '', subSections: [{id: crypto.randomUUID(), ...emptyExperienceSubsection}]})}
              {experiences.map((experienceSection, idx) => (
                <GenericSection setExperience={setExperience} experiences={experiences} experienceSection={experienceSection} key={experienceSection.id} index={idx} />
              ))}
            </div>
          </div>
          <div className="section-container">
            <div className="section-heading">
              <h1>Customize</h1>
              <div className="dropdown-hide">
                <div className="dropdown-svg" onClick={(e) => {e.target.classList.toggle('rotated');document.querySelector('.customize-container').classList.toggle('close'); e.currentTarget.closest('.section-container').style.marginBottom !== '0rem' ? e.currentTarget.closest('.section-container').style.marginBottom = '0rem' : e.currentTarget.closest('.section-container').style.marginBottom = ''}} style={{ fontSize: '2.5rem', cursor: 'pointer', userSelect: 'none' }}>▾</div>
              </div>
            </div>
            <Customize />
          </div>
          <Print setShowExample={setShowExample} showExample={showExample} />
        </form>
      </div>
    </>
  )
}

export default Sidebar