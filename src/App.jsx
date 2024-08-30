import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import NavBar from './components/NavBar/NavBar'
import Projects from './components/Projects/Projects'
import Resume from './components/Resume/Resume'
import Contact from './components/Contact/Contact'
import About from './components/About/About'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <BrowserRouter>
      <NavBar/> 
      <Routes>
        <Route path = '/' element = {<Home/>}/>
        <Route path = '/projects' element = {<Projects/>}/>
        <Route path = '/resume' element = {<Resume/>}/>
        <Route path = '/contact' element = {<Contact/>}/>
        <Route path = '/about' element = {<About/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
