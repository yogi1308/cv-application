const eyeOpenPath = "M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z";
// const eyeClosedPath = "m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z"

function GenericSection() {
    return (
        <div className="generic-experience">
            <div className="expereice-name-header">
                <div className="header-and-icons">
                    <h2><label htmlFor="experience">Select Your Experience</label></h2>
                    <div className="add-or-delete" style={{paddingRight: '0.25rem'}}>
                        <div className="add-icon" style={{ fontSize: '1.75rem' }} title="Add" >+</div>
                        <div className="delete-icon" title="delete" >⨂</div>
                        <div className="hide" > <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px"><path d={eyeOpenPath}/></svg></div>
                        <div className="school-dropdown" onClick={(e) => {e.target.classList.toggle('rotated'); e.currentTarget.closest('.expereice-name-header').nextElementSibling.classList.toggle('close')}} style={{ fontSize: '1.5rem' }}>▾</div>
                    </div>
                </div>
                <div className="custom-select">
                    <select name="experience" id="experience">
                        <option disabled >Select Your Experience</option>
                        <option>Professional Experience</option>
                        <option>Work Experience</option>
                        <option>Project Experience</option>
                        <option>Leadership Experience</option>
                        <option>Extra-curricular Activities</option>
                        <option>Experience</option>
                        <option>Other</option>
                    </select>
                </div>
            </div>
            <div className="more-experience-info-section" style={{paddingLeft: '1rem'}}>
                <div className="experience-name">
                    <div className="subsection-name-and-dropdown" style={{paddingRight: '0.25rem'}}>
                        <h2>Name</h2>   <div className="school-dropdown" onClick={(e) => {e.target.classList.toggle('rotated'); e.currentTarget.closest('.experience-name').nextElementSibling.classList.toggle('close')}} style={{ fontSize: '1.5rem' }}>▾</div>
                    </div>
                    <input type="text" name='experience-name' id='experience-name' placeholder='Company/Team/Project/Club Name' autoComplete="off"/>
                </div>
                <div className="experience-other-more-info-container">
                    <div className="experience-location">
                        <h2>Location</h2>
                        <input type="text" name='experience-location' id='experience-location' placeholder='Enter Location' autoComplete="off"/>
                    </div>
                    <div className="experience-role">
                        <h2>Role</h2>
                        <input type="text" name='experience-role' id='experience-role' placeholder='Job Role or Title' autoComplete="off" />
                    </div>
                    <div className="time-period">
                        <h2>Time Period</h2>
                        <div className="from-to">
                            <input type="text" name="club-time-from" id="club-time-from" placeholder='From' autoComplete="off" />
                            <input type="text" name="club-time-to" id="club-time-to" placeholder='To' autoComplete="off" />
                        </div>
                    </div>
                    <div className="more-info">
                        <h2>
                            <p className="info-on-more-info">
                                Provide highlights about your experience, such as your role and activities, the technologies and tools you used, and any significant achievements or outcomes.
                                <br /> <br /> You can Bold, Italicize, Underline or add bullet points as you see fit
                            </p>
                            <span>Description</span> <span>⨁</span>
                        </h2>
                        <div id="editor" contenteditable="true"
                        onFocus={(e) => {if (e.target.innerHTML === "●	Developed an iOS app in Swift that allows users to locate a parked car or any previously marked location from a map <br> ●	Used the MVC (Model, View, Controller) Architecture and followed traditional mobile development conventions") {e.target.textContent = ""}; e.target.style.color = 'var(--primary-text-color)' }}
                        onBlur={(e) => {if (e.target.textContent.trim() === '') {e.target.innerHTML = "●	Developed an iOS app in Swift that allows users to locate a parked car or any previously marked location from a map <br /> ●	Used the MVC (Model, View, Controller) Architecture and followed traditional mobile development conventions"; e.target.style.color = 'grey' }}}>
                            ●	Developed an iOS app in Swift that allows users to locate a parked car or any previously marked location from a map
                            <br /> ●	Used the MVC (Model, View, Controller) Architecture and followed traditional mobile development conventions
                        </div>
                    </div>
                </div>
                <div className="add-delete-hide-subsection">
                    <button style={{ fontSize: '2rem' }} title="Add a Subsection" ><div className="add-icon">+</div></button>
                    <button style={{ fontSize: '1.5rem'}} title="Delete this Subsection" ><div className="delete-icon" >⨂</div></button>
                    <button className="hide" > <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d={eyeOpenPath}/></svg></button>
                </div>
            </div>
        </div>
    )
}

export default GenericSection
