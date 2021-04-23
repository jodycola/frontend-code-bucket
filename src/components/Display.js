function Display({ srcDoc }) {

    return (
        <iframe 
            className="frame"
            srcDoc={srcDoc}
            title="display"
            sandbox="allow-scripts"
        />
    )
}

export default Display