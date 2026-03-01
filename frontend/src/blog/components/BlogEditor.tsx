import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import { getJson, postJson, type Tags, type PostStatus } from '@/blog/service';
import { slugify } from '@/blog/utils/slugify';

const BlogEditor = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
    const editorRef = useRef<HTMLDivElement>(null);
    const quillRef = useRef<Quill | null>(null);

    const [title, setTitle] = useState('');
    const [slugValue, setSlugValue] = useState('');
    const [tags, setTags] = useState<Tags[]>([]);
    const [isEditingSlug, setIsEditingSlug] = useState(false);
    const [newTag, setNewTag] = useState('');
    const [isSaving, setIsSaving] = useState(false);
    const [postId, setPostId] = useState<number | undefined>(undefined);

    // Initialize Quill editor
    useEffect(() => {
        if (editorRef.current && !quillRef.current) {
            quillRef.current = new Quill(editorRef.current, {
                theme: 'snow',
                modules: {
                    toolbar: [
                        [{ header: [1, 2, 3, false] }],
                        ['bold', 'italic', 'underline', 'blockquote', 'code-block'],
                        [{ list: 'ordered' }, { list: 'bullet' }],
                        ['link', 'image'],
                        ['clean'],
                    ],
                },
                placeholder: 'Write your blog post content here...',
            });
        }
    }, []);

    // Load existing post if editing
    useEffect(() => {
        if (slug) {
            const fetchPost = async () => {
                try {
                    const response = await getJson<{ data: any }>(`/api/blog/slug/${slug}`);
                    const post = response.data;
                    if (post) {
                        setPostId(post.id);
                        setTitle(post.title);
                        setSlugValue(post.slug);
                        setTags(post.tags || []);
                        if (quillRef.current) {
                            quillRef.current.root.innerHTML = post.content;
                        }
                    }
                } catch (error) {
                    console.error('Error loading post:', error);
                }
            };
            fetchPost();
        }
    }, [slug]);

    // Auto-generate slug from title
    useEffect(() => {
        if (!isEditingSlug && title && !slug) {
            setSlugValue(slugify(title));
        }
    }, [title, isEditingSlug, slug]);

    const handleAddTag = () => {
        const trimmedTag = newTag.trim().toLowerCase();
        if (trimmedTag && (trimmedTag === 'javascript' || trimmedTag === 'development')) {
            if (!tags.includes(trimmedTag as Tags)) {
                setTags([...tags, trimmedTag as Tags]);
            }
            setNewTag('');
        }
    };

    const handleRemoveTag = (tagToRemove: Tags) => {
        setTags(tags.filter((tag) => tag !== tagToRemove));
    };

    const handleSave = async (publishStatus: PostStatus) => {
        if (!title.trim()) {
            alert('Please enter a title');
            return;
        }

        if (!quillRef.current) {
            alert('Editor not initialized');
            return;
        }

        setIsSaving(true);

        try {
            const content = quillRef.current.root.innerHTML;
            const finalSlug = slugValue || slugify(title);

            const postData: any = {
                title,
                slug: finalSlug,
                content,
                author: 'Admin',
                published: publishStatus === 'published',
                tags,
            };

            if (postId) {
                postData.id = postId;
            }

            await postJson('/api/blog', postData);
            navigate(`/blog/${finalSlug}`);
        } catch (error) {
            console.error('Error saving post:', error);
            alert('Failed to save post. Please try again.');
        } finally {
            setIsSaving(false);
        }
    };

    return (
        <div className="min-h-screen bg-muted/30">
            <div className="container mx-auto px-4 py-8 max-w-4xl">
                <div className="bg-background rounded-lg shadow-lg p-6 md:p-8">
                    {/* Header */}
                    <div className="mb-6">
                        <h1 className="text-3xl font-bold mb-2">
                            {slug ? 'Edit Post' : 'Create New Post'}
                        </h1>
                        <p className="text-muted-foreground">
                            {slug ? 'Update your blog post' : 'Write and publish a new blog post'}
                        </p>
                    </div>

                    {/* Title Input */}
                    <div className="mb-6">
                        <label htmlFor="title" className="block text-sm font-medium mb-2">
                            Title
                        </label>
                        <input
                            id="title"
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Enter your blog post title..."
                            className="w-full px-4 py-3 text-2xl font-bold border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                        />
                    </div>

                    {/* Slug Input */}
                    <div className="mb-6">
                        <label htmlFor="slug" className="block text-sm font-medium mb-2">
                            Slug (URL)
                        </label>
                        <div className="flex items-center gap-2">
                            <input
                                id="slug"
                                type="text"
                                value={slugValue}
                                onChange={(e) => {
                                    setSlugValue(e.target.value);
                                    setIsEditingSlug(true);
                                }}
                                placeholder="enter-your-blog-post-title"
                                className="flex-1 px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-muted-foreground"
                            />
                            {isEditingSlug && (
                                <button
                                    type="button"
                                    onClick={() => {
                                        setSlugValue(slugify(title));
                                        setIsEditingSlug(false);
                                    }}
                                    className="px-3 py-2 text-sm bg-muted hover:bg-muted/80 rounded-lg transition-colors"
                                >
                                    Auto-generate
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Tags */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium mb-2">Tags</label>
                        <div className="flex flex-wrap gap-2 mb-3">
                            {tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="inline-flex items-center gap-2 px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm"
                                >
                                    {tag}
                                    <button
                                        type="button"
                                        onClick={() => handleRemoveTag(tag)}
                                        className="hover:text-primary-foreground/80"
                                    >
                                        ×
                                    </button>
                                </span>
                            ))}
                        </div>
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={newTag}
                                onChange={(e) => setNewTag(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        e.preventDefault();
                                        handleAddTag();
                                    }
                                }}
                                placeholder="javascript or development"
                                className="flex-1 px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                            />
                            <button
                                type="button"
                                onClick={handleAddTag}
                                className="px-4 py-2 bg-muted hover:bg-muted/80 rounded-lg transition-colors"
                            >
                                + Add Tag
                            </button>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">
                            Available tags: javascript, development
                        </p>
                    </div>

                    {/* Quill Editor */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium mb-2">Content</label>
                        <div className="border border-border rounded-lg overflow-hidden bg-background">
                            <div ref={editorRef} className="min-h-[400px]" />
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3 justify-end">
                        <button
                            type="button"
                            onClick={() => navigate('/blog')}
                            className="px-6 py-2 border border-border rounded-lg hover:bg-muted transition-colors"
                            disabled={isSaving}
                        >
                            Cancel
                        </button>
                        <button
                            type="button"
                            onClick={() => handleSave('draft')}
                            className="px-6 py-2 border border-border rounded-lg hover:bg-muted transition-colors"
                            disabled={isSaving}
                        >
                            {isSaving ? 'Saving...' : 'Save Draft'}
                        </button>
                        <button
                            type="button"
                            onClick={() => handleSave('published')}
                            className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                            disabled={isSaving}
                        >
                            {isSaving ? 'Publishing...' : 'Publish'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogEditor;
