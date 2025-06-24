const defaultText = "<strong>Relevant Coursework:</strong>  Data Structures and Algorithms, Computer Vision, Foundations of Machine Learning"  

function ResumeEducation({education}) {
    const visibleSchools = education.filter(school => !school.hidden);
    return (
        <div className="resume-education-container">
            <p className="resume-education resume-header"><strong>Education</strong></p>
            <div className="resume-education-info-container">
                { visibleSchools.map(school => (
                    <div className="resume-education-info" key={school.id}>
                        <div className="resume-course-name">
                            <p><strong> {`${school.schoolName !== '' ? school.schoolName : ''}${school.schoolLocation ? ', ' + school.schoolLocation : ''}` || "Arizona State University, Tempe, AZ"}</strong></p>
                            <p>{school.graduation || "May 2026"}</p>
                        </div>
                        <div className="resume-school-name">
                            <p>{`${school.degree !== '' ? school.degree + ' ': ''}${school.major !== '' ? school.major : ''}` || "B.S Computer Science"}</p>                            
                            <p>{school.gpa || "3.82 GPA"}</p>
                        </div>
                        {school.showAdditionalInfo && 
                            <div dangerouslySetInnerHTML={{
                                __html:
                                school.additionalInfo && school.additionalInfo.trim() !== ""
                                    ? school.additionalInfo
                                    : defaultText,
                        }}/>
                        }
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ResumeEducation