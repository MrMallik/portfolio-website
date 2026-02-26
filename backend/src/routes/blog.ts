import type { FastifyInstance } from 'fastify';
import { blogQueries } from '../db/queries/blog.js';
import { successResponse, errorResponse } from '../utils/response.js';

export async function blogRoutes(fastify: FastifyInstance) {
    // GET /api/blog - Get all blog posts
    fastify.get('/api/blog', async (request, reply) => {
        try {
            const { published } = request.query as { published?: string };
            const publishedOnly = published === 'true';

            const posts = blogQueries.getAll(publishedOnly);
            return successResponse(posts);
        } catch (error) {
            const message = error instanceof Error ? error.message : 'Failed to fetch blog posts';
            return reply.status(500).send(errorResponse(message));
        }
    });

    // GET /api/blog/:id - Get blog post by ID
    fastify.get('/api/blog/:id', async (request, reply) => {
        try {
            const { id } = request.params as { id: string };
            const postId = parseInt(id, 10);

            if (isNaN(postId)) {
                return reply.status(400).send(errorResponse('Invalid blog post ID', 400));
            }

            const post = blogQueries.getById(postId);

            if (!post) {
                return reply.status(404).send(errorResponse('Blog post not found', 404));
            }

            return successResponse(post);
        } catch (error) {
            const message = error instanceof Error ? error.message : 'Failed to fetch blog post';
            return reply.status(500).send(errorResponse(message));
        }
    });

    // GET /api/blog/slug/:slug - Get blog post by slug
    fastify.get('/api/blog/slug/:slug', async (request, reply) => {
        try {
            const { slug } = request.params as { slug: string };
            const post = blogQueries.getBySlug(slug);

            if (!post) {
                return reply.status(404).send(errorResponse('Blog post not found', 404));
            }

            return successResponse(post);
        } catch (error) {
            const message = error instanceof Error ? error.message : 'Failed to fetch blog post';
            return reply.status(500).send(errorResponse(message));
        }
    });


    // POST /api/blog - Create or update blog post
    fastify.post('/api/blog', async (request, reply) => {
        try {
            const {
                id,
                title,
                content,
                slug,
                author,
                published,
                tags
            } = request.body as {
                id?: number;
                title: string;
                content: string;
                slug: string;
                author: string;
                published: boolean;
                tags: string[];
            };

            // Validate required fields
            if (!title || !content || !slug || !author) {
                return reply.status(400).send(errorResponse('Missing required fields: title, content, slug, author', 400));
            }

            if (id) {
                // Update existing post
                const updated = blogQueries.update(id, title, content, slug, author, published ?? false, tags ?? []);

                if (!updated) {
                    return reply.status(404).send(errorResponse('Blog post not found', 404));
                }

                const post = blogQueries.getById(id);
                return successResponse({ message: 'Blog post updated successfully', post });
            } else {
                // Create new post
                const newId = blogQueries.create(title, content, slug, author, published ?? false, tags ?? []);
                const post = blogQueries.getById(Number(newId));
                return successResponse({ message: 'Blog post created successfully', post });
            }
        } catch (error) {
            const message = error instanceof Error ? error.message : 'Failed to save blog post';
            return reply.status(500).send(errorResponse(message));
        }
    });


    // DELETE /api/blog/:id - Delete blog post by ID
    fastify.delete('/api/blog/:id', async (request, reply) => {
        try {
            const { id } = request.params as { id: string };
            const postId = parseInt(id, 10);

            if (isNaN(postId)) {
                return reply.status(400).send(errorResponse('Invalid blog post ID', 400));
            }

            const deleted = blogQueries.deleteById(postId);

            if (!deleted) {
                return reply.status(404).send(errorResponse('Blog post not found', 404));
            }

            return successResponse({ message: 'Blog post deleted successfully', id: postId });
        } catch (error) {
            const message = error instanceof Error ? error.message : 'Failed to delete blog post';
            return reply.status(500).send(errorResponse(message));
        }
    });
}
