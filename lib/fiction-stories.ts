import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content', 'fiction', 'stories');

export interface FictionStory {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  type: 'short-story' | 'novel' | 'novella' | 'poetry' | 'essay';
  tags: string[];
  content: string;
}

export function getAllStories(): FictionStory[] {
  try {
    if (!fs.existsSync(contentDirectory)) {
      return [];
    }
    
    const fileNames = fs.readdirSync(contentDirectory);
    const allStoriesData = fileNames
      .filter((name) => name.endsWith('.mdx'))
      .map((fileName) => {
        const slug = fileName.replace(/\.mdx$/, '');
        const fullPath = path.join(contentDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        return {
          slug,
          title: data.title || '',
          date: data.date ? String(data.date) : '',
          excerpt: data.excerpt || '',
          type: data.type || 'short-story',
          tags: data.tags || [],
          content,
        };
      });

    return allStoriesData.sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      } else {
        return -1;
      }
    });
  } catch {
    return [];
  }
}

export function getStoryBySlug(slug: string): FictionStory | null {
  try {
    const fullPath = path.join(contentDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || '',
      date: data.date ? String(data.date) : '',
      excerpt: data.excerpt || '',
      type: data.type || 'short-story',
      tags: data.tags || [],
      content,
    };
  } catch {
    return null;
  }
}

export function getStoriesByType(type: FictionStory['type']): FictionStory[] {
  return getAllStories().filter((story) => story.type === type);
}

