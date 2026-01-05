import { Link } from 'react-router-dom';
import moment from 'moment';
import type { PostType } from '@/blog/service';
import { deletePost } from '@/blog/storage/blogStorage';
import { useState } from 'react';

interface BlogListProps {
    posts: PostType[];
    onPostDeleted?: () => void;
}

const BlogList = ({ posts, onPostDeleted }: BlogListProps) => {
    const [deletingSlug, setDeletingSlug] = useState<string | null>(null);

    const handleDelete = (slug: string, title: string) => {
        if (window.confirm(`Are you sure you want to delete "${title}"?`)) {
            setDeletingSlug(slug);
            try {
                deletePost(slug);
                onPostDeleted?.();
            } catch (error) {
                console.error('Error deleting post:', error);
                alert('Failed to delete post');
            } finally {
                setDeletingSlug(null);
            }
        }
    };

    // Sort posts by creation date (newest first)
    const sortedPosts = [...posts].sort((a, b) => b.createdAt - a.createdAt);

    return (
        <div className="space-y-6">
            {/* Create New Post Button */}
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">All Posts</h2>
                <Link
                    to="/blog/new"
                    className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                    + Create New Post
                </Link>
            </div>

            {/* Posts List */}
            {sortedPosts.length === 0 ? (
                <div className="text-center py-12 bg-background rounded-lg border border-border">
                    <p className="text-muted-foreground mb-4">No blog posts yet</p>
                    <Link
                        to="/blog/new"
                        className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                    >
                        Create Your First Post
                    </Link>
                </div>
            ) : (
                <div className="space-y-4">
                    {sortedPosts.map((post) => (
                        <div
                            key={post.slug}
                            className="bg-background rounded-lg border border-border p-6 hover:shadow-md transition-shadow"
                        >
                            <div className="flex justify-between items-start gap-4">
                                <div className="flex-1">
                                    <Link
                                        to={`/blog/${post.slug}`}
                                        className="text-xl font-bold hover:text-primary transition-colors"
                                    >
                                        {post.title}
                                    </Link>

                                    <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-muted-foreground">
                                        <span>{moment(post.createdAt).format('MMM D, YYYY')}</span>
                                        {post.status && (
                                            <span
                                                className={`px-2 py-1 rounded text-xs font-medium ${post.status === 'published'
                                                        ? 'bg-green-500/10 text-green-500'
                                                        : 'bg-yellow-500/10 text-yellow-500'
                                                    }`}
                                            >
                                                {post.status}
                                            </span>
                                        )}
                                        {post.tags && post.tags.length > 0 && (
                                            <div className="flex gap-2">
                                                {post.tags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="px-2 py-1 bg-primary/10 text-primary rounded text-xs"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-2">
                                    <Link
                                        to={`/blog/edit/${post.slug}`}
                                        className="px-3 py-1 text-sm border border-border rounded hover:bg-muted transition-colors"
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        type="button"
                                        onClick={() => handleDelete(post.slug, post.title)}
                                        disabled={deletingSlug === post.slug}
                                        className="px-3 py-1 text-sm border border-red-500 text-red-500 rounded hover:bg-red-500/10 transition-colors disabled:opacity-50"
                                    >
                                        {deletingSlug === post.slug ? 'Deleting...' : 'Delete'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default BlogList;
