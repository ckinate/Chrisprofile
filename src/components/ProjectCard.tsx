
import '../styles/ProjectCard.css'

// Define the shape of the link object
interface Link {
    url: string;
    label: string;
  }
  
  // Define the props type for the ProjectCard component
  interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    techStack: string[];
    links: Link[];
  }

export default function ProjectCard({ title, description, image, techStack, links } : ProjectCardProps) {
  return (
    <div className="project-card">
      <div className="project-content">
        <div className="project-text">
          <h3 className='project-title'>{title}</h3>
          <hr/>
          <p className='project-desc'>{description}</p>
          <div className="tech-stack-section">
            <strong>Tech Stack:</strong>
            <div className="tech-stack">
              {techStack.map((tech, index) => (
                <span key={index} className="tech-item">{tech}</span>
              ))}
            </div>
          </div>
          <div className="project-links">
            {links.map((link, index) => (
              <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="project-image">
          <img src={image} alt={title} />
        </div>
      </div>
    </div>
  );
}
