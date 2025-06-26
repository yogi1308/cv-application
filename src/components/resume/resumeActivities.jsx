const defaultText = `●	Attended weekly meetings to gain experience in Computer Science and Software Engineering topics`

function ResumeActivities({activities}) {
    const visibleActivities = activities.filter(activity => !activity.hide);
    return (
        <div className="resume-activities-container">
            <p className="resume-activities-heading resume-header"><strong>Activities</strong></p>
            <div className="resume-activities-info">
                {visibleActivities.map((activity) => {
                    const nameLoc = [activity.activityName, activity.activityLocation].filter(Boolean).join(', ');
                    const fullTitle = [nameLoc, activity.activityTitle].filter(Boolean).join(': ');
                    const timePeriod = [activity.activityTimePeriodFrom, activity.activityTimePeriodTo].filter(Boolean).join(' - ')
                    return (
                        <div className="resume-activities-container">
                            <div className="resume-activities">
                                <p><strong>{fullTitle || "Software Developers Association, Tempe, AZ"}</strong></p>
                                <p>{timePeriod || "Aug 2022 – Present"}</p>
                            </div>
                            <p dangerouslySetInnerHTML={{
                                __html:
                                activity.additionalInfo && activity.additionalInfo.trim() !== ""
                                    ? activity.additionalInfo
                                    : defaultText,
                            }}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ResumeActivities

{/* <div className="resume-activities-info">
                <div className="resume-activities-section-container">
                    <div className="resume-activities">
                        <p><strong>Software Developers Association, Tempe, AZ</strong></p>
                        <p> Aug 2022 – present</p>
                    </div>
                    <p> ●	Attended weekly meetings to gain experience in Computer Science and Software Engineering topics
                    </p>
                </div>
            </div> */}