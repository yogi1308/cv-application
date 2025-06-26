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

const emptyCompany = {
  companyName: '',
  companyLocation: '',
  companyTitle: '',
  projectTimePeriod: '',
  additionalInfo: '',
  hide: false
}

const emptyProject = {
  projectName: '',
  projectType: '',
  projectRole: '',
  projectTimeFrom: '',
  projectTimeTo: '',
  additionalInfo: '',
  hide: false
}

const emptyActivity = {
  activityName: '',
  activityLocation: '',
  activityTitle: '',
  activityTimePeriodFrom: '',
  activityTimePeriodTo: '',
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
  const [companies, setCompany] = useState([{id: 0, ...emptyCompany}])
  const [projects, setProject] = useState([{id: 0, ...emptyProject}])
  const [activities, setActivities] = useState([{id: 0, ...emptyActivity}])
  const [showActivities, setShowActivities] = useState(true)
  const [showProjects, setShowProjects] = useState(true)

  return (
    <>
      <Sidebar setName={setName} setOtherPersonalDetails={setOtherPersonalDetails} setSummary={setSummary} setShowSummary={setShowSummary} 
      setEducation={setEducation} education={education} setShowSkills={setShowSkills} setSkills={setSkills} skills={skills}
      setCompany={setCompany} companies={companies} projects={projects} setProject={setProject} activities={activities} setActivities={setActivities}
      setShowActivities={setShowActivities} showActivities={showActivities} showProjects={showProjects} 
      setShowProjects={setShowProjects}/>
      <Resume name={name} otherPersonalDetails={otherPersonalDetails} summary={summary} showSummary={showSummary} 
      education={education} showSkills={showSkills} skills={skills} companies={companies} projects={projects} 
      activities={activities} showActivities={showActivities} showProjects={showProjects} />
    </>
  )
}

export default App