import "../styles/nav.css"
import {Link} from "react-router-dom"

const Nav = () => {
  return (
    <header id="header">
        <div id="logo">
            <Link to="/">EJD</Link>
        </div>
        <nav id="nav">
            <Link to="/" className="nav-link"><div id="home">Home</div></Link>
            <Link to="/about" className="nav-link"><div id="about">About</div></Link>
            <Link to="/projects" className="nav-link"><div id="projects">Projects</div></Link>
            <Link to="/contact" className="nav-link"><div id="contact">Contact</div></Link>
        </nav>
    </header>
  )
}

export default Nav