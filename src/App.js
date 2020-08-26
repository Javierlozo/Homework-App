import React from "react";
import { Router } from "@reach/router";
import "./App.css";
import NavBar from "./components/pages/NavBar";
import StudentDashboard from "./components/studentDashboard/StudentDashboard";
import TeacherDashboard from "./components/teacherDashboard/TeacherDashboard";
import Home from "./components/pages/Home";
import TheFooter from "./components/TheFooter";

function App() {
  return (
    <div
      className="App"
      // style={{
      //   backgroundImage: `url("https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80")`,
      // }}
    >
      <NavBar />
      <Router>
        <Home path="/"></Home>
        <StudentDashboard path="/studentdashboard" />
        <TeacherDashboard path="/teacherdashboard" />
      </Router>
      <TheFooter />
    </div>
  );
}

export default App;
