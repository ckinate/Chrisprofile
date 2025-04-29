import  { useEffect, useState } from 'react'
import '../styles/Home.css'
import Projects from './Projects';

export default function Home() {
    const [isFirstText, setIsFirstText] = useState(true);
    useEffect(() => {
        const interval = setInterval(() => {
          setIsFirstText((prev) => !prev); // Toggle between the two texts
        }, 5000); // Change every 5 seconds
    
        return () => clearInterval(interval); // Cleanup on unmount
      }, []);
  return (
    <div className="home">
      <div className="animated-text">
        {isFirstText ? (
          <>
            <h1>
              Hi there <span role="img" aria-label="wave">👋</span> my name is
            </h1>
            <h2>CHRISTIAN KINATE</h2>
          </>
        ) : (
          <>
            <h1>I am a</h1>
            <h2>FULLSTACK DEVELOPER</h2>
          </>
        )}
      </div>
      <div className="intro-text">
        <p>
          With a strong foundation built over 7 years in software development, I have consistently delivered outstanding results across a wide spectrum of projects. My extensive experience includes collaborating effectively with cross-functional teams, utilizing a deep knowledge of diverse technologies to create exceptional web, mobile, and desktop applications. My unwavering commitment to self-improvement fuels my constant learning and adaptability, allowing me to approach each project with a unique problem-solving perspective. I am dedicated to maintaining a track record of excellence. Thank you for considering my profile.
        </p>
      </div>
      <Projects/>
    </div>

  )
}
