import { Link } from "react-router-dom";
import '../styles/Navbar.css';
import { useState } from "react";
import profileImage from '../assets/profileImage/ChrisPicture.jpeg'
export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };
  return (
    <nav className="navbar">
          <div className="logo">Chris</div>
      <div className="hamburger" onClick={() => toggleMenu()}>
        <span className={isMenuOpen ? 'bar active' : 'bar'}></span>
        <span className={isMenuOpen ? 'bar active' : 'bar'}></span>
        <span className={isMenuOpen ? 'bar active' : 'bar'}></span>
        <span className={isMenuOpen ? 'bar active' : 'bar'}></span>
      </div>
      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
        <li><Link to="/about" onClick={toggleMenu}>About </Link></li>
        <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
        <li><Link to="/education" onClick={toggleMenu}>Education</Link></li>
        <li><Link to="/projects" onClick={toggleMenu}>Projects</Link></li>
      </ul>
   
     </nav>
  )
}
