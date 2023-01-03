import { useState } from "react"

import { HiBars3BottomRight } from "react-icons/hi2"
import{ TfiClose } from "react-icons/tfi"

const Header = () => {
  const [isMenu, setIsMenu] = useState(false)

  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('Loa.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          // const fileURL = window.URL.createObjectURL(blob);
          const fileURL = 'https://drive.google.com/file/d/1t9Bly6dbgSVP-VUjHwrnpMnBil4XS8T2/view?usp=share_link'
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.target = '_blank';
          alink.download = 'Loa.pdf';
          alink.click();
      })
      setIsMenu(!isMenu)
  
  })}

  return (
    <header className="header">
        <p>Apurva</p>
        <div>
          <HiBars3BottomRight onClick={(e) => setIsMenu(!isMenu)}/>
          {isMenu && <div className="nav-links">
            <TfiClose onClick={(e) => setIsMenu(!isMenu)}/>
            <a  href="#section2" onClick={(e) => setIsMenu(!isMenu)}>About</a>
            <a  href="#section3" onClick={(e) => setIsMenu(!isMenu)}>Work</a>
            <a onClick={onButtonClick} href>Resume</a>
          </div>}
        </div>

    </header>
  )
}

export default Header