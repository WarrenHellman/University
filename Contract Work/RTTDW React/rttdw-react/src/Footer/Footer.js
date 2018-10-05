import React from 'react';
import './Footer.css'
import githubIcon from '../images/github.png'
import linkedin from '../images/in.png'

const Footer = () => {
  return (
    <div className='Footer'>
      <div>
        <p className='Copyright'>©  Recursive Thinking, All Rights Reserved</p>
      </div>
      <div>
        <img className='github' src={githubIcon} alt='GitHub link' />
        <img className='linkedIn' src={linkedin} alt='LinkedIn link' />
      </div>
    </div>
  
  )
}

export default Footer;