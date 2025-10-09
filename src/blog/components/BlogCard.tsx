import { type BlogPost } from "../data/types";
import { cn } from "@/lib/utils";

interface BlogCardProps {
  post: BlogPost;
  onClick: () => void;
  className?: string;
}

export function BlogCard({ post, onClick, className }: BlogCardProps) {
  return (
    <article
      onClick={onClick}
      className={cn(
        "group cursor-pointer overflow-hidden rounded-lg border bg-card shadow-sm transition-all hover:shadow-lg",
        className
      )}
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={post.coverImage}
          alt={post.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4 sm:p-6">
        <div className="flex items-center gap-2">
          <span className="inline-block rounded-full bg-[#F2E6EE] px-2.5 py-0.5 text-xs font-semibold text-[#4e148c]">
            {post.category}
          </span>
          <span className="text-sm text-muted-foreground">{post.readTime}</span>
        </div>
        <h3 className="mt-2 text-lg font-semibold tracking-tight text-[#2c0735] sm:text-xl">
          {post.title}
        </h3>
        <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
          {post.excerpt}
        </p>
        <div className="mt-4 flex items-center gap-3">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className="h-6 w-6 rounded-full"
          />
          <div className="text-sm text-muted-foreground">
            {post.author.name}
          </div>
        </div>
      </div>
    </article>
  );
}
