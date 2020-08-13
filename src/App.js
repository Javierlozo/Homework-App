import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/pages/NavBar";
import SignUp from "./components/pages/SignUp";
// import UserForm from "./components/pages/UserForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        {/* <SignUp /> */}
        {/* <UserForm /> */}
      </header>
    </div>
  );
}

export default App;
