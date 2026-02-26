export interface Experience {
    title: string;
    company: string;
    location: string;
    period: string;
    isCurrent: boolean;
    description: string[];
    techStack: string[];
}

export interface Project {
    title: string;
    description: string;
    link?: string;
    techStack: string[];
}

export interface Education {
    school: string;
    degree: string;
    period: string;
    description: string;
}

export interface Certification {
    name: string;
    issuer: string;
    date: string;
    link?: string;
}

export interface SocialLink {
    name: string;
    url: string;
    icon: string; // lucide icon name
}

export interface Achievement {
    title: string;
    description: string;
    metric?: string; // e.g. "40% improvement", "500+ users"
}

export interface SectionEntry {
    id: string;
    label: string;
}


export const sectionRegistry: SectionEntry[] = [
    { id: "hero", label: "Home" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "more", label: "Education" },
];


export const socialLinks: SocialLink[] = [
    {
        name: "GitHub",
        url: "https://github.com/MrMallik",
        icon: "github",
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/pritabrata-mallik/",
        icon: "linkedin",
    },
];


export const experiences: Experience[] = [
    {
        title: "Product Development Engineer",
        company: "CodeTantra Tech Solutions Pvt Ltd",
        location: "Hyderabad, IN",
        period: "2022-08-01",
        isCurrent: true,
        description: [
            "Working on scalable web applications and platform features.",
            "Collaborated with cross-functional teams to deliver impactful solutions.",
            "Mentored junior developers and contributed to code reviews.",
        ],
        techStack: ["React", "TypeScript", "Node.js"],
    },
    {
        title: "Programmer Analyst Trainee",
        company: "Cognizant Technology Solutions",
        location: "Hyderabad, IN",
        period: "Mar 2022 – Jun 2022",
        isCurrent: false,
        description: [
            "Trained in Web Technologies and Database Management.",
        ],
        techStack: ["Web Technologies", "DBMS"],
    },
];


export const projects: Project[] = [
    {
        title: "Portfolio Website",
        description:
            "A personal portfolio website built with React, TypeScript, and Tailwind CSS. Features dark/light theme support, responsive design, and a clean minimal aesthetic.",
        link: "https://github.com/MrMallik/portfolio-website",
        techStack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    },
    // Add more projects as needed
];


export const education: Education[] = [
    {
        school: "Godavari Institute of Engineering & Technology",
        degree: "Bachelor of Technology",
        period: "2018 – 2022",
        description:
            "Graduated with a strong foundation in engineering and technology, actively participating in academic and extracurricular activities.",
    },
    {
        school: "Holy Cross School, Agartala",
        degree: "Indian School Certificate",
        period: "2016 – 2018",
        description:
            "Completed intermediate education with a focus on science and mathematics.",
    },
    {
        school: "Holy Cross School, Agartala",
        degree: "Indian Certificate of Secondary Education",
        period: "2014 – 2016",
        description:
            "Completed secondary education with a focus on science and mathematics.",
    },
];


export const certifications: Certification[] = [
    // Add certifications here
    // {
    //   name: "AWS Certified Developer",
    //   issuer: "Amazon Web Services",
    //   date: "2024",
    //   link: "https://...",
    // },
];


export const achievements: Achievement[] = [
    // {
    //     title: "Scalable Platform Architecture",
    //     description:
    //         "Designed and implemented a modular micro-frontend architecture that improved developer velocity and deployment independence across teams.",
    //     metric: "3x faster deployments",
    // },
    // {
    //     title: "Performance Optimization",
    //     description:
    //         "Identified and resolved critical rendering bottlenecks, significantly improving page load times and user engagement metrics.",
    //     metric: "40% faster load times",
    // },
    // Add more achievements here
];


export interface QuickStat {
    name: string;
    icon?: string; // lucide icon name, optional
    value?: string;
}

export const quickStats: QuickStat[] = [
    { name: "yrs of experience", value: `${new Date().getFullYear() - 2022}+` },
    { name: "CodeTantra Tech Solutions", icon: "briefcase" },
    { name: "Hyderabad, IN", icon: "map-pin" }
];


export const resumeUrl = "https://r2.pritabrata.com/resume_pritabrata.pdf";


export const profile = {
    name: "Pritabrata Mallik",
    taglines: ["Software Developer", "Gamer", "Aviation Enthusiast"],
};
