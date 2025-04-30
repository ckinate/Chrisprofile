import  { useEffect, useRef } from 'react'
import '../styles/About.css'
import { init } from 'ityped';
import myImage from '../assets/profileImage/mypicture.jpeg'


export default function About() {
  //const textRef = useRef("");
  const textRef = useRef<HTMLSpanElement | null>(null);
  const initializedRef = useRef(false); // flag to prevent re-initialization
  useEffect(() => {
    if (textRef.current && !initializedRef.current) {
      init(textRef.current, {
        showCursor: true,
        backDelay: 1500,
        backSpeed: 60,
        strings: ['FullStack Developer', 'Solution Architect', 'Mobile Developer'],
      });
      initializedRef.current = true; // set flag to prevent future calls
    };
  }, []);
    const specialties = ['Web Development', 'Android & iOS Apps Development', 'UI/UX', 'Backend Development'];
  const technologies = [    'React-Native', 'React', 'Swift', 'Python', 'ARKIT', 'Firebase', 'GraphQL', 'SQL', 'Docker', 'NodeJS', 'C# & .Net Core',    'Digital Drawing', 'JavaScript', 'Angular', 'TypeScript', 'MongoDB', 'InVision', 'WebFlow', 'and More...'  ];
  return (
    <div className="about">
      <div className="intro" >
      <div className="left">
        <div className="imgContainer">
            <img src={myImage} alt="" />
        </div>
        </div>
        <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Christian Kinate</h1>
          <h3>
            A <span ref={textRef}></span>
          </h3>
        </div>
        
      </div>

      </div>
      {/* <h2>Hi, I am CHRISTIAN KINATE and I am a FULLSTACK DEVELOPER</h2> */}
      <p>
        With a strong foundation built over 7 years in software development, I have consistently delivered outstanding results across a wide spectrum of projects. My extensive experience includes collaborating effectively with cross-functional teams, utilizing a deep knowledge of diverse technologies to create exceptional web, mobile, and desktop applications. My unwavering commitment to self-improvement fuels my constant learning and adaptability, allowing me to approach each project with a unique problem-solving perspective. I am dedicated to maintaining a track record of excellence. Thank you for considering my profile.
      </p>
      <h3>COMPANIES I HAVE WORKED WITH</h3>
      <div className="companies">
        <span>FINTRAK</span>
        <span>mumspring</span>
        <span>carrotSuite</span>
        <span>HIT PLC</span>
      </div>
      <h3>MY SPECIALTIES</h3>
      <div className="specialties">
        {specialties.map((specialty, index) => (
          <span key={index}>{specialty}</span>
        ))}
      </div>
      <h3>TECHNOLOGIES I USE</h3>
      <div className="technologies">
        {technologies.map((tech, index) => (
          <span key={index}>{tech}</span>
        ))}
      </div>
    </div>
  )
}
