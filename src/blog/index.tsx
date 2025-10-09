import { forwardRef } from "react";
import { BlogLayout } from "./components/BlogLayout";

const BlogPage = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} className="min-h-screen">
      <BlogLayout />
    </section>
  );
});

export default BlogPage;
