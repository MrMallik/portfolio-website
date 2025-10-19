import { forwardRef } from "react";
import { Routes, Route} from "react-router-dom";
import { BlogLayout } from "./components/BlogLayout";
import { Compose } from "./pages/Compose";

const BlogPage = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} className="min-h-screen">
      <Routes>
        <Route path="/compose" element={<Compose />} />
        <Route path="/*" element={<BlogLayout />} />
      </Routes>
    </section>
  );
});

export default BlogPage;
