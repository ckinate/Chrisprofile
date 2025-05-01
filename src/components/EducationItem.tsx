
interface EducationItemProps {
    title: string;
    details: string[];
    date: string;
    company: string;
    
  }
export default function EducationItem({ date, title, company, details }:EducationItemProps) {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start mb-8 relative">
    <div className="bg-blue-500 text-white px-4 py-2 rounded-lg mb-4 md:mb-0 md:mr-6 text-center w-48">
      {date}
    </div>
    <div className="flex items-center md:items-start">
      <div className="w-4 h-4 bg-blue-500 rounded-full mr-4 md:mr-6 z-10 border-2 border-[#6B5B95]"></div>
      <div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-white">{company}</p>
        {details.map((detail, index) => (
          <p key={index} className="text-white">• {detail}</p>
        ))}
      </div>
    </div>
  </div>
  )
}
