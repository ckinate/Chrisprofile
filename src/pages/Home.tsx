import  { useEffect, useRef, useState } from 'react'
import '../styles/Home.css'
import Projects from './Projects';
import Experience from './Experience';
import profileImage from '../assets/profileImage/ChrisPicture.jpeg'
import Education from './Education';

export default function Home() {
  const [isFirstText, setIsFirstText] = useState(true);
  const textRef = useRef<HTMLParagraphElement>(null);
    useEffect(() => {
        const interval = setInterval(() => {
          setIsFirstText((prev) => !prev); // Toggle between the two texts
        }, 3000); // Change every 5 seconds
      
       // Set up IntersectionObserver for animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // Stop observing once animated
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }
    
      return () => {
        clearInterval(interval); // Cleanup on unmount
        if (textRef.current) {
          observer.unobserve(textRef.current);
        }
      };
      }, []);
  return (
    <div className="home">
      <div className="parent">

      <div className="profilePic"><img src={profileImage} alt="" /></div>
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
      </div>
     
      <div className="intro-text">
        <p ref={textRef} className='paraText'>
          With a strong foundation built over 5 years in software development, I have consistently delivered outstanding results across a wide spectrum of projects. My extensive experience includes collaborating effectively with cross-functional teams, utilizing a deep knowledge of diverse technologies to create exceptional web, mobile, and desktop applications. My unwavering commitment to self-improvement fuels my constant learning and adaptability, allowing me to approach each project with a unique problem-solving perspective. I am dedicated to maintaining a track record of excellence. Thank you for considering my profile.
        </p>
      </div>
      <Experience />
      <Projects />
      <Education/>
    </div>

  )
}
