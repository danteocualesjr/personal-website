import fs from 'fs';
import path from 'path';

const portfolioPath = path.join(process.cwd(), 'content', 'portfolio', 'projects.json');

export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  category: string;
  link?: string;
  github?: string;
  featured?: boolean;
}

export function getProjects(): Project[] {
  try {
    const fileContents = fs.readFileSync(portfolioPath, 'utf8');
    return JSON.parse(fileContents);
  } catch {
    return [];
  }
}

export function getFeaturedProjects(): Project[] {
  return getProjects().filter((project) => project.featured);
}

export function getProjectsByCategory(category: string): Project[] {
  return getProjects().filter((project) => project.category === category);
}

