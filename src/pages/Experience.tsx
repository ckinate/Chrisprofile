import React from 'react'

export default function Experience() {
  return (
    <div className="py-16 px-8 ">
    <h2 className="text-4xl font-bold text-center mb-12">Professional Experience</h2>
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="bg-white/10 p-8 rounded-lg shadow-lg">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="  text-2xl font-semibold">Fintrak Software</h3>
            <p >Lagos Nigeria • 2019 - 2025</p>
            <p className="text-lg font-medium mt-2">FullStack Developer</p>
          </div>
         </div>
                  
         
         <div className="mt-4 space-y-2">
                      {[
                          "Developed a mobile application for delivery and logistics using React Native and Expo",
                          "Designed and implemented a backend system with Express.js to handle user authentication, order management, and real-time tracking",
                          "Integrated WebSockets for real-time communication between drivers and customers",
                          "Implemented geolocation services to enable live tracking and efficient route optimization",
                          "Developed an intuitive and responsive UI for a seamless user experience",
                          "Optimized API performance and database queries to ensure a scalable and efficient system",
                          "Implemented secure authentication and authorization mechanisms using JWT",
                          "Worked closely with stakeholders to refine features and enhance user engagement"
                      ].map((text, index) => (
                          <div key={index} className="flex items-start gap-2">
                              <div className="mt-1 w-2 h-2 bg-gray-600 rounded-full flex-shrink-0" />
                              <p >{text}</p>
                              
                        </div>
                      ))}
                  </div>   
       
      </div>
      <div className="bg-white/10 p-8 rounded-lg shadow-lg">
        <div className="flex justify-between items-center">
          <div>
            <h3 className=" text-2xl font-semibold">Sentinl</h3>
            <p >Canada • 2024</p>
            <p className="text-lg font-medium mt-2">Backend & Machine Learning Engineer</p>
          </div>
        </div>
                  
                  <div className="mt-4  space-y-2">
                      {[
                          "Developed a backend system using Python and Flask to handle API requests and data processing",
                          "Designed and implemented a pipeline to clean and preprocess CSV data for machine learning model training",
                          "Built and deployed machine learning models to predict trade-in and preowned values of used mobile devices",
                          "Developed models for Screen Liquid Damage (SLD) and Anti-Theft Protection (SAP) insurance pricing",
                          "Created RESTful APIs to serve predictions and integrate them seamlessly with the frontend",
                          "Optimized model performance and ensured efficient processing of large datasets",
                          "Implemented robust error handling and logging to improve system reliability",
                          "Ensured scalability and security of the backend infrastructure"
                      ].map((text, index) => (
                          <div key={index} className="flex items-start gap-2">
                              <div className="mt-1 w-2 h-2 bg-gray-600 rounded-full flex-shrink-0" />
                              <p>{text}</p>
                              
                        </div>
                      ))}
                  </div>      
    
    </div>
              
   
              
    </div>
  </div>
  )
}
