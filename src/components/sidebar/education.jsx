const emptySchool = {
  schoolName: '',
  schoolLocation: '',
  gpa: '',
  graduation: '',
  degree: '',
  major: '',
  additionalInfo: '',
  hidden: false,
  showAdditionalInfo: true
}

const eyeOpenPath = "M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z";
const eyeClosedPath = "m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z"
let show = true
let showWholeSection = true

function EducationInfo({setEducation, index, education}) {
    function addSchool() {
        const newEntry = { id: Date.now(), ...emptySchool };
        setEducation(prev => [
            ...prev.slice(0, index + 1), newEntry, ...prev.slice(index + 1)
        ])
    }

    function deleteSchool() {
        setEducation(prev => {
            if (prev.length === 1) {return [{ id: Date.now(), ...emptySchool }]}
            else {return [...prev.slice(0, index), ...prev.slice(index + 1)]}
        })
    }

    function handleFieldChange(property, e) {
        if (property === 'additionalInfo') {
            setEducation(prev => 
                prev.map((school, idx) =>
                    idx === index ? { ...school, additionalInfo: `${e}` } : school
                )
            )
            return
        }
        if (property === 'graduation') {
            const [year, month] = e.target.value.split('-');
            const date = new Date(year, month - 1)
            const value = date.toLocaleString('default', { month: 'long', year: 'numeric' });
            setEducation(prev => 
                prev.map((school, idx) =>
                    idx === index ? { ...school, 'graduation': value } : school
                )
            )
            return
        }
        if (property === 'hidden') {
            setEducation(prev => 
                prev.map((school, idx) =>
                    idx === index ? { ...school, [property]: !school[property] } : school
                )
            )
            showWholeSection = !showWholeSection
            return
        }
        if (property === 'showAdditionalInfo') {
            setEducation(prev => 
                prev.map((school, idx) =>
                    idx === index ? { ...school, [property]: !school[property] } : school
                )
            )
            show = !show
            return
        }
        setEducation(prev => 
            prev.map((school, idx) =>
                idx === index ? { ...school, [property]: e.target.value } : school
            )
        )
    }

    return (
        <>
            <div className="school-name">
                <div className="school-name-header">
                    <h2>School Name</h2>
                    <div className="add-or-delete">
                        <div className="add-icon" onClick={() => addSchool()} style={{ fontSize: '2rem' }} title="Add" >+</div>
                        <div className="delete-icon"  onClick={() => deleteSchool()} style={{ fontSize: '1.5rem'}} title="delete" >⨂</div>
                        <div className="hide" onClick={(e) => {handleFieldChange('hidden', e)}} > <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d={!education[index]?.hidden ? eyeOpenPath : eyeClosedPath}/></svg></div>
                        <div className="school-dropdown" onClick={(e) => {e.target.classList.toggle('rotated'); e.currentTarget.closest('.school-name').nextElementSibling.classList.toggle('close')}} style={{ fontSize: '1.5rem' }}>▾</div>
                    </div>
                </div>
                <input type="text" name="school" id="school" autoComplete="off" onChange={(e) => handleFieldChange('schoolName', e)} />
            </div>
            <div className="other-school-info">
                <div className="location">
                    <h2>Location</h2>
                    <input type="text" name="location" id="location"autoComplete="off" onChange={(e) => handleFieldChange('schoolLocation', e)} />
                </div>
                <div className="graduation-and-gpa">
                    <div className="gpa">
                        <h2>Grades</h2>
                        <input type="text" name="gpa" id="gpa" autoComplete="off" placeholder="3.82 GPA" onChange={(e) => handleFieldChange('gpa', e)}/>
                    </div>
                    <div className="graduation">
                        <h2>Graduation</h2>
                        <input type="month" name="graduation" id="graduation" autoComplete="off" onChange={(e) => handleFieldChange('graduation', e)} />
                    </div>
                </div>
                <div className="major-and-degree">
                    <div className="degree">
                        <h2>Degree</h2>
                        <input type="text" name='degree' id='degree' placeholder='Eg. B.S.' autoComplete="off" onChange={(e) => handleFieldChange('degree', e)}/>
                    </div>
                    <div className="major">
                        <h2>Major</h2>
                        <input type="text" name='major' id='major' placeholder='Eg. Computer Science' autoComplete="off" onChange={(e) => handleFieldChange('major', e)}/>
                    </div>
                </div>
                <div className="more-info">
                    <h2>
                        <p className="info-on-more-info">
                            Provide highlights about your education, such as your degree, GPA, relevant coursework, and your activities or achievements there.
                            <br /> <br /> You can Bold, Italicize, Underline or add bullet points as you see fit
                        </p>
                        <span>Additional Information</span> <span className="pop-up" >⨁</span>
                    </h2>
                    <span className="hide" style={{ float: 'right' }} onClick={(e) => {handleFieldChange('showAdditionalInfo', e)}}> <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px"><path d={show ? eyeOpenPath : eyeClosedPath} /></svg></span>
                    <div id="editor" contenteditable="true" 
                    onInput={e => {let html = e.currentTarget.innerHTML; html = html.replace(/^(?:<br\s*\/?>)+/i, ''); handleFieldChange('additionalInfo', html);}}  
                    onFocus={(e) => {if (e.target.innerHTML === "<strong>Relevant Coursework:</strong>  Data Structures and Algorithms, Computer Vision, Foundations of Machine Learning<br> Dean's List Spring 2024<br> Summa Cum Laude") {e.target.textContent = ""} ; e.target.style.color = 'var(--primary-text-color)' }} 
                    onBlur={(e) => {if (e.target.textContent.trim() === '') {e.target.innerHTML = "<strong>Relevant Coursework:</strong>  Data Structures and Algorithms, Computer Vision, Foundations of Machine Learning<br> Dean's List Spring 2024<br> Summa Cum Laude"; e.target.style.color = 'grey' }}}>
                        <strong>Relevant Coursework:</strong>  Data Structures and Algorithms, Computer Vision, Foundations of Machine Learning
                        <br /> Dean's List Spring 2024
                        <br /> Summa Cum Laude
                    </div>
                </div>
            </div>
        </>
    )
}

export default EducationInfo