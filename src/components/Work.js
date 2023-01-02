//imported components
import ProjectCard from "./ProjectCard"


// project_images
// import hms_image from "../images/hms.png"
// import bookArena_image from "../images/bookArena.png"
// import weDesign_image from "../images/weDesign.png"
// import ttt_image from "../images/ttt.png"

const Work = () => {
    const projects = [ 
        {
          src: require("../images/hms.png"),
          // src: "../images/hms.png",
          alt: 'hms',
          p_name: 'Hospital Management System',
          p_tools: 'Redux, React, MongoDB, Express, Node JS, Material UI',
          web_link: 'https://hms-7lax.onrender.com',
          git_link: 'https://github.com/Persistent-A/MERN'
        },
        {
          src: require("../images/bookArena.png"),
          // src: "../images/bookArena.png",
          alt: 'bookArena',
          p_name: 'bookArena',
          p_tools: 'Python, Flask, HTML5, CSS3',
          web_link: 'https://bookarena-n44l.onrender.com',
          git_link: 'https://github.com/Persistent-A/bookArena'
        },
        {
          src: require("../images/weDesign.png"),
          // src: "../images/weDesign.png",
          alt: 'we-design',
          p_name: 'WeDesign',
          p_tools: 'HTML5, CSS3, Javascript(ES6)',
          web_link: 'https://we-design.vercel.app/',
          git_link: 'https://github.com/Persistent-A/WeDesign'
        },
        {
          src: require("../images/ttt.png"),
          // src: "../images/ttt.png",
          alt: 'tic-tac-toe',
          p_name: 'Tic Tac Toe',
          p_tools: 'HTML5, CSS3, Javascript(ES6)',
          web_link: 'https://tic-tac-toe-tu3j.onrender.com',
          git_link: 'https://github.com/Persistent-A/Tic_Tac_Toe'
        }
    ]

    projects.map((pro) => console.log(pro.src))
    
  return (
    <div className="work">
      {projects.map((pro) =>
      <div key={pro.alt}>
        <ProjectCard 
          src= {pro.src}
          alt= {pro.alt}
          p_name= {pro.p_name}
          p_tools= {pro.p_tools}
          web_link= {pro.web_link}
          git_link= {pro.git_link}
        />
      </div> 
      )}
    </div>
  )
}

export default Work
