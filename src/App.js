import './App.css'
import Header from './header'
import headshot from './headshot.JPG'
import React, {Component} from 'react'
import {saveAs} from "file-saver"
// Began app as a router based navigation, decided to switch to single page
// import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import {animateScroll as scroll} from 'react-scroll'
import {AiFillHtml5} from 'react-icons/ai'
import {DiCss3} from 'react-icons/di'
import {SiJavascript, SiReact, SiRedux, SiPython, SiDjango, SiJquery, SiExpress, SiMongodb, SiNodedotjs, SiGit, SiPostgresql, SiGithub, SiBootstrap} from 'react-icons/si'

const App = () => {

  return (
    <main className="App">

      <Header />

      <div id="Bio" className="container-sm">
        <h1>Bio</h1>
        <div className="bio-box container-sm">
          <div className="bio-image col">
            <img src={headshot} className="headshot"></img>
          </div>
          <div className="bio-text col">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
      </div>

      <div id="Resume" className="container-sm">
        <h1>Resume</h1>
          <div>
            <a href={require("./my_resume.pdf")} download="Makayla_Edwards_Resume">Download My Resume</a>
          </div>
            <div className="icons container-lg">
              <AiFillHtml5 className="icon" />
              <DiCss3 className="icon" />
              <SiJavascript className="icon" />
              <SiJquery className="icon" />
              <SiReact className="icon" />
              <SiRedux className="icon" />
              <SiPython className="icon" />
              <SiDjango className="icon" />
              <SiExpress className="icon" />
              <SiMongodb className="icon" />
              <SiPostgresql className="icon" />
              <SiNodedotjs className="icon" />
              <SiGit className="icon" />
              <SiGithub className="icon" />
              <SiBootstrap className="icon" />
            </div>
      </div>

      <div id="Projects" className="container-sm">
        <h1>Projects</h1>
      </div>

      <div id="Resources" className="container-sm">
        <h1>Resources</h1>
      </div>

    </main>
  )
}

export default App
