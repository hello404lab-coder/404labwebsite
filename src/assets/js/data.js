import React from 'react';
// images
import AmanimotorsImage from "../../assets/images/amanimotors.png";
import LuxemotoImage from "../../assets/images/luxmoto.png";
import PremiersteelsImage from "../../assets/images/premiersteel.png";
import AlitamomentsImage from "../../assets/images/alitamoments.png";
import AltcoImage from "../../assets/images/altco.png";
import FizziImage from "../../assets/images/fizzi.png";
import Kiran from '../../assets/images/kiran.jpeg'
import Hafiz from '../../assets/images/hafiz.jpeg'
import Fayas from '../../assets/images/dp.jpg'
import Varun from '../../assets/images/varun.jpeg'
import Sharuk from '../../assets/images/sharuk.jpeg'
import Saleel from '../../assets/images/saleel.jpeg'
import Sahal from '../../assets/images/sahal.png'
import { Code, Zap, Monitor, Gauge, BarChart3, Layout } from 'lucide-react';

import { FaGithub, FaLinkedinIn, FaInstagram, FaYoutube, FaLaptopCode, FaBriefcase, FaWhatsapp } from "react-icons/fa";
import { companyPhoneNo } from '../../utils/constants';

export const links = [
  {
    name: "About",
    number: "01",
    hash: "#about",
  },
  {
    name: "Services",
    number: "02",
    hash: "#services",
  },
  {
    name: "Projects",
    number: "03",
    hash: "#projects",
  },
  {
    name: "Experience",
    number: "04",
    hash: "#experience",
  },
  {
    name: "Contact",
    number: "05",
    hash: "#contact",
  },
];

export const socials = [
  {
    name: "Github",
    icon: React.createElement(FaGithub),
    link: "https://github.com/fayasPA"
  },
  {
    name: "LinkedIn",
    icon: React.createElement(FaLinkedinIn),
    link: "https://www.linkedin.com/in/fayas-p-a-328748142/"
  },
  {
    name: "Instagram",
    icon: React.createElement(FaInstagram),
    link: "https://www.instagram.com/__fayas_muthaleef__/"
  },
  {
    name: "Whatsapp",
    icon: React.createElement(FaWhatsapp),
    link: `https://wa.me/+91${companyPhoneNo}`
  }
];

export const experiencesData = [
  {
    title: "Self-Learning from YouTube",
    location: "Remote",
    description:
      "Started our learning journey in 2022 by utilizing YouTube as a primary resource for mastering web development, focusing on React, JavaScript, and frontend technologies as well as LLM.",
    icon: React.createElement(FaYoutube), // YouTube icon for self-learning
    date: "2022",
    type: "study"
  },
  {
    title: "Open Source Contributions",
    location: "Remote",
    description:
      "In 2023, We began contributing to open-source projects. This helped me refine my coding skills and collaborate with developers worldwide on diverse projects, enhancing my understanding of best coding practices.",
    icon: React.createElement(FaLaptopCode), // Laptop code icon for open-source coding
    date: "2023",
    type: "work"
  },
  {
    title: "Freelance Web Developer",
    location: "Remote",
    description:
      "Started working as a freelance web development team for various businesses in 2024, developing custom web solutions, primarily using React, JavaScript, and modern web technologies to meet clients' needs.",
    icon: React.createElement(FaBriefcase), // Briefcase icon for freelance work
    date: "2024 - Present",
    type: "work"
  }
];

export const projectsData = [
  {
    title: "Fizzi Website",
    number: "01",
    description:
      "The Fizzy website is a project built to learn advanced web technologies and design principles. It features smooth animations with GSAP, and uses React and Tailwind CSS and Three.js for modern, visually appealing design",
    tags: ["React", "Tailwind", "GSAP", "Three.JS"],
    imageUrl: FizziImage,
    videoUrl: 'https://youtu.be/QFXBquu7ItI',
    link: "https://fizzi-demo.vercel.app/",
    githubLink: "https://github.com/Kiran-nj/Fizzzy"
  },
  {
    title: "Alt Co",
    number: "02",
    description:
      "The AltCo website clone is a project built to learn advanced web technologies and design principles. It features smooth animations with GSAP, and uses React and Tailwind CSS for modern, visually appealing design.",
    tags: ["React", "Tailwind", "GSAP"],
    imageUrl: AltcoImage,
    videoUrl: 'https://youtu.be/lrXv7fnu0Yg',
    link: "https://team-nkg-reimagine-round1.vercel.app/",
    githubLink: "https://github.com/Kiran-nj/BestWeb.git"
  },
  {
    title: "Amanimotors",
    number: "03",
    description:
      "Amanimotors is a used car premium website used to showcase the stock of the cars available. It makes use of React, GSAP, etc., at the frontend and GoLang and PostgreSQL at the backend.",
    tags: ["React", "GSAP", "Tailwind", "GoLang"],
    videoUrl: 'https://youtu.be/Uu_pSi12Q7U',
    imageUrl: AmanimotorsImage,
    backgroundColor: "black",
    link: "https://amanimotors.in",
    githubLink: "https://github.com/fayasPA/amani-motors"
  },
  {
    title: "LuxeMoto",
    number: "04",
    description:
      "Luxemoto is a used car premium website used to showcase the stock of the cars available. It makes use of React, GSAP, etc., at the frontend and GoLang and PostgreSQL at the backend.",
    tags: ["React", "GSAP", "Tailwind", "GoLang"],
    videoUrl: 'https://youtu.be/jK2rgkw_sOw',
    imageUrl: LuxemotoImage,
    backgroundColor: "white",
    link: "https://luxemoto.in",
    githubLink: "https://github.com/fayasPA/luxe-moto"
  },
  {
    title: "Premier Steels",
    number: "05",
    description:
      "Premier Steels is a steel distribution company website. It makes use of React, GSAP, etc., at the frontend.",
    tags: ["React", "GSAP", "Tailwind"],
    videoUrl: 'https://youtu.be/5OEk9v8Tzn4',
    imageUrl: PremiersteelsImage,
    backgroundColor: "black",
    link: "https://thepremiersteels.com",
    githubLink: "https://github.com/fayasPA/premier_steels"
  },
  {
    title: "Alita Moments",
    number: "06",
    description:
      "Alita moments is a photography portfolio website. It makes use of React, GSAP, etc., at the frontend",
    tags: ["React", "GSAP", "Tailwind"],
    imageUrl: AlitamomentsImage,
    backgroundColor: "black",
    link: "https://alitamoments.com",
    githubLink: "https://github.com/fayasPA/alitamoments_photography"
  }
];


export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "React Native",
  "Python",
  "Django",
  "Django REST",
  "Go",
  "Git",
  "Tailwind",
  "Semantic UI",
  "Postgres",
  "MongoDB",
  "SQL",
  "Redux",
  "GSAP",
  "Docker",
  "Figma",
  "LLM",
  "Chatbots",
];

export const servicesData = [
  {
    id: 1,
    title: "Full Stack Web Development",
    description:
      "Comprehensive end-to-end development solutions tailored to your business needs.",
    imgSrc:
      "https://cdn.prod.website-files.com/6405fcf125150a174dce6e85/65ff0c11e874940f02608521_full-design-plus-webflow-development-matteo.webp",
    link: "/contact",
  },
  {
    id: 2,
    title: "Custom Generative AI Solutions",
    description:
      "Leverage advanced AI to automate processes and enhance creativity.",
    imgSrc:
      "https://img.freepik.com/free-vector/expansion-cyber-life-vector-ai-neuron-network-small-particles-defined-motion-organic-geometric-growth-tentacles-space-colonization-burst-explosion-backdrop_1217-5642.jpg?t=st=1732272320~exp=1732275920~hmac=bac8006987d9f212404d763817b6b96753bd4643ecef7924da5df4758f99f63d&w=2000",
    link: "/contact",
  },
  {
    id: 3,
    title: "5-days Landing Page",
    description:
      "Do you need a custom one-pager or a landing page? We're here for you.",
    imgSrc:
      "https://cdn.prod.website-files.com/6405fcf125150a174dce6e85/65ff0c110e8860067f87e687_landing-page-matteo.webp",
    link: "/contact",
  },
  {
    id: 4,
    title: "Ongoing Monthly Support",
    description:
      "Unlimited Design before production, delivered one at a time.",
    bullets: ["Unlimited requests", "Quick turnaround", "Personalized support"],
    link: "/contact",
  },
  {
    id: 5,
    title: "Business Analytics",
    description:
      "Transform data into actionable intelligence for strategic planning.",
    imgSrc:
      "https://img.freepik.com/free-photo/businessman-is-using-computer-laptop_53876-144845.jpg?t=st=1732272399~exp=1732275999~hmac=653abb0c2d715e2d9374b45335e9c72d24b860cb70790abee3767f947683475f&w=2000",
    link: "/contact",
  },
  {
    id: 6,
    title: "Chatbot Development",
    description:
      "Create intelligent conversational agents for exceptional customer support.",
    imgSrc:
      "https://img.freepik.com/free-vector/chatbot-concept-background-realistic-style_23-2147831748.jpg?t=st=1732272534~exp=1732276134~hmac=5ad60c74f3e1d605039df430488b58a963fddf5ccf3c1da0a560895343ff2634&w=1480",
    link: "/contact",
  },
  {
    id: 7,
    title: "Proof of Concept",
    description:
      "Validate AI project feasibility with custom proof of concept services.",
    imgSrc:
      "https://img.freepik.com/free-vector/data-network-businessman_24908-57821.jpg?t=st=1732272579~exp=1732276179~hmac=7050d4d8565da12d95061ac38e5344cc08e60ebfbd98fe079a1bf25714d81dd6&w=1480",
    link: "/contact",
  },
  {
    id: 8,
    title: "AI Tools Training",
    description:
      "Corporate training programs to empower your team with AI tools.",
    imgSrc:
      "https://img.freepik.com/free-photo/view-futuristic-robot-school-environment_23-2151110144.jpg?t=st=1732272578~exp=1732276178~hmac=2fc6d7f68be02fb46d7bac50211286fa0dac59fcd4140a5e517716190c822742&w=2000",
    link: "/contact",
  },
];


export const teamMembers = [
  {
    id: 1,
    name: "Fayas Muthaleef",
    picture: Fayas,  // Replace with correct image path
    bio: "Fayas is a seasoned full-stack developer with a strong focus on React and modern web technologies. As the team lead, he oversees development and ensures seamless project delivery.",
    linkedIn: "https://www.linkedin.com/in/fayas-p-a-328748142/",
  },
  {
    id: 2,
    name: "Varun MS",
    bio: "Varun specializes in Large Language Models (LLMs), artificial intelligence, and chatbot development. His innovative approach drives our AI-powered solutions.",
    picture: Varun,  // Replace with correct image path
    linkedIn: "https://www.linkedin.com/in/varun-m-s-ai-developer",
  },
  {
    id: 3,
    name: "Kiran NJ",
    picture: Kiran,  // Replace with correct image path
    bio: "Kiran is a frontend React developer dedicated to delivering pixel-perfect UI designs. He collaborates with the backend team to build cohesive, high-performance web applications.",
    linkedIn: "https://www.linkedin.com/in/kiran-n-9600012b6/",
  },
  {
    id: 4,
    name: "Muhammed Hafiz",
    picture: Hafiz,  // Replace with correct image path
    bio: "Hafiz is a web designer with expertise in Figma and user experience design. He ensures that every project has a polished and professional look.",
    linkedIn: "https://www.linkedin.com/in/imhaafz/",
  },
  {
    id: 5,
    name: "Sharuk Sageer",
    picture: Sharuk,  // Replace with correct image path
    bio: "Sharuk is a marketing genius with a proven track record in brand building and digital strategies. His expertise ensures maximum reach and impact for our projects.",
    linkedIn: "https://www.linkedin.com/in/sharuk-m-s-5409272a8", // Add actual LinkedIn link if available
  },
  {
    id: 6,
    name: "Saleel Hisan",
    picture: Saleel,  // Replace with correct image path
    bio: "Saleel Hisan is a Node.js backend developer, ensuring scalable, efficient, and high-performance server-side solutions.",
    linkedIn: "https://www.linkedin.com/in/saleelhisan/", // Add actual LinkedIn link if available
  },
  {
    id: 7,
    name: "Sahal P",
    picture: Sahal,  // Replace with correct image path
    bio: "Sahal P is a backend developer with expertise in Django, FastAPI, PostgreSQL, Clean Architecture, Docker, and Microservices.",
    linkedIn: "https://www.linkedin.com/in/sahal-p-ba81a2260", // Add actual LinkedIn link if available
  }
];



export const whyWorkWithUsData = [
  {
    id: 1,
    header: "Expert Full Stack Development",
    description:
      "With nearly two years of collective experience, our team excels in building scalable, high-performance websites and applications using React, React Native, Golang, Django, HTML, CSS, and JavaScript. We are dedicated to delivering aesthetically pleasing and user-centric solutions that are not only functional but also optimized for performance. Let’s work together to transform your digital vision into reality with a structured and efficient development process.",
  },
  {
    id: 2,
    header: "Innovative and Refined Design",
    description:
      "Our team is passionate about design, constantly pushing the boundaries of creativity to craft unique and cohesive user experiences. By blending innovation with functionality, we create visually stunning designs that resonate with your audience, ensuring that each project stands out and delivers impact.",
  },
  {
    id: 3,
    header: "Results-Driven Approach",
    description:
      "At the core of our work is a results-driven approach. We approach each project with the goal of delivering measurable success, focusing on both design and functionality. Our mission is to help you achieve your business goals, not just build a website. Together, we’ll create a digital presence that not only looks impressive but also drives tangible results.",
  },
  {
    id: 4,
    header: "Commitment to Continuous Improvement",
    description:
      "We believe in constant evolution. Every project we complete is an opportunity to improve. Our team is always striving to do a little better than the last time, refining our skills and pushing the boundaries of what’s possible. This commitment to ongoing improvement ensures that our clients benefit from the latest technologies, designs, and best practices, every time we collaborate.",
  },
];




export const faqData = [
  {
    question: "What services do you offer?",
    answer:
      "In addition to web design and development, we also specialize in digital marketing, helping brands grow their online presence. Depending on your project's needs, we can assemble a dedicated team to address specific requirements and deliver tailored solutions.",
  },
  {
    question: "How long does it take?",
    answer:
      "Project timelines can vary based on complexity, but generally, most projects take between 2 to 6 weeks to complete. We ensure timely delivery without compromising on quality, tailoring the timeline to meet your project’s unique demands.",
  },
  {
    question: "Why do you develop in React?",
    answer:
      "React offers a robust, scalable solution for building dynamic, high-performance applications. Its component-based architecture allows us to build highly interactive user interfaces efficiently, ensuring a seamless experience across all devices. Additionally, React's large community and support make it a reliable choice for modern web development.",
  },
  {
    question: "How much does it cost?",
    answer:
      "The cost of each project varies depending on the scope and complexity of the work. Typically, projects range from ₹15,000 to ₹1.5 lakhs, but we offer customized pricing based on your specific needs and requirements.",
  },
  {
    question: "Do you work internationally?",
    answer:
      "Yes, we work with clients worldwide. Our team ensures clear communication and efficient collaboration, regardless of your location. With experience in managing international projects, we adapt to different time zones and cultural nuances to guarantee smooth project execution.",
  },
  {
    question: "What does working together look like?",
    answer:
      "Our process begins with understanding your goals and vision for the project. We then create design mockups, move to development, and ensure regular updates and feedback sessions. Finally, we focus on delivering a polished product that meets your expectations and objectives.",
  },
  {
    question: "Will I like working with you?",
    answer:
      "Our clients appreciate our transparent communication, commitment to delivering high-quality work, and dedication to understanding their unique needs. We prioritize building lasting relationships and ensuring that every collaboration is smooth and productive.",
  },
];

export const featuresData = [
  {
    title: 'Lightning-fast development times',
    description: 'Time is money. I dont want you to waste it',
    icon: Zap,
    className: 'md:col-span-2 feature-card'
  },
  {
    title: 'Pixel perfect',
    description: '100% precise, 100% custom',
    icon: Monitor,
    className: 'feature-card'
  },
  {
    title: 'Clean code',
    description: 'Structured & maintainable codebase',
    icon: Code,
    className: 'feature-card'
  },
  {
    title: 'Animation & interactions',
    description: 'High-end interactions to bring website experiences to life',
    icon: Layout,
    className: 'md:col-span-2 feature-card'
  },
  {
    title: 'Responsive design',
    description: 'All breakpoints, huge screens included',
    icon: Monitor,
    className: 'feature-card'
  },
  {
    title: 'SEO optimized',
    description: 'Everything about on-site SEO',
    icon: BarChart3,
    className: 'feature-card'
  },
  {
    title: 'Performance focused',
    description: 'Fast loading times & smooth interactions',
    icon: Gauge,
    className: 'feature-card'
  }
];
