const portfolio = [
    {
        id: 0,
        projectName: "Optiwyse ERP",
        url: "https://erpsystem.tutelator.com/",
        image: "projects/erp.png",
        projectDetail: "This project involves creating a complete ERP system with modules for HR management, a job portal, CRM, and accounts, along with a desktop application.",
        technologiesUsed: [
            {
                tech: "Laravel"
            },
            {
                tech: "Ajax"
            },
            {
                tech: "JS"
            },
            {
                tech: "Electron js"
            },
           
        ]
    },
    {
        id: 0,
        projectName: "Optiwyse pos inventory accounts ERP",
        url: "https://optiwysepro.tutelator.com/",
        image: "projects/pos.jpg",
        projectDetail: "A comprehensive POS inventory accounts ERP system, streamlining business operations and enhancing efficiency. Includes a robust CRM module for effective customer relationship management.",
        technologiesUsed: [
            {
                tech: "laravel"
            },
            {
                tech: "Ajax"
            },
            {
                tech: "JS"
            },
        ]
    },
    {
        id: 0,
        projectName: "Gemini Clone",
        url: "##",
        image: "projects/gemini.png",
        projectDetail: "A Google Gemini-inspired conversational AI chatbot, leveraging natural language processing and machine learning to generate human-like responses.",
        technologiesUsed: [
            {
                tech: "ReactJS"
            },
            {
                tech: "Html"
            },
            {
                tech: "CSS"
            },
        ]
    },
    {
        id: 0,
        projectName: "Optiwyse Erp Desktop Application",
        url: "##",
        image: "projects/desktop.png",
        projectDetail: "A desktop application integrated with Optiwyse ERP system, designed to monitor employee productivity and task management. Installed on employee desktops, it takes random screenshots in the background and records overall task time, providing insights into employee activity and performance. Additionally, it features clock-in and clock-out functionality, allowing employees to log their work hours and enabling administrators to track attendance and work schedules.",
        technologiesUsed: [
            {
                tech: "Electron JS"
            },
            {
                tech: "Laravel"
            },
            {
                tech: "REST API's"
            },
        ]
    },
    {
        id: 0,
        projectName: "Kadtech",
        url: "https://kadtechs.com/",
        image: "projects/kadtech.png",
        projectDetail: "A comprehensive portfolio website designed and developed for Kadtech, a leading IT company. The website showcases their services, pricing, and gallery, highlighting their expertise in innovative technologies and commitment to delivering cutting-edge solutions.",
        technologiesUsed: [
            {
                tech: "ReactJS"
            },
            {
                tech: "Laravel"
            },
            {
                tech: "REST API's"
            },
        ]
    },
    {
        id: 0,
        projectName: "Keviz Java Android App",
        url: "",
        image: "projects/keviz.png",
        projectDetail: "An innovative Android app designed to assist individuals with short-sightedness, developed in consultation with medical professionals. Users can select their prescription strength, and the app adjusts font size, display size, contrast, and brightness accordingly, eliminating the need for glasses while using their phone.",
        technologiesUsed: [
            {
                tech: "Java"
            },
            {
                tech: "XML"
            },
            {
                tech: "REST API's"
            },
            {
                tech: "Laravel"
            },
           
        ]
    },
    {
        id: 0,
        projectName: "Ecommerce",
        url: "/domain-expired",
        image: "projects/mern.png",
        projectDetail: "It is A ecommerce website,where you can open your own store and sell products of different brands!",
        technologiesUsed: [
            {
                tech: "React"
            },
            {
                tech: "ExpressJS"
            },
            {
                tech: "REST API's"
            },
            {
                tech: "Mongo DB"
            },
            {
                tech: "NodeJS"
            },
        ]
    },
    {
        id: 1,
        projectName: "Hr Accounts ERP",
        url: "https://#/",
        image: "projects/hr.png",
        projectDetail: "A comprehensive HR Accounts ERP system, integrating project management features similar to Asana, time tracking capabilities like Time Doctor, and accounting modules inspired by QuickBooks. This desktop application streamlines HR, project management, and accounting processes, enhancing productivity and efficiency.",
        technologiesUsed: [
            {
                tech: "React"
            },
            {
                tech: "Laravel"
            },
            {
                tech: "REST API's"
            },
          
        ]
    },
    {
        id: 2,
        projectName: "Java hr Employee Monitoring APP",
        url: "https://#/",
        image: "projects/java.png",
        projectDetail: "A desktop application designed for employee monitoring, featuring clock-in and clock-out functionality, random screenshot capture, and automated time tracking. If an employee remains inactive for 30 seconds, the app prompts them to confirm their status, ensuring accurate time tracking and efficient workforce management.",
        technologiesUsed: [
            {
                tech: "Java"
            },
            {
                tech: "Java Fx"
            },
            {
                tech: "Laravel"
            },
            {
                tech: "REST API's"
            },
            {
                tech: "Jnativehook"
            },
        ]
    },

    {
        id: 2,
        projectName: "Nasksoft",
        url: "https://nasksoft.com/",
        image: "projects/nasksofts.png",
        projectDetail: "A professional portfolio website designed and developed for Nasksoft, a leading IT company. This website showcases their expertise, services, and projects, highlighting their commitment to innovation and excellence in the IT industry.",
        technologiesUsed: [
            {
                tech: "React"
            },
            {
                tech: "Laravel"
            },
            {
                tech: "REST API's"
            },
          
        ]
    },

   
]
export default function handler(req, res) {
    res.status(200).json(portfolio)
}
