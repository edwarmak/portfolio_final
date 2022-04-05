import logo from './logo.svg';
import './App.css';
//
import React, {Component} from 'react'
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import Bio from './components/bio.js'
import Resume from './components/resume.js'
import Projects from './components/projects.js'
import Resources from './components/resources.js'

const App = () => {
  return (
    <main>
      <div>
        <Link to='/'>Bio</Link>
        <Link to='/resume'>Resume</Link>
        <Link to='/projects'>Projects</Link>
        <Link to='/resources'>Resources</Link>
      </div>
        <Routes>
          <Route path='/' component={Bio} exact />
          <Route path='/resume' component={Resume} exact />
          <Route path='/projects' component={Projects} exact />
          <Route path='/exact' component={Resources} exact />
          <Route component={Error} />
        </Routes>
    </main>
  )
}

export default App;
