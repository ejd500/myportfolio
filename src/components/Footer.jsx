import "../styles/footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div id="footer">

        <div id="phone-email">
            <h2>Let's Connect!</h2>
            <p><Link to="/contact" onClick={()=>{window.scrollTo({top: 0})}}><FontAwesomeIcon icon={faEnvelope} size="1x"/>&nbsp;ellendalton045@gmail.com</Link></p>
            <p><Link to="/contact"><FontAwesomeIcon icon={faPhone} size="1x"/>&nbsp;709-746-2252</Link></p>
        </div>
        <div id="social-media">
            <div className="icons">
                <a href="https://www.linkedin.com/in/ellen-dalton-a4236a70" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} size="2x"/></a>
                <a href="https://github.com/ejd500" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} size="2x"/></a>
                <Link to="/contact"><FontAwesomeIcon icon={faEnvelope} size="2x" onClick={()=>{window.scrollTo({top: 0})}}/></Link>
            </div>
            <div id="copyright">
                &copy; EJD 2023
            </div>
        </div>
        
    </div>
  )
}

export default Footer