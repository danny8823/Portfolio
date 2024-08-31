import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

function NavBar() {
  return (
    <div className = 'navbar-container'>
      <div className = 'navbar-link-container'>
        <Link to = '/' className='nav-links'>Home</Link>
        <Link to = '/projects' className='nav-links'>Projects</Link>
        <Link to = '/resume' className='nav-links'>Resume</Link>
        {/* <Link to = '/contact'>Contact</Link> */}
        <Link to = '/about' className='nav-links'>About</Link>
      </div>
    </div>
  )
}

export default NavBar