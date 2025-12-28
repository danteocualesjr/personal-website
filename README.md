# Personal Website

A modern personal website built with Next.js, featuring a blog, portfolio, books collection, and more.

## Features

- 📝 Blog with MDX support
- 💼 Portfolio showcase
- 📚 Books collection
- 🌙 Dark mode support
- 📱 Fully responsive design
- ⚡ Optimized performance with Next.js

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `app/` - Next.js App Router pages
- `components/` - Reusable React components
- `content/` - Content files (blog posts, portfolio, books)
- `lib/` - Utility functions
- `public/` - Static assets

## Adding Content

### Blog Posts
Add MDX files to `content/blog/` directory. Each file should have frontmatter with:
- `title`: Post title
- `date`: Publication date
- `excerpt`: Short description
- `tags`: Array of tags

### Portfolio Projects
Edit `content/portfolio/projects.json` to add your projects.

### Books
Edit `content/books/books.json` to add your book collection.

## Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

# personal-website
