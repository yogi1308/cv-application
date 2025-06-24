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

const skillsObject = {skillType: '', skillName: ''}

function App() {
  const [name, setName] = useState('')
  const [otherPersonalDetails, setOtherPersonalDetails] = useState(['', '', '', '', '', ''])
  const [summary, setSummary] = useState('')
  const [showSummary, setShowSummary] = useState(true)
  const [education, setEducation] = useState([{id: 0, ...emptySchool}])
  const [showSkills, setShowSkills] = useState(true)
  const [skills, setSkills] = useState([{id : 0, ...skillsObject}])
  return (
    <>
      <Sidebar setName={setName} setOtherPersonalDetails={setOtherPersonalDetails} setSummary={setSummary} setShowSummary={setShowSummary} 
      setEducation={setEducation} education={education} setShowSkills={setShowSkills} setSkills={setSkills} skills={skills} />
      <Resume name={name} otherPersonalDetails={otherPersonalDetails} summary={summary} showSummary={showSummary} 
      education={education} showSkills={showSkills} skills={skills} />
    </>
  )
}

export default App