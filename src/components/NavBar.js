import React from "react"
import { NavLink } from "react-router-dom"
import { GiFoundryBucket } from "react-icons/gi"

function NavBar({ toggleDark, darkMode}){

    return (
        <div className="nav">

                <span className="logo-icon"  style={darkMode ? {color: "white"} : {color: "black"}}>   
                    <GiFoundryBucket />
                </span>

                <h1 className="logo-name" style={darkMode ? {color: "white"} : {color: "black"}}>Code Bucket</h1>

            <button className="dark-mode" onClick={toggleDark}>
            Dark Mode
            </button>

            <NavLink exact to="/" className="home-button">
                Home
            </NavLink>

            <NavLink exact to="/collection" className="project-collection">
                Collection
            </NavLink>

        </div>
    )
}

export default NavBar