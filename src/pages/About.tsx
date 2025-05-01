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
    const specialties = ['Web Development', 'Android & iOS Apps Development','Frontend Development', 'Backend Development'];
  const technologies = [    'React-Native', 'React', 'Python', 'MSSQL', 'Firebase', 'GraphQL', 'SQL', 'Docker', 'NodeJS','ExpressJS', 'C# & .Net Core', 'JavaScript', 'Angular', 'TypeScript', 'MongoDB','PostgreSQL','Redis','Microsoft Azure','and More...'  ];
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
      <div className="about-text">
      <p className="about-paratext">
      Highly experienced Software Engineer with over 5 years of expertise in designing, implementing, and maintaining scalable web and mobile
      application. Proficient in Frontend development using Angular,React typescript, and backend development using C# and
      .NET Core, Nodejs, and ExpressJs. Adept at optimizing database interactions and ensuring the security, scalability, and performance of enterprise application. Possess strong problem-solving abilities and a solid understanding of cloud platform like Azure, enabling 
      effective collaboration with cross-functional teams. Proven ability to deliver enterprise-grade solutions by integrating 
      robust architectures and optimizing performance. Committed to continuous learning and delivering high-quality solutions 
       that drive business success.
      </p>

      </div>
    
      {/* <h3>COMPANIES I HAVE WORKED WITH</h3>
      <div className="companies">
        <span>FINTRAK</span>
        <span>mumspring</span>
        <span>carrotSuite</span>
        <span>HIT PLC</span>
      </div> */}
      <h3>MY SPECIALTIES</h3>
      <div className="specialties">
        {specialties.map((specialty, index) => (
          <span key={index} className="bg-purple-800 py-2 px-4 rounded-lg hover:bg-purple-900 transition duration-300 cursor-pointer">{specialty}</span>
        ))}
      </div>
      <h3>TECHNOLOGIES I USE</h3>
      <div className="technologies">
        {technologies.map((tech, index) => (
          <span key={index}  className="bg-purple-800 py-2 px-4 rounded-lg hover:bg-purple-900 transition duration-300 cursor-pointer text-sm md:text-base">{tech}</span>
        ))}
      </div>
    </div>
  )
}
