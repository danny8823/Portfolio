import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import NavBar from './components/NavBar/NavBar'

function App() {

  return (
    <BrowserRouter>
      <NavBar/> 
      <Routes>
        <Route path = '/' element = {<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
