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
            window.localStorage.setItem('theme', 'light')
        }
        else {
            document.querySelector('html').classList.remove('light-mode')
            document.querySelector('html').classList.add('dark-mode')
            document.querySelector('.toggle-theme').textContent = "🔆"
            window.localStorage.setItem('theme', 'dark')
        }

    }
    return (
        <div className="print-example-buttons">
            <button onClick={(e) => print(e)}>Print</button>
            <button className="toggle-theme" onClick={(e) => {toggleMode(e)}} >{
                window.localStorage.getItem('theme') === 'light' ? "🌙"
                : window.localStorage.getItem('theme') === 'dark' ? "🔆"
                : window.matchMedia('(prefers-color-scheme: dark)').matches ? "🔆"
                : window.matchMedia('(prefers-color-scheme: light)').matches ? "🌙"
                : ""
            }</button>
            <button onClick={(e) => toggleShowExample(e)}>{!showExample ? "Show Example Version" : "Close Example Version"}</button>
        </div>
        
    )
}

export default Print