function PersonalInfo() {
  return (
    <div className="personal-info">
        <div className="fullName">
            <h2>Full Name</h2>
            <input type="text" name="name" id="name" autoFocus="on" autoComplete="off" />
        </div>
        <div className="address">
            <h2>Address</h2>
            <input type="text" name="address" id="address" autoComplete="off" />
        </div>
        <div className='mail-and-phone'>
            <div className="mail">
                <h2>Email</h2>
                <input type="email" name="email" id="email" autoComplete="off" />
            </div>
            <div className="phone">
                <h2>Phone No.</h2>
                <input type="tel" name="phone" id="phone" autoComplete="off" />
            </div>
        </div>
        <div className="url-links">
            <div className="github">
                <h2>GitHub Profile URL</h2>
                <input type="url" name="github" id="github" placeholder='www.github.com/CS' autoComplete="off" />
            </div>
            <div className="linkedIn">
                <h2>LinkedIn</h2>
                <input type="url" name="linkedIn" id="linkedIn" placeholder='linkedin.com/in/CS' autoComplete="off" />
            </div>
        </div>
        <div className="portfolio">
            <h2>Personal Portfolio Website</h2>
            <input type="url" name="portfolio" id="portfolio" autoComplete="off" />
        </div>
    </div>
  )
}

export default PersonalInfo