import React, { Component } from 'react';
import { Router } from '@reach/router';
import './App.css';
import NavBar from './components/pages/NavBar';
import Dashboard from './components/studentDashboard/Dashboard';
// import UserForm from "./components/pages/UserForm";
import Home from './components/pages/Home';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Router>
        <Home path='/'></Home>
        <Dashboard path='/dashboard' />
      </Router>
    </div>
  );
}

export default App;
