import Footer from "./Footer";
import Nav from "./Nav";
import ProjectCard from "./ProjectCard"
import "../styles/projects.css"
// import { useState } from "react";
import MECPhotography from "../Images/MECPhotography.png"
import TheBookNook from "../Images/TheBookNook.png"
import HABTaxiServices from "../Images/HABTaxiServices.png"
import Buyify from "../Images/Buyify.png"

const projectsData = [
    { 
        title: 'MEC Photography', 
        description: 'I created this project during my first term using HTML and CSS. My group consisted of myself, Corina Jewer and Matthew Menchinton.',
        img: MECPhotography,
        url1: "https://github.com/ejd500/mec-photography.git",
        url2: "https://ejd500.github.io/mec-photography/"
    },

    { 
        title: 'HAB Taxi Services', 
        description: 'I created this project during my first term, using Python. My group consisted of myself, Corina Jewer, Matthew Menchinton, Patrick Layman, Kateryna Danevych, and Bradley Hiscock.',
        img: HABTaxiServices,
        url1: "https://github.com/ejd500/Term1-Sprint2-Project2-Python-HABTaxiServices",
    },

    { 
        title: 'The Book Nook', 
        description: 'I created this project using React, alongside Corina Jewer, during my second term.',
        img: TheBookNook,
        url1: "https://github.com/ejd500/the-book-nook.git",
        url2: "https://ejd500.github.io/the-book-nook/"
    },

    { 
        title: 'Buyify', 
        description: 'I created this project using React, alongside Corina Jewer, during my second term.',
        img: Buyify,
        url1: "https://github.com/ejd500/buyify.git",
        url2: "https://ejd500.github.io/buyify/"
    },

  ];

const Projects = () => {

    // const [currentIndex, setCurrentIndex] = useState(0);

    // const showNewRight = () => {
    //     setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
    //   };
    
    // const showNewLeft = () => {
    //     setCurrentIndex((prevIndex) =>
    //         prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
    //     );
    // };

  return (
    <>
        <Nav/>
        <div id="projects">
            <h1>Projects</h1>
            <div className="emptybox"></div>
            <div id="all-projects">
                <ProjectCard project={projectsData[0]}/>
                <ProjectCard project={projectsData[1]}/>
                <ProjectCard project={projectsData[2]}/>
                <ProjectCard project={projectsData[3]}/>
                {/* <button className="arrow-left" onClick={showNewLeft}>&lt;</button> */}
                {/* <ProjectCard project={projectsData[currentIndex]} /> */}
                {/* <button className="arrow-right" onClick={showNewRight}>&gt;</button> */}
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default Projects