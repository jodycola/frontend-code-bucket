import React, { useState, useEffect } from "react"

import Project from "./Project"

const url = "http://localhost:3000/projects"

function Collection({ currentUser, selectProject, darkMode }){
    const [projects, setProjects] = useState([])

    // FETCH PROJECT DATA AND SET STATE
    useEffect(() => {
        fetch(url)
        .then(r => r.json())
        .then(setProjects)
    }, [])

    // REMOVE PROJECT
    function deleteProject(deleteProject){
        fetch(`${url}/${deleteProject.id}`, {
            method: "DELETE"
        })
        .then(r => r.json())
        .then(setProjects(projects.filter((project) => project.id !== deleteProject.id)))
    }

    // MAPS OVER PROJECTS TO DISPLAY EACH ONE AS A PROJECT COMPONET
    const displayProject = projects.map((project) => {
        return <Project 
            key={project.id}
            project={project}
            selectProject={selectProject}
            deleteProject={deleteProject}
            darkMode={darkMode}
        />
    })

    return (
        <div>
            <h1 className="collection-header" style={darkMode ? {color: "white"} : {color: "black"}}>Collection</h1>
            <div className="project-container">
            {displayProject}
            </div>
        </div>
    )
}

export default Collection