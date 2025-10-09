import { useState } from "react";
import { BlogNavigation } from "@/blog/components/BlogNavigation";
import { BlogList } from "@/blog/components/BlogList";
import { BlogPost } from "@/blog/components/BlogPost";
import { mockBlogs } from "@/blog/data/mockBlogs";

type View = "list" | "post";

interface BlogState {
  view: View;
  postId?: string;
}

export function BlogLayout() {
  const [state, setState] = useState<BlogState>({
    view: "list",
  });

  const handleNavigate = (postId: string) => {
    setState({ view: "post", postId });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToList = () => {
    setState({ view: "list" });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <BlogNavigation />

      {state.view === "list" && <BlogList onNavigate={handleNavigate} />}

      {state.view === "post" && state.postId && (
        <BlogPost
          post={mockBlogs.find((post) => post.id === state.postId)!}
          onBackClick={handleBackToList}
        />
      )}
    </div>
  );
}
