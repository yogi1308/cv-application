function Customize() {
    return (
        <div className="customize-container">
            <label htmlFor="font">Select Font</label>
            <div className="custom-select">
                <select name="font" id="">
                    <option value="">Comic Sans</option>
                    <option>Times New Roman</option>
                </select>
            </div>
        </div>
    )
}

export default Customize