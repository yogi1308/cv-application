function ProjectsInfo() {
    return (
        <div className="project-experience">
            <div className="project">
                <h2>Project Name</h2>
                <input type="text" name='project' id='project' autoComplete="off" />
            </div>
            <div className="project-type">
                <h2>Project Type</h2>
                <input type="text" name='project-type' id='project-type' placeholder='Eg. Class Project' autoComplete="off" />
            </div>
            <div className="project-time">
                <h2>Time</h2>
                <input type="text" name="project-time" id="project-time" placeholder='Eg. Spring 2024' autoComplete="off" />
            </div>
            <div className="more-info">
                <h2>
                    <p className="info-on-more-info">
                        Provide highlights about your project, such as your role and activities, the technologies and tools you used, and any significant achievements or outcomes.
                        <br /> <br /> You can Bold, Italicize, Underline or add bullet points as you see fit
                    </p>
                    <span>Project Description</span> <span title>⨁</span>
                </h2>
                <div id="editor" contenteditable="true" onFocus={(e) => {if (e.target.innerHTML === "●	Developed an iOS app in Swift that allows users to locate a parked car or any previously marked location from a map <br> ●	Used the MVC (Model, View, Controller) Architecture and followed traditional mobile development conventions") {e.target.textContent = ""}; e.target.style.color = 'white' }} onBlur={(e) => {if (e.target.textContent.trim() === '') {e.target.innerHTML = "●	Developed an iOS app in Swift that allows users to locate a parked car or any previously marked location from a map <br /> ●	Used the MVC (Model, View, Controller) Architecture and followed traditional mobile development conventions"; e.target.style.color = 'grey' }}}>
                    ●	Developed an iOS app in Swift that allows users to locate a parked car or any previously marked location from a map
                    <br /> ●	Used the MVC (Model, View, Controller) Architecture and followed traditional mobile development conventions

                </div>
            </div>
        </div>
    )
}

export default ProjectsInfo