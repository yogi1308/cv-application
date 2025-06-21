import '../../styles/sidebar.css'

function PersonalInfo() {
  return (
    <div className="personal-info">
        {/* <div className="section-heading">
            <h1>Personal Information</h1>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
        </div> */}
        <div className="fullName">
            <h2>Full Name</h2>
            <input type="text" name="name" id="name" autoFocus="on" />
        </div>
        <div className="address">
            <h2>Address</h2>
            <input type="text" name="address" id="address" />
        </div>
        <div className='mail-and-phone'>
            <div className="mail">
                <h2>Email</h2>
                <input type="email" name="email" id="email" />
            </div>
            <div className="phone">
                <h2>Phone No.</h2>
                <input type="tel" name="phone" id="phone" />
            </div>
        </div>
        <div className="url-links">
            <div className="github">
                <h2>GitHub Profile URL</h2>
                <input type="url" name="github" id="github" placeholder='www.github.com/CS'/>
            </div>
            <div className="linkedIn">
                <h2>LinkedIn</h2>
                <input type="url" name="linkedIn" id="linkedIn" placeholder='linkedin.com/in/CS' />
            </div>
        </div>
        <div className="portfolio">
            <h2>Personal Portfolio Website</h2>
            <input type="url" name="portfolio" id="portfolio" />
        </div>
    </div>
  )
}

export default PersonalInfo