import Nav from "./Nav"
import Footer from "./Footer"
import "../styles/contact.css"
import PrimaryButton from "./PrimaryButton"
import { useEffect } from "react"

const Contact = () => {

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo({
      top: 0
    });
  }, []);

  return (
    <div>
        <Nav/>
        <div id="contactpage">
            <h1>Contact</h1>
            <div className="emptybox"></div>
            <form>
                <div id="inputs">
                    <label htmlFor="name" className="label">Name</label>
                    <input type="text" name="name" className="text"/>

                    <label htmlFor="email" className="label">Email</label>
                    <input type="text" name="email" className="text"/>

                    <label htmlFor="message" className="label">Message</label>
                    <textarea name="message" id="message" />
                </div>
                <PrimaryButton text="Send" backgroundColor="#2C3261" color="white"/>
            </form>
        </div>
        <Footer/>
    </div>
  )
}

export default Contact