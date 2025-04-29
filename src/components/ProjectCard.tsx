import React from 'react'
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
    <h3>{title}</h3>
    <p>{description}</p>
    <img src={image} alt={title} />
    <div className="tech-stack">
      {techStack.map((tech, index) => (
        <span key={index}>{tech}</span>
      ))}
    </div>
    <div className="links">
      {links.map((link, index) => (
        <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">{link.label}</a>
      ))}
    </div>
  </div>
  )
}
