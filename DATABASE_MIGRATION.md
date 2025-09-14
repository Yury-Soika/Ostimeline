# Database Migration Guide

## Overview

This document describes the migration from MongoDB to PostgreSQL with improved data structures for the Ostimeline project.

## What Changed

### 1. Database Migration

- **From**: MongoDB with string-based content
- **To**: PostgreSQL with structured JSONB content
- **Benefits**: Better performance, ACID compliance, structured content management

### 2. Enhanced Data Structures

#### Pages (Static Frontend Components)

- **Before**: Stored in MongoDB database
- **After**: Static React components with hardcoded HTML structure
- **Benefits**: Better performance, no database queries, easier maintenance

#### Posts (Enhanced)

- **Before**: Plain text content
- **After**:
  - `title` (string)
  - `content` (JSONB - structured document format)
  - `excerpt` (auto-generated summary)
  - `status` (published/draft)
  - `authorId` (foreign key to users)
  - `createdAt` / `updatedAt` timestamps

#### Users (Enhanced)

- **Before**: Basic user fields
- **After**: Same structure but with proper timestamps

#### Downloads (Simplified)

- **Before**: Stored in MongoDB database
- **After**: Hardcoded configuration file for better performance and simplicity

## Content Structure

### Page Content Format (Static React Components)

Pages are now implemented as static React components with proper HTML structure:

- `About.js` - About ostimeline page
- `Architecture.js` - Architecture and dependencies page
- `Installation.js` - Installation and usage instructions
- `Gstreamer.js` - Gstreamer plugin information

### Post Content Format

```json
{
  "type": "document",
  "content": [
    {
      "type": "paragraph",
      "content": "Post content here"
    }
  ]
}
```

## Migration Steps

### 1. Run the Seed Script

```bash
cd backend
node seed.js
```

This will:

- Import all posts from `5.json`, `6.json`, `7.json`
- Import user from `8.json`
- Pages are now static React components (no database storage)
- Downloads are hardcoded in `/backend/config/downloads.js`

### 2. Test the Migration

The migration is complete and tested. You can verify by running the seed script.

### 3. Start the Application

```bash
cd backend
npm start
```

## API Changes

### Pages

- Pages are now static React components - no API endpoints needed
- Direct component rendering in frontend

### Posts

- `GET /posts` - Get all posts (ordered by date)
- `GET /posts/:id` - Get specific post
- `POST /posts` - Create new post
- `PUT /posts/:id` - Update post
- `DELETE /posts/:id` - Delete post

### Downloads

- `GET /downloads` - Get all downloads
- `GET /downloads/:id` - Get specific download
- `POST /downloads` - Create new download
- `PUT /downloads/:id` - Update download
- `DELETE /downloads/:id` - Delete download

## Benefits

1. **Static Pages**: Pages are now static React components - faster loading, no database queries
2. **Structured Content**: Posts use structured JSONB format instead of plain text
3. **Better Performance**: PostgreSQL with JSONB is faster than MongoDB for this use case
4. **ACID Compliance**: Database transactions ensure data integrity
5. **Rich Content Support**: Posts can now support rich formatting
6. **Auto-generated Excerpts**: Posts automatically get excerpts
7. **Proper Relationships**: Foreign keys and proper data relationships
8. **Timestamps**: All entities now have proper creation/update tracking
9. **Simplified Architecture**: Only dynamic content (posts, users) in database

## Frontend Integration

The frontend has been updated to handle the new content structures:

1. **Page Rendering**: Pages are now static React components with proper HTML structure
2. **Post Display**: Post components handle structured JSONB content
3. **Content Editing**: Rich text editors can be implemented for creating/editing posts

## Next Steps

1. ✅ Static page components created
2. ✅ Database migration completed
3. ✅ Posts with structured content
4. ✅ Downloads hardcoded
5. Implement rich text editors for content creation
6. Add content validation
7. Implement content versioning
8. Add search functionality across structured content
