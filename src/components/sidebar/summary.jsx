function Summary({setSummary}) {
    return (
        <div className="summary">
            <div id="editor" contenteditable="true" 
            onInput={e => {let html = e.currentTarget.innerHTML; html = html.replace(/^(?:<br\s*\/?>)+/i, ''); setSummary(html);}} 
            onFocus={(e) => {if (e.target.innerHTML === "Computer Science Junior with experience in full-stack development, computer vision, and microservices deployed in the cloud, seeking internship opportunities in summer 2025.") {e.target.textContent = ""}; e.target.style.color = 'var(--primary-text-color)' }} 
            onBlur={(e) => {if (e.target.textContent.trim() === '') {e.target.innerHTML = "Computer Science Junior with experience in full-stack development, computer vision, and microservices deployed in the cloud, seeking internship opportunities in summer 2025."; e.target.style.color = 'grey' }}}
            >
                Computer Science Junior with experience in full-stack development, computer vision, and microservices deployed in the cloud, seeking internship opportunities in summer 2025.
            </div>
        </div>
    )
}

export default Summary