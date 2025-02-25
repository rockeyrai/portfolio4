export interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  technologies: string[];
}

export interface Education {
  school: string;
  degree: string;
  year: string;
  description: string;
}

export interface Achievement {
  title: string;
  description: string;
  year: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools' | 'soft-skills';
}