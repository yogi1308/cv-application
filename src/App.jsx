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
}

function App() {
  const [name, setName] = useState('')
  const [otherPersonalDetails, setOtherPersonalDetails] = useState(['', '', '', '', '', ''])
  const [summary, setSummary] = useState('')
  const [showSummary, setShowSummary] = useState(true)
  const [education, setEducation] = useState([emptySchool])
  return (
    <>
      <Sidebar setName={setName} setOtherPersonalDetails={setOtherPersonalDetails} setSummary={setSummary} setShowSummary={setShowSummary} setEducation={setEducation} education={education} />
      <Resume name={name} otherPersonalDetails={otherPersonalDetails} summary={summary} showSummary={showSummary} education={education} />
    </>
  )
}

export default App