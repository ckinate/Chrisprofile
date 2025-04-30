
import './App.css'
import Particlebackground from './components/Particlebackground'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import ParticleAnimationResize from './components/ParticleAnimationResize'

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
        </Routes>
        
      </div>

    </BrowserRouter>
    // <>
    //    <div className="relative min-h-screen flex items-center justify-center bg-gray-900 text-white">
    //     <Particlebackground />
    //     <h1 className="text-5xl font-bold z-10">Particle Animation in React</h1>
    //   </div>
     
    // </>
  )
}

export default App
