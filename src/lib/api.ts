import type { Post, PostsResponse } from '../types/blog';

const API_BASE = import.meta.env.VITE_API_BASE ?? 'https://panel.duotechsolutions.in/api/public_api.php';

async function fetchAPI(endpoint: string, params: Record<string, any> = {}) {
  const url = new URL(API_BASE, window.location.origin);
  url.searchParams.set('endpoint', endpoint);
  Object.entries(params).forEach(([k, v]) => {
    if (v !== undefined && v !== null) url.searchParams.set(k, String(v));
  });

  const res = await fetch(url.toString());
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || res.statusText);
  }
  return res.json();
}

export async function fetchPosts(page = 1, limit = 9, category?: string, search?: string) {
  return (await fetchAPI('posts', { page, limit, category, search })) as PostsResponse;
}

export async function fetchPostBySlug(slug: string) {
  return (await fetchAPI(`post/${slug}`)) as Post;
}

export async function fetchCategories() {
  return (await fetchAPI('categories')) as Array<{ id: number; name: string; slug: string }>;
}

export async function fetchLatest(limit = 5) {
  return (await fetchAPI('posts/latest', { limit })) as Post[];
}
