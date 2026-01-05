export type Tags = 'javascript' | 'development'

export type PostType = {
    createdAt: number;
    updatedAt: number;
    title: string;
    slug: string;
    tags: Tags[];
    content: string;
}