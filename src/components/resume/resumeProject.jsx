const defaultText = `●	Developed an iOS app in Swift that allows users to locate a parked car or any previously marked location from a map
                        <br />●	Used the MVC (Model, View, Controller) Architecture and followed traditional mobile development conventions`

function ResumeProject({projects}) {
    const visibleProjects = projects.filter(project => !project.hide);
    return (
        <div className="resume-project-container">
            <p className="resume-project resume-header"><strong>Projects</strong></p>
            <div className="resume-project-info">
                {visibleProjects.map((project) => {
                    const nameLoc = [project.projectName, project.projectType].filter(Boolean).join(', ');
                    const fullTitle = [nameLoc, project.projectRole].filter(Boolean).join(': ');
                    return (
                        <div className="resume-project-container">
                            <div className="resume-project">
                                <p><strong>{fullTitle || "Where's My Car? (iOS Application), Class Project: Documentation Lead"}</strong></p>
                                <p>{project.projectTimePeriod !== "" ? project.projectTimePeriod : "Spring 2024"}</p>
                            </div>
                            <p dangerouslySetInnerHTML={{
                                __html:
                                project.additionalInfo && project.additionalInfo.trim() !== ""
                                    ? project.additionalInfo
                                    : defaultText,
                            }}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ResumeProject

{/* <div className="resume-project-container">
                    <div className="resume-project">
                        <p><strong>Where's My Car? (iOS Application), Class Project</strong></p>
                        <p>Spring 2024</p>
                    </div>
                    <p> ●	Developed an iOS app in Swift that allows users to locate a parked car or any previously marked location from a map
                        <br />●	Used the MVC (Model, View, Controller) Architecture and followed traditional mobile development conventions
                    </p>
                </div>
                <div className="resume-project-container">
                    <div className="resume-project">
                        <p><strong>Facial Recognition, Class Project</strong></p>
                        <p>Fall 2023</p>
                    </div>
                    <p> ●	Built a web app utilizing React.js and Node.js to detect faces in a user entered image as a part of an online course
                        <br />●	Created a RESTful API (Flask) to register users and to track the number of images submitted in a PostgreSQL database
                        <br />●	Achieved 85% accuracy through effective data preprocessing and model tuning
                    </p>
                </div>
                <div className="resume-project-container">
                    <div className="resume-project">
                        <p><strong>Daily Weather Update, Personal Project</strong></p>
                        <p>Summer 2022</p>
                    </div>
                    <p> ●	Devised a program using the Dark Sky weather API to get data about the forecast for a certain location
                        <br />●	Utilized Apache Kafka with Python to set up a secure connection and send daily weather emails
                    </p>
                </div> */}