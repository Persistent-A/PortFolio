

const AboutMe = () => {
  return (
    <div>
        <div>
            <div>
                <h1>Where I Learnt</h1>
                <p>Bachelor of Technology 2010-2014</p>
                <p>AEC Diploma in Internet Programming 2021-Present</p>
            </div>
            <div>
                <h1>Where I Worked</h1>
                <p>Samast Technology Pvt Ltd December, 2017 - June, 2019</p>
                    <p>Operation Associate</p>
            </div>
        </div>
        <div>
             <form className="skill-container">
                <h1>SKILLS</h1>
                <div className="skill-row">
                  <input type='submit' value='CSS'/>
                  <input type='submit' value='HTML'/>
                  <input type='submit' value='JavaScript'/>
                  <input type='submit' value='Python'/>
                  <input type='submit' value='Flask'/>
                  <input type='submit' value='Django'/>
                  <input type='submit' value='GIT'/>
                  <input type='submit' value='nodejs'/>
                  <input type='submit' value='react'/>
                  <input type='submit' value='MongoDB'/>
                  <input type='submit' value='MySQL'/>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AboutMe
