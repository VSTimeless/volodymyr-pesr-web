const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  badges: string[];
  link: string;
}

export const projects: Project[] = [
  {
    title: "Solar Power Monitoring System",
    description: "IoT-based solution for monitoring solar panel performance",
    image: `${basePath}/project-placeholder.svg`,
    tags: ["renewable", "iot", "reading"],
    badges: ["Arduino", "IoT", "Renewable Energy"],
    link: "#"
  },
  {
    title: "Smart Home Energy Management",
    description: "System for optimizing home energy consumption",
    image: `${basePath}/project-placeholder.svg`,
    tags: ["tech", "podcasts"],
    badges: ["Raspberry Pi", "Python", "Machine Learning"],
    link: "#"
  },
  {
    title: "Wireless Power Transfer",
    description: "Experimental setup for wireless energy transmission",
    image: `${basePath}/project-placeholder.svg`,
    tags: ["photography", "landscape"],
    badges: ["Circuit Design", "Electromagnetics", "Power Electronics"],
    link: "#"
  },
  {
    title: "Technical Book Review Blog",
    description: "Personal blog reviewing technical books in electrical engineering",
    image: `${basePath}/project-placeholder.svg`,
    tags: ["reading", "tech"],
    badges: ["Web Development", "Technical Writing", "Book Reviews"],
    link: "#"
  },
  {
    title: "Engineering Podcast Analysis",
    description: "Analysis of key themes across popular engineering podcasts",
    image: `${basePath}/project-placeholder.svg`,
    tags: ["podcasts", "tech"],
    badges: ["Data Analysis", "Content Creation", "Audio Processing"],
    link: "#"
  },
  {
    title: "Urban Architecture Photography Portfolio",
    description: "Collection of architectural photos from around Vancouver",
    image: `${basePath}/project-placeholder.svg`,
    tags: ["photography", "urban"],
    badges: ["Photography", "Urban Design", "Visual Arts"],
    link: "#"
  }
];