// Contains constant data for using in website
// ! Don't remove anything from here if not sure

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  youtube,
  linkedin,
  twitter,
  github,
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "work",
    title: "Work",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  },
  {
    id: "source-code",
    title: "Source Code",
    link: "http://www.github.com/sanidhyy/3d-portfolio/",
  },
] as const;

// Services
export const SERVICES = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
] as const;

// Technologies
export const TECHNOLOGIES = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "Full Stack Developer",
    company_name: "Atorix IT Solution",
    icon: meta, // You might want to replace this with a more appropriate icon
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developed responsive UI components and optimized user flows for CRIT India's digital platform.",
      "Collaborated with cross-functional teams to create high-quality, accessible web applications.",
      "Implemented modern frontend technologies including React, TypeScript, and Tailwind CSS.",
      "Contributed to the development of scalable and maintainable codebases.",
    ],
  },
] as const;


// Projects
export const PROJECTS = [
  {
    name: "Live Weather App",
    description: "A real-time weather application built with HTML, CSS, and JavaScript featuring current weather conditions and forecasts.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "Weather API",
        color: "blue-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/priyanshusingh1507",
    live_site_link: "https://live-weather-orcin.vercel.app/",
  },
  {
    name: "Atorix",
    description: "A modern web application showcasing full-stack development with responsive design and seamless user experience.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Next.js",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "blue-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/priyanshusingh1507",
    live_site_link: "https://atorix.vercel.app/",
  },
  {
    name: "GitHub Profile",
    description: "Explore my open-source contributions, projects, and coding journey across various technologies.",
    tags: [
      {
        name: "Open Source",
        color: "blue-text-gradient",
      },
      {
        name: "Git",
        color: "green-text-gradient",
      },
      {
        name: "Collaboration",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/priyanshusingh1507",
    live_site_link: "https://github.com/priyanshusingh1507",
  },
  {
    name: "ConnectingDotsERP",
    description: "Enhanced modules and developed scalable features for an open-source enterprise platform using modern web technologies.",
    tags: [
      {
        name: "Open Source",
        color: "blue-text-gradient",
      },
      {
        name: "ERP Systems",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript/TypeScript",
        color: "pink-text-gradient",
      },
      {
        name: "Node.js",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/priyanshusingh1507",
    live_site_link: "https://www.connectingdotserp.com/",
  },
  {
    name: "CRIT India",
    description: "Developed responsive UI components and optimized user flows for CRIT India's digital platform.",
    tags: [
      {
        name: "Frontend",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "TypeScript",
        color: "pink-text-gradient",
      },
      {
        name: "UI/UX",
        color: "blue-text-gradient",
      },
      {
        name: "Performance",
        color: "green-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/priyanshusingh1507",
    live_site_link: "https://www.critindia.com/",
  },
  {
    name: "Portfolio",
    description: "A showcase of my developer journey featuring open-source contributions, full-stack experiments, performance-focused builds, and hands-on learning across modern web technologies.",
    tags: [
      {
        name: "Full-Stack",
        color: "blue-text-gradient",
      },
      {
        name: "Open Source",
        color: "green-text-gradient",
      },
      {
        name: "TypeScript",
        color: "pink-text-gradient",
      },
      {
        name: "Node.js",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/priyanshusingh1507",
    live_site_link: "https://portfolio-three-ivory-31.vercel.app/"
  }
] as const;

export const SOCIALS = [
  {
    name: "YouTube",
    icon: youtube,
    link: "https://www.youtube.com/@OPGAMER.",
  },
  {
    name: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/sanidhyy",
  },
  {
    name: "Twitter",
    icon: twitter,
    link: "https://twitter.com/TechnicalShubam",
  },
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/sanidhyy",
  },
] as const;
