
import './App.css'
import Particlebackground from './components/Particlebackground'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import ParticleAnimationResize from './components/ParticleAnimationResize'
import Footer from './components/Footer'
import Education from './pages/Education'
import Experience from './pages/Experience'

function App() {
 

  return (
    <BrowserRouter >
      <div className="App">
        <Navbar />
        <Particlebackground />
        <ParticleAnimationResize/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experiences" element={<Experience />} />
        </Routes>
        <Footer/>
        
      </div>

    </BrowserRouter>
 
  )
}

export default App
