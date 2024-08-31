import React from 'react'
import './Home.css'
import codingImg from '../../assets/coding-img.jpg'

function Home() {
  return (
    <div className = 'home-container'>
      <div className = 'info-container'>
        <h1 className = 'home-title'>Welcome to my portfolio.</h1>
        <p>Thanks for stopping by, this is a webpage dedicated to showcase my skills through a display of my projects and for you to get to know me better.</p>
        <br/>
        <p>I started to dive into the world of programming a couple years ago and immediately fell in love. There is nothing more enjoyable then a cup of coffee and coding up a project.</p><br/>
        <p>I hope you enjoy checking out my projects and please feel free to contact me!</p><br/>
      </div>
      <img className = 'home-image' src = {codingImg} alt = 'clouds'/>
    </div>
  )
}

export default Home