-- Migration: add meta fields to posts table
-- Run this against your database (e.g., using mysql CLI or phpMyAdmin)

ALTER TABLE posts
  ADD COLUMN meta_title VARCHAR(255) DEFAULT NULL,
  ADD COLUMN meta_description TEXT DEFAULT NULL,
  ADD COLUMN meta_keywords VARCHAR(255) DEFAULT NULL,
  ADD COLUMN canonical_url VARCHAR(255) DEFAULT NULL,
  ADD COLUMN og_image VARCHAR(255) DEFAULT NULL;

-- Optional: add an index on slug (if not present) to speed lookups
-- CREATE INDEX idx_posts_slug ON posts(slug);

-- NOTE: Backup your database before running migrations.
