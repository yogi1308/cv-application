function EducationInfo() {
    return (
        <>
            <div className="school-name">
                <div className="school-name-header">
                    <h2>School Name</h2>
                    <div className="add-or-delete">
                        <div className="add-icon" style={{ fontSize: '2rem' }} title="Add" >+</div>
                        <div className="delete-icon" style={{ fontSize: '1.5rem'}} title="delete" >⨂</div>
                        <div className="hide"> <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"/></svg></div>
                        <div className="school-dropdown" style={{ fontSize: '1.5rem' }}>▾</div>
                    </div>
                </div>
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
                    <input type="month" name="graduation" id="graduation" autoComplete="off" />
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
                    <span>Additional Information</span> <span>⨁</span>
                </h2>
                <div id="editor" contentEditable="true" onFocus={(e) => {if (e.target.innerHTML === "<strong>Relevant Coursework:</strong>  Data Structures and Algorithms, Computer Vision, Foundations of Machine Learning<br> Dean's List Spring 2024<br> Summa Cum Laude") {e.target.textContent = ""} ; e.target.style.color = 'var(--primary-text-color)' }} onBlur={(e) => {if (e.target.textContent.trim() === '') {e.target.innerHTML = "<strong>Relevant Coursework:</strong>  Data Structures and Algorithms, Computer Vision, Foundations of Machine Learning<br> Dean's List Spring 2024<br> Summa Cum Laude"; e.target.style.color = 'grey' }}}>
                    <strong>Relevant Coursework:</strong>  Data Structures and Algorithms, Computer Vision, Foundations of Machine Learning
                    <br /> Dean's List Spring 2024
                    <br /> Summa Cum Laude
                </div>
            </div>
        </>
    )
}

export default EducationInfo