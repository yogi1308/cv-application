function Print({setShowExample, showExample}) {
    function toggleShowExample(e) {
        e.preventDefault()
        setShowExample(prev => !prev)
    }
    function print(e) {
        e.preventDefault()
    }
    return (
        <div className="print-example-buttons">
            <button onClick={(e) => print(e)}>Print</button>
            <button onClick={(e) => toggleShowExample(e)}>{!showExample ? "Show Example Version" : "Close Example Version"}</button>
        </div>
        
    )
}

export default Print