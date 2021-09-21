import React, { useState } from "react";
import { loginFetch, signupFetch } from "../services/Requests"
import '../styles/login.css'

function Login({ currentUser, setCurrentUser}) {
    const [errors, setErrors] = useState([])
    const [login, setLogin] = useState({
        email: "",
        password: "",
        name: "",
        verify: ""
    })

    // LOGIN HANDLER
    function handleLogin(e){
        e.preventDefault();
        loginFetch(login)
        .then(data => { 
            setCurrentUser(data.user);
            localStorage.setItem("token", data.token);
            setLogin({
                email: "", password: "", name: "", verify: ""
            })
        })
        .catch(data => {
            setErrors(data.errors);
        })
    }

    // SIGNUP HANDLER
    function handleSignup(e){
        e.preventDefault();
        signupFetch(login)
        .then(data => { 
            setCurrentUser(data.user);
            localStorage.setItem("token", data.token);
            setLogin({
                email: "", password: "", name: "", verify: ""
            })
        })
        .catch(data => {
            setErrors(data.errors);
        })
    }

    return (
        <div className="login">

            <h1> Login </h1>

            <form onSubmit={handleLogin}>
                <label className=""> Email Address </label>
                <input 
                    placeholder="Enter email address"
                    className="input"
                    type="text"
                    name="email"
                    value={login.email}
                    onChange={(e) => setLogin({
                        ...login, [e.target.name]: e.target.value})}
                />

                <label> Password </label>
                <input 
                    placeholder="Enter password"
                    className="input"
                    type="password"
                    name="password"
                    value={login.password}
                    onChange={(e) => setLogin({
                        ...login, [e.target.name]: e.target.value})}
                />
                <button
                    className="button"
                    type="submit"
                > Log in </button>
            </form>
        </div>
    )
}

export default Login