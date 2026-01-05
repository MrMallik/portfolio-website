export type Tags = 'javascript' | 'development'

export type PostStatus = 'draft' | 'published'

export type PostType = {
    id?: string;
    createdAt: number;
    updatedAt: number;
    title: string;
    slug: string;
    tags: Tags[];
    content: string;
    status?: PostStatus;
}