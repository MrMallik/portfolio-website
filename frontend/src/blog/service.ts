export type Tags = 'javascript' | 'development'

export type PostStatus = 'draft' | 'published'

export type PostType = {
    id: number;
    title: string;
    slug: string;
    content: string;
    author: string;
    published: boolean;
    created_at: number;
    updated_at: number;
    tags: Tags[];
}

export async function getJson<T = any>(url: string, options?: RequestInit): Promise<T> {
    const response = await fetch(url, {
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        ...options,
    });

    if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${await response.text()}`);
    }

    return response.json();
}

export async function postJson<T = any>(url: string, body?: any, options?: RequestInit): Promise<T> {
    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...options?.headers },
        body: body ? JSON.stringify(body) : undefined,
        ...options,
    });

    if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${await response.text()}`);
    }

    return response.json();
}

