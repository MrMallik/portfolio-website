import { Routes, Route, useParams, Link } from "react-router-dom";
import Navigation from "./components/Navigation";
import Post from "./components/Post";
import { mockBlogs } from "./data/mockBlogs";

const PostWithSlug = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = mockBlogs.find((blog) => blog.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-muted/30 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Post Not Found</h1>
          <p className="text-muted-foreground">
            The blog post you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  return <Post post={post} />;
};

const BlogHome = () => {
  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
        <ul className="space-y-4">
          {mockBlogs.map((blog) => (
            <li key={blog.slug}>
              <Link
                to={`/blog/${blog.slug}`}
                className="text-primary hover:underline text-lg"
              >
                {blog.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Blog = () => {
  return (
    <>
      <Routes>
        <Route index element={<BlogHome />} />
        <Route path=":slug" element={<PostWithSlug />} />
      </Routes>
    </>
  );
};

export default Blog;
