const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'Virtual University Karachi',
                degree: 'BSCS',
                detail: "Bachelor of Science in Computer Science.",
                year: 'Ongoing'
            },
            {
                id: 1,
                title: 'Government College of Commerce & Economics',
                degree: 'Commerce',
                year: '2018'
            },
            {
                id: 2,
                title: 'Gulf Asian UAE / Saifiyah Boys High school',
                degree: 'Computer science',
                year: '2016'
               
            },
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'CTO & Director at Azee Tech',
                role: 'Chief Technology Officer',
                desc: 'Championed tech innovation and led digital transformation efforts.Trained interns, enhancing production capabilities and skill development.',
                year: 'March 2023 - Feb 2024',
                location: 'Lahore, Pakistan'
            },
            {
                id: 3,
                title: 'Lead Full Stack Developer And Project Manager at AK Tech Zone',
                
                url: 'https://www.aktechzones.com/',
                desc: "Experienced Lead Full Stack Developer with six months' experience as a Project Manager, adept in driving tech transformations, fostering excellence, and implementing scalable solutions.",
                year: 'Feb 2020 - Dec 2022',
                location: 'Lahore, Pakistan'
            },
            {
                id: 4,
                title: 'Freelancer',
                role: 'Self Employed',
                
                desc: "Delivered solutions for web-based freelance projects and scalability.",
                year: 'Mar 2018 -  Present',
                location: 'Karachi, Pakistan'
            },

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
