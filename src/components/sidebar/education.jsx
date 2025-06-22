function EducationInfo() {
    return (
        <div className='education-name'>
            <div className="school-name">
                <h2>School Name</h2>
                <input type="text" name="school" id="school" autoComplete="off" />
            </div>
            <div className="location">
                <h2>Location</h2>
                <input type="text" name="location" id="location"autoComplete="off" />
            </div>
            <div className="graduation-and-gpa">
                <div className="gpa">
                    <h2>GPA</h2>
                    <input type="number" name="gpa" id="gpa" autoComplete="off" />
                </div>
                <div className="graduation">
                    <h2>Graduation</h2>
                    <input type="date" name="graduation" id="graduation" autoComplete="off" />
                </div>
            </div>
            <div className="major-and-degree">
                <div className="degree">
                    <h2>Degree</h2>
                    <input type="text" name='degree' id='degree' placeholder='Eg. B.S.' autoComplete="off" />

                </div>
                <div className="major">
                    <h2>Major</h2>
                    <input type="text" name='major' id='major' placeholder='Eg. Computer Science' autoComplete="off" />
                </div>
            </div>
            <div className="more-info">
                <h2>
                    <p className="info-on-more-info">
                        Provide highlights about your education, such as your degree, GPA, relevant coursework, and your activities or achievements there.
                        <br /> <br /> You can Bold, Italicize, Underline or add bullet points as you see fit
                    </p>
                    <span>Additional Information</span> <span title>⨁</span>
                </h2>
                <div id="editor" contenteditable="true" onFocus={(e) => {if (e.target.innerHTML === "<strong>Relevant Coursework:</strong>  Data Structures and Algorithms, Computer Vision, Foundations of Machine Learning<br> Dean's List Spring 2024<br> Summa Cum Laude") {e.target.textContent = ""} ; e.target.style.color = 'white' }} onBlur={(e) => {if (e.target.textContent.trim() === '') {e.target.innerHTML = "<strong>Relevant Coursework:</strong>  Data Structures and Algorithms, Computer Vision, Foundations of Machine Learning<br> Dean's List Spring 2024<br> Summa Cum Laude"; e.target.style.color = 'grey' }}}>
                    <strong>Relevant Coursework:</strong>  Data Structures and Algorithms, Computer Vision, Foundations of Machine Learning
                    <br /> Dean's List Spring 2024
                    <br /> Summa Cum Laude
                </div>
            </div>
        </div>
    )
}

export default EducationInfo