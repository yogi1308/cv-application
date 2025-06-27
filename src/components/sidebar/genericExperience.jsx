import GenericSubsection from './genericExperienceSubsection'
import {emptyExperienceSubsection} from '../../App'
import {eyeOpenPath, eyeClosedPath} from '../../components/sidebar'

function GenericSection({experienceSection, experiences, setExperience, index}) {
    function addExperience() {
        const newEntry = {id: crypto.randomUUID(), hide: false, experienceTitle: '', subSections: [{id: crypto.randomUUID(), ...emptyExperienceSubsection}]};
        setExperience(prev => [
            ...prev.slice(0, index + 1), newEntry, ...prev.slice(index + 1)
        ])
    }
    function deleteExperience() {
        setExperience(prev => {
            if (prev.length === 1) {return [{id: crypto.randomUUID(), hide: false, experienceTitle: '', subSections: [{id: crypto.randomUUID(), ...emptyExperienceSubsection}]}]}
            else {return [...prev.slice(0, index), ...prev.slice(index + 1)]}
        })
    }
    function handleFieldChange(property, e) {
        if (property === 'hide') {
            setExperience(prev => 
                prev.map((sec, idx) =>
                    idx === index? {...sec,[property]: !sec[property]}: sec
                )
            )
            return
        }
        if (e.target.value === 'Other') {
            e.currentTarget.closest('.custom-select-and-input').querySelector('input.other').classList.remove('hide-input')
        }
        if (property === 'experienceTitle' && e.target.value !== 'Other') {
            e.currentTarget.closest('.custom-select-and-input').querySelector('input.other').classList.add('hide-input')
        }
        if (property === 'experienceTitleOtherInput') {
            setExperience(prev => 
                prev.map((sec, idx) =>
                    idx === index? {...sec, experienceTitle: e.target.value}: sec
                )
            )
        }
        setExperience(prev => 
            prev.map((sec, idx) =>
                idx === index? {...sec,[property]: e.target.value}: sec
            )
        )
    }
    return (
        <div className="generic-experience">
            <div className="expereice-name-header">
                <div className="header-and-icons">
                    <h2><label htmlFor="experience">Select Your Experience</label></h2>
                    <div className="add-or-delete" style={{paddingRight: '0.25rem'}}>
                        <div className="add-icon" onClick={() => addExperience()} style={{ fontSize: '1.75rem' }} title="Add a new Experience Section" >+</div>
                        <div className="delete-icon" onClick={() => deleteExperience()} title="Delete this Experience Section" >⨂</div>
                        <div className="hide" onClick={(e) => {handleFieldChange('hide', e)}} > <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px"><path d={!experiences[index]?.hide ? eyeOpenPath : eyeClosedPath}/></svg></div>
                        <div className="school-dropdown" onClick={(e) => {e.target.classList.toggle('rotated'); e.currentTarget.closest('.generic-experience').querySelectorAll('.more-experience-info-section').forEach(elm => elm.classList.toggle('close'))}} style={{ fontSize: '1.5rem' }}>▾</div>
                    </div>
                </div>
                <div className="custom-select-and-input">
                    <div className="custom-select">
                        <select name="experience" id="experience" onChange={(e) => handleFieldChange('experienceTitle', e)}>
                            <option disabled >Select Your Experience</option>
                            <option>Professional Experience</option>
                            <option>Work Experience</option>
                            <option>Project Experience</option>
                            <option>Leadership Experience</option>
                            <option>Extra-curricular Activities</option>
                            <option>Experience</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <input className='other hide-input' placeholder='Please Specify' onChange={(e) => handleFieldChange('experienceTitleOtherInput', e)} ></input>
                </div>
            </div>
            {experienceSection.subSections.map((experienceSub, idx) => (
                <GenericSubsection setExperience={setExperience} key={experienceSub.id} experienceSub={experienceSub} index={idx} sectionIndex={index}/>
            ))}
        </div>
    )
}

export default GenericSection
