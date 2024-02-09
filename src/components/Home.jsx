import image1 from "../Images/image1.png"
import "../styles/home.css"
import PrimaryButton from "./PrimaryButton"
import SecondaryButton from "./SecondaryButton"
import {Link} from "react-router-dom"
import { useEffect } from "react"

const Home = () => {

    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo({
          top: 0
        });
      }, []);  


  return (
    <div className="homepage">

        <div id="intro">
            <h1>Hello, my name <br/> is Ellen Dalton</h1>

            <p>
                I am a software development student, 
                with an expected graduation date of August 2024. 
                To learn more about me and my projects, please see 
                the links below.
            </p>
            <div id="buttons">
                <Link to="/about"><PrimaryButton text="About" color="white" backgroundColor="#2C3261"/></Link>
                <Link to="/projects"><SecondaryButton text="Projects" backgroundColor="white" color="#2C3261"/></Link>
                <Link to="/contact"><PrimaryButton text="Contact" backgroundColor="#2C3261" color="white"/></Link>
            </div>
        </div>
        <div id="profilepicbox">
            <img src={image1} alt="profilepicture" id="profilepic"/>
        </div>
    
    </div>
  )
}

export default Home