import { TbExternalLink } from "react-icons/tb"
import { AiOutlineGithub } from "react-icons/ai"

const ProjectCard = (props) => {
  return (
    <div className="project_card">
      <div className="project_image_section">
        <img src={props.src} alt={props.alt} className="project_image" />
        <div className="overlay">
          <a className="text" href={props.web_link}>{props.p_name}</a>
        </div>
      </div>

      <div className="project_description">
        <div>
            <p className="project_name">{props.p_name}</p>
            <p className="project_tools">{props.p_tools}</p>
        </div>
        <a href={props.web_link} target="_blank" rel="noopener noreferrer" className="web_link">Visit Website <TbExternalLink /></a>
        {props.description && <div className="description">{props.description}</div>}
        {props.p_description && <div className="p_description">{props.p_description}</div>}
        <a href={props.git_link} target="_blank" rel="noopener noreferrer" className="web_link"> <AiOutlineGithub /> </a>
      </div>
    </div>
  )
} 

export default ProjectCard
