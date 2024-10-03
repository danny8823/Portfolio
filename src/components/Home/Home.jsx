import React from 'react'
import './Home.css'
import codingImg from '../../assets/coding-img.jpg'

function Home() {
  return (
      <div className = 'home-container'>
        <div className = 'info-container'>
          <h1 className = 'home-title'>Welcome to my portfolio.</h1>
          <p>Hello, my name is Danny Yoo and I am a software engineer.</p>
          <br/>
          <p>I showcased some of projects here, feel free to take a look!</p>
        </div>
        <img className = 'home-image' src = {codingImg} alt = 'clouds'/>
      </div>
  )
}

export default Home