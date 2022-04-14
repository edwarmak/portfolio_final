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
    <main className="App text-center bg-black">

      <Header />

      <div id="Bio" className="container-sm">
        <div className="bio-box container-sm py-2">
          <div className="container-sm pt-5">
            <h1 className="bio-title text-white">Makayla Edwards</h1>
            <h6 className="bio-title-2 text-white-50 ">Full Stack Software Engineer</h6>
            </div>
            <div className="bio-image col">
              <img src={headshot} className="headshot rounded-circle w-50 p-3 mh-100 my-2"></img>
            </div>
            <div className="bio-text container-sm border px-3">

                <p className="text-white ">Hi, I'm Makayla! I am a software engineer, musician, and car enthusiast. Before graduating General Assembly's Software Engineering Immersive course, I worked as a ski lift operator and car mechanic. Both jobs were demanding of my focus and eye for detail. My love for solving technical problems has brought me to you!</p>

              <p className="text-white">As a classical musician I am passionate about working as a team. After playing cello in a chamber orchestra, I learned that each musician has their own role. In order to be successful, you must demonstrate trust and listen to those around you. This way you can adjust your dynamics to ensure that all instruments blend as one.</p>
              <p className="text-white">Excited to connect with you!</p>
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
              <h2 className="col-4"><a href="https://voluble-begonia-4ac205.netlify.app/">Todo or not Todo</a></h2>
                <img src={todo} className="d-block w-100 project-img"></img>
                <a className="link col-4" href="https://github.com/edwarmak/front_end_todo">View frontend code!</a>
                <a className="link col-4" href="https://github.com/edwarmak/backend_todo">View backend code!</a>
            </div>
            <div className="carousel-item container-sm row justify-content-evenly">
              <h2 className="col-4"><a href="https://mystuff-security-app.netlify.app/">MyStuffApp</a></h2>
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
        <div className="container-sm">
          <h2>I Would Love To Hear From You!</h2>
          <p>Please feel free to reach out to me</p>
        </div>
        <div className="container-fluid">
          <a className="col" href="https://www.linkedin.com/in/makaylaedwards22/"><SiLinkedin className="contact" title="LinkedIn"/></a>
          <a href="mailto:lilmack.edwards@gmail.com?subject=Portfolio_Reachout">Send an Email</a>
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
