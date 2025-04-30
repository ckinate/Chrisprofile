

import ProjectCard from '../components/ProjectCard'
import '../styles/Projects.css'
import Image1 from '../assets/projectImage/Screenshot1.png'
import Image2 from '../assets/projectImage/Screenshot2.png'
import Image3 from '../assets/projectImage/Screenshot3.png'
import Image4 from '../assets/projectImage/Screenshot4.png'
import Image5 from '../assets/projectImage/Screenshot5.png'

export default function Projects() {
    const projects = [
        {
          title: 'Newsworthy Mobile App',
          description: 'I built Newsworthy App for a News startup. In the first version, the users are able to see news and get real-time notification of news update. Also, administrators are able to post both text news headline news which are audio format so users can listen to them just like a podcast. I designed the UI/UX, created the backend API services, built a portfolio website and created the functionality of the mobile application.',
          image: Image1, // Replace with actual image path
          techStack: ['React Native', 'Firebase', 'Cloudinary', 'Unstated', 'GraphQL'],
          links: [
            { label: 'App Store', url: '#' },
            { label: 'Google Play', url: '#' },
          ],
        },
        {
          title: 'Agnes Sponsorship Web App',
          description: 'Agnes Sponsorship Web App is a side project of the mumspring organization, where individual firms or cooperatives or NGOs can sponsor their own women to a successful postnatal and antenatal process. I worked on the development to the integration both one-time payment and a subscription based plan. I also featured in the backend development to monitor, keep track and maintain beneficiaries specific to their sponsors. I followed through the development process from the frontend to the backend API services unit testing and to its documentation.',
          image: Image2, // Replace with actual image path
          techStack: ['Flutterwave', 'Paystack'],
          links: [{ label: 'Web', url: '#' }],
        },
        {
          title: 'NIBSS Enterprise App',
          description: 'The NIBSS Enterprise app is built under the Fintrak software organization. This product consists of features ranging from Companies workflow, Expense management, Document Management, Financial Management etc. to aid the smooth run of their operations.',
          image: Image3, // Replace with actual image path
          techStack: ['Modern Technologies'],
          links: [{ label: 'Web', url: '#' }],
        },
      ];
  return (

    <div className="projects">
     
      <h2>PROJECTS</h2>
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          image={project.image}
          techStack={project.techStack}
          links={project.links}
        />
      ))}
      <button className="show-more">SHOW MORE</button>
    </div>
  )
}
