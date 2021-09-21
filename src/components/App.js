import React, { useState, useEffect } from "react"
import { Switch, Route } from "react-router-dom"
import NavBar from "./NavBar"
import Main from "./Main"
import Collection from "./Collection"
import Login from "./Login"
import { authenticateUserFetch } from "../services/Requests"


function App() {
  // STATES
  const [darkMode, setDarkMode] = useState(false)
  const [selected, setSelected] = useState("")
  const [currentUser, setCurrentUser] = useState(null);

  // Sets current user local storage token
  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      authenticateUserFetch(token).then(setCurrentUser)
    }
  }, [])

  // DARK MODE TOGGLE
  function toggleDark(){
    setDarkMode(!darkMode)
    if ( darkMode === false ) {
      document.body.style.backgroundColor = "#2e2d2c";
    } else {
      document.body.style.backgroundColor = "white";
    }
  }

  // SET SELECTED PROJECT STATE FOR CRUD ACTIONS
  function selectProject(project){
    setSelected(project)
  }

  return (
  <div>
    <NavBar
      currentUser={currentUser}
      toggleDark={toggleDark}
      darkMode={darkMode}
    />

    <Switch>

      <Route exact path="/">
        <Main
          currentUser={currentUser}
          darkMode={darkMode}
          selected={selected}
          setSelected={setSelected}
        />
      </Route>

      <Route exact path="/collection">
        <Collection
          currentUser={currentUser}
          selectProject={selectProject} 
          darkMode={darkMode}
        />
      </Route>

      <Route exact path="/login">
        <Login
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
        />
      </Route>

    </Switch>
  </div>
  )
}

export default App;
