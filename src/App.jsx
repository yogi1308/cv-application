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
  // -- NAME --------------------------------------------------
  const [name, setName] = useState(
    () => localStorage.getItem('resume:name') || ''
  )
  useEffect(() => {
    localStorage.setItem('resume:name', name)
  }, [name])

  // -- OTHER PERSONAL DETAILS -------------------------------
  const [otherPersonalDetails, setOtherPersonalDetails] = useState(() => {
    const stored = localStorage.getItem('resume:otherPersonalDetails')
    return stored ? JSON.parse(stored) : ['', '', '', '', '', '']
  })
  useEffect(() => {
    localStorage.setItem(
      'resume:otherPersonalDetails',
      JSON.stringify(otherPersonalDetails)
    )
  }, [otherPersonalDetails])

  // -- SUMMARY ------------------------------------------------
  const [summary, setSummary] = useState(
    () => localStorage.getItem('resume:summary') || ''
  )
  useEffect(() => {
    localStorage.setItem('resume:summary', summary)
  }, [summary])

  const [showSummary, setShowSummary] = useState(() => {
    const stored = localStorage.getItem('resume:showSummary')
    return stored ? JSON.parse(stored) : true
  })
  useEffect(() => {
    localStorage.setItem('resume:showSummary', JSON.stringify(showSummary))
  }, [showSummary])

  // -- EDUCATION ----------------------------------------------
  const [education, setEducation] = useState(() => {
    const stored = localStorage.getItem('resume:education')
    return stored
      ? JSON.parse(stored)
      : [{ id: 0, ...emptySchool }]
  })
  useEffect(() => {
    localStorage.setItem('resume:education', JSON.stringify(education))
  }, [education])

  // -- SKILLS -------------------------------------------------
  const [showSkills, setShowSkills] = useState(() => {
    const stored = localStorage.getItem('resume:showSkills')
    return stored ? JSON.parse(stored) : true
  })
  useEffect(() => {
    localStorage.setItem('resume:showSkills', JSON.stringify(showSkills))
  }, [showSkills])

  const [skills, setSkills] = useState(() => {
    const stored = localStorage.getItem('resume:skills')
    return stored
      ? JSON.parse(stored)
      : [{ id: 0, ...skillsObject }]
  })
  useEffect(() => {
    localStorage.setItem('resume:skills', JSON.stringify(skills))
  }, [skills])

  // -- EXPERIENCES --------------------------------------------
  const [experiences, setExperience] = useState(() => {
    const stored = localStorage.getItem('resume:experiences')
    return stored
      ? JSON.parse(stored)
      : [
          {
            id: crypto.randomUUID(),
            hide: false,
            experienceTitle: '',
            subSections: [
              { id: crypto.randomUUID(), ...emptyExperienceSubsection },
            ],
          },
        ]
  })
  useEffect(() => {
    localStorage.setItem(
      'resume:experiences',
      JSON.stringify(experiences)
    )
  }, [experiences])

  // -- EXAMPLE TOGGLE ----------------------------------------
  const [showExample, setShowExample] = useState(() => {
    const stored = localStorage.getItem('resume:showExample')
    return stored ? JSON.parse(stored) : false
  })
  useEffect(() => {
    localStorage.setItem(
      'resume:showExample',
      JSON.stringify(showExample)
    )
  }, [showExample])
  const didInit = useRef(false)
  useEffect(() => {
    if (didInit.current) return        // skip second run
    didInit.current = true
    onLoadSidebarClicks()
  }, [])

  useEffect(() => {
    // print one key/value per line:
    Object.keys(window.localStorage).forEach((key) => {
      console.log(key, window.localStorage.getItem(key))
    })

    // —or— print it all as one big object:
    console.log(
      Object.fromEntries(
        Object.keys(window.localStorage)
          .map((k) => [k, window.localStorage.getItem(k)])
      )
    )
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