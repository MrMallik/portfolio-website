import type { BlogPost } from "@/blog/data/types";

export const mockBlogs: BlogPost[] = [
  {
    id: "1",
    title: "Exploring Modern Web Development",
    slug: "exploring-modern-web-development",
    excerpt:
      "A deep dive into the latest trends and technologies shaping the future of web development.",
    content: `# Exploring Modern Web Development

As we delve into modern web development, we'll explore the tools, frameworks, and best practices that shape today's web applications.

## The Evolution of Web Development

The landscape of web development has changed dramatically over the years. From static HTML pages to dynamic, interactive applications...`,
    coverImage:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8dGVjaG5vbG9neXx8fHx8fDE2MzQ0MjY5MzA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    author: {
      name: "Pritabrata Mallik",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Pritabrata",
    },
    publishedAt: "2025-10-01",
    readTime: "5 min read",
    tags: ["Web Development", "JavaScript", "React"],
    category: "Development",
    featured: true,
    status: "published",
  },
  {
    id: "2",
    title: "Building a Portfolio with React and TypeScript",
    slug: "building-portfolio-react-typescript",
    excerpt:
      "Learn how to create a modern, responsive portfolio website using React, TypeScript, and Tailwind CSS.",
    content: `# Building a Portfolio with React and TypeScript

A step-by-step guide to creating a professional portfolio website using modern web technologies.

## Getting Started

First, we'll set up our development environment and create a new React project with TypeScript...`,
    coverImage:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y29kaW5nfHx8fHx8MTYzNDQyNjkzMA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    author: {
      name: "Pritabrata Mallik",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Pritabrata",
    },
    publishedAt: "2025-09-28",
    readTime: "8 min read",
    tags: ["React", "TypeScript", "Portfolio"],
    category: "Tutorial",
    featured: false,
    status: "published",
  },
];
