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
import {SiJavascript, SiReact, SiRedux, SiPython, SiDjango, SiJquery, SiExpress, SiMongodb, SiNodedotjs, SiGit, SiPostgresql, SiGithub, SiBootstrap, SiLinkedin, SiDiscord, SiSlack} from 'react-icons/si'
import {GrPrevious, GrNext} from 'react-icons/gr'

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
          <div className="bio-text container-sm">
            <p className="text-white ">Hi, I'm Makayla! I am a software engineer, musician, and car enthusiast. Before graduating General Assembly's Software Engineering Immersive course, I worked as a ski lift operator and car mechanic. Both jobs were demanding of my focus and eye for detail. My love for solving technical problems has brought me to you!</p>
            <p className="text-white">As a classical musician I am passionate about working as a team. After playing cello in a chamber orchestra, I learned that each musician has their own role. In order to be successful, you must demonstrate trust and listen to those around you. This way you can adjust your dynamics to ensure that all instruments, or team members, blend as one.</p>
            <p className="text-white">Excited to connect with you!</p>
          </div>
        </div>
      </div>

      <div id="Resume" className="container-sm">
        <div className="icon-box container-sm mb-5">
          <div className="icon-row container-sm mx-0 mb-5 px-0 row justify-content-center">
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
          <div className="container-sm my-5">
            <p className="text-white">Experienced in: HTML, CSS, JavaScript, jQuery, React, Redux-Toolkit, Python, Django, ExpressJS, MongoDB, Mongoose, NodeJS, Git, Github, Bootstrap, PostgresSQL, NoSQL</p>
          </div>
          <div className="link-div container-sm">
            <a href={require("./my_resume.pdf")} className="link fs-2 text-white" download="Makayla_Edwards_Resume">Download My Resume Here</a>
          </div>
        </div>
      </div>








      <div id="Projects" className="projects my-5 container-sm  d-inline-flex">

        <div id="carouselSlides" className="carousel slide my-5 container-sm " data-ride="carousel">
          <div className="carousel-inner">

            <div className="carousel-item active container-sm ">
              <h2 className="mt-3 mb-5"><a href="https://voluble-begonia-4ac205.netlify.app/" className="fs-2 text-white">Todo or not Todo</a></h2>
              <div className="mx-4">
                <img src={todo} className="project-img footer border border-black rounded d-block w-100"></img>
              </div>

                <div className="link mt-5 container-sm">
                  <a className="text-white fs-4" href="https://github.com/edwarmak/front_end_todo">View frontend code!</a>
                </div>

                <div className="link mt-3 mb-5 container-sm">
                  <a className="text-white fs-4" href="https://github.com/edwarmak/backend_todo">View backend code!</a>
                </div>
            </div>


            <div className="carousel-item container-sm ">
              <h2 className="mt-3 mb-5"><a href="https://mystuff-security-app.netlify.app/" className="fs-2 text-white">MyStuffApp</a></h2>
              <div className="mx-4">
                <img src={mystuffapp} className="project-img footer border border-black rounded d-block w-100"></img>
              </div>

              <div className="link mt-5 container-sm">
                <a className="text-white fs-4" href="https://github.com/kdutile/project_4-frontend">View frontend code!</a>
              </div>

              <div className="link mt-3 mb-5 container-sm">
                <a className="text-white fs-4" href="https://github.com/kdutile/project_4_backend">View backend code!</a>
              </div>
            </div>

          </div>

            <a className="carousel-control-prev" href="#carouselSlides" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            </a>
            <a className="carousel-control-next" href="#carouselSlides" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
            </a>

        </div>

      </div>






      <div id="Resources" className="container-sm d-inline-flex">
        <div className="container-sm col d-flex flex-column justify-content-center ">
          <div className="container-sm mt-5 ">
            <h2 className="text-white fs-1 ">I Would Love To Hear From You!</h2>
            <p className="text-white f-5 pt-3">Need help on a project? Interested in working with me? Want to talk about music?</p>
            <p className="text-white">Please feel free to reach out to me!</p>
          </div>
          <div className="container-sm mt-5 ">
            <a className="col p-2" href="https://www.linkedin.com/in/makaylaedwards22/"><SiLinkedin className="contact my-1" title="LinkedIn"/></a>
            <a className="col p-2" href="https://github.com/edwarmak"><SiGithub className="contact my-1" title="Github"/></a>
            <a className="col p-2" href="https://app.slack.com/client/T0351JZQ0/C02SNGHV0DC/user_profile/U02RXAW2DMJ"><SiSlack className="contact my-3" title="Slack"/></a>
            <a className="col p-2" href="https://discordapp.com/users/mackie#9618"><SiDiscord className="contact my-3" title="Discord"/></a>
          </div>
          <div className="container-sm mt-5 ">
            <a className="link fs-2 text-white" href="mailto:lilmack.edwards@gmail.com?subject=Portfolio_Reachout">Send an Email</a>
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>

    </main>
  )
}

export default App
