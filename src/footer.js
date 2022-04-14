import {SiLinkedin, SiGithub, SiBootstrap} from 'react-icons/si'

const Footer = () => {
  return (
    <nav className="navbar-expand bg-warning">
      <div className="bio-title mt-4 py-2">
        <p className="footer-text">Makayla Edwards | Full Stack Software Engineer</p>
        <p className="footer-bootstrap">Styled with Bootstrap <SiBootstrap/></p>
      </div>
    </nav>
  )
}

export default Footer
