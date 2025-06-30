import { useState } from 'react'
import { useEffect, useRef } from 'react'
import Sidebar from './components/sidebar.jsx'
import Resume from './components/resume.jsx'
import onLoadSidebarClicks from './components/onLoad.js';

export {emptySchool, emptyExperienceSubsection, skillsObject}

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
  const [name, setName] = useState(() => localStorage.getItem('name') || '')
  useEffect(() => {localStorage.setItem('name', name)}, [name])

  const [otherPersonalDetails, setOtherPersonalDetails] = useState(() => {
    const stored = localStorage.getItem('otherPersonalDetails')
    return stored ? JSON.parse(stored) : ['', '', '', '', '', '']
  })
  useEffect(() => {localStorage.setItem('otherPersonalDetails',JSON.stringify(otherPersonalDetails))
  }, [otherPersonalDetails])

  const [summary, setSummary] = useState(() => localStorage.getItem('summary') || '')
  useEffect(() => {localStorage.setItem('summary', summary)
  }, [summary])

  const [showSummary, setShowSummary] = useState(() => {
    const stored = localStorage.getItem('showSummary')
    return stored ? JSON.parse(stored) : true
  })
  useEffect(() => {localStorage.setItem('showSummary', JSON.stringify(showSummary))
  }, [showSummary])

  const [education, setEducation] = useState(() => {
    const stored = localStorage.getItem('education')
    return stored ? JSON.parse(stored) : [{ id: 0, ...emptySchool }]
  })
  useEffect(() => {localStorage.setItem('education', JSON.stringify(education))
  }, [education])

  const [showSkills, setShowSkills] = useState(() => {
    const stored = localStorage.getItem('showSkills')
    return stored ? JSON.parse(stored) : true
  })
  useEffect(() => {localStorage.setItem('showSkills', JSON.stringify(showSkills))
  }, [showSkills])

  const [skills, setSkills] = useState(() => {
    const stored = localStorage.getItem('skills')
    return stored ? JSON.parse(stored) : [{ id: 0, ...skillsObject }]
  })
  useEffect(() => {localStorage.setItem('skills', JSON.stringify(skills))
  }, [skills])

  const [experiences, setExperience] = useState(() => {
    const stored = localStorage.getItem('experiences')
    return stored ? JSON.parse(stored) : [{id: crypto.randomUUID(), hide: false, experienceTitle: '', subSections: [{ id: crypto.randomUUID(), ...emptyExperienceSubsection }]}]
  })
  useEffect(() => {localStorage.setItem('experiences', JSON.stringify(experiences))
  }, [experiences])

  const [showExample, setShowExample] = useState(() => {
    const stored = localStorage.getItem('showExample')
    return stored ? JSON.parse(stored) : false
  })
  useEffect(() => {localStorage.setItem('showExample',JSON.stringify(showExample))
  }, [showExample])

  const didInit = useRef(false)
  useEffect(() => {
    if (didInit.current) return        // skip second run
    didInit.current = true
    onLoadSidebarClicks()
  }, [])

  return (
    <>
      <Sidebar setName={setName} setOtherPersonalDetails={setOtherPersonalDetails} setSummary={setSummary} showSummary={showSummary} setShowSummary={setShowSummary} 
      setEducation={setEducation} education={education} showSkills={showSkills} setShowSkills={setShowSkills} setSkills={setSkills} skills={skills}
      experiences={experiences} setExperience={setExperience} setShowExample={setShowExample} showExample={showExample} />
      
      <Resume name={name} otherPersonalDetails={otherPersonalDetails} summary={summary} showSummary={showSummary} 
      education={education} showSkills={showSkills} skills={skills} experiences={experiences} showExample={showExample} />
    </>
  )
}

export default App