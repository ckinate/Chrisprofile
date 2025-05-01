
import { Link } from 'react-router-dom';
import '../styles/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn,faGithub,faTwitter } from '@fortawesome/free-brands-svg-icons';


export default function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <footer className="footer">
    <div className="footer-left">
      <h2>Chris</h2>
      <p>Copyright © {year} CHRISTIAN KINATE</p>
      <ul className="footer-links">
        <li>SITE MAP</li>
        <li><Link to="/" style={{ fontSize: '10px', marginLeft: '10px' }} >Home</Link></li>
        <li><Link to="/about" style={{ fontSize: '10px', marginLeft: '10px' }}>About Me</Link></li>
        <li><Link to="/contact" style={{ fontSize: '10px', marginLeft: '10px' }} >Contact Me</Link></li>
      </ul>
    </div>
    <div className="footer-right">
      <h3>GET IN TOUCH</h3>
      <p>kinate.christian@gmail.com</p>
              <div className="social-icons">
                  <a href="https://www.linkedin.com/in/christian-eedee-kinate-5ab15b1b5/"> <FontAwesomeIcon icon={faLinkedinIn}  /> </a>
                  <a href="https://github.com/ckinate"> <FontAwesomeIcon icon={faGithub}  /> </a>
                  <a href="https://www.linkedin.com"> <FontAwesomeIcon icon={faTwitter}  /> </a>
                
      </div>
    </div>
  </footer>
  )
}
