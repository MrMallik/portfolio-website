import { Routes, Route, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Post from "./components/Post";
import BlogEditor from "./components/BlogEditor";
import BlogList from "./components/BlogList";
import Navigation from "./components/Navigation";
import { getJson, type PostType } from "./service";
// import "../blog/styles/quill-custom.css";

const PostWithSlug = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<PostType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const post = await getJson<PostType>(`/api/blog/slug/${slug}`);
        setPost(post);
      } catch (error) {
        console.error('Error fetching post:', error);
        setPost(null);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-muted/30 flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

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
  const [posts, setPosts] = useState<PostType[]>([]);

  const loadPosts = async () => {
    try {
      const response = await getJson<{ data: PostType[] }>('/api/blog');
      setPosts(response.data);
    } catch (error) {
      console.error('Error loading posts:', error);
      setPosts([]);
    }
  };

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
        <BlogList posts={posts} onPostDeleted={loadPosts} />
      </div>
    </div>
  );
};

const Blog = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route index element={<BlogHome />} />
        <Route path="new" element={<BlogEditor />} />
        <Route path="edit/:slug" element={<BlogEditor />} />
        <Route path=":slug" element={<PostWithSlug />} />
      </Routes>
    </div>
  );
};

export default Blog;
