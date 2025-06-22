import { useState } from 'react'
import Sidebar from './components/sidebar.jsx'
import Resume from './components/resume.jsx'

function App() {
  const [name, setName] = useState('')
  const [otherPersonalDetails, setOtherPersonalDetails] = useState(['', '', '', '', '', ''])
  const [summary, setSummary] = useState('')
  return (
    <>
      <Sidebar setName={setName} setOtherPersonalDetails={setOtherPersonalDetails} setSummary={setSummary} />
      <Resume name={name} otherPersonalDetails={otherPersonalDetails} summary={summary} />
    </>
  )
}

export default App