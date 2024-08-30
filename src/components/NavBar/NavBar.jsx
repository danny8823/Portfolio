import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

function NavBar() {
  return (
    <div className = 'navbar-container'>
      <div className = 'navbar-link-container'>
        <Link to = '/'>Home</Link>
        <Link to = '/projects'>Projects</Link>
        <Link to = '/resume'>Resume</Link>
        {/* <Link to = '/contact'>Contact</Link> */}
        <Link to = '/about'>About</Link>
      </div>
    </div>
  )
}

export default NavBar