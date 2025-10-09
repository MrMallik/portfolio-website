import { BlogCard } from "./BlogCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { mockBlogs } from "../data/mockBlogs";
import { useState } from "react";

interface BlogListProps {
  onNavigate: (postId: string) => void;
}

export function BlogList({ onNavigate }: BlogListProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const publishedBlogs = mockBlogs.filter(
    (blog) => blog.status === "published"
  );
  const featuredBlogs = publishedBlogs.filter((blog) => blog.featured);

  const categories = Array.from(
    new Set(publishedBlogs.map((blog) => blog.category))
  );

  const filteredBlogs = publishedBlogs.filter((blog) => {
    const matchesSearch =
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      !selectedCategory || blog.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#F2E6EE] via-[#97dffc] to-[#4e148c] text-[#2c0735] py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl">My Blog</h1>
          <p className="text-lg md:text-xl mb-8">
            Thoughts, stories and ideas about web development and technology
          </p>
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 py-6 bg-white text-gray-900"
            />
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8 md:py-12 max-w-7xl">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          <Button
            variant={selectedCategory === null ? "default" : "outline"}
            onClick={() => setSelectedCategory(null)}
          >
            All Posts
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Posts */}
        {!searchQuery && !selectedCategory && featuredBlogs.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-[#2c0735] mb-6">
              Featured Posts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredBlogs.map((post) => (
                <BlogCard
                  key={post.id}
                  post={post}
                  onClick={() => onNavigate(post.id)}
                />
              ))}
            </div>
          </section>
        )}

        {/* All Posts */}
        <section>
          {!searchQuery && !selectedCategory ? (
            <h2 className="text-2xl font-semibold text-[#2c0735] mb-6">
              Recent Posts
            </h2>
          ) : (
            <h2 className="text-2xl font-semibold text-[#2c0735] mb-6">
              {searchQuery ? "Search Results" : selectedCategory}
            </h2>
          )}
          {filteredBlogs.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500">
                No posts found matching your criteria.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBlogs.map((post) => (
                <BlogCard
                  key={post.id}
                  post={post}
                  onClick={() => onNavigate(post.id)}
                />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
