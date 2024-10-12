import React from 'react'
import './Projects.css'
import tododo from '../../assets/tododo preview.jpg'
import golfsite from '../../assets/dontshank-ecomm.jpg'
import facepage from '../../assets/facepage-site.jpg'
function Projects() {
  return (
    <div className = 'project-body'>
        <h1 className = 'projects-page-title'>My projects..</h1>
        <div className = 'projects-container'>
            <div className = 'projects-card'>
                <img className = 'project-img' src = {tododo} alt = 'placeholder image'/>
                <a href = 'https://spiffy-gecko-cb142b.netlify.app/'>TODODO APP</a>
                <h1>TODODO</h1>
                <p>A simple CRUD todo app, make an account and start your todo list, it comes with a cool dashboard!</p>
            </div>
            <div className = 'projects-card'>
                <img className = 'project-img' src = {golfsite} alt = 'placeholder image'/>
                <a href = 'https://golfworld123456.netlify.app/'>DONT SHANK</a>
                <h1>Dont Shank Golf Shop</h1>
                <p>An e-commerce site that sells everything golf. Just do not shank with our products.</p>
            </div>
            <div className = 'projects-card'>
                <img className = 'project-img' src = {facepage} alt = 'placeholder image'/>
                <a href = 'https://facepage123456.netlify.app/'>FacePage</a>
                <h1>FacePage</h1>
                <p>A more simple version of facebook, facepage. Come socalize online with us.</p>
            </div>
        </div>
    </div>
  )
}

export default Projects