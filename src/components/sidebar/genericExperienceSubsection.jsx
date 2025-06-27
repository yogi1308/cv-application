import {emptyExperienceSubsection} from '../../App'
import {eyeOpenPath, eyeClosedPath} from '../../components/sidebar'

function GenericSubsection({setExperience, index, sectionIndex, experienceSub}) {
    function addExperienceSubSection(e) {
        e.preventDefault();
        const newEntry = { id: crypto.randomUUID(), ...emptyExperienceSubsection };
        setExperience(prev => 
            prev.map((sec, idx) =>
                idx === sectionIndex? {
                    ...sec,
                    subSections: [
                        ...sec.subSections.slice(0, index + 1),
                        newEntry,
                        ...sec.subSections.slice(index + 1)
                    ]
                    }
                : sec
            )
        )
    }

    function deleteExpereinceSubSection(e) {
        e.preventDefault();
        setExperience(prev => 
            prev.map((sec, idx) =>
                idx === sectionIndex? {
                    ...sec,
                    subSections: sec.subSections.length === 1 ? 
                    [{ id: crypto.randomUUID(), ...emptyExperienceSubsection }] 
                    : [...sec.subSections.slice(0, index), ...sec.subSections.slice(index + 1)]
                }
                : sec
            )
        )
    }

    function handleFieldChange(property, e) {
        if (property === 'additionalInfo') {
            setExperience(prev => 
                prev.map((sec, idx) =>
                    idx === sectionIndex? {
                        ...sec,
                        subSections: sec.subSections.map((subSec, subIdx) => 
                            subIdx === index ? { ...subSec, additionalInfo: `${e}` } : subSec
                        )
                    }
                    : sec
                )
            )
            return
        }
        if (property === 'hide') {
            e.preventDefault();
            setExperience(prev => 
                prev.map((sec, idx) =>
                    idx === sectionIndex? {
                        ...sec,
                        subSections: sec.subSections.map((subSec, subIdx) => 
                            subIdx === index ? { ...subSec, [property]: !subSec[property]} : subSec
                        )
                    }
                    : sec
                )
            )
            console.log(experienceSub)
            return
        }
        setExperience(prev => 
            prev.map((sec, idx) =>
                idx === sectionIndex? {
                    ...sec,
                    subSections: sec.subSections.map((subSec, subIdx) => 
                        subIdx === index ? { ...subSec, [property]: e.target.value } : subSec
                    )
                }
                : sec
            )
        )
    }

    return (
        <div className="more-experience-info-section" style={{paddingLeft: '1rem'}}>
            <div className="experience-name">
                <div className="subsection-name-and-dropdown" style={{paddingRight: '0.25rem'}}>
                    <h2>Name</h2>   
                    <div className="school-dropdown" onClick={(e) => {e.target.classList.toggle('rotated'); e.currentTarget.closest('.experience-name').nextElementSibling.classList.toggle('close'); e.currentTarget.closest('.more-experience-info-section').classList.toggle('reduce-gap')}} style={{ fontSize: '1.5rem' }}>▾</div>
                </div>
                <input type="text" name='experience-name' id='experience-name' placeholder='Company/Team/Project/Club Name' autoComplete="off" onChange={(e) => handleFieldChange('experienceName', e)}/>
            </div>
            <div className="experience-other-more-info-container">
                <div className="experience-location">
                    <h2>Location</h2>
                    <input type="text" name='experience-location' id='experience-location' placeholder='Enter Location' autoComplete="off" onChange={(e) => handleFieldChange('experienceLocation', e)}/>
                </div>
                <div className="experience-role">
                    <h2>Role</h2>
                    <input type="text" name='experience-role' id='experience-role' placeholder='Job Role or Title' autoComplete="off" onChange={(e) => handleFieldChange('experienceRole', e)}/>
                </div>
                <div className="time-period">
                    <h2>Time Period</h2>
                    <div className="from-to">
                        <input type="text" name="club-time-from" id="club-time-from" placeholder='From' autoComplete="off" onChange={(e) => handleFieldChange('experienceTimeFrom', e)}/>
                        <input type="text" name="club-time-to" id="club-time-to" placeholder='To' autoComplete="off" onChange={(e) => handleFieldChange('experienceTimeTo', e)}/>
                    </div>
                </div>
                <div className="more-info">
                    <h2>
                        <p className="info-on-more-info">
                            Provide highlights about your experience, such as your role and activities, the technologies and tools you used, and any significant achievements or outcomes.
                            <br /> <br /> You can Bold, Italicize, Underline or add bullet points as you see fit
                        </p>
                        <span>Description</span> <span>⨁</span>
                    </h2>
                    <div id="editor" contenteditable="true"
                    onFocus={(e) => {if (e.target.innerHTML === "●	Developed an iOS app in Swift that allows users to locate a parked car or any previously marked location from a map <br> ●	Used the MVC (Model, View, Controller) Architecture and followed traditional mobile development conventions") {e.target.textContent = ""}; e.target.style.color = 'var(--primary-text-color)' }}
                    onBlur={(e) => {if (e.target.textContent.trim() === '') {e.target.innerHTML = "●	Developed an iOS app in Swift that allows users to locate a parked car or any previously marked location from a map <br /> ●	Used the MVC (Model, View, Controller) Architecture and followed traditional mobile development conventions"; e.target.style.color = 'grey' }}}
                    onInput={e => {let html = e.currentTarget.innerHTML; html = html.replace(/^(?:<br\s*\/?>)+/i, ''); handleFieldChange('additionalInfo', html);}}>
                        ●	Developed an iOS app in Swift that allows users to locate a parked car or any previously marked location from a map
                        <br /> ●	Used the MVC (Model, View, Controller) Architecture and followed traditional mobile development conventions
                    </div>
                </div>
            </div>
            <div className="add-delete-hide-subsection">
                <button onClick={(e) => addExperienceSubSection(e)} style={{ fontSize: '2rem' }} title="Add a Subsection" ><div className="add-icon">+</div></button>
                <button onClick={(e) => deleteExpereinceSubSection(e)} style={{ fontSize: '1.5rem'}} title="Delete this Subsection" ><div className="delete-icon" >⨂</div></button>
                <button className="hide" onClick={(e) => {handleFieldChange('hide', e)}} > <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d={!experienceSub.hide? eyeOpenPath : eyeClosedPath}/></svg></button>
            </div>
        </div>
    )
}

export default GenericSubsection