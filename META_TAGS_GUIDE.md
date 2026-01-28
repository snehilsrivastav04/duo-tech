# Meta Tags Implementation Guide

## Overview
Dynamic meta tags have been implemented to automatically populate SEO metadata for all blog posts based on data fetched from the PHP API. This ensures proper OpenGraph, Twitter Cards, JSON-LD structured data, and standard meta tags are set for each page.

## Files Created/Modified

### 1. **[src/lib/meta.ts](src/lib/meta.ts)** (NEW)
Core utility file containing all meta tag management functions:

#### Functions Available:

**`setMetaTags(config: MetaTagsConfig)`**
- Sets standard meta tags, OpenGraph tags, Twitter Card tags, article tags, and canonical URLs
- Automatically creates or updates existing meta elements
- **Parameters:**
  - `title`: Page title (defaults to 'Duotech Solutions')
  - `description`: Meta description
  - `keywords`: Comma-separated keywords
  - `image`: OG image URL
  - `url`: Canonical URL (defaults to current page)
  - `author`: Author name
  - `publishedDate`: ISO format publication date
  - `modifiedDate`: ISO format modification date
  - `type`: 'website' | 'article' | 'blog' (default: 'website')
  - `canonical`: Canonical URL
  - `category`: Article category

**`setJsonLD(data: any)`**
- Injects JSON-LD structured data into the page
- Removes any existing JSON-LD before injecting new data
- Improves SEO and search engine understanding

**`createBlogPostJsonLD(post: any)`**
- Creates BlogPosting schema from post data
- Automatically strips HTML and extracts text content
- Returns properly formatted Schema.org JSON-LD

**`createOrganizationJsonLD()`**
- Creates Organization schema for Duotech Solutions
- Used on main pages and blog listing

**`createBreadcrumbJsonLD(items: Array<{ name: string; url: string }>)`**
- Creates BreadcrumbList schema
- Useful for navigation tracking

---

### 2. **[src/pages/BlogPostPage.tsx](src/pages/BlogPostPage.tsx)** (MODIFIED)
Updated to use the new meta tags utility:

```tsx
import { setMetaTags, setJsonLD, createBlogPostJsonLD } from '../lib/meta';

// When post data loads:
setMetaTags({
  title,
  description,
  keywords: post.meta_keywords,
  image: featuredImage,
  url: window.location.href,
  canonical: canonicalUrl,
  author: authorNameLocal,
  publishedDate: post.published_at || post.created_at,
  modifiedDate: post.updated_at,
  type: 'article',
  category: post.category_name
});

const ld = createBlogPostJsonLD(post);
setJsonLD(ld);
```

**Meta tags set for blog posts:**
- Title (from `meta_title` or post title)
- Description (from `meta_description` or excerpt)
- Keywords (from `meta_keywords`)
- Featured image (OG image)
- Author name
- Publication & modification dates
- Canonical URL
- JSON-LD BlogPosting schema

---

### 3. **[src/pages/BlogPage.tsx](src/pages/BlogPage.tsx)** (MODIFIED)
Updated to set meta tags for blog listing page:

```tsx
useEffect(() => {
  setMetaTags({
    title: 'Blog - Duotech Solutions | Technology & Digital Marketing Insights',
    description: 'Explore articles on Bulk SMS, WhatsApp API, Digital Marketing, SEO, Web Development...',
    keywords: 'blog, technology, digital marketing, SMS, WhatsApp API, web development...',
    url: window.location.href,
    canonical: window.location.href,
    type: 'website'
  });

  setJsonLD(createOrganizationJsonLD());
}, []);
```

---

### 4. **[src/main.tsx](src/main.tsx)** (MODIFIED)
Initializes default meta tags for the entire site:

```tsx
import { setMetaTags, createOrganizationJsonLD, setJsonLD } from './lib/meta';

// Initialize default meta tags
setMetaTags({
  title: 'Duotech Solutions - Bulk SMS, WhatsApp API, Digital Marketing & Web Development',
  description: 'Duotech Solutions provides Bulk SMS, WhatsApp Business API...',
  // ... more config
});

setJsonLD(createOrganizationJsonLD());
```

---

## How It Works with the PHP API

The PHP API (`backend/public_api.php`) returns blog post data including:

```json
{
  "id": 1,
  "title": "Post Title",
  "slug": "post-slug",
  "excerpt": "Short description",
  "content": "<html>full content</html>",
  "featured_image": "image-url.jpg",
  "published_at": "2026-01-15T10:00:00Z",
  "updated_at": "2026-01-15T10:00:00Z",
  "author_name": "Author Name",
  "category_name": "Category Name",
  "meta_title": "Custom meta title",
  "meta_description": "Custom meta description",
  "meta_keywords": "keyword1, keyword2",
  "canonical_url": "https://duotechsolutions.in/blog/post-slug"
}
```

When a post is loaded, the meta.ts functions automatically extract this data and populate all necessary meta tags.

---

## Meta Tags Added to Each Blog Post

### Standard Meta Tags
- `<title>`
- `<meta name="description">`
- `<meta name="keywords">`
- `<meta name="author">`
- `<meta name="robots">`

### OpenGraph Tags
- `<meta property="og:title">`
- `<meta property="og:description">`
- `<meta property="og:image">`
- `<meta property="og:url">`
- `<meta property="og:type" content="article">`
- `<meta property="og:site_name">`
- `<meta property="og:section">`
- `<meta property="article:published_time">`
- `<meta property="article:modified_time">`
- `<meta property="article:author">`

### Twitter Card Tags
- `<meta name="twitter:card">`
- `<meta name="twitter:title">`
- `<meta name="twitter:description">`
- `<meta name="twitter:image">`
- `<meta name="twitter:site">`
- `<meta name="twitter:creator">`

### Structured Data
- BlogPosting JSON-LD schema
- Organization JSON-LD schema
- Breadcrumb JSON-LD schema (when needed)

### Canonical URLs
- `<link rel="canonical">`

---

## Usage Examples

### For a New Blog Post Page
```tsx
import { setMetaTags, setJsonLD, createBlogPostJsonLD } from '../lib/meta';

useEffect(() => {
  if (!post) return;
  
  setMetaTags({
    title: post.meta_title || post.title,
    description: post.meta_description || post.excerpt,
    keywords: post.meta_keywords,
    image: post.featured_image,
    author: post.author_name,
    publishedDate: post.published_at,
    modifiedDate: post.updated_at,
    type: 'article',
    category: post.category_name,
    canonical: post.canonical_url || window.location.href
  });
  
  setJsonLD(createBlogPostJsonLD(post));
}, [post]);
```

### For a Service/Product Page
```tsx
import { setMetaTags, setJsonLD } from '../lib/meta';

setMetaTags({
  title: 'Bulk SMS Services - Duotech Solutions',
  description: 'Professional bulk SMS service provider...',
  keywords: 'bulk sms, sms gateway, promotional sms',
  image: 'path-to-image.jpg',
  type: 'website'
});

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Bulk SMS Services",
  "description": "...",
  "provider": {
    "@type": "Organization",
    "name": "Duotech Solutions"
  }
};
setJsonLD(schema);
```

### For a Category/Listing Page
```tsx
import { setMetaTags, createOrganizationJsonLD, setJsonLD } from '../lib/meta';

useEffect(() => {
  setMetaTags({
    title: 'SMS Services Category',
    description: 'All our SMS solutions and services',
    type: 'website'
  });
  
  setJsonLD(createOrganizationJsonLD());
}, []);
```

---

## SEO Benefits

1. **Improved Search Rankings**: Proper meta descriptions and keywords help search engines understand page content
2. **Rich Preview on Social Media**: OpenGraph and Twitter Card tags ensure beautiful preview cards when posts are shared
3. **Structured Data**: JSON-LD helps search engines better understand content type and relationships
4. **Accessibility**: Canonical URLs prevent duplicate content issues
5. **Author Recognition**: Proper author attribution improves trust and discoverability

---

## Best Practices

1. **Always include a description**: Falls back to excerpt if meta_description is not provided
2. **Use featured images**: Essential for social media sharing
3. **Keep titles under 60 characters**: For proper display in search results
4. **Use relevant keywords**: 3-5 specific keywords per post
5. **Update modified dates**: Helps search engines identify fresh content
6. **Use canonical URLs**: If content is published across multiple domains

---

## Testing

To verify meta tags are working:

1. **Right-click** → **View Page Source** and search for `<meta`
2. Use [https://www.opengraph.xyz/](https://www.opengraph.xyz/) to test OpenGraph tags
3. Use Google Search Console to check how pages appear in search results
4. Use [https://search.google.com/test/rich-results](https://search.google.com/test/rich-results) to validate JSON-LD

---

## Files Summary

| File | Purpose | Type |
|------|---------|------|
| `src/lib/meta.ts` | Meta tag utility functions | Utility |
| `src/pages/BlogPostPage.tsx` | Dynamic meta for blog posts | Component |
| `src/pages/BlogPage.tsx` | Meta for blog listing | Component |
| `src/main.tsx` | Default site meta tags | Setup |

---

## Configuration

To customize the default meta tags, edit `src/main.tsx`:

```tsx
setMetaTags({
  title: 'YOUR CUSTOM TITLE',
  description: 'YOUR CUSTOM DESCRIPTION',
  // ... modify other properties
});
```

To customize for specific pages, call `setMetaTags()` in the page component's `useEffect`.

---

## Future Enhancements

- Add auto-generation of meta descriptions from content
- Create dynamic sitemap from blog posts
- Add hreflang tags for multi-language support
- Implement image optimization for OpenGraph images
- Add breadcrumb navigation for better crawlability
