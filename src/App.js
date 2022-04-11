import './App.css'
import Header from './header'
import headshot from './headshot.jpg'
import todo from './todo.png'
import mystuffapp from './mystuffapp.png'
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
        <div className="icons container-lg">
          <AiFillHtml5 className="icon" title="HTML5"/>
          <DiCss3 className="icon" title="CSS3"/>
          <SiJavascript className="icon" title="JavaScript"/>
          <SiJquery className="icon" title="jQuery"/>
          <SiReact className="icon" title="React"/>
          <SiRedux className="icon" title="Redux"/>
          <SiPython className="icon" title="Python"/>
          <SiDjango className="icon" title="Django"/>
          <SiExpress className="icon" title="Express.js"/>
          <SiMongodb className="icon" title="MongoDB"/>
          <SiPostgresql className="icon" title="Postgresql"/>
          <SiNodedotjs className="icon" title="Node.js"/>
          <SiGit className="icon" title="Git"/>
          <SiGithub className="icon" title="Github"/>
          <SiBootstrap className="icon" title="Bootstrap"/>
        </div>
          <div>
            <a href={require("./my_resume.pdf")} download="Makayla_Edwards_Resume">Download My Resume Here</a>
          </div>
      </div>

      <div id="Projects" className="container-sm">
        <h1>Projects</h1>
          <div className="container-sm row justify-content-evenly">
            <h4 className="col-4"><a href="https://voluble-begonia-4ac205.netlify.app/">Todo or not Todo</a></h4>
              <img src={todo} className="project-img"></img>
              <a className="col-4" href="https://github.com/edwarmak/front_end_todo">View frontend code!</a>
              <a className="col-4" href="https://github.com/edwarmak/backend_todo">View backend code!</a>
          </div>
          <div className="container-sm row justify-content-evenly">
            <h4 className="col-4"><a href="https://mystuff-security-app.netlify.app/">MyStuffApp</a></h4>
              <img src={mystuffapp} className="project-img"></img>
              <a className="col-4" href="https://github.com/kdutile/project_4-frontend">View frontend code!</a>
              <a className="col-4" href="https://github.com/kdutile/project_4_backend">View backend code!</a>
          </div>
      </div>

      <div id="Resources" className="container-sm">
        <h1>Resources</h1>
      </div>

    </main>
  )
}

export default App
