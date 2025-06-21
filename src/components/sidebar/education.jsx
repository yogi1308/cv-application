import '../../styles/sidebar.css'

function EducationInfo() {
    return (
        <div className='education-name'>
            <div className="section-heading">
                <h1>Education</h1>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
            </div>
            <div className="school-name">
                <h2>School Name</h2>
                <input type="text" name="school" id="school" />
            </div>
            <div className="location">
                <h2>Location</h2>
                <input type="text" name="location" id="location" />
            </div>
            <div className="graduation-and-gpa">
                <div className="gpa">
                    <h2>GPA</h2>
                    <input type="number" name="gpa" id="gpa" />
                </div>
                <div className="graduation">
                    <h2>Graduation</h2>
                    <input type="date" name="graduation" id="graduation" />
                </div>
            </div>
            <div className="major-and-degree">
                <div className="degree">
                    <h2>Degree</h2>
                    <input type="text" name='degree' id='degree' placeholder='Eg. B.S.' />

                </div>
                <div className="major">
                    <h2>Major</h2>
                    <input type="text" name='major' id='major' placeholder='Eg. Computer Science'/>
                </div>
            </div>
            <div className="more-info">
                <h2>
                    <p className="info-on-more-info">
                        Provide highlights about your education, such as your degree, GPA, relevant coursework, and your activities or achievements there.
                        <br /> You can Bold, Italicize, Underline or add bullet points as you see fit
                    </p>
                    <span>More Info</span> <span title>⁕</span>
                </h2>
                <div id="editor" contenteditable="true">
                </div>
            </div>
        </div>
    )
}

export default EducationInfo