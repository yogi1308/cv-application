import { useState } from 'react'
import Sidebar from './components/sidebar.jsx'
import Resume from './components/resume.jsx'

const emptySchool = {
  schoolName: '',
  schoolLocation: '',
  gpa: '',
  graduation: '',
  degree: '',
  major: '',
  additionalInfo: '',
  hidden: false,
  showAdditionalInfo: true
}
const emptyExperienceSubsection = {
  experienceName: '',
  experienceLocation: '',
  experienceRole: '',
  experienceTimeFrom: '',
  experienceTimeTo: '',
  additionalInfo: '',
  hide: false
}

const skillsObject = {skillType: '', skillName: ''}

function App() {
  const [name, setName] = useState('')
  const [otherPersonalDetails, setOtherPersonalDetails] = useState(['', '', '', '', '', ''])
  const [summary, setSummary] = useState('')
  const [showSummary, setShowSummary] = useState(true)
  const [education, setEducation] = useState([{id: 0, ...emptySchool}])
  const [showSkills, setShowSkills] = useState(true)
  const [skills, setSkills] = useState([{id : 0, ...skillsObject}])
  const [experiences, setExperience] = useState([{id: crypto.randomUUID(), hide: false, experienceTitle: '', subSections: [{id: crypto.randomUUID(), ...emptyExperienceSubsection}]}])

  return (
    <>
      <Sidebar setName={setName} setOtherPersonalDetails={setOtherPersonalDetails} setSummary={setSummary} setShowSummary={setShowSummary} 
      setEducation={setEducation} education={education} setShowSkills={setShowSkills} setSkills={setSkills} skills={skills}
      experiences={experiences} setExperience={setExperience} />
      <Resume name={name} otherPersonalDetails={otherPersonalDetails} summary={summary} showSummary={showSummary} 
      education={education} showSkills={showSkills} skills={skills} experiences={experiences} />
    </>
  )
}

export default App