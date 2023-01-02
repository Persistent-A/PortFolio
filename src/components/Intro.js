import profile_image from "../images/profile_image.jpg"

const Intro = () => {

    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('Loa.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                // const fileURL = window.URL.createObjectURL(blob);
                const fileURL = 'https://drive.google.com/file/d/10djxUg94XEsOyHx751zWfgGXSRiCqk7m/view?usp=sharing'
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Loa.pdf';
                alink.click();
            })
    })
}
    
  return (
    <main style={{border: "1px solid blue"}} >
        <img src={profile_image} alt="profile" />
        <div>
            <p>Hi</p>
            <p>My name is <span> Apurva </span></p>
            <p>Full Stack Developer</p>
            <button onClick={onButtonClick}>Download CV</button>
        </div>
    </main>
  )
}

export default Intro
