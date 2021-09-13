import React from "react";
import '../styles/navbar.css'
import { NavLink } from "react-router-dom";
import { GiFoundryBucket } from "react-icons/gi";

function NavBar({ toggleDark, darkMode }){

    return (
        <div className="nav">

            <span className="logo-icon"  style={darkMode ? {color: "white"} : {color: "black"}}>
                <GiFoundryBucket />
            </span>

            <h1 className="logo-name" style={darkMode ? {color: "white"} : {color: "black"}}>Code Bucket</h1>

            <NavLink exact to="/" className="home-button">
                Home
            </NavLink>

            <NavLink exact to="/collection" className="collection-button">
                Collection
            </NavLink>

            <NavLink exact to="/login" className="login-button">
                Login/Signup
            </NavLink>

            <button className="dark-mode" onClick={toggleDark}>
                Dark Mode
            </button>

        </div>
    )
}

export default NavBar