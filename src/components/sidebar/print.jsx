function Print({setShowExample, showExample}) {
    function toggleShowExample(e) {
        e.preventDefault()
        window.localStorage.setItem('showExample', !window.localStorage.getItem('showExample'))
        setShowExample(prev => !prev)
    }
    function print(e) {
        e.preventDefault()
        window.print()
    }
    return (
        <div className="print-example-buttons">
            <button onClick={(e) => print(e)}>Print</button>
            <button onClick={(e) => toggleShowExample(e)}>{!showExample ? "Show Example Version" : "Close Example Version"}</button>
        </div>
        
    )
}

export default Print