function OtherExperience() {
    return (
        <div className="other-experience">
            <div className='club'>
                <h2>Program/Club Name</h2>
                <input type="text" name="club" id="club" autoComplete="off"/>
            </div>
            <div className="club-location">
                <h2>Program/Club Location</h2>
                <input type="text" name="club-location" id="club-location" autoComplete="off" />
            </div>
            <div className="role">
                <h2>Role</h2>
                <input type="text" name='role' id='role' autoComplete="off"/>
            </div>
            <div className="Time-period">
                <h2>Time Period</h2>
                <div className="from-to">
                    <input type="text" name="club-time-from" id="club-time-from" placeholder='From' autoComplete="off"/>
                    <input type="text" name="club-time-to" id="club-time-to" placeholder='To' autoComplete="off"/>
                </div>
            </div>
            <div className="more-info">
                <h2>
                    <p className="info-on-more-info">
                        Provide highlights about your experience, including your roles and responsibilities, key projects or initiatives you worked on, technologies utilized, and any notable achievements or contributions to the organization.
                        <br /> <br />You can Bold, Italicize, Underline or add bullet points as you see fit
                    </p>
                    <span>Description</span> <span>⨁</span>
                </h2>
                <div id="editor" contenteditable="true" onFocus={(e) => {if (e.target.innerHTML === "●	Attended weekly meetings to gain experience in Computer Science and Software Engineering topics") {e.target.textContent = ""}; e.target.style.color = 'var(--primary-text-color)' }} onBlur={(e) => {if (e.target.textContent.trim() === '') {e.target.innerHTML = "●	Attended weekly meetings to gain experience in Computer Science and Software Engineering topics"; e.target.style.color = 'grey' }}}>
                    ●	Attended weekly meetings to gain experience in Computer Science and Software Engineering topics
                </div>
            </div>
            <div className="add-or-delete">
                <div className="add-icon" style={{ fontSize: '2rem' }} title="Add" >+</div>
                <div className="delete-icon" style={{ fontSize: '1.5rem'}} title="delete" >⨂</div>
            </div>
        </div>
    )
}

export default OtherExperience