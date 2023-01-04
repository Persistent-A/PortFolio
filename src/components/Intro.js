import profile_image from "../images/profile_image.jpg"

const Intro = () => {
    
  return (
    <main style={{color: "white"}} className="intro_container">
        <img src={profile_image} alt="profile" className="profile_image"/>
        <div className="intro_brief">
            <p>Hi</p>
            <p>My name is <span> Apurva </span></p>
            <p className="job_role">Full Stack Developer</p>
            <div className="resume_link">
                <a href="https://github.com/Persistent-A/Resume/raw/main/Internship_CV.pdf" className="cv-button" target="_blank" rel="noopener noreferrer">Download CV</a>
            </div>
        </div>
    </main>
    
  )
}

export default Intro
