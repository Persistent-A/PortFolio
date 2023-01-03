import profile_image from "../images/profile_image.jpg"

const Intro = () => {

    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('Loa.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                // const fileURL = window.URL.createObjectURL(blob);
                const fileURL = 'https://drive.google.com/file/d/1_1LU6skOJehaMlo-l8OWfu4EKY5RkkAI/view?usp=share_link'
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.target = '_blank';
                alink.download = 'Internship_CV.pdf';
                alink.click();
            })
    })
}
    
  return (
    <>
    <main style={{color: "white"}} className="intro_container">
        <img src={profile_image} alt="profile" className="profile_image"/>
        <div className="intro_brief">
            <p>Hi</p>
            <p>My name is <span> Apurva </span></p>
            <p className="job_role">Full Stack Developer</p>
            <div className="resume_link">
                <button onClick={onButtonClick} className="cv-button">Download CV</button>
            </div>
        </div>
    </main>
    <div id="about"></div>
    </>
    
  )
}

export default Intro
