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
    function toggleMode(e) {
        e.preventDefault()
        if (document.querySelector('html').classList.contains('dark-mode')) {
            document.querySelector('html').classList.add('light-mode')
            document.querySelector('html').classList.remove('dark-mode')
            document.querySelector('.toggle-theme').textContent = "🌙"
        }
        else {
            document.querySelector('html').classList.remove('light-mode')
            document.querySelector('html').classList.add('dark-mode')
            document.querySelector('.toggle-theme').textContent = "🔆"
        }

    }
    return (
        <div className="print-example-buttons">
            <button onClick={(e) => print(e)}>Print</button>
            <button className="toggle-theme" onClick={(e) => {toggleMode(e)}} >{document.querySelector('html').classList.contains('dark-mode') ? "🔆" : "🌙"}</button>
            <button onClick={(e) => toggleShowExample(e)}>{!showExample ? "Show Example Version" : "Close Example Version"}</button>
        </div>
        
    )
}

export default Print