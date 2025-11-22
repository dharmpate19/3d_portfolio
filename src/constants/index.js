import { meta, shopify, starbucks, tesla, multidots, beatsimmigration, elsner } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    python,
    PostgreSQL,
    MySQL,
    GraphQL,
    Docker,
    Kubernetes,
    Jenkins,
    GitLab,
    AWS,
    Vercel,
    PHP,
    wordpress
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
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
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
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
    }, {
        imageUrl: python,
        name: "Python",
        type: "Backend",
    },
    {
        imageUrl: PostgreSQL,
        name: "PostgreSQL",
        type: "Database",
    },
    {
        imageUrl: MySQL,
        name: "MySQL",
        type: "Database",
    },
    {
        imageUrl: GraphQL,
        name: "GraphQL",
        type: "API",
    },
    {
        imageUrl: Docker,
        name: "Docker",
        type: "DevOps",
    },
    {
        imageUrl: Kubernetes,
        name: "Kubernetes",
        type: "DevOps",
    },
    {
        imageUrl: Jenkins,
        name: "Jenkins",
        type: "CI/CD",
    },
    {
        imageUrl: GitLab,
        name: "GitLab",
        type: "CI/CD",
    },
    {
        imageUrl: AWS,
        name: "AWS",
        type: "Cloud",
    },
    {
        imageUrl: Vercel,
        name: "Vercel",
        type: "Cloud",
    },
    {
        imageUrl: PHP,
        name: "PHP",
        type: "Backend",
    },
    {
        imageUrl: wordpress,
        name: "Wordpress",
        type: "Backend",
    }


];

export const experiences = [
    {
        title: "Associate Software Engineer",
        company_name: "Elsner",
        icon: elsner,
        iconBg: "#accbe1",
        date: "Nov 2025 - Present",
        points: [
            "Developing scalable web applications and internal tools as part of the engineering team, delivering clean and maintainable code.",
            "Building reusable frontend components and backend features, improving development speed and overall system efficiency.",
            "Collaborating with designers, senior engineers, and QA teams to ship new product features with high performance and reliability.",
            "Contributing to technical discussions and code reviews, helping shape best practices and system architecture decisions.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Beats Immigration",
        icon: beatsimmigration,
        iconBg: "#f56856ff",
        date: "Jan 2025 - Nov 2025",
        points: [
            "Maintained and optimized the company's WordPress website, ensuring fast performance, improved UI/UX, and smooth functionality across all pages.",
            "Implemented new features and resolved critical frontend/backend issues, enhancing overall stability and user experience.",
            "Managed regular updates for WordPress core, themes, and plugins, keeping the website secure and fully up-to-date.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Multidots",
        icon: multidots,
        iconBg: "#edf857ff",
        date: "Jan 2024 - Jan 2024",
        points: [
            "Developed custom WordPress themes and plugins, delivering tailored functionality to meet client requirements.",
            "Built and integrated dynamic and static Gutenberg blocks (e.g., story sliders, AJAX-powered resource blocks) to enhance website interactivity and performance.",
            "Designed the data pipeline architecture in team of 5 for a new product that scaled from 0 to 100,000 daily active users"
        ],
    }
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
        link: 'https://github.com/dharmpate19',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/dharm-patel-816123289/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];