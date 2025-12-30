import fs from 'fs';
import path from 'path';

const fictionPath = path.join(process.cwd(), 'content', 'fiction', 'fiction.json');

export interface Fiction {
  id: string;
  title: string;
  author?: string;
  type: 'short-story' | 'novel' | 'novella' | 'poetry' | 'essay';
  cover?: string;
  excerpt?: string;
  published?: string;
  status: 'published' | 'draft' | 'in-progress';
  link?: string;
  tags?: string[];
}

export function getFiction(): Fiction[] {
  try {
    if (!fs.existsSync(fictionPath)) {
      return [];
    }
    const fileContents = fs.readFileSync(fictionPath, 'utf8');
    return JSON.parse(fileContents);
  } catch {
    return [];
  }
}

export function getFictionByType(type: Fiction['type']): Fiction[] {
  return getFiction().filter((fiction) => fiction.type === type);
}

export function getPublishedFiction(): Fiction[] {
  return getFiction().filter((fiction) => fiction.status === 'published');
}


