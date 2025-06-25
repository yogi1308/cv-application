const defaultText = `
● Designed a Jira Gadget (plugin) with React.js front-end and a JavaScript and Python backend that tracks open tickets
<br />● Formulated a Python script to display data read in from a CSV file, using graphing functions from the Plotly library
<br />● Programmed a Dash (Flask) app that handles POST requests and displays the user’s requested graph on the gadget
<br />● Improved server-gadget communication to provide a ready-to-install product for the customer, improving installation time by 25%
`;
function ResumeExperience({companies}) {
    const visibleCompanies = companies.filter(company => !company.hide);
    return (
        <div className="resume-experience-container">
            <p className="resume-experience resume-header"><strong>Professional Experience</strong></p>
            <div className="resume-experience-info">
                {visibleCompanies.map((company) => {
                    const nameLoc = [company.companyName, company.companyLocation].filter(Boolean).join(', ');
                    const fullTitle = [nameLoc, company.companyTitle].filter(Boolean).join(': ');
                    const timePeriod = [company.companyTimeFrom, company.companyTimeTo].filter(Boolean).join(' - ')
                    return (
                        <div className="resume-company-container" key={company.id}>
                            <div className="resume-company">
                                <p><strong>{fullTitle || "McKesson, Scottsdale, AZ: Software Engineering Intern"}</strong></p>
                                <p>{timePeriod || "Jun 2024 – Aug 2024"}</p>
                            </div>
                            <p dangerouslySetInnerHTML={{
                                __html:
                                company.additionalInfo && company.additionalInfo.trim() !== ""
                                    ? company.additionalInfo
                                    : defaultText,
                            }}/>
                        </div>
                    );   
                })}
                {/* <div className="resume-company-container">
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
                </div> */}
            </div>
        </div>
    )
}

export default ResumeExperience