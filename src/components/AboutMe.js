import { FaGraduationCap } from 'react-icons/fa'
import { BsBookHalf } from 'react-icons/bs'

const AboutMe = () => {
  return (
    <>
      <div className='work_header' id='section2'>
        <p className="work_title">About Me</p>
        <hr style={{width: '40%', border: 'none', borderBottom: '1px solid grey', marginLeft: '20px', marginTop: '10px'}}/>
      </div>
      <div className="aboutMe_container">
        <p>Education</p>
        <div className="education">
          <div className="education_card">
            <p  className='degree'><FaGraduationCap className='education_icons'/> Bachelor of Technology</p>
            <p  style={{color: 'grey'}} className='institute'>Lovely Professional University, India</p>
            <p  style={{color: 'grey'}} className='course'>Electronics and Communications Engineering</p>
            <p  style={{color: 'grey'}} className='duration'>2010 - 2014</p>
          </div>
          <div className="education_card">
            <p className='degree'><BsBookHalf className='education_icons'/> AEC Diploma</p>
            <p style={{color: 'grey'}}className='institute'>TAV College, Montreal</p>
            <p style={{color: 'grey'}}className='course'>Internet Programming</p>
            <p style={{color: 'grey'}}className='duration'>2021 - Present</p>
          </div>
        </div>
        <p>Where I Worked</p>
        <div className="experience">
          <p style={{color: "#3e9d49", fontSize: "20px", marginBottom: "10px"}}>Samast Technology Pvt Ltd </p>
          <p style={{color: "grey", fontSize: "18px", marginBottom: "10px"}}>Operation Associate</p>
          <p style={{color: "grey", fontSize: "18px"}}>December, 2017 - June, 2019</p>
        </div>
        <p>Skills</p>
        <div className="skills" id="section3">
          <p> CSS       </p>
          <p> HTML      </p>
          <p> JavaScript</p>
          <p> Python    </p>
          <p> Flask     </p>
          <p> GIT       </p>
          <p> nodejs    </p>
          <p> react     </p>
          <p> Redux     </p>
          <p> MUI</p>
          <p> BootStrap </p>
          <p> Express   </p>
          <p> MongoDB   </p>
          <p> MSSQL     </p>
        </div>

      </div>
    </>
    )
  }

export default AboutMe
