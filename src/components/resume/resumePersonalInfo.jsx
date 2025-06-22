

function ResumePersonalInfo({name , otherPersonalDetails}) {
    const infoLine = otherPersonalDetails.filter(detail => detail.trim() !== '').join(' ● ');
    return (
        <div className="resume-personal-info">
            <h1 className="resume-personal-info-name resume-header">{name || "Computer Science Sundevil"}</h1>
            <div className="resume-other-personal-info">
                <p>{infoLine || "480-965-2966 • CSSundevil@asu.edu • linkedin.com/in/CSSundevil • www.github.com/CSSundevil" }</p>
            </div>
        </div>
    )
}

export default ResumePersonalInfo