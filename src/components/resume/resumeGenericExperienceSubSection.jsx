const defaultText = `
● Designed a Jira Gadget (plugin) with React.js front-end and a JavaScript and Python backend that tracks open tickets
<br />● Formulated a Python script to display data read in from a CSV file, using graphing functions from the Plotly library
<br />● Programmed a Dash (Flask) app that handles POST requests and displays the user’s requested graph on the gadget
<br />● Improved server-gadget communication to provide a ready-to-install product for the customer, improving installation time by 25%
`;

function ResumeGenericExperienceSubSection({subSec}) {
    if (subSec.hide) return null
    const nameLoc = [subSec.experienceName, subSec.experienceLocation].filter(Boolean).join(', ');
    const fullTitle = [nameLoc, subSec.experienceRole].filter(Boolean).join(': ');
    const timePeriod = [subSec.experienceTimeFrom, subSec.experienceTimeTo].filter(Boolean).join(' - ')
    return (
        <div className="resume-experience-container body"> 
            <div className="resume-experience">
                <p><strong>{fullTitle || "McKesson, Scottsdale, AZ:  Software Engineering Intern"}</strong></p>
                <p>{timePeriod || "Jun 2024 – Aug 2024"}</p>
            </div>
            <p className="bullet-points" dangerouslySetInnerHTML={{
                __html:
                subSec.additionalInfo && subSec.additionalInfo.trim() !== ""
                    ? subSec.additionalInfo
                    : defaultText,
            }}/>
        </div>

    )
}

export default ResumeGenericExperienceSubSection