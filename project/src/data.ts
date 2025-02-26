import { Achievement, Education, Project, Skill } from "./types";


export const projects: Project[] = [
  {
    title: "School Management",
    description: "A full-featured Management platform built with React and Node.js",
    image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    link: "https://github.com/kaylinkhanal/sikshyalaya/tree/develop",
    technologies: ["React", "Node.js", "MongoDB", "Open Ai","Bolt"]
  },
  {
    title: "restaurant management",
    description: "A full-Stack project with coustomer and admin experience.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    link: "https://github.com/rockeyrai/RestaurantV3",
    technologies: ["React", "WebSocket", "Express","MySql","MongoDB","shadcn ui"]
  }
];

export const education: Education[] = [
  {
    school: "Janadhar Community Campus",
    degree: "Bachelor of Business Studies(BBS)",
    year: "currently",
    description: "My programming journey began at year 2024, a pivotal year that ignited my passion for coding and technology."
  },
  {
    school: "Janasewa Secondar School",
    degree: "School Leaving Certificate (SLC)",
    year: "2020-2022",
    description: ""
  },
  {
    school: "Janasewa Secondar School",
    degree: "Secondary Education Examination (SEE)",
    year: "2020",
    description: ""
  }
];

export const achievements: Achievement[] = [
  {
    title: "Full-Stack Developer Certification",
    description: "Earned a comprehensive full-stack developer certification from Browday, mastering both frontend and backend technologies.",
    year: "2025"
  },
  {
    title: "First Place - Intra-School Football Tournament",
    description: "Led our team to victory, securing the first place in the annual intra-school football tournament.",
    year: "2019"
  }
];


export const skills: Skill[] = [
  { name: "React", level:80, category: "frontend" },
  { name: "TypeScript", level: 30, category: "frontend" },
  { name: "JavaScript", level: 80, category: "frontend" },
  { name: "Node.js", level: 75, category: "backend" },
  { name: "Express.js", level: 75, category: "backend" },
  { name: "Problem Solving", level: 85, category: "soft-skills" },
  { name: "Redux", level: 50, category: "frontend" },
  { name: "MongoDB", level: 70, category: "backend" },
  { name: "MySQL", level: 70, category: "backend" },
  { name: "Git", level: 80, category: "tools" },
  { name: "CI/CD", level: 75, category: "tools" },
  { name: "Time Management", level: 85, category: "soft-skills" }
];