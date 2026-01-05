import type { PostType } from '@/blog/service';
import { mockBlogs } from '@/blog/data/mockBlogs';

const STORAGE_KEY = 'portfolio_blog_posts';

/**
 * Initialize storage with mock blogs if no data exists
 */
export const initializeStorage = (): void => {
    const existing = localStorage.getItem(STORAGE_KEY);
    if (!existing) {
        // Add IDs to mock blogs and mark as published
        const initialPosts = mockBlogs.map((post, index) => ({
            ...post,
            id: `mock-${index}`,
            status: 'published' as const,
        }));
        localStorage.setItem(STORAGE_KEY, JSON.stringify(initialPosts));
    }
};

/**
 * Get all blog posts from localStorage
 */
export const getAllPosts = (): PostType[] => {
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        if (!data) {
            initializeStorage();
            return getAllPosts();
        }
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading posts from localStorage:', error);
        return [];
    }
};

/**
 * Get a single post by slug
 */
export const getPostBySlug = (slug: string): PostType | undefined => {
    const posts = getAllPosts();
    return posts.find((post) => post.slug === slug);
};

/**
 * Create a new blog post
 */
export const createPost = (post: Omit<PostType, 'id' | 'createdAt' | 'updatedAt'>): PostType => {
    try {
        const posts = getAllPosts();
        const now = Date.now();
        const newPost: PostType = {
            ...post,
            id: `post-${now}`,
            createdAt: now,
            updatedAt: now,
        };

        posts.push(newPost);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
        return newPost;
    } catch (error) {
        console.error('Error creating post:', error);
        throw new Error('Failed to create post. Storage quota may be exceeded.');
    }
};

/**
 * Update an existing blog post
 */
export const updatePost = (slug: string, updates: Partial<PostType>): PostType | null => {
    try {
        const posts = getAllPosts();
        const index = posts.findIndex((post) => post.slug === slug);

        if (index === -1) {
            return null;
        }

        const updatedPost: PostType = {
            ...posts[index],
            ...updates,
            updatedAt: Date.now(),
        };

        posts[index] = updatedPost;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
        return updatedPost;
    } catch (error) {
        console.error('Error updating post:', error);
        throw new Error('Failed to update post.');
    }
};

/**
 * Delete a blog post
 */
export const deletePost = (slug: string): boolean => {
    try {
        const posts = getAllPosts();
        const filteredPosts = posts.filter((post) => post.slug !== slug);

        if (filteredPosts.length === posts.length) {
            return false; // Post not found
        }

        localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredPosts));
        return true;
    } catch (error) {
        console.error('Error deleting post:', error);
        throw new Error('Failed to delete post.');
    }
};

/**
 * Get all existing slugs (for uniqueness checking)
 */
export const getAllSlugs = (): string[] => {
    const posts = getAllPosts();
    return posts.map((post) => post.slug);
};
