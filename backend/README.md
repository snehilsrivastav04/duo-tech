# Backend: Blog API notes

This repository includes the `posts.php` API for creating and managing blog posts.

What's added (2026-01-14):

- Posts API accepts meta fields on create/update: `meta_title`, `meta_description`, `meta_keywords`, `canonical_url`, `og_image`.
- If `meta_title` or `meta_description` are not provided, sensible defaults are generated (title + excerpt/content snippet).
- Slug uniqueness is enforced automatically when creating posts.
- Blog post pages now receive the meta fields and the front-end (`BlogPostPage.tsx`) sets document title, meta tags, and JSON-LD structured data.

Migration
---------
To add required columns to the `posts` table, run the SQL in `backend/migrations/2026-01-14-add-post-meta-columns.sql`.

Example: (mysql CLI)

    mysql -u youruser -p yourdb < backend/migrations/2026-01-14-add-post-meta-columns.sql

Example request to create a post (requires JWT Bearer token):

curl -X POST "https://example.com/api/posts" \
  -H "Authorization: Bearer <JWT>" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "My New Post",
    "content": "<p>Post content...</p>",
    "excerpt": "Short excerpt",
    "featured_image": "image.jpg",
    "category_id": 1,
    "status": "published",
    "meta_title": "Custom Meta Title",
    "meta_description": "Custom meta description up to ~160 chars",
    "meta_keywords": "keyword1,keyword2",
    "og_image": "https://example.com/uploads/images/image.jpg",
    "canonical_url": "https://example.com/blog/my-new-post"
  }'

Response will include the created `post` object with the meta fields set.
