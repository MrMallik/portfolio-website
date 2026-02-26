import Fastify from 'fastify';
import { blogRoutes } from './routes/blog.js';

const fastify = Fastify({
    logger: true,
});

// Register routes
await fastify.register(blogRoutes);

// Start server
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000;
const HOST = process.env.HOST || '0.0.0.0';

try {
    await fastify.listen({ port: PORT, host: HOST });
    console.log(`🚀 Server running at http://${HOST}:${PORT}`);
} catch (err) {
    fastify.log.error(err);
    process.exit(1);
}
