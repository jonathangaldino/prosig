// import { db } from 'src/infra/database/db';
import { dependencyContainer } from 'src/diContainer';
import { IDatabase } from 'src/domain/interfaces/IDatabase';
import { beforeAll, beforeEach, describe, expect, it, vi } from 'vitest';
import type { PostId } from '../blogPost.types';
import { addCommentToBlogPost } from '../use-cases/addCommentToBlogPost';
import { CreateBlogPost } from '../use-cases/createBlogPost';

describe('Blog Post Use Cases', async () => {
  const mockDb: IDatabase = {
    posts: [],
    reset: vi.fn(() => {
      mockDb.posts = [];
    }),
    // Add other mocked methods if needed
  };

  beforeAll(() => {
    dependencyContainer.register<IDatabase>('Database', {
      useValue: mockDb,
    });
  });

  beforeEach(() => {
    mockDb.reset();
  });

  describe('CreateBlogPost', () => {
    it('should create a new blog post with correct structure', () => {
      const title = 'Test Post';
      const content = 'Test Content';

      const blogPost = CreateBlogPost(title, content);

      expect(blogPost).toHaveProperty('id');
      expect(blogPost.id).toMatch(/^post_/);
      expect(blogPost.title).toBe(title);
      expect(blogPost.content).toBe(content);
      expect(blogPost.comments).toEqual([]);
    });

    it('should create unique IDs for different posts', () => {
      const post1 = CreateBlogPost('Post 1', 'Content 1');
      const post2 = CreateBlogPost('Post 2', 'Content 2');

      expect(post1.id).not.toEqual(post2.id);
    });
  });

  describe('addCommentToBlogPost', () => {
    it('should add a comment to an existing blog post', () => {
      const blogPost = CreateBlogPost('Test Post', 'Test Content');
      console.log(`Blog post: ${blogPost.id}`);

      const commentContent = 'Test Comment';
      const comment = addCommentToBlogPost(blogPost.id, commentContent);

      console.log(`Comment: ${comment}`);

      expect(comment).not.toBeNull();
      expect(comment).toHaveProperty('id');
      expect(comment.id).toMatch(/^cmt_/);
      expect(comment.content).toBe(commentContent);
      expect(blogPost.comments).toContainEqual(comment);
    });

    it('should return null when trying to add comment to non-existent post', () => {
      const nonExistentPostId = 'post_123' as PostId;
      const comment = addCommentToBlogPost(nonExistentPostId, 'Test Comment');

      expect(comment).toBeNull();
    });
  });
});
