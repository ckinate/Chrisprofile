

import ProjectCard from '../components/ProjectCard'
import '../styles/Projects.css'
import BankRecImage from '../assets/projectImage/BankRec.jpg'
import VendorImage from '../assets/projectImage/Vendor.jpg'
import InventoryImage from '../assets/projectImage/Inventory.jpg'
import ExpenseImage from '../assets/projectImage/Expense.jpg'
import RealEstateImage from '../assets/projectImage/RealEstate.png'
import ProductImage from '../assets/projectImage/Product.jpg'
import ProcurementImage from '../assets/projectImage/Procurement.jpg'
import FinanceImage from '../assets/projectImage/Finance.jpg'
import HospitalImage from '../assets/projectImage/HospitalImage.jpg'
import ApprovalImage from '../assets/projectImage/Approval.jpg'



export default function Projects() {
    const projects = [
        {
          title: 'Bank Reconciliation App',
          description: 'Bank Reconciliation was developed under fintrak software company and is use to automate reconcilliation process using a smart algorithm to reconcile the Ledger and bank statement with an external integration for direct pulling of Bank statement from various Banks.It eliminate the manual reconciliation process and with posting to ledger after approval process.I worked on both the frontend and backend and the integration with external API',
          image: BankRecImage, 
          techStack: ['Angular', '.Net Core', 'MSSQL', 'MONO API', 'Redis','HangFire'],
          links: [
            { label: 'Web', url: 'https://erp.fintraksoftware.com/Account/Login' }
          ],
        },
        {
          title: 'Vendor Management App',
          description: 'Vendor Management App was developed under Fintrak Software company and is use to manage organisation vendor onboarding process from the setup to categorisation and registeration of the organisation vendors. It is also use for vendor deactivation or blacklisting and each process pass through a robust approval process.I worked on both the frontend and backend and the report aspect of it ',
          image: VendorImage, // Replace with actual image path
          techStack: ['.Net Core', 'Postgres','MSSQL','Angular'],
          links: [{ label: 'Web', url: 'https://erp.fintraksoftware.com/Account/Login' }],
        },
        {
          title: 'Inventory Management App',
          description: 'Inventory Management app is built under the Fintrak software organization. This product is use to manage all inventories of an organisation and contain features such as inventories requisition,reorder level,stock transfer, Inventory Categorisation,Item creation, allocation, return allocation, approval and a rebust report. I worked on both the frontend and backend',
          image: InventoryImage, // Replace with actual image path
          techStack: ['.Net Core', 'Postgres','MSSQL','Angular'],
          links: [{ label: 'Web', url: 'https://erp.fintraksoftware.com/Account/Login' }],
      },
      {
        title: 'Expense Management App',
        description: 'Expense Management App is built under the Fintrak software organization. This product is use for payment of all expenses. It consist of expense requisition, approval process, expense payment,accrual, cash advance requisition, cash retirement and the various reports. I worked on both the frontend and backend and the report',
        image: ExpenseImage, 
        techStack: ['.Net Core', 'Postgres','MSSQL','Angular'],
        links: [{ label: 'Web', url: 'https://erp.fintraksoftware.com/Account/Login' }],
      },
      {
        title: 'Product Management App',
        description: 'Product Management App is built under the Fintrak software organization. This is use to manage any organisation products, it consist of product setup, product categorisation, product creation and its approval process and a comprehensive reports. I worked on both the frontend and backend',
        image: ProductImage, 
        techStack: ['.Net Core', 'Postgres','MSSQL','Angular'],
        links: [{ label: 'Web', url: 'https://erp.fintraksoftware.com/Account/Login' }],
      },
      {
        title: 'Procurement Management App',
        description: 'Procurement Management App is built under the Fintrak software organization. This is a robust application that is use to manage all procurement processes from start to the end. It consist of requisition(Service,Inventory,Fixed Asset), Quotation Creation and responses, vendors assessment, vendor selection,Contracts generation, Contract Award letter, contracts execution/delivery, payment request, returns ,performance evaluation and reports. I worked on the backend and integration with other modules',
        image: ProcurementImage, 
        techStack: ['.Net Core', 'Postgres','MSSQL','Angular'],
        links: [{ label: 'Web', url: 'https://erp.fintraksoftware.com/Account/Login' }],
      },
      {
        title: 'Finance Management App',
        description: 'Finance Management App is built under the Fintrak software organization. This product is use to manage the financial operation of an organisation rainging from accounting period setup,Financial statement,Journal Entry,ledger Details, Chart of Account, End of Period,Trial Balance and Reports. I worked on both frontend and backend',
        image: FinanceImage, 
        techStack: ['.Net Core', 'Postgres','MSSQL','Angular'],
        links: [{ label: 'Web', url: 'https://erp.fintraksoftware.com/Account/Login' }],
      },
       {
        title: 'Approval Management System',
        description: 'Approval Management App is built under the Fintrak software organization. This is use to automate the approval process of an organisation.It can be configure to follow through the organisation organogram or through  direct users selected during the set up',
        image: ApprovalImage, 
        techStack: ['.Net Core', 'Postgres','MSSQL','Angular'],
        links: [{ label: 'Web', url: 'https://erp.fintraksoftware.com/Account/Login' }],
      },
      {
        title: 'Real Estate Management App',
        description: 'Real Estate Management App is an application I built for a client. This product is use for real estate renting where house owner can login to advertise theirs houses and those looking for house can see various house listing and contact the owners.It consist of normal authentication and Google authentication',
        image: RealEstateImage, 
        techStack: ['ExpressJs', 'MongoDb','Firebase','React'],
        links: [{ label: 'Web', url: 'https://christech-estate.onrender.com/sign-in' }],
      },
      {
        title: 'Hospital Management App',
        description: 'Hospital Management App is an application I built for a client. This product is use to automate hospital processes ranging from patient registration,patient examination, Doctor assignment and reasignment,laboratory test,drugs prescription and payment and reports.',
        image: HospitalImage, 
        techStack: ['.Net Core', 'Postgres','Firebase','React'],
        links: [{ label: 'Web', url: '#' }],
      }
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
      {/* <button className="show-more">SHOW MORE</button> */}
    </div>
  )
}
