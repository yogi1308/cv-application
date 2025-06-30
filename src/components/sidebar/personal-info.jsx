function PersonalInfo({ setName, setOtherPersonalDetails}) {
  return (
    <div className="personal-info">
        <div className="fullName">
            <h2>Full Name</h2>
            <input type="text" name="name" id="name" autoFocus="on" autoComplete="off" defaultValue={window.localStorage.getItem('name')} onChange={e => setName(e.target.value)}/>
        </div>
        <div className="address">
            <h2>Address</h2>
            <input defaultValue={window.localStorage.getItem('otherPersonalDetails')? JSON.parse(window.localStorage.getItem('otherPersonalDetails'))[0] : ''} 
            type="text" name="address" id="address" autoComplete="off" onChange={e => setOtherPersonalDetails(prev => [e.target.value, ...prev.slice(1)])}/>
        </div>
        <div className='mail-and-phone'>
            <div className="phone">
                <h2>Phone No.</h2>
                <input defaultValue={window.localStorage.getItem('otherPersonalDetails')? JSON.parse(window.localStorage.getItem('otherPersonalDetails'))[1] : ''}
                type="tel" name="phone" id="phone" autoComplete="off" onChange={e => setOtherPersonalDetails(prev => [prev[0], e.target.value, ...prev.slice(2)])}/>
            </div>
            <div className="mail">
                <h2>Email</h2>
                <input defaultValue={window.localStorage.getItem('otherPersonalDetails')? JSON.parse(window.localStorage.getItem('otherPersonalDetails'))[2] : ''}
                type="email" name="email" id="email" autoComplete="off" onChange={e => setOtherPersonalDetails(prev => [...prev.slice(0, 2) , e.target.value, ...prev.slice(3)])}/>
            </div>
        </div>
        <div className="url-links">
            <div className="github">
                <h2>GitHub Profile URL</h2>
                <input defaultValue={window.localStorage.getItem('otherPersonalDetails')? JSON.parse(window.localStorage.getItem('otherPersonalDetails'))[3] : ''}
                type="url" name="github" id="github" placeholder='www.github.com/CS' autoComplete="off" onChange={e => setOtherPersonalDetails(prev => [...prev.slice(0, 3) , e.target.value, ...prev.slice(4)])}/>
            </div>
            <div className="linkedIn">
                <h2>LinkedIn</h2>
                <input defaultValue={window.localStorage.getItem('otherPersonalDetails')? JSON.parse(window.localStorage.getItem('otherPersonalDetails'))[4] : ''}
                type="url" name="linkedIn" id="linkedIn" placeholder='linkedin.com/in/CS' autoComplete="off" onChange={e => setOtherPersonalDetails(prev => [...prev.slice(0, 4) , e.target.value, ...prev.slice(5)])}/>
            </div>
        </div>
        <div className="portfolio">
            <h2>Personal Portfolio Website</h2>
            <input defaultValue={window.localStorage.getItem('otherPersonalDetails')? JSON.parse(window.localStorage.getItem('otherPersonalDetails'))[5] : ''}
            type="url" name="portfolio" id="portfolio" autoComplete="off" onChange={e => setOtherPersonalDetails(prev => [...prev.slice(0, 5) , e.target.value])}/>
        </div>
    </div>
  )
}

export default PersonalInfo