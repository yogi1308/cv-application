function ExperienceInfo() {
    return (
        <div className="experience">
            <div className='company-name'>
                <h2>Company Name</h2>
                <input type="text" name="company" id="company" autoComplete="off" />
            </div>
            <div className="company-location">
                <h2>Company Location</h2>
                <input type="text" name="company-location" id="company-location" autoComplete="off"/>
            </div>
            <div className="position">
                <h2>Position Title</h2>
                <input type="text" name='position-title' id='position-title' autoComplete="off" />
            </div>
            <div className="Time-period">
                <h2>Time Period</h2>
                <div className="from-to">
                    <input type="text" name="time-from" id="time-from" placeholder='From' autoComplete="off"/>
                    <input type="text" name="time-to" id="time-to" placeholder='To' autoComplete="off"/>
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
                <div id="editor" contenteditable="true" onFocus={(e) => {if (e.target.innerHTML === "●	Designed a Jira Gadget (plugin) with React.js front-end and a JavaScript and Python backend that tracks open tickets<br> ●	Formulated a Python script to display data read in from a CSV file, using graphing functions from the Plotly library<br> ●	Programmed a Dash (Flask) app that handles POST requests and displays the user’s requested graph on the gadget<br>●	Improved server-gadget communication to provide a ready-to-install product for the customer, improving installation time by 25%") {e.target.textContent = ""}; e.target.style.color = 'var(--primary-text-color)' }} onBlur={(e) => {if (e.target.textContent.trim() === '') {e.target.innerHTML = "●	Designed a Jira Gadget (plugin) with React.js front-end and a JavaScript and Python backend that tracks open tickets<br> ●	Formulated a Python script to display data read in from a CSV file, using graphing functions from the Plotly library<br> ●	Programmed a Dash (Flask) app that handles POST requests and displays the user’s requested graph on the gadget<br>●	Improved server-gadget communication to provide a ready-to-install product for the customer, improving installation time by 25%"; e.target.style.color = 'grey' }}}>
                    ●	Designed a Jira Gadget (plugin) with React.js front-end and a JavaScript and Python backend that tracks open tickets 
                    <br /> ●	Formulated a Python script to display data read in from a CSV file, using graphing functions from the Plotly library
                    <br /> ●	Programmed a Dash (Flask) app that handles POST requests and displays the user’s requested graph on the gadget
                    <br />●	Improved server-gadget communication to provide a ready-to-install product for the customer, improving installation time by 25%
                </div>
            </div>
        </div>
    )
}

export default ExperienceInfo