import React from "react"


import { Link } from "react-router-dom"
import { FaTrash } from "react-icons/fa"
import { TiEdit } from "react-icons/ti"

function Project({ project, selectProject, deleteProject, darkMode }){
    const { title, image_url } = project

    function handleSelect(){
        selectProject(project)
    }

    return (
        <div className="content-container">
            <div className="card">
            <div className="content">
                <div className="header">{title}</div>
                <img src={image_url} alt={title}/>
            <div className="edit-buttons">
            <Link to="/" >
                <span className="edit-icon" onClick={handleSelect} style={darkMode ? {color: "white"} : {color: "black"}}>   
                    <TiEdit />
                </span>
            </Link>
                <span className="x-icon" style={darkMode ? {color: "white"} : {color: "black"}} onClick={() => deleteProject(project)}>   
                    <FaTrash />
                </span>
             </div>   
            </div>
            </div>
        </div>
    )
}

export default Project