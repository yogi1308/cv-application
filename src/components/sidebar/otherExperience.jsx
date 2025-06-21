import '../../styles/sidebar.css'

function OtherExperience() {
    return (
        <div className="other-Experience">
            <div className="section-heading">
                <h1>Extra-Curricular/Leadership Expereince</h1>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
            </div>
            <div className='club'>
                <h2>Program/Club Name</h2>
                <input type="text" name="club" id="club" />
            </div>
            <div className="club-location">
                <h2>Program/Club Location</h2>
                <input type="text" name="club-location" id="club-location" />
            </div>
            <div className="role">
                <h2>Role</h2>
                <input type="text" name='role' id='role' />
            </div>
            <div className="Time-period">
                <h2>Time Period</h2>
                <div className="from-to">
                    <input type="text" name="club-time-from" id="club-time-from" placeholder='From'/>
                    <input type="text" name="club-time-to" id="club-time-to" placeholder='To'/>
                </div>
            </div>
            <div className="more-info">
                <h2>
                    <p className="info-on-more-info">
                        Provide highlights about your experience, including your roles and responsibilities, key projects or initiatives you worked on, technologies utilized, and any notable achievements or contributions to the organization.
                        <br /> <br />You can Bold, Italicize, Underline or add bullet points as you see fit
                    </p>
                    <span>Description</span> <span title>⨁</span>
                </h2>
                <div id="editor" contenteditable="true" onFocus={(e) => {if (e.target.innerHTML === "●	Attended weekly meetings to gain experience in Computer Science and Software Engineering topics") {e.target.textContent = ""}; e.target.style.color = 'white' }} onBlur={(e) => {if (e.target.textContent.trim() === '') {e.target.innerHTML = "●	Attended weekly meetings to gain experience in Computer Science and Software Engineering topics"; e.target.style.color = 'grey' }}}>
                    ●	Attended weekly meetings to gain experience in Computer Science and Software Engineering topics
                </div>
            </div>
        </div>
    )
}

export default OtherExperience