import logo from './logo.svg';
import './App.css';
//
import React, {Component} from 'react'
// Began app as a router based navigation, decided to switch to single page
// import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import {animateScroll as scroll} from 'react-scroll'
import Bio from './components/bio.js'
import Resume from './components/resume.js'
import Projects from './components/projects.js'
import Resources from './components/resources.js'

const App = () => {
  return (
    <main className="App">
      <div>
        <Link to='/'>Bio</Link>
        <Link to='/resume'>Resume</Link>
        <Link to='/projects'>Projects</Link>
        <Link to='/resources'>Resources</Link>
      </div>

      <div id="Bio">
        <h1>Bio</h1>
      </div>

      <div id="Resume">
        <h1>Resume</h1>
      </div>

      <div id="Projects">
        <h1>Projects</h1>
      </div>

      <div id="Resources">
        <h1>Resources</h1>
      </div>

    </main>
  )
}

export default App;

// <Routes>
//     <Route path='/' element={<Bio />} exact />
//     <Route path='/resume' element={<Resume />} exact />
//     <Route path='/projects' element={<Projects />} exact />
//     <Route path='/resources' element={<Resources />} exact />
//     <Route element={Error} />
// </Routes>
