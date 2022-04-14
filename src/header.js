import { Link } from 'react-scroll'
import './header.css'

const Header = () => {
  return (
    <nav className="">
      <ul className="header bg-black text-white">

        <li>
          <Link
            activeClass="active text-decoration-none text-white fw-bolder fst-italic"
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
            activeClass="active text-decoration-none text-white fw-bolder fst-italic"
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
            activeClass="active text-decoration-none text-white fw-bolder fst-italic"
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
            activeClass="active text-decoration-none text-white fw-bolder fst-italic"
            to="Resources"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}>
              Reach Out!
          </Link>
        </li>

      </ul>
    </nav>
  )
}

export default Header
