import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

function NavBar() {
  return (
    <div className = 'navbar-container'>
      <Link to = '/'>Home</Link>
      <Link to = '/'>Projects</Link>
      <Link to = '/'>Resume</Link>
      <Link to = '/'>Contact</Link>
      <Link to = '/'>About</Link>
    </div>
  )
}

export default NavBar