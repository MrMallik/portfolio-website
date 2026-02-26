import db from '../../config/database';
import type { BlogPost, BlogPostRow } from '../../types/blog.ts';

// Prepared statements
const statements = {
    getAll: db.prepare('SELECT * FROM blog_posts ORDER BY created_at DESC'),
    getAllPublished: db.prepare('SELECT * FROM blog_posts WHERE published = 1 ORDER BY created_at DESC'),
    getById: db.prepare('SELECT * FROM blog_posts WHERE id = ?'),
    getBySlug: db.prepare('SELECT * FROM blog_posts WHERE slug = ?'),
    deleteById: db.prepare('DELETE FROM blog_posts WHERE id = ?'),
    create: db.prepare('INSERT INTO blog_posts (title, content, slug, author, published, tags, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)'),
    update: db.prepare('UPDATE blog_posts SET title = ?, content = ?, slug = ?, author = ?, published = ?, tags = ?, updated_at = ? WHERE id = ?'),
};

// Helper to transform row to BlogPost
function rowToPost(row: BlogPostRow): BlogPost {
    return {
        ...row,
        published: Boolean(row.published),
        tags: row.tags ? JSON.parse(row.tags) : [],
    };
}

export const blogQueries = {
    getAll(publishedOnly = false): BlogPost[] {
        const stmt = publishedOnly ? statements.getAllPublished : statements.getAll;
        const rows = stmt.all() as BlogPostRow[];
        return rows.map(rowToPost);
    },

    getById(id: number): BlogPost | null {
        const row = statements.getById.get(id) as BlogPostRow | undefined;
        return row ? rowToPost(row) : null;
    },

    getBySlug(slug: string): BlogPost | null {
        const row = statements.getBySlug.get(slug) as BlogPostRow | undefined;
        return row ? rowToPost(row) : null;
    },

    deleteById(id: number): boolean {
        const result = statements.deleteById.run(id);
        return result.changes > 0;
    },

    create(title: string, content: string, slug: string, author: string, published: boolean, tags: string[]): number | bigint {
        const now = Date.now();
        const tagsJson = JSON.stringify(tags);
        const result = statements.create.run(title, content, slug, author, published ? 1 : 0, tagsJson, now, now);
        return result.lastInsertRowid;
    },

    update(id: number, title: string, content: string, slug: string, author: string, published: boolean, tags: string[]): boolean {
        const now = Date.now();
        const tagsJson = JSON.stringify(tags);
        const result = statements.update.run(title, content, slug, author, published ? 1 : 0, tagsJson, now, id);
        return result.changes > 0;
    }
};
