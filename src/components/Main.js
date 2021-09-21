import React, { useState, useEffect } from "react"

import Editor from "./Editor"
import Display from "./Display"

const url = "http://localhost:3000/projects"

function Main({ currentUser, darkMode, selected, setSelected }){
    const [html, setHtml] = useLocalStorage("html", "")
    const [css, setCss] = useLocalStorage("css", "")
    const [js, setJs] = useLocalStorage("js", "")

    // CHECKS IF SOURCE DOC NEEDS TO BE UPDATED
    // CLEARS THE SELECTED PROJECT DATA
    useEffect(() => {
        if (selected === "") {
            return true
        } else {
            setHtml(selected.html)
            setCss(selected.css)
            setJs(selected.javascript)
        }
    }, [setHtml, setCss, setJs, selected])

    const srcDoc = (`
        <html>
            <body>${html}</body>
            <style>${css}</style>
            <script defer>${js}</script>
        </html>
        `)

    // LOCAL STORAGE HOOK
    function useLocalStorage(key, initialValue) {
        const [value, setValue] = useState(() => {
            const item = localStorage.getItem(key)
            return item ? JSON.parse(item) : initialValue
            // eslint-disable-next-line
            setValue(item)
        })
        localStorage.setItem(key, JSON.stringify(value))
        return [value, setValue]
    }


    // HANDLER FUNCTION

    function handleSaveUpdate (html, css, js) {
        
        if(selected === ""){
            
            var projectTitle = prompt("Please enter a title")
            
            fetch(`${url}`, {                
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({html, css, js, projectTitle}),
                })
                .then(response => response.json())
                .then(data => {
                console.log('Success:', data);
                })

        } else {
            const updatedProject = {
                html: html,
                css: css, 
                js: js
            }
            fetch(`${url}/${selected.id}`, {
                method: "PATCH", 
                headers: {
                    "Content-Type": "application/json",
                }, 
                body: JSON.stringify(updatedProject),
                })
                .then(response => response.json())
                .then(console.log)
            }
    }

    // CLEARS ACE-EDITORS
    function handleClear(){
        setHtml("")
        setCss("")
        setJs("")
        setSelected("")
    }

    return (
        <div className="main-container">
            <button className="save-button" onClick={() => handleSaveUpdate(html, css, js)}>
            Save
            </button>

            <button className="clear-button" onClick={handleClear}>
            Clear
            </button>

            <div className="editor-panel">
            <Editor 
                mode="xml"
                language="HTML"
                value={html}
                onChange={setHtml}
                darkMode={darkMode}
            />
            <Editor 
                mode="css"
                language="CSS"
                value={css}
                onChange={setCss}
                darkMode={darkMode}
            />
            <Editor 
                mode="javascript"
                language="JAVASCRIPT"
                value={js}
                onChange={setJs}
                darkMode={darkMode}
            />
            </div>
            <div className="display-panel">
    
            <Display
                srcDoc={srcDoc}
            />
            </div>
        </div>
    )
}

export default Main