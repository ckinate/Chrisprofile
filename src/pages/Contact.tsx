
import '../styles/Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {

  return (
    <div className="contact">
      <h2>SAY HI</h2>
      <p>I'll be happy to answer all your questions or </p>
      <p>inquiries, feel free to say Hello.</p>


      <div className='contact-card'>
      <div className="contact-options">
      <a href="https://github.com/ckinate"  target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faGithub} /> Reach me via GitHub</a>
        <a href="mailto:kinate.christian@gmail.com" > <FontAwesomeIcon icon={faEnvelope} /> Reach me via Email</a>
        <a href="https://www.linkedin.com/in/christian-eedee-kinate-5ab15b1b5/"  target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faLinkedinIn} /> Reach me via LinkedIn</a>
          <a href="#"> <FontAwesomeIcon icon={faWhatsapp} /> Call +2347039449438</a>
          <a href="https://drive.google.com/file/d/1OLzIchrl4ai7H7FnBXxFY8f-qFJ-6qdh/view?usp=sharing" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faFilePdf} /> Resume</a>
         

       
      </div>

      </div>
     
     
    </div>
  )
}
