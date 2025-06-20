import '../styles/sidebar.css'

function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <form action="" className="personal-info" autoComplete="on">
            <div className="personal-info">
                <div className="section-heading">
                    <h1>Personal Information</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
                </div>
                <div className="fullName">
                    <h2>FullName</h2>
                    <input type="text" name="name" id="name" autoFocus="on" />
                </div>
                <div className="address">
                    <h2>Address</h2>
                    <input type="text" name="address" id="address" />
                </div>
                <div className="mail">
                    <h2>Email</h2>
                    <input type="email" name="email" id="email" />
                </div>
                <div className="phone">
                    <h2>Phone No.</h2>
                    <input type="number" name="phone" id="phone" />
                </div>
                <div className="github">
                    <h2>GitHub Profile URL</h2>
                    <input type="url" name="github" id="github" />
                </div>
                <div className="linkedIn">
                    <h2>linkedIn</h2>
                    <input type="url" name="linkedIn" id="linkedIn" />
                </div>
                <div className="portfolio">
                    <h2>Personal Portfolio Website</h2>
                    <input type="url" name="portfolio" id="portfolio" />
                </div>
            </div>
        </form>
      </div>
    </>
  )
}

export default Sidebar