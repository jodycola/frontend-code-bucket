import React from "react"
import AceEditor from "react-ace"

// Ace Build languages
import "ace-builds/src-noconflict/mode-xml"
import "ace-builds/src-noconflict/mode-css"
import "ace-builds/src-noconflict/mode-javascript"

// Ace Build Themes
import "ace-builds/src-noconflict/theme-monokai"
import "ace-builds/src-noconflict/theme-github" 

function Editor({ mode, language, value, onChange, darkMode, allTheme}) {

    return (
        <div className="editor-container">
            <div className="editor-title" style={darkMode ? {color: "white"} : {color: "black"}}>
                {language}
            </div>   
            <AceEditor 
                className="text-editor"
                mode={mode}
                onChange={onChange}
                value={value}
                theme={ darkMode ? "monokai" : "github" }
                height="200px"
                setOptions={{
                    wrap: true,
                    fontSize: "14px",
                }}
            />

        </div>
    )
}

export default Editor