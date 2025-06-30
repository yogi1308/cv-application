import { useRef, useEffect } from "react";

function Summary({ setSummary }) {
    const defaultText =
        "Computer Science Junior with experience in full-stack development, computer vision, and microservices deployed in the cloud, seeking internship opportunities in summer 2025.";
    const editorRef = useRef(null);

    useEffect(() => {
        // Set initial content only once
        const stored = window.localStorage.getItem("summary");
        if (editorRef.current) {
            editorRef.current.innerHTML = stored || defaultText;
        }
    }, []);

    return (
        <div className="summary">
            <div
                id="editor"
                ref={editorRef}
                contentEditable="true"
                suppressContentEditableWarning={true}
                onInput={e => {
                    let html = e.currentTarget.innerHTML;
                    html = html.replace(/^(?:<br\s*\/?>)+/i, "");
                    setSummary(html);
                    window.localStorage.setItem("summary", html);
                }}
                onFocus={e => {
                    if (e.target.innerHTML === defaultText) {
                        e.target.textContent = "";
                    }
                    e.target.style.color = "var(--primary-text-color)";
                }}
                onBlur={e => {
                    if (e.target.textContent.trim() === "") {
                        e.target.innerHTML = defaultText;
                        e.target.style.color = "grey";
                    }
                }}
            />
        </div>
    );
}

export default Summary;