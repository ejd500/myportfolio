import "../styles/projectcard.css"
import ThirdButton from "./ThirdButton"

const ProjectCard = ({project}) => {
  return (
    <div className="project-card">
        <div className="container">
            <h2>{project.title}</h2>
            <div className="description">
                <p>{project.description}</p>
                <ThirdButton text="View Project" backgroundColor="#2C3261" color="white" url={project.url}/>
            </div>
        </div>
         
        <img src={project.img} alt={project.img} className="image"/>
            
    </div>
  )
}

export default ProjectCard