
import EducationItem from '../components/EducationItem';
import '../styles/Education.css'

export default function Education() {

    const education = [
        {
          date: "Jan 2010 - June 2015",
          title: "Mechanical Engineering",
          company: "University of Portharcourt",
          details: [
            "B.Eng in Mechanical Engineering (Second class upper)."
            
          ]
        },
        {
          date: "Jan 2001 - June 2006",
          title: "WASSCE",
          company: "Comprehensive Secondary School",
          details: ["Obtained  WASSCE"]
        }
      ];
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
          <h1 className="education-text">Education</h1>
          <div className="relative">
            <div className="absolute left-[208px] top-0 h-full w-1 bg-blue-500 hidden md:block"></div>
            {education.map((edu, index) => (
              <EducationItem key={index} {...edu} />
            ))}
          </div>
        </div>
  )
}
