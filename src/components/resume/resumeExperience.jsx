function ResumeExperience() {
    return (
        <div className="resume-experience-container">
            <p className="resume-experience resume-header"><strong>Professional Experience</strong></p>
            <div className="resume-experience-info">
                <div className="resume-company-container">
                    <div className="resume-company">
                        <p><strong>McKesson, Scottsdale, AZ:  Software Engineering Intern</strong></p>
                        <p>Jun 2024 – Aug 2024</p>
                    </div>
                    <p> ●	Designed a Jira Gadget (plugin) with React.js front-end and a JavaScript and Python backend that tracks open tickets
                        <br />●	Formulated a Python script to display data read in from a CSV file, using graphing functions from the Plotly library
                        <br />●	Programmed a Dash (Flask) app that handles POST requests and displays the user’s requested graph on the gadget
                        <br />●	Improved server-gadget communication to provide a ready-to-install product for the customer, improving installation time by 25%
                    </p>
                </div>
                <div className="resume-company-container">
                    <div className="resume-company">
                        <p><strong>Northrop Grumman, Rancho Bernardo, CA:  Software Engineering Intern</strong></p>
                        <p>Jun 2023 – Aug 2023</p>
                    </div>
                    <p> ●	Applied a voice-to-text based solution in Java with an inference time of 200 milliseconds, utilizing Google Cloud, Dialogflow, and Natural Language Processing APIs to search a large database that holds documentation relating to cyber security threats
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ResumeExperience