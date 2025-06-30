function Customize() {
    function handleFontChange(property, e) {
        if (property === 'letterSpacing') {
            const letterSpacing = e.target.value || 0
            document.querySelector('.resume').style.letterSpacing = letterSpacing + 'px';
            window.localStorage.setItem('letterSpacing', e.target.value)
            return;
        }
        if (property === 'wordSpacing') {
            const wordSpacing = e.target.value || 0
            document.querySelector('.resume').style.wordSpacing = wordSpacing + 'px';
            window.localStorage.setItem('wordSpacing', e.target.value)
            return;
        }
        if (property === 'nameFont') {
            document.querySelector('div.resume-personal-info > h1').style.fontFamily = e.target.value;
            window.localStorage.setItem('nameFont', e.target.value)
            return;
        }
        if (property === 'headingsFont') {
            document.querySelectorAll('.heading').forEach(el => {
                el.style.fontFamily = e.target.value;
            });
            window.localStorage.setItem('headingsFont', e.target.value)
            return;
        }
        if (property === 'bodyTextFont') {
            document.querySelectorAll('.body').forEach(el => {
                el.style.fontFamily = e.target.value;
            });        
            window.localStorage.setItem('bodyFont', e.target.value)
            return;
        }
        if (property === 'nameFontSize') {
            const nameFontSize = e.target.value || 12
            document.querySelector('div.resume-personal-info > h1').style.fontSize = nameFontSize + 'px';
            window.localStorage.setItem('nameFontSize', e.target.value)
            return;
        }
        if (property === 'headingsFontSize') {
            document.querySelectorAll('.heading').forEach(el => {
                el.style.fontSize = e.target.value + 'px';
            });
            window.localStorage.setItem('headingsFontSize', e.target.value)
            return;
        }
        if (property === 'bodyTextFontSize') {
            document.querySelectorAll('.body').forEach(el => {
                el.style.fontSize = e.target.value + 'px';
            });            
            window.localStorage.setItem('bodyFontSize', e.target.value)
            return;
        }
    }
    return (
        <div className="customize-container">
            <div className="font-selector">
                <div className="select-font">
                    <h2>Name</h2>
                    <div className="custom-select" >
                        <select defaultValue={window.localStorage.getItem('nameFont')} name="font" id="" onChange={(e) => handleFontChange('nameFont', e)}>
                            <option value="Outfit">Outfit (default)</option>
                            <option value="Times New Roman">Times New Roman </option>
                            <option value="Georgia">Georgia </option>
                            <option value="Garamond">Garamond </option>
                            <option value="Arial">Arial </option>
                            <option value="Calibri">Calibri </option>
                            <option value="Helvetica">Helvetica </option>
                            <option value="Roboto">Roboto </option>
                        </select>
                    </div>
                </div>
                <div className="select-font">
                    <h2>Headings</h2>
                    <div className="custom-select">
                        <select defaultValue={window.localStorage.getItem('headingsFont')} name="font" id="" onChange={(e) => handleFontChange('headingsFont', e)}>
                            <option value="Outfit">Outfit (default)</option>
                            <option value="Times New Roman">Times New Roman </option>
                            <option value="Georgia">Georgia </option>
                            <option value="Garamond">Garamond </option>
                            <option value="Arial">Arial </option>
                            <option value="Calibri">Calibri </option>
                            <option value="Helvetica">Helvetica </option>
                            <option value="Roboto">Roboto </option>
                        </select>
                    </div>
                </div>
                <div className="select-font">
                    <h2>Body Text</h2>
                    <div className="custom-select">
                        <select defaultValue={window.localStorage.getItem('bodyFont')} name="font" id="" onChange={(e) => handleFontChange('bodyTextFont', e)}>
                            <option value="Outfit">Outfit (default)</option>
                            <option value="Times New Roman">Times New Roman </option>
                            <option value="Georgia">Georgia </option>
                            <option value="Garamond">Garamond </option>
                            <option value="Arial">Arial </option>
                            <option value="Calibri">Calibri </option>
                            <option value="Helvetica">Helvetica </option>
                            <option value="Roboto">Roboto </option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="font-size-selector">
                <h2>Customize Font Size</h2>
                <div className="font-size-input">
                    <div className="name-font-size">
                        <h2>Name</h2>
                        <input defaultValue={window.localStorage.getItem('nameFontSize') || 12} type="number" min={0} max={32} placeholder="22" onChange={(e) => handleFontChange('nameFontSize', e)}/>
                    </div>
                    <div className="heading-font-size">
                        <h2>Headings</h2>
                        <input defaultValue={window.localStorage.getItem('headingsFontSize') || 12} type="number" min={0} max={32} placeholder="12" onChange={(e) => handleFontChange('headingsFontSize', e)}/>
                    </div>
                    <div className="other-font-size">
                        <h2>Body Text</h2>
                        <input defaultValue={window.localStorage.getItem('bodyFontSize') || 12} type="number" min={0} max={32} placeholder="12" onChange={(e) => handleFontChange('bodyTextFontSize', e)}/>
                    </div>
                </div>
            </div>
            <div className="font-spacing-selector">
                <h2>Customize Spacing</h2>
                <div className="font-spacing-input">
                    <div className="name-font-size">
                        <h2>Letter Spacing</h2>
                        <input defaultValue={window.localStorage.getItem('letterSpacing') || 0} type="number" min={0} max={5} onChange={(e) => handleFontChange('letterSpacing', e)}/>
                    </div>
                    <div className="heading-font-size">
                        <h2>Word Spacing</h2>
                        <input defaultValue={window.localStorage.getItem('wordSpacing') || 0} type="number" min={0} max={24} onChange={(e) => handleFontChange('wordSpacing', e)}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Customize