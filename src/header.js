import { Link } from 'react-scroll'
import './header.css'

const Header = () => {
  return (
    <nav>
      <ul className="header">

        <li>
          <Link
            activeClass="active"
            to="Bio"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}>
              Bio
          </Link>
        </li>

        <li>
          <Link
            activeClass="active"
            to="Resume"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}>
              Resume
          </Link>
        </li>

        <li>
          <Link
            activeClass="active"
            to="Projects"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}>
              Projects
          </Link>
        </li>

        <li>
          <Link
            activeClass="active"
            to="Resources"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}>
              Resources
          </Link>
        </li>

      </ul>
    </nav>
  )
}

export default Header
