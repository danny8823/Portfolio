import React from 'react'
import './Home.css'
import codingImg from '../../assets/coding-img.jpg'

function Home() {
  return (
    <div className = 'home-container'>
      <div className = 'info-container'>
        <h1 className = 'home-title'>Welcome to my portfolio.</h1>
        <p>Thanks for stopping by and welcome! Please take a look at my porfolio. Don't get lost. </p>
        <br/>
      </div>
      <img className = 'home-image' src = {codingImg} alt = 'clouds'/>
    </div>
  )
}

export default Home