import { describe, expect, it } from 'vitest';
import { createComment } from '../use-cases/createComment';

describe('Comment Use Cases', () => {
  describe('createComment', () => {
    it('should create a new comment with correct structure', () => {
      const content = 'Test Comment';

      const comment = createComment(content);

      expect(comment).toHaveProperty('id');
      expect(comment.id).toMatch(/^cmt_/);
      expect(comment.content).toBe(content);
    });

    it('should create unique IDs for different comments', () => {
      const comment1 = createComment('Comment 1');
      const comment2 = createComment('Comment 2');

      expect(comment1.id).not.toBe(comment2.id);
    });
  });
}); 