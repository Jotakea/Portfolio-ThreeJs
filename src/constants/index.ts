const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Education",
    link: "#education",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  /*{
    name: "Testimonials",
    link: "#testimonials",
  },*/

];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 5, suffix: "+", label: "Years of Experience" },
  { value: 5, suffix: "+", label: "Satisfied Clients" },
  { value: 15, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const projects = [
  {
    id: 1,
    title: "Time and Employee Management Application",
    imgPath: "/images/project1.png",
    description: "An application that allows employees to clock in and out, manage their schedules, and submit complaints, while enabling employers to monitor attendance, track performance, and oversee workforce activities.",
    link: "https://github.com/",
    backgroundColor: "bg-[#FFEFDB]",
    iconLists: [
      "/images/logos/react.png",
      "/images/logos/django.svg",
      "/images/logos/Postgre.png",
      "/images/logos/git.svg",
      "/images/logos/docker.png",
    ],
  },
  {
    id: 2,
    title: "Wedding Band Reservation Application",
    imgPath: "/images/project2.png",
    description: "An application that allows users to book wedding bands, manage their reservations, and submit complaints, while enabling employers to monitor attendance, track performance, and oversee workforce activities.",
    link: "https://github.com/",
    backgroundColor: "image-timeline-wrapper bg-[#ECCD77]",
    iconLists: [
      "/images/logos/react.png",
      "/images/logos/node.png",
      "/images/logos/git.svg",
    ],
  },
  {
    id: 3,
    title: "Protection Agency Consultation booking App",
    imgPath: "/images/project3.png",
    description: "",
    link: "https://github.com/",
    backgroundColor: "image-wrapper bg-[#2A5172]",
    iconLists: [
      "/images/logos/react.png",
      "/images/logos/node.png",
      "/images/logos/git.svg",
    ],
  }
]

const logoIconsList = [
  {
    imgPath: "/images/logos/company/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "Frontend Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Devops Engineer",
    modelPath: "/models/infinity-loop.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Mohamed brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
    imgPath: "/images/logos/work/3sspring.png",
    logoPath: "/images/logos/work/3s.png",
    title: "Intern, 3SSpring Tunisia",
    date: "July 2025 - August 2025",
    responsibilities: [
      "Developed a clock-in web application with a React frontend to improve employee time tracking and management efficiency.",
      "Designed and implemented responsive user interfaces following modern UI/UX principles.",
      "Collaborated on integrating the frontend with backend services to ensure smooth data flow and functionality.",
    ],
    skills: ["React", "Django", "PostgreSQL", "TypeScript", "Git", "Docker", "Figma"]
  },
  {
    review: "Mohamed contributions to the web application has been outstanding. He approaches challenges with a problem-solving mindset.",
    imgPath: "/images/logos/work/soretrak.png",
    logoPath: "/images/logos/work/sor.png",
    title: "Intern, SORETRAK Tunisia",
    date: "July 2024 - August 2024",
    responsibilities: [
      "Developed a web-based platform for route planning and resource tracking, improving productivity through faster and more accurate operations.",
      "Designed and implemented backend architecture with optimized SQL queries for enhanced performance.",
      "Built and maintained interactive user interfaces to ensure a seamless user experience.",
    ],
    skills: ["SQL", "Quarkus", "Vue.js", "Git", "Docker"]
  },
  {
    review: "Mohamed work on the mobile app brought a high level of quality and efficiency. He delivered a solution that enhanced our mobile experience & meet our product goals.",
    imgPath: "/images/logos/work/euro.png",
    logoPath: "/images/logos/work/etc.png",
    title: "Intern, Euro Tech Conseil Tunisia",
    date: "February 2023 - June 2023",
    responsibilities: [
      "Completed a thesis project developing and integrating a machine learning model for text detection within a mobile application.",
      "Applied both fundamental principles and advanced techniques of machine learning to improve model accuracy.",
      "Designed and implemented mobile application features to integrate and showcase the ML model effectively.",
    ],
    skills: ["Machine Learning", "Python", "Java", "Appwrite", "Android Studio", "Git", "Docker"]
  },
];

const education = [
  {
    title: "Master’s degree in software engineering",
    date: "September 2023 - present",
    school: "Private Higher School of Engineering and Technology - ESPRIT",
    description: ""
  },
  {
    title: "Bachelor's degree in computer systems engineering (IOT / Embedded systems)",
    date: "September 2020- June 2023",
    school: "Higher Institute of Applied Sciences and Technology of Kairouan.",
    description: ""
  }
]

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "Github",
    imgPath: "/images/git.png",
    link: "https://github.com/Jotakea",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    link: "https://www.linkedin.com/in/mohamed-nacer-adhoum-72532b206/",
  },
];

export {
  words,
  projects,
  abilities,
  education,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
