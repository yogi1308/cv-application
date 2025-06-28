function Customize() {
    function handleFontChange(property, e) {
        if (property === 'letterSpacing') {
            document.querySelector('.resume').style.letterSpacing = e.target.value + 'px';
            return;
        }
        if (property === 'wordSpacing') {
            document.querySelector('.resume').style.wordSpacing = e.target.value + 'px';
            return;
        }
        if (property === 'nameFont') {
            document.querySelector('div.resume-personal-info > h1').style.fontFamily = e.target.value;
            return;
        }
        if (property === 'headingsFont') {
            document.querySelectorAll('.heading').forEach(el => {
                el.style.fontFamily = e.target.value;
            });    
            console.log(e.target.value)    
            return;
        }
        if (property === 'bodyTextFont') {
            document.querySelectorAll('.body').forEach(el => {
                el.style.fontFamily = e.target.value;
            });        
            return;
        }
        if (property === 'nameFontSize') {
            document.querySelector('div.resume-personal-info > h1').style.fontSize = e.target.value + 'px';
            return;
        }
        if (property === 'headingsFontSize') {
            document.querySelectorAll('.heading').forEach(el => {
                el.style.fontSize = e.target.value + 'px';
            });
            return;
        }
        if (property === 'bodyTextFontSize') {
            document.querySelectorAll('.body').forEach(el => {
                el.style.fontSize = e.target.value + 'px';
            });            
            return;
        }
    }
    return (
        <div className="customize-container">
            <div className="font-selector">
                <div className="select-font">
                    <h2>Name</h2>
                    <div className="custom-select" >
                        <select name="font" id="" onChange={(e) => handleFontChange('nameFont', e)}>
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
                        <select name="font" id="" onChange={(e) => handleFontChange('headingsFont', e)}>
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
                        <select name="font" id="" onChange={(e) => handleFontChange('bodyTextFont', e)}>
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
                        <input type="number" min={0} max={32} placeholder="22" defaultValue={22} onChange={(e) => handleFontChange('nameFontSize', e)}/>
                    </div>
                    <div className="heading-font-size">
                        <h2>Headings</h2>
                        <input type="number" min={0} max={32} placeholder="12" defaultValue={12} onChange={(e) => handleFontChange('headingsFontSize', e)}/>
                    </div>
                    <div className="other-font-size">
                        <h2>Body Text</h2>
                        <input type="number" min={0} max={32} placeholder="12" defaultValue={12} onChange={(e) => handleFontChange('bodyTextFontSize', e)}/>
                    </div>
                </div>
            </div>
            <div className="font-spacing-selector">
                <h2>Customize Spacing</h2>
                <div className="font-spacing-input">
                    <div className="name-font-size">
                        <h2>Letter Spacing</h2>
                        <input type="number" min={0} max={5} onChange={(e) => handleFontChange('letterSpacing', e)}/>
                    </div>
                    <div className="heading-font-size">
                        <h2>Word Spacing</h2>
                        <input type="number" min={0} max={24} onChange={(e) => handleFontChange('wordSpacing', e)}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Customize