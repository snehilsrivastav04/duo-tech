# API Integration Examples

This document shows how the PHP API returns data that gets used for meta tags.

## 1. Getting a Single Blog Post

**Endpoint:** `GET /api/public/post/{slug}`

**Example Request:**
```
GET https://panel.duotechsolutions.in/api/public_api.php?endpoint=post/sms-marketing-guide
```

**Example Response:**
```json
{
  "id": 1,
  "title": "Complete Guide to SMS Marketing in 2026",
  "slug": "sms-marketing-guide",
  "content": "<h2>Introduction</h2><p>SMS marketing is one of the most effective...</p>",
  "excerpt": "Learn the best practices for SMS marketing and increase your conversion rates.",
  "featured_image": "https://panel.duotechsolutions.in/images/posts/sms-guide.jpg",
  "published_at": "2026-01-15T10:00:00Z",
  "created_at": "2026-01-15T10:00:00Z",
  "updated_at": "2026-01-15T14:30:00Z",
  "author_id": 1,
  "author_name": "Rajesh Kumar",
  "category_id": 2,
  "category_name": "SMS Services",
  "category_slug": "sms-services",
  "meta_title": "SMS Marketing Guide 2026 - Best Practices & Tips",
  "meta_description": "Learn SMS marketing strategies, campaign best practices, and tips from Duotech Solutions experts.",
  "meta_keywords": "sms marketing, marketing guide, bulk sms, sms campaigns",
  "canonical_url": "https://www.duotechsolutions.in/blog/sms-marketing-guide",
  "og_image": "https://panel.duotechsolutions.in/images/posts/sms-guide-og.jpg",
  "related_posts": [
    {
      "id": 2,
      "title": "WhatsApp API Integration Tutorial",
      "slug": "whatsapp-api-tutorial",
      "excerpt": "Step-by-step guide to integrate WhatsApp Business API...",
      "featured_image": "https://panel.duotechsolutions.in/images/posts/wa-tutorial.jpg",
      "published_at": "2026-01-10T09:00:00Z",
      "author_name": "Priya Singh",
      "category_name": "WhatsApp Services"
    }
  ]
}
```

**How it's used for Meta Tags:**

```tsx
// In BlogPostPage.tsx
const post = response; // from API

setMetaTags({
  title: post.meta_title, 
  // → "SMS Marketing Guide 2026 - Best Practices & Tips"
  
  description: post.meta_description,
  // → "Learn SMS marketing strategies, campaign best practices..."
  
  keywords: post.meta_keywords,
  // → "sms marketing, marketing guide, bulk sms, sms campaigns"
  
  image: post.featured_image,
  // → "https://panel.duotechsolutions.in/images/posts/sms-guide.jpg"
  
  author: post.author_name,
  // → "Rajesh Kumar"
  
  publishedDate: post.published_at,
  // → "2026-01-15T10:00:00Z"
  
  modifiedDate: post.updated_at,
  // → "2026-01-15T14:30:00Z"
  
  canonical: post.canonical_url,
  // → "https://www.duotechsolutions.in/blog/sms-marketing-guide"
  
  category: post.category_name
  // → "SMS Services"
});
```

---

## 2. Getting Multiple Blog Posts

**Endpoint:** `GET /api/public/posts`

**Example Request:**
```
GET https://panel.duotechsolutions.in/api/public_api.php?endpoint=posts&page=1&limit=10&category=sms-services
```

**Example Response:**
```json
{
  "posts": [
    {
      "id": 1,
      "title": "Complete Guide to SMS Marketing in 2026",
      "slug": "sms-marketing-guide",
      "excerpt": "Learn the best practices for SMS marketing...",
      "featured_image": "https://panel.duotechsolutions.in/images/posts/sms-guide.jpg",
      "published_at": "2026-01-15T10:00:00Z",
      "author_name": "Rajesh Kumar",
      "category_name": "SMS Services",
      "category_slug": "sms-services"
    },
    {
      "id": 3,
      "title": "OTP and Verification Messages Best Practices",
      "slug": "otp-best-practices",
      "excerpt": "How to implement OTP and verification messages effectively...",
      "featured_image": "https://panel.duotechsolutions.in/images/posts/otp-guide.jpg",
      "published_at": "2026-01-12T14:20:00Z",
      "author_name": "John Smith",
      "category_name": "SMS Services",
      "category_slug": "sms-services"
    }
  ],
  "pagination": {
    "current_page": 1,
    "per_page": 10,
    "total": 24,
    "total_pages": 3
  }
}
```

**How it's used for Meta Tags:**

```tsx
// In BlogPage.tsx
useEffect(() => {
  setMetaTags({
    title: 'Blog - Duotech Solutions | Technology & Digital Marketing Insights',
    description: 'Explore articles on Bulk SMS, WhatsApp API, Digital Marketing, SEO, Web Development...',
    keywords: 'blog, technology, digital marketing, SMS, WhatsApp API, web development',
    type: 'website'
  });
  
  setJsonLD(createOrganizationJsonLD());
}, []);
```

---

## 3. Getting Categories

**Endpoint:** `GET /api/public/categories`

**Example Request:**
```
GET https://panel.duotechsolutions.in/api/public_api.php?endpoint=categories
```

**Example Response:**
```json
[
  {
    "id": 1,
    "name": "Digital Marketing",
    "slug": "digital-marketing",
    "description": "Articles about digital marketing strategies and tools",
    "post_count": 15
  },
  {
    "id": 2,
    "name": "SMS Services",
    "slug": "sms-services",
    "description": "Everything about bulk SMS and SMS marketing",
    "post_count": 12
  },
  {
    "id": 3,
    "name": "WhatsApp Business",
    "slug": "whatsapp-business",
    "description": "WhatsApp API integration and best practices",
    "post_count": 8
  }
]
```

---

## 4. Search Posts

**Endpoint:** `GET /api/public/search`

**Example Request:**
```
GET https://panel.duotechsolutions.in/api/public_api.php?endpoint=search&q=bulk%20sms&page=1&limit=10
```

**Example Response:**
```json
{
  "results": [
    {
      "id": 1,
      "title": "Complete Guide to SMS Marketing in 2026",
      "slug": "sms-marketing-guide",
      "excerpt": "Learn the best practices for bulk SMS...",
      "featured_image": "https://panel.duotechsolutions.in/images/posts/sms-guide.jpg",
      "published_at": "2026-01-15T10:00:00Z",
      "author_name": "Rajesh Kumar",
      "category_name": "SMS Services"
    }
  ],
  "query": "bulk sms",
  "pagination": {
    "current_page": 1,
    "per_page": 10,
    "total": 5,
    "total_pages": 1
  }
}
```

---

## 5. Latest Posts

**Endpoint:** `GET /api/public/posts/latest`

**Example Request:**
```
GET https://panel.duotechsolutions.in/api/public_api.php?endpoint=posts/latest&limit=5
```

**Example Response:**
```json
[
  {
    "id": 1,
    "title": "Complete Guide to SMS Marketing in 2026",
    "slug": "sms-marketing-guide",
    "excerpt": "Learn the best practices for SMS marketing...",
    "featured_image": "https://panel.duotechsolutions.in/images/posts/sms-guide.jpg",
    "published_at": "2026-01-15T10:00:00Z",
    "author_name": "Rajesh Kumar",
    "category_name": "SMS Services",
    "category_slug": "sms-services"
  },
  {
    "id": 2,
    "title": "WhatsApp API Integration Tutorial",
    "slug": "whatsapp-api-tutorial",
    "excerpt": "Step-by-step guide to integrate WhatsApp Business API...",
    "featured_image": "https://panel.duotechsolutions.in/images/posts/wa-tutorial.jpg",
    "published_at": "2026-01-10T09:00:00Z",
    "author_name": "Priya Singh",
    "category_name": "WhatsApp Services"
  }
]
```

---

## Data Flow Diagram

```
┌─────────────────────────────────────┐
│   PHP API Backend                   │
│   (public_api.php)                  │
└──────────┬──────────────────────────┘
           │
           │ Returns JSON with:
           │ - meta_title
           │ - meta_description
           │ - meta_keywords
           │ - featured_image
           │ - author_name
           │ - published_at
           │ - updated_at
           │ - canonical_url
           │ - og_image
           │
           ▼
┌─────────────────────────────────────┐
│   React Component (BlogPostPage)    │
│   fetchPostBySlug(slug)             │
└──────────┬──────────────────────────┘
           │
           │ Calls meta.ts functions
           │
           ▼
┌─────────────────────────────────────┐
│   Meta Tags Utility (meta.ts)       │
│   - setMetaTags()                   │
│   - setJsonLD()                     │
│   - createBlogPostJsonLD()          │
└──────────┬──────────────────────────┘
           │
           │ Creates/Updates DOM elements
           │
           ▼
┌─────────────────────────────────────┐
│   HTML Document <head>              │
│                                     │
│   <title>.....</title>              │
│   <meta name="description">...      │
│   <meta property="og:title">...     │
│   <meta property="og:image">...     │
│   <link rel="canonical">...         │
│   <script type="application/ld+json">
│   {...}                             │
│   </script>                         │
└─────────────────────────────────────┘
```

---

## Field Mapping Reference

| API Field | Meta Tag Used For | Meta Tag Type |
|-----------|-------------------|---------------|
| `meta_title` | Page `<title>`, og:title | Standard, OpenGraph |
| `meta_description` | description, og:description | Standard, OpenGraph |
| `meta_keywords` | keywords meta tag | Standard |
| `featured_image` | og:image, twitter:image | OpenGraph, Twitter |
| `og_image` | og:image (fallback) | OpenGraph |
| `author_name` | author, article:author | Standard, Article |
| `published_at` | article:published_time | Article |
| `updated_at` | article:modified_time | Article |
| `canonical_url` | canonical link | Canonical |
| `category_name` | og:section, article:section | OpenGraph, Article |
| `title` | JSON-LD headline | Structured Data |
| `excerpt` | JSON-LD description | Structured Data |
| `content` | Stripped for JSON-LD description | Structured Data |

---

## Environment Variables

Set in your `.env` file:

```env
VITE_API_BASE=https://panel.duotechsolutions.in/api/public_api.php
VITE_SITE_URL=https://www.duotechsolutions.in
```

The API base URL is used to fetch blog posts, and the site URL is used for canonical URLs and JSON-LD structured data.

---

## Troubleshooting

**Issue:** Meta tags not updating when navigating between posts

**Solution:** Ensure the `useEffect` dependency array includes all necessary dependencies:
```tsx
useEffect(() => {
  setMetaTags({...});
}, [post]); // Include post in dependency
```

**Issue:** JSON-LD not showing in Google Search Console

**Solution:** 
1. Ensure `setJsonLD()` is called after post data loads
2. Validate with [Google Rich Results Test](https://search.google.com/test/rich-results)
3. Check browser console for any errors

**Issue:** Images not showing in social media preview

**Solution:**
1. Verify `featured_image` URL is absolute and accessible
2. Image should be at least 1200x630px for best results
3. Test with [OpenGraph Preview Tool](https://www.opengraph.xyz/)
