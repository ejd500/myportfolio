import Nav from "./Nav"
import "../styles/about.css"
import Footer from "./Footer";
import { useEffect } from "react";
import SkillsCard from "./SkillsCard";

const About = () => {

    const resumePath = process.env.PUBLIC_URL + '/Documents/resume2024.pdf';

    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo({
            top: 0
        });
    }, []);

  return (
    <div>
        <Nav />
        <div id="aboutme">
            <h1>About Me</h1>
            <div className="emptybox"></div>
            <p>
            In 2016, I completed a Bachelor of Social Work degree. I worked as a
            child and youth care worker for 7 years before deciding that social
            work was not for me. After becoming a parent, I created a drop
            shipping website using Wix, where children’s clothing could be sold
            and bought online. I enjoyed the process of creating the website and
            figuring out how to make it work, more than actually maintaining the
            business. This led me to realize that my creativity and drive to solve
            problems could be put to use elsewhere. I applied for the software
            development program at Keyin College, and was accepted almost
            immediately. Since that time, I have excelled in my studies and have
            learned a variety of languages and frameworks. Please feel free to
            browse my projects, review my resume, and contact me with any
            questions you might have. I look forward to connecting!
            </p>
            <a href={resumePath} download="ellendalton_resume.pdf"><button id="resume-button">Resume</button></a>
            <h1>Skills</h1>
            <div className="emptybox"></div>
            <SkillsCard title="Coding Skills" skill1="HTML" skill2="JavaScript" skill3="CSS" skill4="GitHub" skill5="React" skill6="Python" skill7="Figma" skill8="" skill9="Framer"/>
            <SkillsCard title="Transferable Skills" skill1="Conflict Resolution" skill2="Attention to Detail" skill3="Boundary Setting" skill4="Active Listening" skill5="Critical Thinking" skill6="Problem Solving" skill7="Good Communication" skill8="Works well independently and with others" skill9="Organization"/>
       
        </div>
        <Footer/>
    </div>

  );
}

export default About