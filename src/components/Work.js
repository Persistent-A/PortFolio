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
      p_description: 'Application is able to store  patient details in a database using MongoDB, which is used to book appointments in hospitals, further, those appointments are retrieved by respective field doctors to check for the schedules after logging in.',
      p_tools: 'Redux, React, MongoDB, Express, Node JS, Material UI',
      web_link: 'https://hms-7lax.onrender.com',
      git_link: 'https://github.com/Persistent-A/MERN',
      description: <>  <p className="testcase">Test Case to login the doctor portal</p>
      <p>Employee ID: 123</p>
      <p>Password: test123</p></>
    },
    {
      src: require("../images/bookArena.png"),
      // src: "../images/bookArena.png",
      alt: 'bookArena',
      p_name: 'bookArena',
      p_description: 'CRUD operations concerning information about books can be performed on the app. The app can be used to filter the books in the library based on price range.',
      p_tools: 'Python, Flask, HTML5, CSS3',
      web_link: 'https://bookarena-n44l.onrender.com',
      git_link: 'https://github.com/Persistent-A/bookArena',
    },
    {
      src: require("../images/weDesign.png"),
      // src: "../images/weDesign.png",
      alt: 'we-design',
      p_name: 'WeDesign',
      // p_description: 'Built a sample website having different layouts such as a carousel drawer.',
      p_description: 'Employed DOM manipulation for the about and the services section of the website, enabling sliding tab and carousel effect respectively. Created the project section of the website with the help of flexbox.',
      p_tools: 'HTML5, CSS3, Javascript(ES6)',
      web_link: 'https://we-design.vercel.app/',
      git_link: 'https://github.com/Persistent-A/WeDesign',
    },
    {
      src: require("../images/ttt.png"),
      // src: "../images/ttt.png",
      alt: 'tic-tac-toe',
      p_name: 'Tic Tac Toe',
      p_description: 'The game enables users to change player2 mode as well as player name change, beside these it also tracks the count of game played and draw count.',
      p_tools: 'HTML5, CSS3, Javascript(ES6)',
      web_link: 'https://tic-tac-toe-tu3j.onrender.com',
      git_link: 'https://github.com/Persistent-A/Tic_Tac_Toe',
    }
  ]

    projects.map((pro) => console.log(pro.src))
    
  return (
    <div>
      <div className="work_header">
        <p className="work_title">Some Of My Implementations</p>
        <hr style={{width: '40%', border: 'none', borderBottom: '1px solid grey', marginLeft: '20px', marginTop: '10px'}}/>
      </div>
      <div className="work">
        {projects.map((pro) =>
        <div key={pro.alt}>
          <ProjectCard 
            src= {pro.src}
            alt= {pro.alt}
            p_name= {pro.p_name}
            p_description= {pro.p_description}
            p_tools= {pro.p_tools}
            web_link= {pro.web_link}
            git_link= {pro.git_link}
            description = {pro.description}
          />
        </div> 
        )}
      </div>
    </div>
    
  )
}

export default Work
