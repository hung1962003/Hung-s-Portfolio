import { revoland } from "../assets/images";
import {
    contact,
    css,
    git,
    github,
    html,
    javascript,
    mongodb,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Full stack Developer",
        company_name: "Revoland",
        icon: revoland,
        iconBg: "#ffffff",
        date: "July 2025 - Present",
        points: [
            "Built a dynamic rental cost calculator using Next.js and Redux, handling complex pricing logic and improving UX through real-time cost recalculation.",
            "Developed a data-driven dashboard using Next.js and Chart.js to visualize sales pipelines and company metrics, integrating REST APIs to support real-time business tracking.",
            "Implemented a geospatial polygon drawing tool using react-google-maps and GeoJSON, enabling custom property boundary selection and spatial filtering within the platform.",
            "Implemented real-time notification system using SignalR and ASP.NET, reducing update latency from polling-based 10s interval to near real-time (<1s).",
            "Identified and resolved critical frontend and backend bugs, improving application stability and reducing production issues reported by testers and users.",
            "Coded features like Locket for the company's mobile app using Flutter, enabling users for capturing and sharing photos with the community.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/hung1962003',
    },

];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'DermaCare – AI-powered Skincare E-commerce Platform (Frontend)',
        description: 'Built frontend features for an e-commerce and dermatology consultation platform using React and ASP.NET Core. Implemented product filtering, AI chatbot integration, and secure user authentication.',
        link: 'https://github.com/hung1962003/swd_fe',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'AESP - An English speaking practice platform supported by AI (Frontend)',
        description: 'AI-driven English speaking practice platform integrating real-time pronunciation scoring, interactive AI-driven conversation practice, adaptive learning paths, reviewer feedback, and secure payment system across web and mobile applications. ',
        link: 'https://github.com/hung1962003/FA25-SE161-AI-ENGLISH-SPEAKING-PRACTICE',
    },
];