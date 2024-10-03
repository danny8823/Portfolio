import React from 'react'
import './Footer.css'
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <div id = 'footer-container'>
        <a href = 'https://www.linkedin.com/in/danny-yoo/' target='_blank'><FaLinkedin className = 'footer-icons'/></a>
        <a href = 'https://github.com/danny8823' target='_blank'><FaGithub className='footer-icons'/></a>
        <a href = 'mailto:dannyyoo714@gmail.com'><HiOutlineMail className = 'footer-icons'/></a>
    </div>
  )
}

export default Footer