import './App.css'
import Header from './header'
import Footer from './footer'
import headshot from './headshot.JPG'
import todo from './todo.png'
import mystuffapp from './mystuffapp.png'
import React, {Component} from 'react'
import {saveAs} from "file-saver"
// Began app as a router based navigation, decided to switch to single page
// import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import {animateScroll as scroll} from 'react-scroll'
import {AiFillHtml5} from 'react-icons/ai'
import {DiCss3} from 'react-icons/di'
import {SiJavascript, SiReact, SiRedux, SiPython, SiDjango, SiJquery, SiExpress, SiMongodb, SiNodedotjs, SiGit, SiPostgresql, SiGithub, SiBootstrap, SiLinkedin} from 'react-icons/si'

const App = () => {

  return (
    <main className="App">

      <Header />

      <div id="Bio" className="container-sm ">
        <div className="bio-box container-sm">
        <div className="container-sm">
          <h1 className="bio-title">Makayla Edwards</h1>
          <h6 className="bio-title">Full Stack Software Engineer</h6>
        </div>
          <div className="bio-image col">
            <img src={headshot} className="headshot w-50 p-3 mh-100 my-4"></img>
          </div>
          <div className="bio-text col">
            <p>Full Stack Software Engineering Fellow with a demonstrated history of working in customer service and leadership. My experience has prepared me to solve problems quickly and efficiently. Passionate about making every day life easier through the means of technology and networking.</p>
          </div>
        </div>
      </div>

      <div id="Resume" className="container-sm">
          <div className="icon-row container-sm row justify-content-center">
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

      <div id="carouselSlides" className="carousel slide" data-ride="carousel">
        <div id="Projects" className="carousel-inner container-sm">
            <div className="carousel-item active container-sm row justify-content-evenly">
              <h4 className="col-4"><a href="https://voluble-begonia-4ac205.netlify.app/">Todo or not Todo</a></h4>
                <img src={todo} className="d-block w-100 project-img"></img>
                <a className="link col-4" href="https://github.com/edwarmak/front_end_todo">View frontend code!</a>
                <a className="link col-4" href="https://github.com/edwarmak/backend_todo">View backend code!</a>
            </div>
            <div className="carousel-item container-sm row justify-content-evenly">
              <h4 className="col-4"><a href="https://mystuff-security-app.netlify.app/">MyStuffApp</a></h4>
                <img src={mystuffapp} className="d-block w-100 mystuff-img"></img>
                <a className="link col-4" href="https://github.com/kdutile/project_4-frontend">View frontend code!</a>
                <a className="link col-4" href="https://github.com/kdutile/project_4_backend">View backend code!</a>
            </div>
        </div>
        <a className="carousel-control-prev" href="#carouselSlides" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselSlides" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

      <div id="Resources" className="icon-row container-sm">
        <div className="container-fluid">
          <a className="col" href="https://www.linkedin.com/in/makaylaedwards22/"><SiLinkedin className="contact" title="LinkedIn"/></a>
          <a className="col" href="https://github.com/edwarmak"><SiGithub className="contact" title="Github"/></a>
        </div>
      </div>

      <div>
        <Footer />
      </div>

    </main>
  )
}

export default App
