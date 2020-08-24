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
    <div className="App">
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
