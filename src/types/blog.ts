export type Author = {
  id: number;
  name: string;
  slug?: string;
};

export type Category = {
  id: number;
  name: string;
  slug?: string;
};

export type Post = {
  id: number;
  title: string;
  slug: string;
  content?: string;
  excerpt?: string;
  featured_image?: string | null;
  published_at?: string;
  created_at?: string;
  updated_at?: string;
  author?: Author;
  categories?: Category[];

  // Meta fields (optional)
  meta_title?: string;
  meta_description?: string;
  meta_keywords?: string;
  canonical_url?: string;
  og_image?: string;

  [key: string]: any;
};

export type PostsResponse = {
  data: Post[];
  meta?: {
    total?: number;
    per_page?: number;
    current_page?: number;
    last_page?: number;
    [key: string]: any;
  };
  [key: string]: any;
};
