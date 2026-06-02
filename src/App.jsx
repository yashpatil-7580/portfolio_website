
import './App.css'
import Navbar from './components/Navbar'
import About from './section/About'
import Contact from './section/Contact'
import Education from './section/Education'
import HeroSection from './section/HeroSection'
import Project from './section/Projects'
import Skills from './section/Skills'


function App() {
  

  return (
    <>
    <Navbar/>
       <HeroSection/> 
       <About/> 
      <Skills/> 
     <Project/> 
     <Education/> 
     <Contact/> 
    </>
  )
}

export default App
