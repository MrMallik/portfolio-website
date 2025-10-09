import { type BlogPost as BlogPostType } from "../data/types";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import * as React from "react";

interface BlogPostProps {
  post: BlogPostType;
  onBackClick: () => void;
}

export function BlogPost({ post, onBackClick }: BlogPostProps) {
  return (
    <article className="min-h-screen bg-gray-50">
      {/* Hero Section with Cover Image */}
      <div className="relative h-[40vh] lg:h-[60vh] w-full">
        <div className="absolute inset-0">
          <img
            src={post.coverImage}
            alt={post.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
        </div>
        <div className="absolute bottom-0 w-full p-6 lg:p-12">
          <div className="container mx-auto max-w-4xl">
            <Button
              variant="outline"
              onClick={onBackClick}
              className="mb-4 bg-white/90 hover:bg-white"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-white/90">
              <div className="flex items-center gap-2">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="h-8 w-8 rounded-full"
                />
                <span>{post.author.name}</span>
              </div>
              <span>•</span>
              <span>{post.readTime}</span>
              <span>•</span>
              <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto max-w-4xl px-4 py-12">
        <div className="prose prose-lg mx-auto">
          {post.content.split("\\n").map((paragraph, idx) => {
            if (paragraph.startsWith("#")) {
              const level = paragraph.match(/^#+/)?.[0].length || 1;
              const text = paragraph.replace(/^#+\s/, "");
              // Use a type-safe heading selection
              const tag = ["h1", "h2", "h3", "h4", "h5", "h6"][
                Math.min(level - 1, 5)
              ];
              return React.createElement(
                tag,
                { key: idx, className: "text-[#2c0735]" },
                text
              );
            }
            return (
              <p key={idx} className="text-gray-700">
                {paragraph}
              </p>
            );
          })}
        </div>

        {/* Tags */}
        <div className="mt-8 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="inline-block rounded-full bg-[#F2E6EE] px-3 py-1 text-sm font-medium text-[#4e148c]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
