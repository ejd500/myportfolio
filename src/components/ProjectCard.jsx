import "../styles/projectcard.css"
import ThirdButton from "./ThirdButton"

const ProjectCard = ({project}) => {
  return (
    <div className="project-card">
        <div className="container">
            <h2>{project.title}</h2>
            <div className="description">
                <p>{project.description}</p>
                <ThirdButton text="View GitHub Repository" backgroundColor="#2C3261" color="white" url={project.url1}/>
                {project.url2? <ThirdButton text="View Deployed Project" backgroundColor="#2C3261" color="white" url={project.url2}/> : null }
            </div>
        </div>
         
        <img src={project.img} alt={project.img} className="image"/>
            
    </div>
  )
}

export default ProjectCard