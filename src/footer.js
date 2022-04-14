import {SiLinkedin, SiGithub, SiBootstrap} from 'react-icons/si'

const Footer = () => {
  return (
    <nav className="navbar-expand">
      <div className="footer bg-black border rounded-pill mb-5 py-2 w-50 h-25 d-inline-block">
        <p className="footer-text pt-2 px-4 text-white">Makayla Edwards | Full Stack Software Engineer</p>
        <p className="footer-bootstrap text-white">Styled with Bootstrap <SiBootstrap/></p>
      </div>
    </nav>
  )
}

export default Footer
