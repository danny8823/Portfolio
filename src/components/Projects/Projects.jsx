import React from 'react'
import './Projects.css'
import tododo from '../../assets/tododo preview.jpg'
import golfsite from '../../assets/dontshank-ecomm.jpg'
import facepage from '../../assets/facepage-site.jpg'
import govibeimg from '../../assets/govibe-img.jpg'
import nbasiteImg from '../../assets/nba_site.jpg'
function Projects() {
  return (
    <div className = 'project-body'>
        <h1 className = 'projects-page-title'>My projects..</h1>
        <div className = 'projects-container'>
            <div className = 'projects-card'>
                <img className = 'project-img' src = {tododo} alt = 'placeholder image'/>
                <a href = 'https://spiffy-gecko-cb142b.netlify.app/'>TODODO APP</a>
                <p>A simple CRUD todo app, make an account and start your todo list, it comes with a cool dashboard!</p>
                <br/><br/><br/><br/><br/><br/><br/><br/>
                <small>JS, EXPRESS, MONGODB, REACT, TAILWIND</small>
            </div>
            <div className = 'projects-card'>
                <img className = 'project-img' src = {golfsite} alt = 'placeholder image'/>
                <a href = 'https://golfworld123456.netlify.app/'>DONT SHANK GOLF SHOP</a>
                <p>An e-commerce site that sells everything golf. Just do not shank with our products.</p>
                <br/><br/><br/><br/><br/><br/><br/>
                <small>JS, EXPRESS, MONGODB, REACT</small>
            </div>
            <div className = 'projects-card'>
                <img className = 'project-img' src = {facepage} alt = 'placeholder image'/>
                <a href = 'https://facepage123456.netlify.app/'>FacePage</a>
                <p>A more simple version of facebook, facepage. Come socalize online with us.</p>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <small>JS, EXPRESS, MONGODB, REACT</small>
            </div>
            <div className = 'projects-card'>
                <img className = 'project-img' src = {govibeimg} alt = 'placeholder image'/>
                <a href = 'https://www.youtube.com/watch?v=WLGEAm2LoDY'>GoVibeApp</a>
                <p>A final group project. An IOS app using the PERN stack. Users can find activities using google maps to invite friends to do together.
                Used google maps API and a third party api to render data onto maps.
                </p>
                <br/><br/><br/><br/><br/>
                <small>JS, EXPRESS, MONGODB, REACT-NATIVE, GOOGLEMAPS-API</small>
            </div>
            <div className = 'projects-card'>
                <img className = 'project-img' src = {nbasiteImg} alt = 'placeholder image'/>
                <a href = 'https://nbastats.netlify.app/'>NBA stats</a>
                <p>A simple web site displaying NBA teams using nba stats api. Users can click on a team and view some current stats along with players on the team. Additionally they can also click the players for more stats.
                </p>
                <br/><br/><br/><br/><br/>
                <small>REACT, API</small>
            </div>
        </div>
    </div>
  )
}

export default Projects