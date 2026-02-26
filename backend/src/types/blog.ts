export interface BlogPost {
    id: number;
    title: string;
    slug: string;
    content: string;
    author: string;
    published: boolean;
    created_at: number;
    updated_at: number;
    tags: string[];
}

export interface BlogPostRow {
    id: number;
    title: string;
    slug: string;
    content: string;
    author: string;
    published: number; // SQLite stores boolean as 0/1
    created_at: number;
    updated_at: number;
    tags: string | null;
}

export interface CreateBlogPostInput {
    title: string;
    slug: string;
    content: string;
    author: string;
    published?: boolean;
    tags?: string[];
}
